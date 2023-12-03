import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
const { google } = require("googleapis");
const { Op } = require("sequelize");
let getFolderId = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Users.findOne({
        where: { mail: data },
      });
      resolve(user.folderid);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let updateFolderId = (email, folderid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Users.findOne({
        where: { mail: email },
      });
      if (user) {
        user.folderid = folderid;
        await user.save();
        resolve({
          errCode: 0,
          errMessage: "Update success",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Not exit user in database",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let saveDoc = (email, name, link, course, location, numpage) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Users.findOne({
        where: { mail: email },
      });
      if (user) {
        await db.Documents.create({
          userid: user.userid,
          name: name,
          link: link,
          course: course,
          location: location,
          numpage: numpage,
        });
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Can not add new document",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getUserInfo = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Users.findOne({
        where: { mail: email },
      });
      if (user) {
        resolve(user);
      } else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
let getDoc = (drive, userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const documents = await db.Documents.findAll({
        where: { userid: userid },
      });
      // console.log(documents);
      if (documents && documents.length > 0) {
        const fileIds = documents.map((doc) => doc.link);

        const validityResults = await Promise.all(
          fileIds.map((fileId) => isDriveFileIdValid(drive, fileId))
        );
        const validDocuments = documents.filter(
          (_, index) => validityResults[index] === true
        );
        console.log("length", validDocuments.length);
        // Resolve with the documents or filtered documents based on validity
        resolve(validDocuments);
      } else {
        // No documents found
        resolve([]);
      }
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
const isDriveFileIdValid = async (drive, fileId) => {
  try {
    // Make an API request to get file information
    const fileInfo = await drive.files.get({ fileId });

    if (fileInfo && fileInfo.data && fileInfo.data.id) {
      // console.log(`Drive file ID ${fileId} is valid`);
      return true;
    } else {
      // console.log(`Drive file ID ${fileId} is not valid`);
      return false;
    }
  } catch (error) {
    // console.error(`Error checking Google Drive file ID ${fileId}:`, error);
    return false;
  }
};
let getPrinter = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Printers.findAll({});
      if (data) resolve(data);
      else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
let Print = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log("here: ", data)
      await db.Prints.create({
        name: data.user.name,
        userid: data.doc.userid,
        namefile: data.doc.name,
        link: data.doc.link,
        course: data.doc.course,
        numpage: data.configprint.numpage,
        layout: data.configprint.layout,
        pagesize: data.configprint.pagesize,
        pageperside: data.configprint.pageperside,
        alignment: data.configprint.alignment,
        scale: data.configprint.scale,
        copy: data.configprint.copy,
        printerid: data.setupprinter.printerid,
        time: data.setupprinter.time,
        date: data.setupprinter.date,
        status: false,
      });
      let user = await db.Users.findOne({
        where: { userid: data.doc.userid },
      });
      if (user) {
        user.numpageused = user.numpageused + data.configprint.numpage;
        await user.save();
        resolve({
          errCode: 0,
          errMessage: "Print success",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Print fail",
        });
      }
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let buyPage = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Bills.create({
        userid: data.userid,
        numpage: data.numpage,
        price: data.price,
        payconfirm: data.payconfirm,
      });
      let user = await db.Users.findOne({
        where: { userid: data.userid },
      });
      if (user) {
        user.numpage = user.numpage + data.numpage;
        await user.save();
        resolve({
          errCode: 0,
          errMessage: "Buy success",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Buy fail",
        });
      }
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let searchDoc = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doc = await db.Documents.findAll({
        where: {
          [Op.or]: [
            { name: data.content },
            { course: data.content }, // Thêm điều kiện tìm kiếm khác nếu cần
          ],
          location: data.location,
        },
      });
      if (doc) resolve(doc);
      else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let deleteDoc = (docid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doc = await db.Documents.findOne({
        where: { id: docid },
      });
      if (!doc) {
        resolve({
          errCode: 1,
          errMessage: `not exit`,
        });
      }
      await db.Documents.destroy({
        where: { id: docid },
      });
      resolve({
        errCode: 0,
        errMessage: `deleted`,
      });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
let getprinthistory = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let history = await db.Prints.findOne({
        where: { userid: userid },
      });
      if (history) resolve(history);
      else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
let getbuyhistory = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let history = await db.Bills.findOne({
        where: { userid: userid },
      });
      if (history) resolve(history);
      else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
let getCourse = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Courses.findAll();
      if (data) resolve(data);
      else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
let getDocbySearch = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doc = await db.Documents.findAll({
        where: {
          [Op.or]: [
            { name: data.content },
            { course: data.content }, // Thêm điều kiện tìm kiếm khác nếu cần
          ],
          location: data.location,
          userid: data.userid,
        },
      });
      if (doc) resolve(doc);
      else resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
module.exports = {
  getFolderId,
  updateFolderId,
  saveDoc,
  getUserInfo,
  getDoc,
  getPrinter,
  Print,
  buyPage,
  searchDoc,
  deleteDoc,
  getprinthistory,
  getbuyhistory,
  getCourse,
  getDocbySearch,
};

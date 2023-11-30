import db from "../models/index";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
const { Op } = require("sequelize");
let getFolderId = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { mail: data }
            })
            resolve(user.folderid);
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

let updateFolderId = (email, folderid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { mail: email }
            })
            if (user) {
                user.folderid = folderid;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update success",
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Not exit user in database"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let saveDoc = (email, name, link, course, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { mail: email }
            })
            if (user) {
                await db.Documents.create({
                    userid: user.userid,
                    name: name,
                    link: link,
                    course: course,
                    location: location,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Success'
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Can not add new document',
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfo = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { mail: email }
            })
            if (user) {
                resolve(user);
            } else resolve();

        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getDoc = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Documents.findAll({
                where: { userid: userid }
            })
            if (data) resolve(data)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

let getPrinter = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Printers.findAll({
                where: { status: true }
            })
            const uniqueValues = {};
            const filteredData = data.filter(item => {
                const key = item.printerid;
                if (!uniqueValues[key]) {
                    uniqueValues[key] = true;
                    return true;
                }
                return false;
            });
            if (filteredData) resolve(filteredData)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getPrinterTime = (printerid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Printers.findAll({
                where: { printerid: printerid, status: 1 }
            })
            if (data) resolve(data)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

let Print = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log("here: ", data)
            await db.Prints.create({
                userid: data.doc.userid,
                name: data.doc.name,
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
                status: false,
            })
            resolve("Success")
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let updatePrinter = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let printer = await db.Printers.findOne({
                where: { printerid: data.printerid, time: data.time }
            })
            if (printer) {
                printer.slot = printer.slot - 1
                if (printer.slot === 0) {
                    printer.status = false
                }
                await printer.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update success",
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Not exit printer in database"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let buyPage = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Bills.create({
                userid: data.userid,
                numpage: data.numpage,
                price: data.price,
                payconfirm: data.payconfirm,
            })
            let user = await db.Users.findOne({
                where: { userid: data.userid }
            })
            if (user) {
                user.numpage = user.numpage + data.numpage
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: "Buy success",
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Buy fail"
                })
            }
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

let searchDoc = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doc = await db.Documents.findAll({
                where: {
                    [Op.or]: [
                        { name: data.content },
                        { course: data.content } // Thêm điều kiện tìm kiếm khác nếu cần
                    ], location: data.location
                }
            })
            if (doc) resolve(doc)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

let deleteDoc = (docid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doc = await db.Documents.findOne({
                where: { id: docid }
            })
            if (!doc) {
                resolve({
                    errCode: 1,
                    errMessage: `not exit`
                })
            }
            await db.Documents.destroy({
                where: { id: docid }
            });
            resolve({
                errCode: 0,
                errMessage: `deleted`
            })
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getprinthistory = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let history = await db.Prints.findOne({
                where: { userid: userid }
            })
            if (history) resolve(history)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getbuyhistory = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let history = await db.Bills.findOne({
                where: { userid: userid }
            })
            if (history) resolve(history)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
module.exports = {
    getFolderId,
    updateFolderId,
    saveDoc,
    getUserInfo,
    getDoc,
    getPrinter,
    getPrinterTime,
    Print,
    updatePrinter,
    buyPage,
    searchDoc,
    deleteDoc,
    getprinthistory,
    getbuyhistory
}
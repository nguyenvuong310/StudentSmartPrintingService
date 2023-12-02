import db from "../models/index";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
const { Op } = require("sequelize");

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findAll({
                where: { block: false }
            })
            if (user) resolve(user)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getBlockedUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findAll({
                where: { block: true }
            })
            if (user) resolve(user)
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
            let data = await db.Printers.findAll()
            if (data) resolve(data)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let blockUser = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Users.findOne({
                where: { userid: userid }
            })
            if (data) {
                data.block = !data.block,
                    await data.save(),
                    resolve({
                        errCode: 0,
                        errMessage: "Block success",
                    })
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: "Block fail"
                })
            }
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

let deletePrinter = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Printers.destroy({
                where: { id: id }
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
let getPrintHistory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Prints.findAll()
            if (data) resolve(data)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getPrintHistoryByMSSV = (content) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Prints.findAll({
                where: {
                    [Op.or]: [
                        { userid: content.content },
                        { name: content.content },
                    ]
                }

            })
            if (data) resolve(data)
            else resolve()
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}
let getAddPrinter = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Printers.create({
                status: true,
                location: data.location,
                name: data.name,
                type: data.type,
            })
            resolve({
                errCode: 0,
                errMessage: 'Success'
            });
        } catch (e) {
            reject(e)
        }
    })
}
let updatePrinter = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let printers = await db.Printers.findAll({
                where: { printerid: data.printerid }
            })
            if (printers) {
                printers.map(async (printer, index) => {
                    printer.status = true
                    printer.location = "H1"
                    printer.slot = 10
                    printer.name = "Tên máy đã được sửa đổi"
                    printer.type = "In thường",
                        await printer.save();
                })
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
let getUserbySearch = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findAll({
                where: {
                    [Op.or]: [
                        { name: data.content },
                        { mail: data.content },
                        { userid: data.content },
                    ], block: false
                }
            })
            if (user) resolve(user)
            else resolve()
        } catch (e) {
            reject(e)
        }
    })
}
let getBlockedUserbySearch = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findAll({
                where: {
                    [Op.or]: [
                        { name: data.content },
                        { mail: data.content },
                        { userid: data.content },
                    ], block: true
                }
            })
            if (user) resolve(user)
            else resolve()
        } catch (e) {
            reject(e)
        }
    })
}
let activePrinter = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let printer = await db.Printers.findOne({
                where: { id: data.id }
            })
            if (printer) {
                printer.status = !printer.status;
                await printer.save();
                resolve({
                    errCode: 0,
                    errMessage: "Active printer success",
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
module.exports = {
    getAllUser,
    getBlockedUser,
    getPrinter,
    blockUser,
    deletePrinter,
    getPrintHistory,
    getPrintHistoryByMSSV,
    getAddPrinter,
    updatePrinter,
    getUserbySearch,
    getBlockedUserbySearch,
    activePrinter
}
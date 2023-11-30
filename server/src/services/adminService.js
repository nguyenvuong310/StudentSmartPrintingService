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

let deletePrinter = (printerid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Printers.findAll({
                where: { printerid: printerid }
            })
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: `not exit`
                })
            }
            await db.Printers.destroy({
                where: { printerid: printerid }
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
let getPrintHistoryByMSSV = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Prints.findAll({
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
let getAddPrinter = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 6; i <= 17; i++) {
                const temp = i + 1;
                const time = i + "h-" + temp + "h"
                await db.Printers.create({
                    printerid: data.printerid,
                    status: data.status,
                    location: data.location,
                    slot: data.slot,
                    name: data.name,
                    type: data.type,
                    time: time,
                })
            }
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
module.exports = {
    getAllUser,
    getBlockedUser,
    getPrinter,
    blockUser,
    deletePrinter,
    getPrintHistory,
    getPrintHistoryByMSSV,
    getAddPrinter,
    updatePrinter
}
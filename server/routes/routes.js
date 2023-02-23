import { Router } from "express";
import multer from 'multer';
import { userController } from "../controllers/user.controller.js";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, Date.now() + '.' + extension)
    }
})

const upload = multer({ dest: 'uploads/' })
const uploadImage = multer({ storage: storage })

export const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
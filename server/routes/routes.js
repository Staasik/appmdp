import { Router } from "express";
import multer from 'multer';
import { userController } from "../controllers/user.controller.js";
import { checkListsController } from "../controllers/checkLists.controller.js";
import { diagnosticsController } from "../controllers/diagnostics.controller.js";
import { trackersController } from "../controllers/trackers.controller.js";

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
router.get('/refresh', userController.refresh)
router.post('/setCheckLists', checkListsController.setResults)
router.get('/getCheckLists', checkListsController.getResults)
router.post('/setBaseDiagnosticsData', diagnosticsController.setResults)
router.post('/getBaseDiagnosticsData', diagnosticsController.getResults)
router.post('/setTrackersData', trackersController.setData)
router.post('/getTrackersData', trackersController.getData)
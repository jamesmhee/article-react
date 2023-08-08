const express = require('express')
const router = express.Router()
const { LIST, GET, PUT, POST, DELETE } = require('../controllers/Article_Controller')
const admin = require('../config/firebase')
const appCheck = admin.appCheck()
const { getAppCheck } = require("firebase-admin/app-check")

const appCheckVerification = async (req, res, next) => {
    const appCheckToken = req.header("X-Firebase-AppCheck");

    if (!appCheckToken) {
        res.status(401);
        return next("Unauthorized");
    }
    try {
        const appCheckClaims = await getAppCheck().verifyToken(appCheckToken);

        // If verifyToken() succeeds, continue with the next middleware
        // function in the stack.
        return next();
    } catch (err) {
        res.status(401);
        return next("Unauthorized");
    }
}

// router.get('/article/', appCheckVerification, LIST) // List
// router.get('/article/:id', appCheckVerification, GET) // Read
// router.post('/article/', appCheckVerification, POST) // Create
// router.put('/article/:id', appCheckVerification, PUT) // Edit
// router.delete('/article/:id', appCheckVerification, DELETE) // Remove
router.get('/article/', LIST) // List
router.get('/article/:id', GET) // Read
router.post('/article/', POST) // Create
router.put('/article/:id', PUT) // Edit
router.delete('/article/:id', DELETE) // Remove

module.exports = router

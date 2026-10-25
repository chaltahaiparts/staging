let express = require('express');
let userEnquiryRouter = express.Router();
let { insertUserEnquiries } = require('../../controller/web/userEnquiryController.jsx');
let UserEnquiry = require('../../model/web/userEnquiry.model.jsx');

userEnquiryRouter.post('/insert', insertUserEnquiries);

module.exports = userEnquiryRouter;    

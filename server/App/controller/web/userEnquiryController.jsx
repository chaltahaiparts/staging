let insertUserEnquiries = async (req, res) => {
  try {
    let UserEnquiry = require('../../model/web/userEnquiry.model.jsx');
    let userEnquiry = new UserEnquiry(req.body);
    await userEnquiry.save();
    res.status(201).send(userEnquiry);
  } catch (err) {
    res.status(400).send(err);
  }
};

//sample Data for user enquiry
/*
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890",
  "message": "I am interested in your products."
}
*/

module.exports = { insertUserEnquiries };

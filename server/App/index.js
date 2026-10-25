require('dotenv').config({ path: require('path').join(__dirname, '.env') });
let express = require('express');
let mongoose = require('mongoose');
let app = express();

app.use(require('cors')());
app.use(express.json());

mongoose.connect(process.env.DBURL).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.AppPort, () => {
    console.log(`Server is running on port ${process.env.AppPort}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});




app.get('/', (req, res) => {
  res.send('Hello World!');
});


//Route for user enquiry    : http://localhost:3000/web/api/user-enquiry/insert
app.use('/web/api/user-enquiry', require('./routes/web/userEnquiryRoute.jsx'));

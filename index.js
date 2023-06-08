
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('./models/model');
const User = require('./models/user');
const Contact = require('./models/contact');



dotenv.config()
const app = express();
const router = express.Router();

app.use(morgan('dev'))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


const PORT = process.env.PORT || 6001;


app.get('/',(req,res)=>{
    res.send("its working");
})

//making user routes
const userCtrl = require('./controller/userController')
app.post('/user',userCtrl.addUser);
app.get('/user',userCtrl.getUser);
app.get('/userid/:id',userCtrl.getuserID);
app.patch('/userid/:id',userCtrl.updateUser);
app.delete('/users/:id', userCtrl.deleteUser);


// Synchronization
//User.sync({alter:true});
console.log("All models synchronised successfully");
//in order to drop this entire 
// User.drop();

//Contact.sync({force:true});



app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`)
})
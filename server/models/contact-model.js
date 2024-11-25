const {Schema , model} = require('mongoose');
// const { required } = require('../validators/auth-validator');
// const contactSchema = new Schema({
//     username:{type:String,required:true},
//     email:{type:String,required:true},
//     message:{type:String,required:true},
//     date:{type:Date,default:Date.now},
// });
const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: {
        type: String, // Store date as a formatted string
        default: () => new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        }),
    },
});

// create model or collection
const Contact  = new model('Contact',contactSchema);


module.exports = Contact;
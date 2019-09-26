const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({   
   call: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Call',
      required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   } 
      
});

mongoose.model('User',UserSchema);
const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({   
   schedule: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
      required: true
   },
   date:{
      type:Date,
      default: Date.now,
      required: true
   },
   hash:{
      type: String,      
      required: true
   }      
});

mongoose.model('Call',CallSchema);
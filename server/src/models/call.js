const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({   
   class: {
      type: String,
      required: true
   },
   date:{
      type:Date,
      default: Date.now,
      required: true
   }        
});

mongoose.model('Call',CallSchema);
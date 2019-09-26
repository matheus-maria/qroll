const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({   
   class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
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
const mongoose = require('mongoose');

const PrecenseSchema = new mongoose.Schema({   
   call: {
      type: String,
      required: true
   },
   user: {
      type: String,
      required: true
   } 
      
});

mongoose.model('Precense',PrecenseSchema);
const mongoose = require('mongoose');

const PrecenseSchema = new mongoose.Schema({   
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

mongoose.model('Precense',PrecenseSchema);
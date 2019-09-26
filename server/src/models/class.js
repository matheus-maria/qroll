const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({   
   name:{
      type: String,
      required: true
   },
   weekDay: {
      type: String,
      enum : ['domingo','segunda','terça','quarta','quinta','sexta','sabado'],
      required: true
   },
   index:{
      type: String,
      enum : ['1','2'],
      required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }    
});

mongoose.model('Class',ClassSchema);
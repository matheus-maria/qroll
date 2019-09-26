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
   semester: {
      type: String,
      enum : ['EC1','EC2','EC3','EC4','EC5','EC6','EC7','EC8','EC9','EC10'],
      required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }    
});

mongoose.model('Class',ClassSchema);
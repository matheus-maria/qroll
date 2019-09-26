const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({   
   name:{
      type: String,
      required: true
   },
   type:{
      type: String,
      enum : ['Aluno','Professor'],      
      required: true
   },
   ra:{
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   semester: {
      type: String,
      enum : ['EC1','EC2','EC3','EC4','EC5','EC6','EC7','EC8','EC9','EC10'],
      required: true
   }   
});

mongoose.model('User',UserSchema);
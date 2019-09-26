const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({   
   class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true
   },
   semester: {
      type: String,
      enum : ['EC1','EC2','EC3','EC4','EC5','EC6','EC7','EC8','EC9','EC10'],
      required: true
   }      
});

mongoose.model('Schedule',ScheduleSchema);
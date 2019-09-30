const mongoose = require('mongoose');

const Class = mongoose.model('Class');
const Call = mongoose.model('Call');

module.exports = {

    async index(req, res) {
        const value = await Class.find({});

        return res.json(value);        
    },

    async show(req, res) {
        await Class.find({
            user: req.params.userId
        }, (err, value) => {
            return res.json(value);
        });        
    },

    async store(req, res) {
        // Create new Class
        const clas = await Class.create(req.body);

        // Create new Call
        const call = await Call.create({ class: clas._id })

        return res.json({ class: clas, call: call });
    }      

}
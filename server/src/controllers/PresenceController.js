const mongoose = require('mongoose');

const Model = mongoose.model('Precense');

module.exports = {

    async index(req, res) {
        const value = await Model.find({});

        return res.json(value);        
    },    

    async store(req, res) {
        const value = await Model.create(req.body);

        return res.json(value);
    }  

}
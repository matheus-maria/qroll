const mongoose = require('mongoose');

const Model = mongoose.model('Class');

module.exports = {

    async index(req, res) {
        const value = await Model.find({});

        return res.json(value);        
    },

    async show(req, res) {
        const value = await Model.findById(req.params.id);

        return res.json(value);
    },

    async store(req, res) {
        const value = await Model.create(req.body);

        return res.json(value);
    },

    async update(req, res) {
        const value = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(value);
    },

    async delete(req, res) {

        await Model.findByIdAndDelete(req.params.id);

        return res.send();
    }   

}
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    especialidad: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

module.exports = model('Especialidades', userSchema);
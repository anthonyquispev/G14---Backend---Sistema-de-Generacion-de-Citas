const especialidadCtrl = {};
const Especialidad = require('../models/Especialidad');

const {isValidObjectId} = require('mongoose')

especialidadCtrl.getEspecialidades = async (req, res) => {
    try {
        const especialidades = await Especialidad.find();
        res.status(200).json({especialidades});
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

especialidadCtrl.createEspecialidad = async (req, res) => {
    try {
        const { especialidad, descripcion, imagen } = req.body;
        const especialidadNueva = await Especialidad.create({
            especialidad, descripcion, imagen
        });
        res.status(200).json({especialidadNueva, message: "Especialidad Creada"})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

especialidadCtrl.getEspecialidad = async (req, res) => {
    try {
        const validObject = isValidObjectId(req.params.id)
        if (!validObject) return res.status(422).json({message: 'ID invalido'})

        const especialidad = await Especialidad.findById(req.params.id);
        if (!especialidad) return res.status(500).json({message: "Especialidad no encontrada"})
        res.status(200).json({especialidad})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

especialidadCtrl.updateEspecialidad = async (req, res) => {
    try {
        const validObject = isValidObjectId(req.params.id)
        if (!validObject) return res.status(422).json({message: 'ID invalido'})

        const especialidadActualizada = await Especialidad.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true
            }
        )
        if (!especialidadActualizada) return res.status(500).json({message: "Especialidad no encontrada"})
        res.status(200).json({especialidadActualizada, message: "Especialidad Actualizada"})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

especialidadCtrl.deleteEspecialidad = async (req, res) => {
    try {
        const validObject = isValidObjectId(req.params.id)
        if (!validObject) return res.status(422).json({message: 'ID invalido'})

        const especialidad = await Especialidad.findByIdAndDelete(req.params.id);
        if (!especialidad) return res.status(500).json({message: "Especialidad no encontrada"})
        res.status(200).json({message: "Especialidad Eliminada"})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = especialidadCtrl;
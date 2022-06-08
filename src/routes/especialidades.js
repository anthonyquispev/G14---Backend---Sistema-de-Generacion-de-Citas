const { Router } = require('express');
const router = Router();

const { getEspecialidades, createEspecialidad, getEspecialidad, updateEspecialidad, deleteEspecialidad } = require('../controllers/especialidades.controller');

router.route('/')
    .get(getEspecialidades)
    .post(createEspecialidad);

router.route('/:id')
    .get(getEspecialidad)
    .put(updateEspecialidad)
    .delete(deleteEspecialidad); 

module.exports = router;
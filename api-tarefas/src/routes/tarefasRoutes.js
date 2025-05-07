const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefasController');
const validateTarefa = require('../middlewares/validateTarefa');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validateTarefa, controller.create);
router.put('/:id', validateTarefa, controller.update);
router.patch('/:id/concluir', controller.concluir);
router.delete('/:id', controller.delete);

module.exports = router;
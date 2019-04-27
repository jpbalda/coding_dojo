const express = require('express');
const router = express.Router();
const standupsController = require('../../../controllers/standupsController');

router.get('/', standupsController.index);
router.delete('/:id', standupsController.delete);

module.exports = router;
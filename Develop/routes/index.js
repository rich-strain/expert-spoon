const router = require('express').Router();

// Import Modular Routes
const noteRoutes = require('./notes');

router.use('/notes', noteRoutes);

module.exports = router;

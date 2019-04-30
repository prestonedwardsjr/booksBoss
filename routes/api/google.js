let router = require("express").Router();
let booksController = require ("../../controllers/booksControllers");

// Matches with "/api/google" 
router.route ("/").get(booksController.findAll);

module.exports = router;
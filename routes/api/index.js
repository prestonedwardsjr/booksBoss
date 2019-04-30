const path = require ("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require ("./google");

// Book routes
router.use("/books", bookRoutes);

//google routes 
router.use ("/google", googleRoutes);

// for anything else render html page
router.use(function(req,res){
    res.sendFile(path.join(_dirname,"../../client/build/index.html"));
});

module.exports = router;

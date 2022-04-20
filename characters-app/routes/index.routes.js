const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
})

router.use('/movie-characters', require('./characters.routes'))

module.exports = router;

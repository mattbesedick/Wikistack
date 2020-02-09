const router = require("express").Router();
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {});
router.post("/", (req, res, next) => {});
router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;

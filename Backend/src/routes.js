const express = require("express");
const ctrl = require("./controller");

const router = express.Router();

router.get("/pilots", ctrl.getAll);
router.get("/pilots/:id", ctrl.getOne);
router.post("/pilots", ctrl.create);
router.put("/pilots/:id", ctrl.update);
router.delete("/pilots/:id", ctrl.remove);

module.exports = router;
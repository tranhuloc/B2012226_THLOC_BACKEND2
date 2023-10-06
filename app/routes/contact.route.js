const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router
    .route("/favorite")
    .get(contacts.findAllFavorite)
    .post(contacts.update)
    .delete(contacts.delete);

router
    .route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router
    .route("/:id")
    .get(contacts.findOne)
    .patch(contacts.update)
    .delete(contacts.delete);

module.exports = router;

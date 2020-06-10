
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    })
})

router.get("/about", (req, res) => {
    res.render("contact", {
        title: "Contact Page"
    })
})

router.get("/testit", (req, res) => {
    res.render("test", {
        title : "Test"
    })
})

module.exports = router;
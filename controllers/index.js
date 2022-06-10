
const router = require('express').Router();

const userRoutes = require("./api/userRoutes.js");
router.use("/api/users",userRoutes)

const blogRoutes = require("./api/blogRoutes");
router.use("/api/blogs",blogRoutes)

const commentRoutes = require("./api/commentRoutes");
router.use("/api/comments",commentRoutes)

const frontEnd = require("./frontEndRoutes");
router.use("/",frontEnd)

module.exports = router;
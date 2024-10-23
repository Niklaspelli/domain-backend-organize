const express = require("express");
const {
createBoard,
addBoardMember,
getUserBoards,
} = require("../controllers/boardControllers.js");
const { verifyJwt } = require("../utils/jwtUtils");


const router = express();

router.post("/create", verifyJwt, createBoard):

router.get("/my-boards", verifyJwt, getUserBoards );

router.post("/adduser/:boardId", verifyJwt, addBoardMember);

module.exports = router;

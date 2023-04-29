import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getAllUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Get */
router.get("/", verifyToken, getAllUser);
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* Update */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;

/* 64203b40c2844910c6fb1094 6420f67a6d2d97f904c0b00e 6420f66f6d2d97f904c0b00c */

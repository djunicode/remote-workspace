import express from "express";
import {getMyProfile,register,login,getProfile} from "../controllers/userControllers.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login",login);

router.get('/myProfile', authenticateUser,getMyProfile);

router.get('/allProfile', authenticateUser,getProfile);

export default router;
import  express  from "express";
import { signin, signup } from "../controller/auth.js";



const router = express.Router();

router.post("/auth/signup", signup);
router.post("/auth/signin", signin);


export default router;
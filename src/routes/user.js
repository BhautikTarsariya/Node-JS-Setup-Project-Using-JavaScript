import { Router } from "express";
import * as UserController from "../controllers/user.js";
import { parseError } from "../utils/helper.js";

const router = Router();

router.get('/user', async (req, res) => {
    let ApiResponse = { code: 200, data: '' };
    try {
        ApiResponse.code = 200;
        ApiResponse.data = await UserController.readUser();
    } catch (error) {
        ApiResponse = parseError(error);
    } finally {
        res.status(ApiResponse.code).send(ApiResponse.data);
    }
});

export default router;

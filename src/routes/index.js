import { Router } from "express";
import user from "./user.js";

const registerRoutes = (app) => {
    const router = Router();
    router.use(user);

    router.use("/*", (req, res) => {
        res.status(404).send("Not found");
    });
    app.use("/api", router);
};

export default registerRoutes;
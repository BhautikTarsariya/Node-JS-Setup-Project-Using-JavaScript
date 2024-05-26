import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from './routes/index.js';

const app = express();

dotenv.config();

const corsOpts = {
    credentials: true,
    methods: ["POST", "PUT", "GET", "DELETE", "HEAD"],
    origin: [
        "https://localhost:3000",
        "https://example.com",
    ],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => {
        throw error;
    });

routes(app);
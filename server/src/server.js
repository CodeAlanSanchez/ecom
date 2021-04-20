import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true}));

const {CONNECTION_URI} = process.env;
const PORT = 5000 || process.env.PORT;

mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.info(`Server running on port ${PORT}`)))
    .catch((error) => console.error(error));

mongoose.set('useFindAndModify', false);
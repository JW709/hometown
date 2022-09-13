import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ extended: true, limit: 100000000 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send("Explore Your Home Town")
})

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = process.env.MONGODB_URI || 'mongodb+srv://jessw:mongodb123@cluster0.35ok3.mongodb.net/test';

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('Server running')))
    .catch((error) => console.log(error.message));


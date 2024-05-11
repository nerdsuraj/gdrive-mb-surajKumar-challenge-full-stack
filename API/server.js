const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const Token = require('./models/token');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

mongoose.connect(process.env.momngoURI, { useNewUrlParser: true });


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.post('/api/save-token', async (req, res) => {
    try {
        const { accessToken } = req.body;

        if (!accessToken) {
            return res.status(400).json({ message: 'Access token" is required' });
        }
        const tokenExists = await Token.findOne({ accessToken: accessToken });
        
        if (tokenExists) {
            return res.status(200).json({ message: 'Token already exists in the database' });
        }

        const newToken = new Token({ accessToken });
        await newToken.save();
        res.status(200).json({ message: 'Token saved successfully' });
    } catch (error) {
        console.error('Failed to save token:', error);
        res.status(500).json({ message: 'Failed to save token' });
    }
});


app.post('/api/get-keys', async (req, res) => {
    try {
        let key = {
            clientId: process.env.clientId,
            apiKey: process.env.apiKey,
        }
        res.status(200).json( key );
    } catch (error) {
        console.error('Failed to get keys:', error);
        res.status(500).json({ message: 'Failed to get keys' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

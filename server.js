const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

 // Conexión a MongoDB (excepto si estamos en el entorno de test)
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to MongoDB!"))
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
            process.exit(1);
        });
}

app.use('/api', apiRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(4000, () => {
        console.log(`Backend Server running on http://localhost:4000`);
    });
}

module.exports = app;
const express = require('express'); // Loading Express module

// Initialize Express
const app = express();

// Connect Database
const connectDB = require('./config/db');
connectDB();

// Initialize JSON body parser
app.use(express.json());

// Add Express Port
const PORT = process.env.port || 5000;

// Returns response (for testing)
//app.use('/', (request, response) => response.send('Hello'));

app.use('/api/genurl', require('./routes/genUrl'));
app.use('/', require('./routes/redirect'));

// Start Express
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

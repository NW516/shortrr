const express = require('express'); // Loading Express module
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const cors = require('cors');

// Connect Database
const connectDB = require('./config/db');
connectDB();

app.use(cors());
// Initialize JSON body parser
app.use(bodyParser.json());

// Add Express Port
const PORT = process.env.port || 5000;

// Returns response (for testing)
//app.use('/', (request, response) => response.send('Hello'));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use('/api/genurl', require('./routes/genUrl'));
app.use('/', require('./routes/redirect'));

// Start Express
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

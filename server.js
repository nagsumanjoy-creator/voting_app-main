const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'Active',
        service: 'Online Voting System REST API',
        endpoints: {
            auth: '/user/signup, /user/login, /user/profile',
            candidates: '/candidate, /candidate/vote/:candidateID, /candidate/vote/count'
        }
    });
});


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
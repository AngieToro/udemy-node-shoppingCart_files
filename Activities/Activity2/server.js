const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/users', (req, res, next) => {

    res.sendFile(path.join(__dirname, '..', 'Activity2', 'views', 'users.html'));

});

app.use('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, '..', 'Activity2', 'views', 'welcome.html'));

});

app.listen(3000);
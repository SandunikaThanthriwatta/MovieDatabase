const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import your models here
const Actor = require('./models/actors');
const Award = require('./models/awards');
const Director = require('./models/directors');
const Movie = require('./models/movies');

// Define your routes here
const actorRoutes = require('./routes/actor');
const awardRoutes = require('./routes/award');
const directorRoutes = require('./routes/director');
const movieRoutes = require('./routes/movie');

app.use('/api/actors', actorRoutes);
app.use('/api/awards', awardRoutes);
app.use('/api/directors', directorRoutes);
app.use('/api/movies', movieRoutes);

// Connect to your MongoDB Atlas cluster
const dbURI = 'mongodb+srv://sandu:WWSmAmkaeHVGgr5B@movieapi.ev9jklh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

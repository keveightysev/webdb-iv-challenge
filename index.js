const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./routes/dishes.js');
const recipesRouter = require('./routes/recipes.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/dishes', dishesRouter);
server.use('/recipes', recipesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server running at http://localhost:${port} ***\n`);
});

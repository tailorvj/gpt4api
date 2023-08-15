const express = require("express");
const bodyParser = require("body-parser");
const recipeRouter = require("./routers/recipeRouter");

// Create an Express app
const app = express();

// Use JSON middleware to automatically parse JSON
app.use(bodyParser.json());

// Register the recipe router
app.use("/api/recipe", recipeRouter);

// Start the server on port 3003
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

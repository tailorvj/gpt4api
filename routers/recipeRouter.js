const express = require("express");
const router = express.Router();
const recipeService = require("../services/recipeService");

router.post("/generateRecipe", async (req, res) => {
  try {
    const dishName = req.body.dishName;
    const response = await recipeService.generateRecipe(dishName);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

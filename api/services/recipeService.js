const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.generateRecipe = async (dishName) => {
  console.log("Generating recipe for", dishName);
  console.log(`api key: ${process.env.OPENAI_API_KEY}`);
  const systemPrompt = fs.readFileSync("./prompts/recipe.txt", "utf8");
  console.log("systemPrompt", systemPrompt);

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: `Dish name: ${dishName}`,
      },
    ],
    temperature: 0.1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data;
};

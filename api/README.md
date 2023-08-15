## GPT4API - Node.js implementation

Full documentation and blog can be found [here](https://tailorvj.github.io/gpt4api/)

*Tue 15 Aug*

I built a very basic endpoint POC that gets a dish name and returns an analysis from OpenAI GPT-4 API about the ingredients and their nutritinal value.

### The bare minimum implementation

1. OpenAI API Key. In order to use the OpenAI GPT-4 API, you need an API key, so sign up and get your API key from here: https://platform.openai.com/account/api-keys
2. We are building a basic node.js Express server that communicates with the OpenAI API and reads the API key from an environment variable. So the project was initialised with the following npm commands:

```bash
$ npm init -y
$ npm install --save express openai body-parser dotenv
```

3. The main entry point for our server is index.js
   I installed nodemon globally so I can run the server with the following command:

   $ nodemon index.js
   Then I added a script to package.json so I can run the server with npm:

```yaml
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "startdev": "nodemon index.js"
  },
```

So, now I can run the server with:

```bash
   $ npm run startdev
```

And it will restart automatically when I make changes to the code.
4. Environment variables: .env includes OPENAI_API_KEY and ./prompts/recipe.txt includes the system prompt.
5. The service: ./services/recipeService.js includes the code that connects to the OpenAI GPT-4 API and returns the response.
6. The router: ./routers/recipeRouter.js includes the code that defines the endpoint. At this stage, we are defining a POST endpoint that accept Content-Type application/json, receives a dishName parameter in the body in the following format:

```json
{
  "dishName": "Spaghetti Carbonara"
}
```

7. That's it! Let's start looking into the basic code that makes this work.

### The code

Let's start from the end.

#### services/recipeService.js

**Setup**:

```javascript

constfs=require("fs");
const { Configuration, OpenAIApi } =require("openai");
require("dotenv").config();

constconfiguration=newConfiguration({
apiKey:process.env.OPENAI_API_KEY,
});

constopenai=newOpenAIApi(configuration);
```

**The function that connects to the OpenAI API**:

```javascript

exports.generateRecipe=async (dishName) => {
  // implementation here. Details below
}

```

Inside the function, we **read the system prompt from the recipe.txt file**:

```javascript
constsystemPrompt=fs.readFileSync("./prompts/recipe.txt", "utf8");
```

Next, we **call the OpenAI API**:

```javascript
constresponse=awaitopenai.createChatCompletion({
model:"gpt-4",

messages: [
      {
role:"system",
content:systemPrompt,
      },
      {
role:"user",
content:`Dish name: ${dishName}`,
      },
    ],

temperature:0.1,
max_tokens:256,
top_p:1,
frequency_penalty:0,
presence_penalty:0,
  });

return response.data;
```

#### routers/recipeRouter.js

**Setup**:

```javascript
const express = require("express");
const router = express.Router();
const recipeService = require("../services/recipeService");
```

**The endpoint**:

```javascript
router.post("/generateRecipe", async (req, res) => {
  try {
    const dishName = req.body.dishName;
    const response = await recipeService.generateRecipe(dishName);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});
```

What's happening in that router.post definition?

1. We are defining a POST endpoint with the path /generateRecipe
2. We are using the async/await syntax to call the recipeService.generateRecipe function
3. We are sending the response back to the client with res.status(200).send(response)

**And last but not least, export the module:**

```javascript
module.exports = router;
```

#### index.js

**Setup**:

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const recipeRouter = require("./routers/recipeRouter");

// Create an Express app
const app = express();

// Use JSON middleware to automatically parse JSON
app.use(bodyParser.json());
```

**The endpoint**:

```javascript
// Register the recipe router
app.use("/api/recipe", recipeRouter);
```

**Start the server**:

```javascript
// Start the server on port 3003
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### prompt/recipe.txt - The system prompt

You are an nutritional expert. I am going to provide you with food recipes. Please reply with an analysis of the nutritinal values and dietary information related to the food recipe I ask you about.

### Testing with Postman

1. Open Postman and add a new request of type POST
2. The development server has been defined to listen on port 3003, so the URL should be http://localhost:3003/api/recipe/generateRecipe
3. Add the following header: Content-Type: application/json (Content type is the header name and application/json is the value)
4. Add the following Body in raw format:

   ```json
   {
     "dishName": "Spaghetti Carbonara"
   }
   ```
5. Send the request and you should get a response from the OpenAI API with the analysis of the nutritinal values and dietary information related to the food recipe you asked about.
6. If you get a 401 error, it usually means something is wrong with your API key.

### Next steps -

We are going to create a more general purpose solution that would allow the creation of multiple endpoints and multiple system prompts.

#### Ideas from co-pilot. Some are actually good!

1. Add more endpoints to the router
2. Add more system prompts to the recipe.txt file
3. Add more parameters to the request body
4. Add more parameters to the OpenAI API call
5. Add more error handling
6. Add more tests
7. Add more comments to the code
8. Add more documentation
9. Add more logging
10. Add more security
11. Add more performance optimisations
12. Add more scalability
13. Add more monitoring
14. Add more CI/CD
15. Add more automation
16. Add more infrastructure as code
17. Add more cloud
18. Add more containers
19. Add more Kubernetes
20. Add more serverless
21. Add more machine learning
22. Add more AI
23. Add more blockchain
24. Add more IoT
25. Add more AR/VR
26. Add more quantum computing
27. Add more space
28. Add more time
29. Add more dimensions
30. Add more universes
31. Add more multiverses
32. Add more infiniteverses
33. Add more infiniteverses
34. Add more infiniteverses
35. Add more infiniteverses
36. Add more infiniteverses
37. Add more :D


### License - AGPLv3

This software, including all media assets under it is licensed under the GNU AGPLv3 license

Copyright (C) 2023  Asaf Prihadash - tailorvj.com.
All rights reserved to Asaf Prihadash - tailorvj.com

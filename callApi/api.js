import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration); 

async function runCompletion (question) {
  var ans = "";
  if (!configuration.apiKey) {
      console.log("OpenAI API key not configured, please follow instructions in README.md");
    return;
  }

  try {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0.5,
    max_tokens: 2048,
    });
    ans = completion.data.choices[0].text;
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
  return  await ans;
};

var anw;
var questionInput = "how are you?";
anw = await runCompletion(questionInput);
console.log(anw);


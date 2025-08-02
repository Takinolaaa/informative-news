import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const userInput = "Success Tips";

const getResponse = async () => {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `provide the importance and current social economic implications of ${userInput}`,
      },
    ],
    model: "gpt-4.1",
  });

  console.log(response.choices[0].message.content);
};

getResponse();

import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express";

import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const port = 3000;

app.get("/trendingNews", async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});

app.get("/pickNews", async (req, res) => {
  const category = req.query.q;

  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});

app.post("/gpt-response", async (req, res) => {
  const desc = req.body.prompt;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "user",
          content:
            `Given the article description: "${desc}", the following response needs to be separated by bolded section headers:\n\n` +
            `Insight: [your insight here]\n` +
            `Sentiment: [Positive/Negative/Neutral] — [brief explanation]\n` +
            `Bias: [Bias type] — [brief explanation]`,
        },
      ],
    });

    res.json({ message: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to use ChatGPT" });
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

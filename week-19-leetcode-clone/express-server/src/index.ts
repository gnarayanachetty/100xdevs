import express from "express";
import { createClient } from "redis";

const app = express();

app.use(express.json());

const client = createClient();

client.connect();

app.post("/submit", async (req, res) => {
  const { problemId, userId, code, language } = req.body;
  try {
    const resp = await client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, code, language })
    );
    console.log(resp);
    res.json({
      status: 200,
      message: "Submission request successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(3000);

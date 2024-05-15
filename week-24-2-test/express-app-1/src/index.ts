import express from 'express';

export const app = express();

app.use(express.json());

app.post('/sum', function (req, res) {
  const a = req.body.a
  const b = req.body.b
  const ans = a + b
  res.json({
    answer: ans
  });
});

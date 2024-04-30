const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const app = express();
const port = 5000;

// This function communicates with the OpenAI API
async function generateContent(prompt) {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  try {
    const response = await axios.post(url, {
      prompt: prompt,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

// API endpoint to generate content
app.get('/generate', async (req, res) => {
  try {
    const content = await generateContent("Write a brief piece on AI and ethics.");
    res.json({ content });
  } catch (error) {
    console.error("Failed to generate content: ", error);
    res.status(500).json({ error: "Failed to generate content due to an error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

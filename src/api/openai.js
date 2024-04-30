const axios = require('axios');

const apiKey = process.env.OPENAI_API_KEY;  // Load API key from environment variables

async function generateContent(prompt) {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  try {
    const response = await axios.post(url, {
      prompt: prompt,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return null;
  }
}

module.exports = { generateContent };

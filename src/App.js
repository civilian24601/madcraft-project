import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    try {
      // Ensure this URL points to your server-side route for content generation
      const response = await axios.get('http://localhost:3000/generate');
      setContent(response.data.content); // Make sure to access the data correctly based on your server response
    } catch (error) {
      console.error('Error fetching content:', error);
      setContent('Failed to fetch content.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to AI Content Generator</h1>
      </header>
      <main>
        <button onClick={handleGenerateContent} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
        <div className="content">
          {content && <p>{content}</p>}
        </div>
      </main>
      <footer>
        <p>Powered by OpenAI</p>
      </footer>
    </div>
  );
}

export default App;

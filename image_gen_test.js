const axios = require('axios');

async function generateImage(prompt) {
  // Your API Key
  const apiKey = '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'; // Replace with your actual API key

  // Post Data
  const postData = {
    model: "dall-e-3",
    prompt: prompt,
    size: "1024x1024",
    n: 1
  };

  // API Endpoint
  const endpoint = "https://api.openai.com/v1/images/generations";

  try {
    // Making the API Call
    const response = await axios.post(endpoint, postData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    // Extracting the Image URL
    if (response.data && response.data.data && response.data.data.length > 0) {
      const imageUrl = response.data.data[0].url;
      console.log('Generated Image URL:', imageUrl);
      return imageUrl; // Returning the URL directly
    } else {
      throw new Error('No image data found in response');
    }
  } catch (error) {
    // Detailed Error Handling
    if (error.response) {
      console.error('Response Data:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request:', error.request);
    } else {
      console.error('Error Message:', error.message);
    }
    throw error;
  }
}

// Example usage
const _prompt = 'generate an image of a lion dressed like a gangster form he 30s'; // Assuming args[0] contains the prompt
generateImage(_prompt)
  .then(imageUrl => console.log('Image URL:', imageUrl))
  .catch(error => console.error('Error:', error));

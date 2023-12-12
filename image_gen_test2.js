const axios = require('axios');

async function generateImage(prompt) {
  const apiKey = 'y0jmoouJvyBGr4CA13vEVoqqTnZ3ZlL1eRh5B5LG884sF6KW5WO5DRXoNz1w' // Ensure your API key is correctly set here

  const postData = {
    key: apiKey,
    prompt: prompt
  };

  try {
    const response = await axios.post("https://stablediffusionapi.com/api/v3/text2img", postData, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.data.error) {
      throw new Error(JSON.stringify(response.data.error));
    }

    const result = response.data.output[0];
    console.log(result);
    return result; // Return the result directly or encode as needed
  } catch (error) {
    console.error('Error generating image:', error.message);
    throw error;
  }
}

// Example usage
const _prompt = 'a gorilla dressed like a gangster handling a gun'; // Replace with your actual prompt
generateImage(_prompt)
  .then(result => console.log('Generated Image:', result))
  .catch(error => console.error('Error:', error));
const _prompt = args[0];

const postData = {
  model:"dall-e-3",
  prompt: _prompt,
  size:"1024x1024",
  n:1,
};

const openAIResponse = await Functions.makeHttpRequest({
  url: "https://api.openai.com/v1/images/generations",
  method: "POST",
  headers: {
    Authorization: `Bearer ${secrets.apiKey}`,
    "Content-Type": "application/json",
  },
  data: postData
});

if (openAIResponse.error) {
  throw new Error(JSON.stringify(openAIResponse));
}

const result = openAIResponse.data.data[0].url;

console.log(result);
return Functions.encodeString(result);
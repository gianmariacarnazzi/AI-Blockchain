const _prompt = args[0];

const postData = {
  key: secrets.apiKey,
  prompt: _prompt
};

const StableDiffusionResponse = await Functions.makeHttpRequest({
  url: "https://stablediffusionapi.com/api/v3/text2img",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  data: postData,
  timeout:9000
});

if (StableDiffusionResponse.error) {
  throw new Error(JSON.stringify(StableDiffusionResponse));
}

const result = StableDiffusionResponse.data.output[0];

console.log(result);
return Functions.encodeString(result);
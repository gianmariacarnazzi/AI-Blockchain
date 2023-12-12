const { decodeResult, ReturnType } = require("@chainlink/functions-toolkit");
const { Contract } = require("ethers");

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/FunctionsConsumer.json");

const consumerAddress = "0x3D8F757bC4075a356466aF3AB613C39c33fe4b51"
const readResponse = async () => {
  const functionsConsumer = new Contract(consumerAddress, abi, signer);

  const responseBytes = await functionsConsumer.s_lastResponse()
  console.log("\nResponse Bytes : ", responseBytes)

  const decodedResponse = decodeResult(responseBytes, ReturnType.string)

  console.log("\nDecoded response from OpenAI:", decodedResponse)
};

readResponse().catch(err => {
  console.log("Error reading response: ", err);
});

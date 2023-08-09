import { Pact, createClient } from "@kadena/client";
import { createExp } from "@kadena/pactjs";

const NETWORK_ID = "testnet04";
const chainId = "0";
export const API_HOST = `https://api.testnet.chainweb.com/chainweb/0.0/${NETWORK_ID}/chain/${chainId}/pact`;

export async function listModules(): Promise<{
  result:
    | {
        status: "success";
        data: string[];
      }
    | { status: "error"; data: null; error: Error };
}> {
  // 1 - Create a new transaction
  const transaction = null;
  // 2 - Bind to the Pact code
  // 3 - Set the meta data (chainId and network)
  // 4 - Create a client that will allow us to make HTTP calls
  const client = null;

  // 5 - Call the Pact local endpoint to retrieve the result

  // 6 - Return the results
  return {
    result: {
      status: "success",
      data: [],
    },
  };
}

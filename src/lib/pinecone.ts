import { Pinecone } from "@pinecone-database/pinecone";

export const client = async () => {
  return await new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });
};

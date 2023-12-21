import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Create a javascript variable with your name it.",
  });
  console.log(completion.data.choices[0].text);

  res.status(200).json({ name: "John Doe" });
}

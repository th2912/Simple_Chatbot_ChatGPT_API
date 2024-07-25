import { Configuration, OpenAIApi } from "openai";
import axios, { AxiosResponse } from "axios";
import { Message } from "../utilities/types";
import { nanoid } from "@reduxjs/toolkit";
import { delay } from "lodash";
export const API_GET_COMPLETION =
  "https://api.openai.com/v1/engines/davinci-codex/completions";
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export class OpenAPI {
  private secretKey = process.env.REACT_APP_CHATGPT_SECRET_KEY;
  protected model = "text-davinci-003";
  protected max_tokens = 7;
  protected temperature = 0;
  protected top_p = 1;
  protected n = 1;
  protected stream = false;
  protected logprobs = null;
  protected stop = "\n";

  constructor() {}

  async getCompletion(question: string): Promise<Message> {
    // const response: AxiosResponse = await axios.post(
    //   API_GET_COMPLETION,
    //   {
    //     model: this.model,
    //     prompt: prompt,
    //     max_tokens: this.max_tokens,
    //     temperature: this.temperature,
    //     top_p: this.top_p,
    //     n: this.n,
    //     stream: this.stream,
    //     logprobs: this.logprobs,
    //     stop: this.stop,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${this.secretKey}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const { id, choices } = response.data;
    if (!configuration.apiKey) {
      console.log("OpenAI API key not configured, please follow instructions in README.md");
    }
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0.5,
    max_tokens: 2048,
    });

    return {
      id: `${nanoid()}`,
      author: "GPT",
      // content: choices[0].text.trim(),
      content: String(completion.data.choices[0].text),
    };
  }
}

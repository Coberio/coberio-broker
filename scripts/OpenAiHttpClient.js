import OpenAI from 'openai';

export default class OpenAiHttpClient  {
  static DEFAULT_MAX_TOKENS = 1000;

  constructor(apiKey, model = 'gpt-3.5-turbo') {
    this.httpClient = new OpenAI({
      apiKey
    });
    this.model = model;
  }

  async getCompletions(
    messages,
    options,
    responseCallback
  ) {
    const stream = await this.httpClient.chat.completions.create({
      model: this.model,
      messages: messages,
      stream: true,
      max_tokens: options?.maxTokens || OpenAiHttpClient.DEFAULT_MAX_TOKENS
    });

    let tokensBuffer = [];

    for await (const chunk of stream) {
      const streamText = chunk.choices[0]?.delta?.content || '';
      tokensBuffer.push(streamText);

      if (tokensBuffer.includes('.')) {
        const paragraph = tokensBuffer.join('');
        await responseCallback(paragraph);
        tokensBuffer = [];
      }
    }
  }

  async getCompletion(
    messages,
    options
  ) {
    const response = await this.httpClient.chat.completions.create({
      model: this.model,
      messages: messages,
      stream: false,
      // max_tokens: options?.maxTokens || OpenAiHttpClient.DEFAULT_MAX_TOKENS
    });

    return response.choices[0].message.content || '';
  }

}

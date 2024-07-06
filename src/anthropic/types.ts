export interface AnthropicClaudeModelSettings {
  promptCostPer1000Tokens: number;
  completionsCostPer1000Tokens: number;
  maxTokens: number;
}

export interface AnthropicClaudeCostOptions {
  promptTokens: number;
  completionTokens: number;
}

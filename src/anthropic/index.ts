import { AnthropicClaudeCostOptions, AnthropicClaudeModelSettings } from "./types";

const anthropicToolkit = () => {
  const defineModel = <T>(settings: T): T => settings;

  const calculateClaudeCost = ({
    model,
    promptTokens,
    completionTokens,
  }: AnthropicClaudeCostOptions & { model: keyof typeof claudeModels }) => {
    const promptCost =
      (promptTokens / 1000) * claudeModels[model].promptCostPer1000Tokens;
    const completionCost =
      (completionTokens / 1000) * claudeModels[model].completionsCostPer1000Tokens;

    return {
      promptCost,
      completionCost,
    };
  };

  const claudeModels = {
    /**
     * Claude 3.5
     */
    ["claude-3-5-sonnet-20240620"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.003,
      completionsCostPer1000Tokens: 0.015,
      maxTokens: 4096,
    }),
    /**
     * Claude 3
     */
    ["claude-3-opus-20240229"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.015,
      completionsCostPer1000Tokens: 0.075,
      maxTokens: 4096,
    }),
    ["claude-3-sonnet-20240229"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.003,
      completionsCostPer1000Tokens: 0.015,
      maxTokens: 4096,
    }),
    ["claude-3-haiku-20240307"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.00025,
      completionsCostPer1000Tokens: 0.00125,
      maxTokens: 4096,
    }),
    /**
     * Claude 2
     */
    ["claude-2.1"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.008,
      completionsCostPer1000Tokens: 0.024,
      maxTokens: 4096,
    }),
    ["claude-2.0"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.008,
      completionsCostPer1000Tokens: 0.024,
      maxTokens: 4096,
    }),

    /**
     * Claude instant
     */

    ["claude-instant-1.2"]: defineModel<AnthropicClaudeModelSettings>({
      promptCostPer1000Tokens: 0.0008,
      completionsCostPer1000Tokens: 0.0024,
      maxTokens: 4096,
    }),
  };

  return {
    calculateClaudeCost,
    claudeModels,
  };
};

export const AnthropicToolkit = anthropicToolkit();

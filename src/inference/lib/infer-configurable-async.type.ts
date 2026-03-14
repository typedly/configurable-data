// Interface.
import type { InferAsync } from "@typedly/data";
import type { ConfigurableDataShape } from "../../lib";
/**
 * @description Infers the async flag from the configuration or adapter.
 * @export
 * @template [T=undefined] The type of the configuration object.
 * @template [F=false] The default async flag if it cannot be inferred from `T`.
 */
export type InferConfigurableAsync<
  T = undefined,
  F = false
> = T extends ConfigurableDataShape<any, any, infer R extends boolean>
  ? R
  : InferAsync<T, F> ;

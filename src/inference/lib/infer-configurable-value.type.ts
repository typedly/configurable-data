// Interface
import type { DataShape } from "@typedly/data";
import type { ConfigurableDataShape } from "../../lib";
/**
 * @deprecated This utility is redundant and should not be used. In favor of just using `InferValue` from `@typedly/data`.
 * @description Infers the value type from configurable, and data shape interface.
 * @export
 * @template I The data shape type.
 * @template [F=any] The fallback type if inference fails.
 */
export type InferConfigurableValue<I, F = any> =
  I extends ConfigurableDataShape<any, infer T, any>
    ? T
    : I extends DataShape<infer T>
      ? T
      : I extends { value?: infer V }
        ? V
        : F;
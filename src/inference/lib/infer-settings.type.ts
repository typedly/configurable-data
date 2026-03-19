// Interface.
import { ConfigurableDataShape } from "./configurable.data.shape";
/**
 * @description Infers the settings type from a configurable data shape.
 * @export
 * @template T The type of configurable data shape to infer the settings from.
 * @template [F=undefined] The fallback type if the settings cannot be inferred.
 */
export type InferSettings<T, F = undefined> = T extends ConfigurableDataShape<infer C, any, any> ? C : F;
// Interface.
import type { Configurable } from "@typedly/data-traits";
import type { DataSettings, DataShape, InferAsync } from "@typedly/data";
// Type.
import type { DataConfig } from "@typedly/data";
/**
 * @description The shape of a data type with configuration.
 * @export
 * @interface ConfigurableDataShape
 * @template {DataSettings<R> | undefined} C The settings to configure the data shape.
 * @template [T=any] The value type.
 * @template {boolean} [R=InferConfigurableAsync<C>] The async flag inferred from the settings.
 * @extends {DataShape<T, R>} The base data shape with value type `T` and async flag `R`.
 * @extends {Configurable<DataConfig<C, R>>} The configurable interface with data configuration `C` and async flag `R`.
 */
export interface ConfigurableDataShape<
  C extends DataSettings<R> | undefined,
  T = any,
  R extends boolean = InferAsync<C>
> extends DataShape<T, R>, Configurable<DataConfig<C, R>> {}

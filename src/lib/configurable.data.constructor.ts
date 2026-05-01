import { DataSettings, InferAsyncOf } from "@typedly/data";
import { ConfigurableDataShape } from "./configurable.data.shape";
/**
 * @description Represents the constructor type for a configurable data shape. It defines the signature for creating instances of configurable data shapes, allowing for optional settings, value, and additional arguments.
 * @export
 * @interface ConfigurableDataConstructor
 * @template {ConfigurableDataShape<C, T, R> | undefined} I 
 * @template {DataSettings<R> | undefined} C 
 * @template T 
 * @template {boolean} [R=InferAsyncOf<[C, I]>] 
 * @template {readonly any[]} [G=[]] 
 */
export interface ConfigurableDataConstructor<
  I extends ConfigurableDataShape<C, T, R> | undefined,
  C extends DataSettings<R> | undefined,
  T,
  R extends boolean = InferAsyncOf<[C, I]>,
  G extends readonly any[] = []
> {
  new (
    settings?: C,
    value?: T,
    ...args: G
  ): I;
}
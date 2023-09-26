import transformerVariantGroup from '@unocss/transformer-variant-group';
import { SourceCodeTransformer } from 'unocss';

export const TRANSFORMERS: SourceCodeTransformer[] = [
  (transformerVariantGroup() as unknown) as SourceCodeTransformer,
];

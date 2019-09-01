import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    projectInformationHeader: {
      padding: '1rem 0'
    },
    imagePreview: {
      boxShadow: Depths.depth16
    }
  })
}
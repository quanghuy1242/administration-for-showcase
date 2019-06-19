import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    toolbar: {
      backgroundColor: 'rgba(165, 181, 192, 0.082)',
      boxShadow: Depths.depth4,
      zIndex: 555
    }
  })
}
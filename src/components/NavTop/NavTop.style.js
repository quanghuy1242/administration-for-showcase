import { mergeStyleSets } from 'office-ui-fabric-react'
import { Depths } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    NavTopWrapper: {
      height: 55,
      boxShadow: Depths.depth8,
      zIndex: 99999999,
      padding: '0rem 1rem 0rem 1rem',
      backgroundColor: 'white'
    }
  })
}
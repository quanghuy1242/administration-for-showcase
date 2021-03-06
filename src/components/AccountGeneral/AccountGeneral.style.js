import { mergeStyleSets } from 'office-ui-fabric-react';
import { Depths, MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    wrapper: {
      width: '100%',
      overflowY: 'scroll',
      height: 'calc(100vh - 50px - 2rem)',
      animation: MotionAnimations.slideDownIn,
      animationDuration: MotionDurations.duration3
    },
    mainInput: {
      // overflowY: 'scroll',
      // height: 'calc(100vh - 130px)',
      // paddingRight: '0.5rem'
    },
    imagePanel: {
      position: 'fixed'
    },
    imagePreview: {
      border: '6px solid #fff',
      boxShadow: Depths.depth8
    }
  })
}
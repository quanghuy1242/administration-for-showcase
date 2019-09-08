import { mergeStyleSets } from 'office-ui-fabric-react';
import { MotionAnimations, MotionDurations } from '@uifabric/fluent-theme';

export const getStyle = () => {
  return mergeStyleSets({
    wrapper: {
      width: '100%',
      animation: MotionAnimations.slideDownIn,
      animationDuration: MotionDurations.duration3
    }
  })
}
import { mergeStyleSets } from 'office-ui-fabric-react'

export const getStyle = () => {
  return mergeStyleSets({
    MainAppWrapper: {
      height: '100vh',
      overflowY: 'hidden'
    }
  })
}
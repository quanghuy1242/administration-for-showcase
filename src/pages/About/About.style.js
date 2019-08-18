import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    aboutWrapper: {
      // margin: '1rem'
      width: '100%'
    },
    headerText: {
      fontFamily: `'Fjalla One', sans-serif`
    }
  })
}
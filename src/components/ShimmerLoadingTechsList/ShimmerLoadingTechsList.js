import React from 'react';
import { Stack, Shimmer, ShimmerElementType } from 'office-ui-fabric-react';

export class ShimmerLoadingTechsList extends React.Component {
  render() {
    return (
      <Stack tokens={{ childrenGap: 15 }} style={{ margin: '1rem' }}>
        {[...Array(this.props.length)].map((v, i) => (
          <div key={i}>
            <Shimmer shimmerElements={[{ type: ShimmerElementType.line, height: 20 }]} />
          </div>
        ))}
      </Stack>
    );
  }
}
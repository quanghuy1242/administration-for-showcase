import React from 'react';
import { Stack, Shimmer } from 'office-ui-fabric-react';

export class ShimmerLoading extends React.Component {
  render() {
    return (
      <Stack tokens={{ childrenGap: 20 }} style={{ margin: '1rem' }}>
        {[...Array(this.props.length)].map((v, i) => (
          <div key={i}>
            <Stack tokens={{ childrenGap: 10 }}>
              <Shimmer />
              <Shimmer width="75%" />
            </Stack>
          </div>
        ))}
      </Stack>
    );
  }
}
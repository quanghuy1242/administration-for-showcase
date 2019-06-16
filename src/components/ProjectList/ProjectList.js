import React from 'react';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { getStyle } from './ProjectList.style';
import { Stack } from 'office-ui-fabric-react';
import { ShimmerLoading } from '../ShimmerLoading/ShimmerLoading';

export class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapperHeight: undefined,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ wrapperHeight: this.wrapper.clientHeight });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { projects, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        {this.state.wrapperHeight && this.state.isLoading
          ? <ShimmerLoading length={Math.floor(this.state.wrapperHeight / 58)} />
          : (
            <div className={classNames.projectsListWrapper} ref={ (wrapper) => this.wrapper = wrapper }>
              {projects.map(project => (
                <div
                  onClick={() => this.props.onSelectedProjectChanged(project._id)}
                  key={project._id}
                >
                  <ProjectItem
                    project={project}
                    selected={selected}
                    className={selected === project._id ? classNames.actived : ''}
                  />
                </div>
              ))}
            </div>
          )}
      </Stack>
    );
  }
}
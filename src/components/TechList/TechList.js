import React from 'react';
import { TechItem } from '../TechItem/TechItem';
import { getStyle } from './TechList.style';
import { Stack } from 'office-ui-fabric-react';
import { ShimmerLoadingTechsList } from '../ShimmerLoadingTechsList/ShimmerLoadingTechsList';
import { AppContext } from '../../context/AppContext';

export class TechList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapperHeight: undefined
    };
  }

  componentDidMount() {
    this.setState({ wrapperHeight: this.wrapper.clientHeight });
  }

  render() {
    const { techs, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        {this.state.wrapperHeight && !this.context.isTechLoaded
          ? <ShimmerLoadingTechsList length={Math.floor(this.state.wrapperHeight / 30)} />
          : (
            <div
              className={classNames.projectsListWrapper}
              ref={ (wrapper) => this.wrapper = wrapper }
            >
              {techs.map(tech => (
                <div
                  onClick={() => this.props.onSelectedTechChanged(tech.nameId)}
                  key={tech.nameId}
                >
                  <TechItem
                    tech={tech}
                    selected={selected}
                    className={selected === tech.nameId ? classNames.actived : ''}
                  />
                </div>
              ))}
            </div>
          )}
      </Stack>
    );
  }
}

TechList.contextType = AppContext;
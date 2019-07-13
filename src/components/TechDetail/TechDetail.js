import React from 'react';
import { Panel, PanelType, TextField, PrimaryButton, DefaultButton, Image } from 'office-ui-fabric-react';
import { getStyle } from './TechDetail.style';
import { AppContext } from '../../context/AppContext';
import { CategoryAPI } from '../../api/categories.api';

export class TechDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: {
        nameId: '',
        name: '',
        description: '',
        image: ''
      },
      hasLoaded: false
    };
  }

  async componentDidMount() {
    if (!this.props.isAdd) {
      if (!this.state.hasLoaded) {
        const tech = await CategoryAPI.getCategory(this.context.selectedTechId);
        this.setState({
          tech: tech,
          hasLoaded: true
        });
      }
    } else {
      this.setState({
        tech: {
          nameId: '',
          name: '',
          description: '',
          image: ''
        }
      });
    }
  }

  handleIdChanged = (event) => {
    this.setState(state => {
      state.tech.nameId = event.target.value;
      return state;
    })
  }

  handleNameChanged = (event) => {
    this.setState(state => {
      state.tech.name = event.target.value;
      return state;
    })
  }

  handleDesChanged = event => {
    this.setState(state => {
      state.tech.description = event.target.value;
      return state;
    })
  }

  handleImageUrlChanged = event => {
    this.setState(state => {
      state.tech.image = event.target.value;
      return state;
    })
  }
  
  handleSaveTech = async (tech) => {
    if (this.props.isAdd) {
      if (await this.context.handleAddNewTech(tech)) {
        this.props.onClosing();
      }
    } else {
      if (await this.context.handleEditTech(tech)) {
        this.props.onClosing();
      }
    }
  }
  
  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton
          style={{ marginRight: 8 }}
          onClick={() => this.handleSaveTech(this.state.tech)}
        >
          Save
        </PrimaryButton>
        <DefaultButton onClick={this.props.onClosing}>
          Close
        </DefaultButton>
      </div>
    );
  };

  render() {
    const classNames = getStyle();
    return (
      <Panel
        isOpen={this.props.isOpen}
        type={PanelType.medium}
        headerText="Technology Detail"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={this.handleRenderFooterContent}
      >
        <Image
          src={this.state.tech.image}
          alt="Image Preview"
          width="100%"
          className={classNames.imagePreview}
        />
        <TextField
          label="Identify Name"
          value={this.state.tech.nameId}
          onChange={this.handleIdChanged}
          readOnly={!this.props.isAdd}
        />
        <TextField
          label="Name of technologoy"
          value={this.state.tech.name}
          onChange={this.handleNameChanged}
        />
        <TextField
          label="Description"
          multiline={true}
          value={this.state.tech.description}
          onChange={this.handleDesChanged}
        />
        <TextField
          label="Image URL"
          value={this.state.tech.image}
          onChange={this.handleImageUrlChanged}
        />
      </Panel>
    );
  }
}

TechDetail.contextType = AppContext;
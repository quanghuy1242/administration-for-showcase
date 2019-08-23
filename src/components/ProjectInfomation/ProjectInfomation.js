import React from 'react';
import { getStyle } from './ProjectInfomation.style';
import { Stack, TextField, DatePicker, DayOfWeek, Text, Separator, Image, Icon, IconButton } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';

export class ProjectInfomation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrItemWidth: 0,
      scrItemHeight: 0,
      selectedScreenshot: 0,
      options: [],
      initialDisplayValue: '',
    }
  }

  componentDidMount() {
    const cfg = {
      padding: 8,
      gap: 10,
      itemLength: 6
    }
    const itemWidth = (this.screenshotWrapper.clientWidth - 2 * cfg.padding - 5 * cfg.gap) / cfg.itemLength;
    this.setState({
      scrItemWidth: Math.floor(itemWidth),
      scrItemHeight: Math.floor(itemWidth * 9 / 16)
    });
  }

  getOptions = () => {
    if (this.state.options.length > 0) {
      return this.state.options;
    }

    const options = this.context.techs.map(tech => ({ key: tech.nameId, text: tech.name }));
    
    this.setState({
      options: options,
      selectedOptionKey: this.context.selectedProjectDetail.technology.nameId,
      initialDisplayValue: undefined
    });

    return options;
  }

  onComboboxChanged = (event, option, index, value) => {
    if (option) {
      this.setState({
        selectedOptionKey: option.key
      });
    }
  }

  onProjectNameChange = (event) => {
    this.context.handleLocalModified('name', event.target.value);
  }

  onProjectDateChange = (date) => {
    this.context.handleLocalModified('date', date);
  }

  onProjectSiteChange = (event) => {
    this.context.handleLocalModified('url', event.target.value);
  }

  onProjectBrefDescriptionChange = (event) => {
    this.context.handleLocalModified('briefDescription', event.target.value);
  }

  onProjectScreenshotChange = (event) => {
    let newScreenshot = JSON.parse(JSON.stringify(this.context.selectedProjectDetail.screenshots));
    newScreenshot[this.state.selectedScreenshot] = event.target.value;
    this.context.handleLocalModified('screenshots', newScreenshot);
  }

  render() {
    const classNames = getStyle({ image: this.context.selectedProjectDetail.image });
    return (
      <Stack className={classNames.wrapper}>
        <Stack.Item>
          <Text variant="xxLarge">Infomations</Text>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal tokens={{ childrenGap: 40 }}>
            <Stack.Item grow disableShrink>
              <Stack className={classNames.leftWrapper}>
                <TextField
                  label="Project's name"
                  value={this.context.selectedProjectDetail.name}
                  onChange={this.onProjectNameChange}
                />
                <DatePicker
                  firstDayOfWeek={DayOfWeek.Sunday}
                  label="Date created"
                  value={new Date(this.context.selectedProjectDetail.date) || ''}
                  onSelectDate={this.onProjectDateChange}
                />
                <TextField
                  label="Project's website"
                  value={this.context.selectedProjectDetail.url}
                  onChange={this.onProjectSiteChange}
                />
                <TextField
                  label="Repository"
                />
                {/* <ComboBox
                  allowFreeform={true}
                  label="Technology"
                  selectedKey={this.state.selectedOptionKey}
                  autoComplete="on"
                  options={this.state.options}
                  onChange={this.onComboboxChanged}
                  onResolveOptions={this.getOptions}
                  text={this.state.initialDisplayValue}
                /> */}
                <TextField
                  multiline={true}
                  label="Bref Description"
                  resizable={false}
                  value={this.context.selectedProjectDetail.briefDescription}
                  onChange={this.onProjectBrefDescriptionChange}
                />
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Stack className={classNames.rightWrapper}>
                <div className={classNames.imgPreview}>
                  <IconButton
                    iconProps={{ iconName: 'Edit' }}
                    className={classNames.editImage}
                  />
                </div>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Separator />
        <Stack.Item>
          <Text variant="xxLarge">Screenshots</Text>
        </Stack.Item>
        <Stack.Item>
          <Stack>
            <Stack.Item grow>
              <div ref={screenshotWrapper => this.screenshotWrapper = screenshotWrapper}>
                <Stack horizontalAlign="center" tokens={{ childrenGap: 10 }}>
                  <Image
                    src={
                      this.context.selectedProjectDetail.screenshots[this.state.selectedScreenshot]
                      || 'https://via.placeholder.com/1920x1080'
                    }
                    alt="Primary Image"
                    width={500}
                  />
                  <TextField
                    placeholder="Image Url"
                    style={{ width: 500 }}
                    value={this.context.selectedProjectDetail.screenshots[this.state.selectedScreenshot]}
                    onChange={this.onProjectScreenshotChange}
                  />
                  <Stack horizontal tokens={{ childrenGap: 10 }}>
                    {[...Array(6)].map((v, i) => (
                      <Stack
                        style={{
                          width: this.state.scrItemWidth,
                          height: this.state.scrItemHeight,
                          border: `2px solid ${i === this.state.selectedScreenshot ? 'rgba(0, 0, 0, 0.55)' : 'transparent'}`,
                          borderRadius: 2,
                          transition: '0.2s'
                        }}
                        key={i}
                        horizontalAlign="center"
                        verticalAlign="center"
                        onClick={() => { this.setState({ selectedScreenshot: i }) }}
                      >
                        {this.context.selectedProjectDetail.screenshots[i]
                          ? <Image 
                              src={this.context.selectedProjectDetail.screenshots[i]}
                              alt={'hmmm'}
                              width='100%'
                              height='100%'
                            />
                          : <Icon iconName="Add" />}
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </div>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}

ProjectInfomation.contextType = AppContext;
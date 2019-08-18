import React from 'react';
import { getStyle } from './ProjectInfomation.style';
import { Stack, TextField, ComboBox, DatePicker, DayOfWeek, Text, Separator, Image, Icon, IconButton } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';

export class ProjectInfomation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrItemWidth: 0,
      scrItemHeight: 0,
      selectedScreenshot: 0
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
                <TextField label="Project's name" value={this.context.selectedProjectDetail.name} />
                <DatePicker
                  firstDayOfWeek={DayOfWeek.Sunday}
                  label="Date created"
                  value={new Date(this.context.selectedProjectDetail.date) || ''}
                />
                <TextField label="Project's website" value={this.context.selectedProjectDetail.url} />
                <TextField label="Repository" />
                <ComboBox allowFreeform={true} label="Technology" />
                <TextField
                  multiline={true}
                  label="Bref Description"
                  resizable={false}
                  value={this.context.selectedProjectDetail.description}
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
                    src={this.context.selectedProjectDetail.screenshots[this.state.selectedScreenshot]}
                    alt="Primary Image"
                    width={500}
                  />
                  <TextField
                    placeholder="Image Url"
                    style={{ width: 500 }}
                    value={this.context.selectedProjectDetail.screenshots[this.state.selectedScreenshot]}
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
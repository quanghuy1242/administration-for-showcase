import React from 'react';
import { Stack, Text, css, HoverCard, HoverCardType, DirectionalHint, DocumentCard, DocumentCardPreview, ImageFit } from 'office-ui-fabric-react';
import { getStyle } from './ProjectItem.style';

export class ProjectItem extends React.Component {
  render() {
    const { project, className } = this.props;
    const classNames = getStyle();
    return (
      <HoverCard
        type={HoverCardType.plain}
        plainCardProps={{
          onRenderPlainCard: () => {
            return (
              <div className={classNames.hoverCard}>
                <DocumentCard>
                  <DocumentCardPreview
                    previewImages={[{
                      name: project.name,
                      previewImageSrc: project.image,
                      imageFit: ImageFit.cover,
                      height: 150
                    }]}
                  />
                  <Stack style={{ padding: '0.5rem' }}>
                    <Text variant='xLarge'>{project.name}</Text>
                    <Text>{project.briefDescription}</Text>
                  </Stack>
                </DocumentCard>
              </div>
            );
          },
          directionalHint: DirectionalHint.rightTopEdge
        }}
      >
        <Stack className={css(className, classNames.projectItem)} verticalAlign="center">
          <Text variant="medium" className={classNames.projectItem_Header} nowrap>{project.name}</Text>
          <Text variant="medium" className={classNames.projectItem_Subheader}>{new Date(project.date).toLocaleDateString()}</Text>
        </Stack>
      </HoverCard>
    );
  }
}
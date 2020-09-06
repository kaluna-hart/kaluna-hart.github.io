import React from 'react';
import ProfileHeader from '../../organisms/ProfileHeader';
import ProfileContent from '../../organisms/ProfileContent';

export type TProfileTemplateProps = React.ComponentProps<typeof ProfileContent>;

export const ProfileTemplate: React.FCX<TProfileTemplateProps> = (props) => {
  const { sections } = props;
  return (
    <React.Fragment>
      <ProfileHeader />
      <ProfileContent sections={sections} />
    </React.Fragment>
  );
};

export default ProfileTemplate;

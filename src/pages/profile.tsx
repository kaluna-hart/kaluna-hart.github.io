import React from 'react';
import ProfileTemplate from '../templates/ProfileTemplate';
import aboutMeData from '../molecules/ProfileSection/data/about-me';
import currentData from '../molecules/ProfileSection/data/current';
import skillData from '../molecules/ProfileSection/data/skill';
import historyData from '../molecules/ProfileSection/data/history';

const sections: typeof aboutMeData[] = [aboutMeData, currentData, historyData, skillData];

export const Profile: React.FCX = () => {
  return <ProfileTemplate sections={sections} />;
};

export default Profile;

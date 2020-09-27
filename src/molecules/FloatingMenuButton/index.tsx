import React from 'react';
import { IconMenu, IconButton } from 'sancho';

export const FloatingMenuButton: React.FCX = (props) => <IconButton label="Menu" {...props} icon={<IconMenu />} />;

export default FloatingMenuButton;

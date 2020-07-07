
import React from 'react';
import { isMobile } from './Utils';

function Video({ src }) {
    return (<iframe title="Goal Kicks" frameBorder="0" width={isMobile() ? '100%' : '640'} height={isMobile() ? '90%' : '360'} src={src} allowFullScreen />);
};

export default Video;
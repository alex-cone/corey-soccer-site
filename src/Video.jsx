
import React from 'react';
import { isMobile } from './Utils';

function Video({ src }) {
    return (<iframe title={src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" width={isMobile() ? '100%' : '640'} height={isMobile() ? '90%' : '360'} src={src} allowFullScreen />);
};

export default Video;
import React from 'react';
import videojs from 'videojs';
import './style.less';

export default class extends React.Component {
    componentDidMount() {
        var player = videojs('my-player');
    }

    render() {
        return (
            <div className="main-container scene video">
                <div className="video-wrapper">
                    <video id="my-player" className="video-js" controls preload="auto" poster="//vjs.zencdn.net/v/oceans.png" data-setup="{}">
                        <source src="https://node.imgio.in/demo/birds.m3u8" type="application/x-mpegURL"></source>
                        {/* <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source> */}
                        {/* <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source> */}
                    </video>
                </div>
            </div>
        );
    }
}

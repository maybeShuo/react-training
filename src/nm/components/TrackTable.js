import React, { Component } from 'react';

import TimeUtil from "../../base/util/TimeUtil";

export default class TrackTable extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    render()
    {
        const tracks = this.props.selectedPlayList ? this.props.selectedPlayList.tracks : [];

        return (
            <div className="nm-track-table">
                <table className="track-table">
                    <thead>
                        <tr>
                            <td className="name">音乐标题</td>
                            <td className="artists">歌手</td>
                            <td className="album">专辑</td>
                            <td className="time">时长</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map(item => {
                            let id = item.id;
                            let duration = 0;
                            if (item.lMusic)
                            {
                                duration = item.lMusic.playTime;
                            }
                            else
                            {
                                duration = item.duration;
                            }
                            let time = TimeUtil.formatPlayTime(duration);
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.artists.map(artist => artist.name).join(",")}</td>
                                    <td>{item.album.name}</td>
                                    <td>{time}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

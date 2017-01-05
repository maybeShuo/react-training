import React, { Component } from 'react';

export default class PlayList extends Component {

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
        const { playlists } = this.props;
        console.log("playlist", playlists);

        return (
            <ul className="nm-play-list">
                {playlists.map((item, index) => {
                    return (<li key={item.id}>{item.name}</li>);
                })}
            </ul>
        );
    }
}

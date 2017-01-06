import React, { Component } from 'react';

import ServiceClient from "../../base/service/ServiceClient";

import PlayList from "./PlayList";
import TrackTable from "./TrackTable";

export default class App extends Component {

    constructor (props) {
        super(props);

        this.handlePlayListClick = this.handlePlayListClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        playlists: [],
        selectedPlayList: null
    }

    async componentDidMount()
    {
        const result = await ServiceClient.getInstance().getUserPlayLists("78843035");
        this.setState({
            playlists: result
        });
    }

    async handlePlayListClick(id)
    {
        const result = await ServiceClient.getInstance().getPlayListDetail(id);
        this.setState({
            selectedPlayList: result
        });
    }

    render()
    {
        const { playlists, selectedPlayList } = this.state;
        return (
            <div className="nm-app">
                <header>
                    <div className="logo"></div>
                    <h1>网易云音乐</h1>
                </header>
                <main>
                    <aside><PlayList playlists={playlists} onClick={this.handlePlayListClick} /></aside>
                    <section><TrackTable selectedPlayList={selectedPlayList} /></section>
                </main>
                <footer></footer>
            </div>
        );
    }

}

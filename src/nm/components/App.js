import React, { Component } from 'react';

import ServiceClient from "../../base/service/ServiceClient";

import PlayList from "./PlayList";

export default class App extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        playlists: []
    }

    async componentDidMount()
    {
        const result = await ServiceClient.getInstance().getUserPlayLists("78843035");
        this.setState({
            playlists: result
        });
    }

    render()
    {
        const { playlists } = this.state;
        return (
            <div className="nm-app">
                <header>
                    <div className="logo"></div>
                    <h1>网易云音乐</h1>
                </header>
                <main>
                    <aside><PlayList playlists={playlists} /></aside>
                    <section></section>
                </main>
                <footer></footer>
            </div>
        );
    }

}

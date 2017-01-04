import React, { Component } from 'react';

export default class App extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    async componentDidMount()
    {
        const result = await this.getPlayLists();
        const test = await this.testPromise();
        console.log(test);
        console.log(result);
    }

    render()
    {
        return (
            <div className="nm-app">Netease Music</div>
        );
    }

    async getPlayLists()
    {
        let res = null;
        try {
            res = await $.ajax({
                url: `/api/user/playlist/`,
                data: {
                    uid: "78843035",
                    limit: 1000,
                    offset: 0
                }
            });
        }
        catch (e)
        {
            throw e;
        }

        if (res.code === 200)
        {
            return res.playlist;
        }
        else
        {
            console.log("Response with error code:" + res.code);
        }
    }

    testPromise()
    {
        return new Promise((resolve, reject) => {
            resolve("promise");
        });
    }
}

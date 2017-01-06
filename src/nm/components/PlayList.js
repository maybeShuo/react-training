import React, { Component } from 'react';

export default class PlayList extends Component {

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        selectedId: null
    }

    componentWillReceiveProps(nextProp)
    {
        if (this.state.selectedId === null && nextProp.playlists.length > 0)
        {
            this.handleClick(nextProp.playlists[0].id);
        }
    }

    componentDidMount()
    {

    }

    handleClick(id)
    {
        if (id !== this.state.selectedId)
        {
            this.setState({
                selectedId: id
            });
            this.props.onClick(id);
        }
    }

    render()
    {
        const { playlists } = this.props;
        const selectedId = this.state.selectedId;

        return (
            <ul className="nm-play-list">
                {playlists.map((item, index) => {
                    let selectedClass = "";
                    selectedClass = item.id === selectedId ? "selected" : "";
                    return (
                    <li key={item.id} onClick={() => this.handleClick(item.id)} className={selectedClass}>
                        <span className="iconfont icon-playlist"></span>
                        <span className="text">{item.name}</span>
                    </li>);
                })}
            </ul>
        );
    }
}

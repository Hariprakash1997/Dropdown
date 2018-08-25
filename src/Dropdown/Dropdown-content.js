import React from 'react';

import onClickOutside from 'react-onclickoutside';

class DropdownContent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            listOpen: false,
            headerTitle: "Countries"
        }
    }

    handleClickOutside = () => {
        this.setState({
            listOpen: false
        })
    }

    toggleList = () => {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    clickItem = (item) => {
        this.setState({
            headerTitle: item
        })
    }

    render(){

        const {list} = this.props;
        const{listOpen, headerTitle} = this.state;

        return(
            <div className="dd-wrapper" onClick={ () => this.toggleList() }>
                <div className="dd-header">{
                    headerTitle
                }</div>
                {
                    listOpen ? <ul className="dd-list">
                    {
                        list.map(item => 
                        <li onClick={() => this.clickItem(item.title)} className="dd-list-item" key={item.id}>{item.title}</li>
                    )
                    }
                </ul> : null
                }
            </div>
        )
    }
}

export default onClickOutside(DropdownContent);
import React from 'react';

import DropdownContent from './Dropdown-content';

class Dropdown extends React.Component{

    constructor(){
        super();
        this.state = {
            location:[
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                  id: 1,
                  title: 'Dublin',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'California',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'London',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 4,
                  title: 'Tokyo',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 5,
                  title: 'Brazil',
                  selected: false,
                  key: 'location'
                }
            ]
        }
    }

    render(){
        return(
            <DropdownContent
            title="Select Location"
            list={this.state.location} />
        )
    }
}

export default Dropdown;
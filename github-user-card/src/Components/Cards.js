import React from 'react';

import Card from './Card';


class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: []
        }
    }

    render() {
        return(
            <div>
                <h3>Followers</h3>
            {
                this.props.users.map(user => {
                    return(
                        <Card user={user}/>
                    )
                })
            }
            </div>
        )
    }
}

export default Cards;
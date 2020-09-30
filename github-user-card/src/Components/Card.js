import React from 'react';




class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
              <div className="img-container"><img alt='text' src={this.props.user.avatar_url} />
              <div className="text-container">
                <h3>{this.props.user.name}</h3>
                <p>Bio: {this.props.user.bio}</p>
                <p>Location: {this.props.user.location}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
              </div>
              </div>
        )
    }
}

export default Card;
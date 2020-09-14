import React, { Component } from 'react'

class ShowUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token: this.props.location.pathname.split('=')[1].split('&')[0],
            refresh_token: this.props.location.pathname.split('=')[2]
        }

        localStorage.setItem('access_token', this.state.access_token);
        localStorage.setItem('refresh_token', this.state.refresh_token);

    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
                <a href="/">Back to home</a>
            </div>
 
        )
   }

}

export default ShowUserPage;
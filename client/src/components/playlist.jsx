import React, { Component } from 'react';
import SpotifyServiceApi from '../api/SpotifyServiceApi';
import { Accordion, Card, Button } from 'react-bootstrap';

class PlaylistPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            list: []
        }
    }

    componentDidMount() {
        SpotifyServiceApi.getAllPlaylists(localStorage.getItem('access_token'))
            .then(data => {
                this.setState({
                    data: data,
                    list: data.items
                })
                console.log(this.state.data.items);
            })
    }
 
    render() {
        return(
            <div className="container">
                <h1>Playlist page</h1>
                    <Accordion defaultActiveKey="0">
                    {this.state.list.map((playlist, index) => 
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index+1}>
                                {playlist.name}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index+1}>
                            <Card.Body>
                                <img src={playlist.images[1].url} />
                                <p>Total number of tracks: {playlist.tracks.total}</p>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    )}
                    </Accordion>
                <a href="/">Back to home</a>
            </div>
        )
   }
}

export default PlaylistPage;
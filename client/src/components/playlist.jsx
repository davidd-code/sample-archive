import React, { Component } from 'react';
import SpotifyServiceApi from '../api/SpotifyServiceApi';
import { CardGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/playlist.css';

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
        return (
            <div className="container">
                <h1>Playlists</h1>
                {/* <CardGroup> */}
                <Container id="card-container">
                    <Row>
                    {this.state.list.map((playlist, index) =>
                        <Col xl={3} l={4} md={4} className="columns">
                            <Card style={{width: '20rem'}}>
                                <Card.Img variant="top" src={playlist.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{playlist.name}</Card.Title>
                                    <Card.Text>
                                        <a href={"/playlist/" + playlist.id}>Go to playlist</a>
                                        <p>Total number of tracks: {playlist.tracks.total}</p>
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    )}
                    </Row>
                </Container>
                {/* </CardGroup> */}
                <a href="/">Back to home</a>
            </div>
        )
    }
}

export default PlaylistPage;
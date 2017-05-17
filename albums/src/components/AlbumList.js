import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount() {
    console.log('Component mounted in AlbumList');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      this.setState({ albums: responseData });
    });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
      return (
      <ScrollView>
        {this.state.albums.length !== 0 ?
          this.renderAlbums() :
          <Text>Fetching album data...</Text>
        }
      </ScrollView>
    );
  }
}

export default AlbumList;

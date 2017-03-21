import React, { Component } from 'react';
//Import { ScrollView } to enable scrolling
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  //Axios API makes HTTP get request - Refactored
  //setState user triggered event can only be used with class based comonents
  componentWillMount() {
    axios.get('https:rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
}

//Creates albums detail component
//Pulls album data out of API array
renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  );
}

render() {
    console.log(this.state);
//Content within the tags "<ScrollView></ScrollView>" are now scrollable
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

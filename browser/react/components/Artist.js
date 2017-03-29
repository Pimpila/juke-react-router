import React from 'react';
import axios from 'axios';
import Songs from './Songs';

class Artist extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.selectArtist(this.props.params.artistId)
  }

  render() {
    console.log(this.props)
    return (
      <div>
          <div>
            <h3>{this.props.artist && this.props.artist.name}</h3>
            <h4>ALBUMS</h4>
              { this.props.artistAlbums &&
                this.props.artistAlbums.map( album => {
                  return (
                  <div className="col-xs-4" key={album.id}>
                  <h3>{ album.name}</h3>
                  <img src={ album.imageUrl} className="img-thumbnail" />
                  </div>
                  )

                })

              }
              <div>
              <h4>SONGS</h4>
                { this.props.artistAlbums && this.props.artistAlbums.map(album => {
                  return (
                    <div key={album.id}>
                    <Songs
                    songs={album.songs}
                    currentSong={this.props.currentSong}
                    isPlaying={this.props.isPlaying}
                    toggleOne={this.props.toggle} />
                  </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    )
  }
}

export default Artist;

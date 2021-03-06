import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
      this.props.selectAlbum(this.props.params.albumId)
  }

  render() {
    return (
      <div className="album">
        <div>
          {this.props.album && (
            <div>
              <h3>{ this.props.album.name}</h3>
              <img src={ this.props.album.imageUrl} className="img-thumbnail" />
              <Songs
                songs={this.props.album && this.props.album.songs}
                currentSong={this.props.currentSong}
                isPlaying={this.props.isPlaying}
                toggleOne={this.props.toggleOne} />
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default Album;

import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      //ATTENTION
      //THE song IN THE PARAMITTER  IS THE CURRENT SONG
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)} //ATTENTION   WHEN A USER SELECT  THE BUTTON THIS FUNCTION WILL BE CALLED AND
              //IT WILL UPDATE THE THE STATE WITH THE CURRENT SELECTED SONG
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList></SongList>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.song }; //ATTENTION
};

export default connect(mapStateToProps, { selectSong })(SongList); //ATTENTION

// export default SongList;

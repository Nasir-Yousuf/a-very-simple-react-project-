import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  console.log(props);
  return <div>song details</div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);

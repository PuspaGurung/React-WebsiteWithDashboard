import React, { Component } from "react";
import { firebase } from "./../../firebase";
import FileUploader from "react-firebase-file-uploader";
import CircularProgress from "@material-ui/core/CircularProgress";

class Fileuploader extends Component {
  state = {
    name: "",
    isUploading: false,
    fileURL: ""
  };
  handleUploadStart = () => {
    this.setState({
      isUploading: true
    });
  };
  handleUploadError = () => {
    this.setState({
      isUploading: false
    });
  };

  handleUploadSuccess = filename => {
    console.log(filename);
    this.setState({
      name: filename,
      isUploading: false
    });

    // get recently upload image-url from the firebase storage
    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          fileURL: url
        });
      });

    // pass argument filename to storeFilename() function at addEditPlayers.js
    this.props.filename(filename);
  };

  // get default image:: edit player
  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg
      });
    }
    // getDerivedStateFromProps() needs to return something
    return null;
  }
  // Remove image
  uploadAgain = () => {
    this.setState({
      name: "",
      isUploading: false,
      fileURL: ""
    });
    this.props.resetImage();
  };
  render() {
    return (
      <div>
        {!this.state.fileURL ? (
          <div>
            <div className="label_input">{this.props.tag}</div>
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref(this.props.dir)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </div>
        ) : null}
        {this.state.isUploading ? (
          <div className="progress">
            <CircularProgress
              style={{
                color: "#98c6e9"
              }}
              thickness={7}
            />
          </div>
        ) : null}
        {this.state.fileURL ? (
          <div>
            <div className="uploaded-player-img" style={{ width: "200px" }}>
              <img src={this.state.fileURL} alt="player" />
            </div>
            <button onClick={this.uploadAgain}>Remove</button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Fileuploader;

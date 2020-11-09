import React, { Component } from "react";
import { ReactMic } from "react-mic";

export default class Mic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      recorderData: {
        blobURL: null,
      },
    };
  }

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };
  
  discardRecording=()=>{
    this.setState({ recorderData: {
        blobURL: null,
      } });
  }

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = (recordedBlob) => {
    // console.log("recordedBlob is: ", URL.createObjectURL(recordedBlob));
    this.setState({
      recorderData: recordedBlob,
    });
  };

  render() {
    return (
      <div>
        {console.log("recorderData: ", this.state.recorderData.blobURL)}
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={this.startRecording} type="button">
          Start
        </button>
        <button onClick={this.stopRecording} type="button">
          Stop
        </button>
        <button onClick={this.discardRecording} type="button">
          Discard
        </button>

        <h1>Audio Clip Recorderd</h1>
        {this.state.recorderData.blobURL ? (
          <audio controls>
            <source src={this.state.recorderData.blobURL} type="audio/mp4" />
          </audio>
        ) : (
          ""
        )}
      </div>
    );
  }
}

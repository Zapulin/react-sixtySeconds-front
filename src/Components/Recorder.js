import React, { useState, useEffect } from "react";
import MicRecorder from 'mic-recorder-to-mp3';

//API
import { publishPostToBackend } from '../Services/Api';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function RecorderPublish(props) {

    /*
     * declare states that will enable and disable
     * buttons that controls the audio widget
     */
    const [audio, setAudio] = useState({
      isRecording: false,
      blobURL: '',
      blobObj: '',
      isBlocked: false,
      isRecordingStp: false,
    })

   useEffect(() => {
    //Prompt the user for permission to allow audio device in browser
    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
     );

     //Detects the action on user click to allow or deny permission of audio device
     navigator.getUserMedia({ audio: true },
      () => {
        //console.log('Permission Granted');
        setAudio({ isBlocked: false });
      },
      () => {
        //console.log('Permission Denied');
        setAudio({ isBlocked: true })
      },
    );
  }, []);
 
  const start = () => {
    /*
     * If the user denys permission to use the audio device
     * in the browser no recording can be done and an alert is shown
     * If the user allows permission the recoding will begin
     */
    if (audio.isBlocked) {
      alert('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setAudio({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  }

  const stop = () => {
     /*
     * Once the recoding starts the stop button is activated
     * Click stop once recording as finished
     * An MP3 is generated for the user to download the audio
     */
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        setAudio({ blobURL: blobURL, blobObj: blob, isRecording: false, isRecordingStp: true });
      }).catch((e) => console.log(e));
  };

  const reset = () => {
      /*
       * The user can reset the audio recording
       * once the stop button is clicked
       */
      document.getElementsByTagName('audio')[0].src = '';
      setAudio({ isRecordingStp: false });
  };

  const publish = () => {
    const date = new Date();
    const dtstring = date.getFullYear()
    + '-' + (date.getMonth()+1)
    + '-' + date.getDate()
    + ' ' + date.getHours()
    + ':' + date.getMinutes()
    + ':' + date.getSeconds();
    
    const data = {
      userId: 4,
      visibility: "Public",
      file: audio.blobObj,
      title: props.title,
      creationDate: dtstring,
      category: props.category
    }

    publishPostToBackend(data);
  
  }

  return(
    <div className="d-flex justify-content-center mt-5">
        <div className="d-flex gap-2 align-items-center">
          <button
            className="btn m-2 fw-bold text-light"
            style={{ backgroundColor: "#403D3D" }}
            onClick={start}
            disabled={audio.isRecording}
          >
            <i className="fa fa-microphone me-2"></i>Record
          </button>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <button
            className="btn m-2 fw-bold text-light"
            style={{ backgroundColor: "#403D3D" }}
            onClick={stop}
            disabled={!audio.isRecording}
          >
            <i className="fa fa-stop me-2"></i>Stop
          </button>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <button
            className="btn m-2 fw-bold text-light"
            style={{ backgroundColor: "#403D3D" }}
            onClick={reset}
            disabled={!audio.isRecordingStp}
          >
            <i className="fa fa-rotate-right me-2"></i>Reset
          </button>
        </div>
        <audio src={audio.blobURL} controls="controls" />
        <div className="d-flex gap-2 align-items-center">
          <button
            className="btn m-2 fw-bold text-light"
            style={{ backgroundColor: "#403D3D" }}
            onClick={publish}
            disabled={!audio.isRecordingStp}
          >
            <i className="fa fa-paper-plane me-2"></i>Publish
          </button>
        </div>
      </div>
  );
}

export default RecorderPublish;
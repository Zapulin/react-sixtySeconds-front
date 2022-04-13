// import React, { Component } from 'react'
// import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

// export default class Recorder extends Component {


//     constructor(props) {
//         super(props)
     
//         this.state = {
//           recordState: null,
//           audioData: null
//         }
//       }
     
//       start = () => {
//         this.setState({
//           recordState: RecordState.START
//         })
//       }
     
//       stop = () => {
//         this.setState({
//           recordState: RecordState.STOP
//         })
//       }
     
//       //audioData contains blob and blobUrl
//       onStop = (audioData) => {
//         this.setState({
//             audioData: audioData.url
//           })
//         console.log('audioData', audioData)
//         console.log(audioData.url)
//       }
     
//       render() {
//         const { recordState } = this.state
     
//         return (
//           <div>
//             <AudioReactRecorder state={recordState} onStop={this.onStop} />
//             <button onClick={this.start}>Start</button>
//             <button onClick={this.stop}>Stop</button>
//             <audio controls>
//                 <source src={this.audioData} type="audio/wav"/>
//             </audio>
//           </div>
//         )
//       }
// }

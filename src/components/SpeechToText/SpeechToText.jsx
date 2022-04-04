import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechToText() {
  
    const { transcript, resetTranscript, listening } = useSpeechRecognition();

    
    function startSpeaking() {
        SpeechRecognition.startListening({ continuous: true })
    }

    function resetSpeech() {
      resetTranscript();
      
    }




    return (
    <div>
        <button onClick={startSpeaking}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetSpeech}>Reset</button>
        <p>{transcript}</p>
        <p>{listening ? 'Listening...' : 'Not listening'}</p>
    </div>
  )
}

export default SpeechToText
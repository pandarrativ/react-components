# Audio Button

This component is a button which allows users to record his speaking and get corresponding text. 

## Dependencies
```shell
npm install --save react-speech-recognition

```



## How to use
First, add the icons and `SpeechButton.jsx` into your project folder.


Here is an example of using this component in you code.
```javascript
import React, { useState } from 'react';
import SpeechButton from './SpeechButton'; // Adjust the import path based on your file structure

const MyPage = () => {
  const [transcript, setTranscript] = useState('');

  const handleTranscript = (text) => {
    setTranscript(text);
  };

  return (
    <div>
      <h1>Speech to Text Demo</h1>
      <SpeechButton onTranscript={handleTranscript} />  
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default MyPage;

```


## Custimization
set language
```
recognition.lang = 'en-US';
```

import React from 'react';

import './FaceDetection.css'

const FaceDetection = () => {
    return(
        <div className='facedetection'>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit }  />
            <FaceRecognition box={box} imageURL={imageURL}/>
        </div>
    )
}

export default FaceDetection;
import React from 'react';

import './FoodDetection.css'

const FoodDetection = () => {
    return(
        <div className='fooddetection'>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            {/* <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit }  /> */}
            {/* <FaceRecognition box={box} imageURL={imageURL}/> */}
        </div>
    )
}

export default FoodDetection;
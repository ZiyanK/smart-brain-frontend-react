import React from 'react';

import './ApparelDetection.css'

const ApparelDetection = () => {
    return(
        <div className='appareldetection'>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            {/* <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit }  /> */}
            {/* <FaceRecognition box={box} imageURL={imageURL}/> */}
        </div>
    )
}

export default ApparelDetection;
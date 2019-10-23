import React from 'react';

const ImageDisplay = ({imageUrl}) => {
    return(
        <div className='center'>
            <img src={imageUrl} alt='' style={{'height':' 200px'}}/>
        </div>
    );
}

export default ImageDisplay;
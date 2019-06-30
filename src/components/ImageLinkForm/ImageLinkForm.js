import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange,onButtonSubmit }) => {
    return(
        <div>
            <p>
                {'This magic brain will detect faces in your pictures. Give it an image.'}
            </p>
            <div className='center'>
              <div className='center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple' onClick={onButtonSubmit}> Detect </button>
              </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
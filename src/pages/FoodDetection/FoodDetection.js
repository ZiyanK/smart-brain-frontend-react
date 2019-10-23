import React from 'react';

import './FoodDetection.css'
import FoodImageLinkForm from '../../FoodImageLinkForm/FoodImageLinkForm';
import FoodItem from '../../components/FoodItem/FoodItem';

class FoodDetection extends React.Component {
    constructor() {
        super();
        this.state=initialState;
    }
    
    onInputChange = (event) => {
        this.setState({input: event.target.value});
        console.log(event.target.value);
    }
    
      onButtonSubmit = () => {
        
        this.setState({imageUrl: this.state.input})
        app.models.predict(Clarifai.FOOD_MODEL, this.state.imageUrl).then(
        function(response) {
          var i;
          for(i=0;i<response.rawData.outputs[0].data.concepts.length;i++)
           {
             itemsToShow.push(JSON.stringify(response.rawData.outputs[0].data.concepts[i].name))
           }
          
           console.log(itemsToShow);
        });
    }

    
    render() {
        return(
            <div className='fooddetection'>
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries} />
                <FoodImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
                <FoodItem itemsToShow = {itemsToShow} />
                {itemsToShow=[]}
            </div>
        )
    }
}

export default FoodDetection;
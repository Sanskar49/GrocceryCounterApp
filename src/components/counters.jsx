import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, onIncrement, onDelete, counters} = this.props  
        console.log();
        return (
        <div>
            <button
            onClick={onReset}
             className="btn btn-primary btn-sm m-2">Reset</button>
             <br />           
            {counters.map(counter => (
            <Counter                                                 //Counter component raises the Delete event and
            key={counter.id}                                        
            onDelete={onDelete}                          //this line bubbles that event to the parent which is app now
            onIncrement={onIncrement}
            counter = {counter}
            />
            ))}
        </div>
    );
    }
}
 
export default Counters;
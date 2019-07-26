import React, {Component} from 'react';
import Lista from './Lista';

class Denilson extends Component {
    render() {
      return (

        <div>
        <button className="square" onClick={() => alert('click')}>
          {this.props.value}
        </button>

        <Lista></Lista>
        </div>

      );
    }
   }

   export default Denilson;
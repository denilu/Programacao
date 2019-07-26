import React, {Component} from 'react';

class Denilson extends Component {
    render() {
      return (
        <button className="square" onClick={() => alert('click')}>
          {this.props.value}
        </button>
      );
    }
   }

   export default Denilson;
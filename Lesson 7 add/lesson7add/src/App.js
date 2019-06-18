import React from 'react';
import dbService from './services/service';

export default class App extends React.Component {
  constructor() {
    super();
    // this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    
    const db = new dbService();
    db.getResource()
      // .then(res => res.json())
      // .then(res => console.log(res.coffee));

      return db.getResource();
  }
  
  render() {
    return (
      <ul>
        test
      </ul>
    )
  }

}

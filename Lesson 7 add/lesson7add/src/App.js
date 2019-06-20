import React from 'react';
import dbService from './services/service';

export default class App extends React.Component {
  constructor() {
    super();

    this.db = new dbService();
    
    this.state = {
      bestsellers: null,
      coffee: null,
      goods: null
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return this.db.getBestsellers();
  }
  
  render() {

    let result = this.getData();
    for (let item in result) {
      return (
        <ul>
          <li>Name: {result[item].name}</li>
          <li>
            <img src={result[item].url} alt="coffee"></img>
          </li>
          <li>Price: {result[item].price}</li>
        </ul>
      )
    }

    return (
      <>
        {result}
      </>
    )

  }

}

import React from 'react';
import dbService from './services/service';

export default class App extends React.Component {
  constructor() {
    super();

    this.db = new dbService().getResource();
    
    this.state = {
      bestsellers: null,
      coffee: null,
      goods: null
    }
  }

  componentDidMount() {
    
    const db = new dbService();
      // .then(res => res.json())
      // .then(res => console.log(res.coffee));

    db.getResource();
  }

  getData(value) {
    let data = this.db.bestsellers[0].name;
    // if (value === 'bestsellers') {
    //   for (let key in this.db.bestsellers)
    //   this.db.bestsellers.forEach(element => {
    //     data = [...this.db.bestsellers]
    //   });
    // }
    // else if (value === 'coffee') {
    //   this.db.coffee.forEach(element => {
    //     data += element.name
    //   });
    // }
    // console.log(data);
    return data;
  }
  
  render() {
    return (
      <>
        <div>
        <span>Random coffee!</span>
          <ul>
            <li>Name: {this.db.bestsellers[0].name}</li>
            <li>
              <img src={this.db.bestsellers[0].url} alt="coffee"></img>
            </li>
            <li>Price: {this.db.bestsellers[0].price}</li>
          </ul>
        {this.getData('bestsellers') || 'no data'}</div>
        <div>{this.state.coffee || 'no data'}</div>
        <div>{this.state.goods || 'no data'}</div>
      </>
    )
  }

}

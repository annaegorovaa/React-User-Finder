import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button';
import User from './User';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }

    loadNewUser(){
        axios.get('https://randomuser.me/api')
            .then(result => this.setState({person: result.data.results[0]}))
            .catch(error => console.log(error))
    }

    componentDidMount(){
        this.loadNewUser();
    }

    render() {
        return (
          <div className={'container'}>
            <Button
                loadNewUser={() => this.loadNewUser()}
            />
              {this.state.person.name &&
              <User
                user={this.state.person}
              />}
          </div>
        );
  }
}

export default App;

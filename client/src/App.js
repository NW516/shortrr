import React, { Component } from 'react';
import Animation from './components/Animation';
import ShortUrl from './components/ShortUrl';
import './App.css';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          longUrl: '',
          shortUrl: '',
          errorMsg: ''
       };
    }

    onChange(e) {
        this.setState({
            longUrl: e.target.value
        });
    }

    handleClear() {
      this.setState({
        longUrl: '',
        shortUrl: '',
        errorMsg: ''
      });
    }

    onSubmit(e) {
        e.preventDefault();
        fetch(this.props.action, {
            method: this.props.method,
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            },
            body: JSON.stringify({"longUrl": this.state.longUrl})
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data === "Invalid URL") {
            this.setState({errorMsg: data});
          } else {
            this.setState({shortUrl: data.shortUrl});
          }
        });

        this.setState({longUrl: ''});
        this.setState({shortUrl: ''});
    }

  render() {
    return (
      <div className="App">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
        <Animation />
        <form
          id="url-entry"
          action={this.props.action}
          method={this.props.method}
          onSubmit={(e) => this.onSubmit(e)}>
          <label>
            <span className="text">URL:</span>
            <input onChange={(e) => this.onChange(e)} type="text" name="longUrl" className="url-input"/><br/>
          </label>
          <div className="align-right">
              <button>Submit</button>
              <input type="reset" onClick={() => this.handleClear()} value="Clear"/>
          </div>
        </form>
        <ShortUrl err={this.state.errorMsg} shorty={this.state.shortUrl} />
      </div>
    );
  }
}

App.defaultProps = {
    action: 'http://localhost:5000/api/genurl',
    method: 'post'
};

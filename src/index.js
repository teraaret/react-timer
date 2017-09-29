import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Footer';

// ***

var data = {
    title: "React App",
    users: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Kaeli'},
        {id: 3, name: 'Orni'}
    ]
}

var components = {
    title: <h1 className="title">{ data.title }</h1>,
    header: <h1 className="header">The header</h1>,
    paragraph: <p className="paragraph">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus saepe dicta dolorum rem veniam nostrum nulla dolorem mollitia repellendus sit corporis id illum est consequuntur aut perspiciatis, voluptates natus maxime, quaerat itaque architecto deserunt ab odio. Cupiditate, esse nobis"</p>,
    list: <ul>{data.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    }

class Tumbler extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {isActive: true};
        this.onOff = this.onOff.bind(this);
    }
    
    onOff()
    {
        this.setState({ isActive: !this.state.isActive });
    }
    
    render() {
        let isActive = this.state.isActive;
        return (<div>
            {isActive && <h2>Включено</h2>}
            {!isActive && <h2>Выключено</h2>}
            <h2>{ isActive ? "Включено" : "Выключено" }</h2>
            <button onClick={this.onOff}>on off</button>
        </div>);  
    }
}
            
class Timer extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { value: 0 }
    }
    
    increment()
    {
        var now = new Date();
        var end = new Date(2017, now.getMonth(), now.getDate(), 18, 0, 0, 0);
        var diff = (end.getTime() - now.getTime()) / 1000 / 60 / 60;
        this.setState({ value: diff.toFixed(5) })
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 10);
    }
    
    render()
    {
        const value = this.state.value;
        return ( <p className="timer" id="timer">{ value }</p> )
    }
}

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: '', password: ''};

      this.onLoginChange = this.onLoginChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
      alert(`${this.state.login}, добро пожаловать!`);
      window.event.preventDefault();
    }

    onPasswordChange(e){
      this.setState({password: e.target.value});
    }

    onLoginChange(e) {
      this.setState({login: e.target.value});
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <p><label> Логин: <input type="text" name="login" value={this.state.login}
                           onChange={this.onLoginChange}/></label></p>
          <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                            onChange={this.onPasswordChange}/></label></p>
          <p><input type="submit" value="Submit" /></p>
        </form>
      );
    }
  }

////////////////////
            
//function rendering()
//{
    ReactDOM.render(
        <div className="page">
            { components.title }
            <hr/>
            { components.header }
            { components.paragraph }
            { components.list }
            < Timer />
            < Tumbler />
            <LoginForm />
            <Footer />
        </div>,
        document.getElementById('root')
    );
//}
//setInterval(rendering, 10);
        
var firstname = "OLEg";
let str = `
Здравствуйте ${firstname}.
Мы в ${new Date().getFullYear()} году
`;
console.log(str);
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
//import './test.less';
import Footer from './Footer';

// ***

var data = {
    title: "React JS",
    users: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Kaeli'},
        {id: 3, name: 'Orni'}
    ]
}

var components = {
    title: <h1 className="title">
    <img className="logo" source="./img/logo.png" alt="hz"/>  
    { data.title }</h1>,
    header: <h1 className="header">The header</h1>,
    paragraph: <p className="paragraph">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus saepe dicta dolorum rem veniam nostrum nulla dolorem mollitia repellendus sit corporis id illum est consequuntur aut perspiciatis, voluptates natus maxime, quaerat itaque architecto deserunt ab odio. Cupiditate, esse nobis"</p>,
    list: <ul>{data.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    };

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
};

//
                
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
        this.timerID = setInterval(() => this.increment(), 50);
    }
    
    render()
    {
        const value = this.state.value;
        return <p className="timer" id="timer">{ value }</p>;
    }
};

//

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
};

function Hero1 (props)
{
    return <h1>Hello, {props.name}</h1>;
}

class Hero2 extends React.Component {
    render()
    {
        return <h1>Hello 2, {this.props.name}</h1>
    }
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

class Field extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {tasks: ["Task 1"]};
        
        this.eachTask = this.eachTask.bind(this);
        
        this.addTask = this.addTask.bind(this);
        this.updateText = this.updateText.bind(this);
        this.deleteBlock = this.deleteBlock.bind(this);
    }
    
    addTask(text)
    {
        var arr = this.state.tasks;
        arr.push(text);
        this.setState( {tasks: arr} );
    }
    
    updateText(text, index)
    {
        var arr = this.state.tasks;
        arr[index] = text;
        this.setState( { tasks: arr } );
    }
    
    deleteBlock(index)
    {
        var arr = this.state.tasks;
        arr.splice(index,1);
        this.setState( { tasks: arr } );
    }
    
    eachTask(item, index)
    {
        return <div className="task-box" key={index}>
            <p>#{index}</p>
            <Task index={index} update={this.updateText} deleteBlock={this.deleteBlock}>
            { item }
            </Task>
        </div>
    }
    
    render()
    {
        return <div className="field">
            <button onClick={ this.addTask.bind(null, 'New task') } className="btn btn-new">Add task</button>
            { this.state.tasks.map(this.eachTask) }
        </div>
    }
}

class Task extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {edit: false};
        
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
    }
    
    edit()
    {
        this.setState( {edit: true } );
    }
    
    save()
    {
//        var value = this.refs.newTxt.value;
        this.props.update(this.refs.newTxt.value, this.props.index);
        this.setState( {edit: false } );
    }
    
    remove()
    {
        this.props.deleteBlock(this.props.index);
    }
    
    render()
    {
        if (this.state.edit === false)
        {
            return <div>
                <h3 className="task-text">{this.props.children}</h3>
                <button onClick={this.edit} className="btn btn-light">Edit</button>
                <button onClick={this.remove} className="btn btn-red">Delete</button>
            </div>
        }
        else if (this.state.edit === true)
        {
            return <div>
                <div className="task-box">
                    <textarea ref="newTxt" defaultValue={this.props.children}></textarea>
                    <br/>
                    <button onClick={this.save} className="btn btn-light">Save</button>
                </div>
            </div>
        }
    }
}

class Check extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {checked: true};
        
        this.handleCheck = this.handleCheck.bind(this);
    }
    
    getInitialState()
    {
        return {checked: true}
    }
    
    handleCheck()
    {
//        let status = this.state.checked;
//        console.log(status);
//        console.log('hz');
        this.setState( {checked: !this.state.checked} );
    }
    
    render()
    {
        var message;
        if (this.state.checked) { message = "Selected" }
        else { message = "Not selected" };
        return <div>
            <label><input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>Checkbox {message}</label>
        </div>
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
            <Field />
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
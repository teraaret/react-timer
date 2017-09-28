import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import './index.css';

// ***

var data = {
    title: "React App"
}

var components = {
    title: <h1 className="title">{ data.title }</h1>,
    header: <h1 className="header">The header</h1>,
    paragraph: <p className="paragraph">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus saepe dicta dolorum rem veniam nostrum nulla dolorem mollitia repellendus sit corporis id illum est consequuntur aut perspiciatis, voluptates natus maxime, quaerat itaque architecto deserunt ab odio. Cupiditate, esse nobis"</p>
    }

function DeleteUserLink() {
    function onClick(e) 
    {
            e.preventDefault();
            console.log('Пользователь был удален.');
    }
    return ( <a href="#nothing" onClick={onClick}>Удалить пользователя</a> );
}

//function Timer() 
//{
//    var now = new Date();
//    var end = new Date(2017, now.getMonth(), now.getDate(), 18, 0, 0, 0);
//    var diff = (end.getTime() - now.getTime()) / 1000 / 60 / 60;
//    diff = diff.toFixed(5);
//    
//    return <p className="timer" id="timer">{ diff }</p>;
//}
            
class TimerNew extends React.Component {
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

class Conditioner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: 0};

        // Привязка необходима, чтобы сделать this доступным в коллбэке
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease()
    {
        this.setState(prevState => 
        ({ temperature: prevState.temperature + 1 })
                     )
    }

    onDecrease()
    {
        this.setState(prevState => 
        ({ temperature: prevState.temperature - 1 })
                   )
    }

    render() {
        return (<div>
            <h2>Текущая температура: {this.state.temperature}</h2>
            <button onClick={this.onDecrease}>-</button>
            <button onClick={this.onIncrease}>+</button>
        </div>);
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
            < TimerNew />
            < DeleteUserLink />
            < Conditioner />
            <Footer />
        </div>,
        document.getElementById('root')
    );
//}
//setInterval(rendering, 10);
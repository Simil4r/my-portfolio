import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import SubmitButton from './SubmitButton'
import {LinkContext} from '../../LinkContext'

class Registration extends Component {
    static contextType = LinkContext
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirm: '',
            ready: true
        }

        this.userNameInput = React.createRef()
        this.passwordInput = React.createRef()
        this.confirmInput = React.createRef()

        this.setUserName = this.setUserName.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setConfirm = this.setConfirm.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    setUserName = (e) => {
        this.setState({ username: e.target.value })
    }

    setPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    setConfirm = (e) => {
        this.setState({ confirm: e.target.value })
    }

    inputFocus = (ref) => {
        ref.current.focus()
    }

    handleClick = () => {
        var ready = true;
        fetch('/.netlify/functions/userRead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: this.state.username, action: "findUser"})
        })
        .then(response=>response.json())
            .then(res=>{
                console.log(res)
                if(res.data===this.state.username){
                    ready = false;
                }
                if(this.state.username.length<4){
                    ready = false;
                }
                if(this.state.password !== this.state.confirm){
                    ready = false;
                }
                if(this.state.password.length<6){
                    ready = false;
                }
                if(ready){
                    this.setState({ready: true})
                    fetch('/.netlify/functions/userRead', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({username: this.state.username, password: this.state.password, action: "add"})
                    })
                    .then(response=>response.json())
                    .then(res=>{
                        console.log(res)
                        this.props.history.push("/todolist")})
                }else{
                    this.setState({ready: false})
                }
            })
    }

    render() {
        return (
            <div className="todolist container-fluid d-flex justify-content-center align-items-center">
                <div className='todolist_registration'>
                <Logo />
                <div className="todolist_form d-flex flex-column align-items-center">
                    <div className={'todolist_input'}>
                        <input 
                            type='text' 
                            value={this.state.username} 
                            onChange={this.setUserName}  
                            placeholder='name'
                            ref={this.userNameInput} />
                        <label className="todolist_label" onClick={()=>this.inputFocus(this.userNameInput)}>name</label>
                    </div>
                    <div className={'todolist_input'}>
                        <input 
                            type='password' 
                            value={this.state.password} 
                            onChange={this.setPassword} 
                            placeholder='password'
                            ref={this.passwordInput} />
                        <label className="todolist_label" onClick={()=>this.inputFocus(this.passwordInput)}>password</label>
                    </div>
                    <div className={'todolist_input'}>
                        <input 
                            type='password' 
                            value={this.state.confirm} 
                            onChange={this.setConfirm} 
                            placeholder='confirm'
                            ref={this.confirmInput} />
                        <label className="todolist_label" onClick={()=>this.inputFocus(this.confirmInput)}>confirm</label>
                    </div>
                    {this.state.ready?null:<p>Something went wrong! Remember that your username should have at least 4 characters and your password 6!</p>}
                    <SubmitButton text="REGISTER" click={this.handleClick} />
                    <div className='todolist_link'><Link to='/todolist/login'>Have an account?</Link></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Registration
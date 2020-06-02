import React, { Component } from 'react'
import SubmitButton from './SubmitButton';
import {connect} from "react-redux"

class AddElement extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        this.setTitle = this.setTitle.bind(this)
        this.setDescription = this.setDescription.bind(this)
        this.createElement = this.createElement.bind(this)
    }
    setTitle = e => {
        this.setState({ title: e.target.value })
    }
    setDescription = e => {
        this.setState({ description: e.target.value })
    }
    createElement = () => {
        this.props.addTask(this.state.title, this.state.description)
        this.props.closeWindow()
    }
    render() {
        return (
            <div className='todolist_addelement'>
                <div className='todolist_e_element_content d-flex flex-column'>
                    <div className='todolist_addelement_icons d-flex justify-content-end'>
                        <i className='icon-cancel' onClick={this.props.closeWindow}></i>
                    </div>
                    <h1>Add New Activity</h1>
                    <div className='todolist_e_element_form d-flex flex-column align-items-center'>
                        <input
                            type='text'
                            name='title'
                            onChange={this.setTitle}
                            placeholder='title (max 50 letters)'
                            maxLength={50} />
                        <input
                            type='text'
                            name='description'
                            onChange={this.setDescription}
                            placeholder='description (max 150 letters)'
                            maxLength={150} />
                        <SubmitButton text='Add' click={this.createElement} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addTask: (title, description) => {dispatch({type: 'ADD_TASK', title: title, description: description})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddElement);
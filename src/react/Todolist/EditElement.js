import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import axios from 'axios';
import SubmitButton from './SubmitButton';
import {LinkContext} from '../../LinkContext'
 
import "react-datepicker/dist/react-datepicker.css";


class AddElement extends Component{
    static contextType = LinkContext
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            date: new Date()
        }
        this.setTitle=this.setTitle.bind(this)
        this.setDescription=this.setDescription.bind(this)
        this.dateChange=this.dateChange.bind(this)
        this.editElement=this.editElement.bind(this)
    }
    setTitle = e => {
        this.setState({title: e.target.value})
    }
    setDescription = e => {
        this.setState({description: e.target.value})
    }
    dateChange = (date) => {
        this.setState({date: date});
    }
    editElement = () => {
        const element = {
            id: this.props.id,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date.getDate()+'-'+this.state.date.getMonth()+'-'+this.state.date.getFullYear(),
            action: "update"
        }
        fetch('/.netlify/functions/elementRead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(element)
        })
        .then(response => response.json())
            .then(()=>{
                this.props.closeWindow();
                this.props.getElements();
            })
            .catch(err=>console.log(err))
    }
    render(){
        return(
            <div className='todolist_editelement'>
                <div className='todolist_e_element_content d-flex flex-column'>
                    <div className='todolist_editelement_icons d-flex justify-content-end'>
                        <i className='icon-cancel' onClick={this.props.closeWindow}></i>
                    </div>
                    <h1 className='text-break'>Edit The Activity</h1>
                    <div className='todolist_e_element_form d-flex flex-column align-items-center'>
                        <input 
                            type='text' 
                            name='title' 
                            onChange={this.setTitle} 
                            placeholder='title (max 50 letters)'
                            maxLength={50}/>
                        <input 
                            type='text' 
                            name='description' 
                            onChange={this.setDescription} 
                            placeholder='description (max 150 letters)'
                            maxLength={150}/>
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.dateChange}
                        />
                        <SubmitButton text='Add' click={this.editElement} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AddElement;
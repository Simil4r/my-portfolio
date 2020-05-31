import React, {Component} from 'react'
import axios from 'axios';
import SubmitButton from './SubmitButton';
import {LinkContext} from '../../LinkContext'

class DeleteElement extends Component{
    static contextType = LinkContext
    constructor(props){
        super(props)
        this.deleteElement=this.deleteElement.bind(this)
    }
    deleteElement = () => {
        fetch('/.netlify/functions/elementRead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.props.id,
                action: "delete"
            })
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
            <div className='todolist_deleteelement'>
                <div className='todolist_e_element_content d-flex flex-column justify-content-center'>
                    <h1>You want to delete the activity!</h1>
                    <div className='todolist_e_element_form d-flex flex-row justify-content-around align-items-center'>
                        <SubmitButton text='OK' click={this.deleteElement} />
                        <SubmitButton text='Cancel' click={this.props.closeWindow} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteElement;
import React, { Component } from 'react';
import NoElements from './NoElements'
import Element from './Element';
import Topbar from './Topbar';
import AddElement from './AddElement';
import DeleteElement from './DeleteElement';
import EditElement from './EditElement';
import {connect} from 'react-redux'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            element_addition: false,
            element_deletion: null,
            element_edit: null
        }
        this.addElement = this.addElement.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.editElement = this.editElement.bind(this)
        this.closeWindow = this.closeWindow.bind(this)
    }
    addElement = () => {
        this.setState({ element_addition: true })
    }
    deleteElement = (id) => {
        this.setState({element_deletion: id})
    }
    editElement = (id) => {
        this.setState({element_edit: id})
    }
    closeWindow = () => {
        this.setState({ 
            element_addition: false, 
            element_deletion: null, 
            element_edit: null,
         })
    }
    render = () => {
        return (
            <div className='todolist_content d-flex col-12'>
                <Topbar addElement={this.addElement} handleDate={this.setDate}/>
                <div className='todolist_content_elements d-flex flex-column col-12 align-items-center'>
                    {this.props.tasks.length===0?<NoElements />:this.props.tasks.map((element, index) => {
                        return <Element
                            key={element._id}
                            id={element.id}
                            title={element.title}
                            description={element.description}
                            done={element.done}
                            deleteElement={this.props.deleteElement}
                            editElement={this.props.editElement}
                            bgcolor={index%2===0?'#f7f5f3':'#d9d5d1'} />
                    })}
                </div>
                {this.state.element_addition
                    ? <AddElement 
                        closeWindow={this.closeWindow} />
                    : null}
                {this.state.element_deletion
                    ? <DeleteElement 
                        closeWindow={this.closeWindow} 
                        id={this.state.element_deletion} />
                    : null
                }
                {this.state.element_edit
                    ? <EditElement 
                        closeWindow={this.closeWindow}  
                        id={this.state.element_edit} />
                    :null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Content);
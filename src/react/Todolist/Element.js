import React, { Component } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { connect } from "react-redux"

class Element extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: this.props.done,
            mouseOver: false
        }
        this.done = this.done.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.editElement = this.editElement.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }
    done = () => {
        this.setState(prevState => { return { done: !prevState.done } })
        this.props.checkTask(this.props.id, this.state.done)
    }
    deleteElement = () => {
        this.props.deleteElement(this.props.id)
    }
    editElement = () => {
        this.props.editElement(this.props.id)
    }
    handleMouseOver = () => {
        this.setState({ mouseOver: true })
    }
    handleMouseLeave = () => {
        this.setState({ mouseOver: false })
    }
    render() {
        return (
            <div
                className={this.state.done ? 'todolist_element done d-flex flex-row col-12 col-md-6 col-lg-3' : 'todolist_element d-flex flex-row col-12 col-md-6 col-lg-3'}
                onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <div
                    className="ok_div"
                    style={this.state.mouseOver ? { left: 0 } : { left: "-70px" }}>
                    <div className='ok' onClick={this.done}>
                        <OverlayTrigger key="done" placement="bottom" overlay={
                            <Tooltip id="done">
                                done
                            </Tooltip>
                        }>
                            <i
                                className='icon-ok'
                                style={this.state.done ? { opacity: 1 } : { opacity: 0 }}></i>
                        </OverlayTrigger>
                    </div>
                </div>
                <div className='d-flex flex-column text-break flex-grow-1'>
                    <h1>{this.props.title}</h1>
                    <div className='todolist_element_description text-break'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className='icons'
                    style={this.state.mouseOver ? { top: 0 } : { top: "-70px" }}>
                    <OverlayTrigger key='edit' placement='bottom' overlay={
                        <Tooltip id='edit'>
                            Edit
                        </Tooltip>
                    } >
                        <i className='icon-pencil icon_x' onClick={this.editElement}></i>
                    </OverlayTrigger>
                    <OverlayTrigger key='delete' placement='bottom' overlay={
                        <Tooltip id='delete'>
                            Delete
                        </Tooltip>
                    } >
                        <i className='icon-cancel icon_x' onClick={this.deleteElement}></i>
                    </OverlayTrigger>
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

const mapDispatchToProps = dispatch => {
    return {
        checkTask: (id, title, description, check) => { dispatch({ type: 'CHECK_TASK', id: id, title: title, description: description, check: check }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
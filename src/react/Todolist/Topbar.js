import React,{Component} from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

class Topbar extends Component{
    render(){
        return(
            <div className='todolist_topbar d-flex flex-row justify-content-center fixed-top'>
                <div className='d-flex flex-grow-1 justify-content-center'>
                    <h2>MW Todolist</h2>
                </div>
                <div className='d-flex todolist_icons'>
                    <OverlayTrigger key='add' placement='bottom' overlay={
                        <Tooltip id='add'>
                            Add new activity
                        </Tooltip>
                    } >
                        <i className='icon-plus' onClick={this.props.addElement}></i>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
}

export default Topbar
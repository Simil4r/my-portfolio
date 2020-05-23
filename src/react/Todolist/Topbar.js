import React,{Component} from 'react'
import DatePicker from 'react-datepicker';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

class Topbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        this.handleDate = this.handleDate.bind(this)
        this.logout = this.logout.bind(this)
    }
    handleDate = (date) => {
        this.setState({date: date})
        this.props.handleDate(date);
    }
    logout = () => {
        window.open('http://localhost:3000/todolist', '_self')
    }
    render(){
        return(
            <div className='todolist_topbar d-flex flex-row justify-content-center fixed-top'>
                <div className='d-flex flex-grow-1 justify-content-center'>
                    <h2>MW Todolist</h2>
                </div>
                <div className='d-flex todolist_icons'>
                    <DatePicker selected={this.state.date} onChange={this.handleDate}/>
                    <OverlayTrigger key='add' placement='bottom' overlay={
                        <Tooltip id='add'>
                            Add new activity
                        </Tooltip>
                    } >
                        <i className='icon-plus' onClick={this.props.addElement}></i>
                    </OverlayTrigger>
                    <OverlayTrigger key='logout' placement='bottom' overlay={
                        <Tooltip id='logout'>
                            Logout
                        </Tooltip>
                    } >
                        <i className='icon-off' onClick={this.logout}></i>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
}

export default Topbar
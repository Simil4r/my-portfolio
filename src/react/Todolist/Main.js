import React from 'react'
import Content from './Content';

import "../../css/Todolist.css"

const Main = () => {
    return (
        <div className="todolist container-fluid">
            <Content />
            <div className="copyright d-flex col-12 justify-content-center align-self-end">
                <small>Copyright &copy; {new Date().getFullYear()} Michał Warchoł</small>
            </div>
        </div>
    )
}

export default Main
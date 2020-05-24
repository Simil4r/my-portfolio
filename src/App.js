import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './react/Main/Main';
import Todolist from './react/Todolist/Main';
import Ecommerce from './react/E-commerce/Main'
import './css/App.css';
import { LinkContext } from './LinkContext'
import "./img/fontello-d33de368/css/fontello.css"

const App = () => {
  const [link, setLink] = useState("https://michalwarchol.pl")
  return (
    <BrowserRouter basename="michalwarchol.pl">
      <LinkContext.Provider value={{link, setLink}}>
        <Route exact path='/' component={Main} />
        <Route path='/todolist' component={Todolist} />
        <Route path='/e-commerce' component={Ecommerce} />
      </LinkContext.Provider>
    </BrowserRouter>
  )
}

export default App;

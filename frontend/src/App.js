import React from 'react'

import BreadcrupmsComp from './components/BreadcrumbsComp'
import MailListComp from './components/MailListComp'
import AddComp from './components/AddComp'
import PrintComp from './components/PrintComp'

import { Route, BrowserRouter as Router } from 'react-router-dom'



export default function App(){
  return(
    <Router>
      <BreadcrupmsComp />
      <Route exact path="/" component={ AddComp } />
      <Route path="/list" component={ MailListComp } />
      <Route path="/print" component={ PrintComp } />
    </Router>
  )
}
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import LayoutBlog from './containers/layout/Layout'
import { GlobalStyle } from './theme/globalStyles'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import About from './pages/About'
import Home from './pages/Home'
import LayoutBlog2 from './containers/layout/Layout2'
const App = () => {
  return (

    <Router>
      {/* <LayoutBlog2> */}
      {/* <GlobalStyle /> */}
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/home'><Home /></Route>
        <Route path='/blog'><Blogs /></Route>
        <Route path='/blog-detail/:id'><BlogDetail /></Route>
        <Route path='/about'><About /></Route>
      </Switch>
      {/* </LayoutBlog2> */}
    </Router>

  )
}

export default App

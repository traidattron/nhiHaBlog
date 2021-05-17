import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { client } from './configs/apolloClient'
import LayoutBlog from './containers/layout/Layout'
import { GlobalStyle } from './theme/globalStyles'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <LayoutBlog>
          <GlobalStyle/>
          <Switch>
            <Route exact path='/'><Blogs/></Route>
            <Route path='/blog-detail'><BlogDetail/></Route>
          </Switch>
        </LayoutBlog>
      </Router>
    </ApolloProvider>
  )
}

export default App

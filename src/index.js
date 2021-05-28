import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { GlobalStyle } from './theme/globalStyles'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: 'https://graphql-ourblogs.herokuapp.com/',
  cache: new InMemoryCache()
});
// client
//   .query({
//     query: gql`
//     query allBlogs{
//       allBlog{
//           title
//           content
//           id
//           public
//           user{
//               username
//               name
//           }
//       }
//   }
//     `
//   })
//   .then(result => console.log(result));
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

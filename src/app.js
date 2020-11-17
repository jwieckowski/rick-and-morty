import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './views/Layout.jsx'
import Dashboard from './components/Dashboard'

const App = () => (
  <Layout>
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/characters' component={Dashboard} />
      <Route path='/locations' component={Dashboard} />
      <Route path='/episodes' component={Dashboard} />
      <Route path='/details' component={Dashboard} />
      <Redirect to='/' />
    </Switch>
  </Layout>
)

export default App
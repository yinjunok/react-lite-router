import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Link, useParams, useHistory, Switch } from './Router'

const Page1 = () => <h1>Page 1</h1>
const Page2 = () => <h1>Page 2</h1>
const ParamsPage = () => {
  const { id } = useParams()

  return <h1>The Params id is: {id}</h1>
}

const App = () => {
  const { back, push } = useHistory()

  return (
    <div>
      <Link to='/page1'>Page 1</Link> <br/>
      <Link to='/page2'>Page 2</Link> <br/>
      <Link to='/page3/abcd'>Params Page</Link>
      <hr />
      <button onClick={() => back()}>goBack</button> <br/>
      <button onClick={() => push('/page3/abcd')}>Go to params page</button>
      <hr />
      <Switch>
        <Route path='/page1' component={Page1} />
        <Route path='/page1' component={Page1} />
        <Route path='/page1' component={Page1} />
        <Route path='/page1' component={Page1} />
      </Switch>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
      <Route path='/page3/:id' component={ParamsPage} />
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

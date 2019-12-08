import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Link, useParams, useHistory } from './Router'

const Page1 = () => <h1>Page 1</h1>
const Page2 = () => <h1>Page 2</h1>
const ParamsPage = () => {
  const { id } = useParams()

  return <h1>The Params is: {id}</h1>
}

const Hello = () => {
  const { back, push } = useHistory()

  return (
    <div>
      <Link to='/page1'><button>Page 1</button></Link>
      <Link to='/page2'><button>Page 2</button></Link>
      <Link to='/page3/abcd'><button>Params Page</button></Link>
      <hr />
      <button onClick={() => back()}>goBack</button>
      <button onClick={() => push('/page3/abcd')}>Go to params page</button>
      <hr />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
      <Route path='/page3/:id' component={ParamsPage} />
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Hello />
  </Router>,
  document.getElementById('root')
)

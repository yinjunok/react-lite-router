import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Link, useParams } from './Router'

const Page1 = () => <h1>Page 1</h1>
const Page2 = () => <h1>Page 2</h1>
const ParamsPage = () => {
  const { id } = useParams()

  return <h1>参数是: {id}</h1>
}

const Hello = () => {
  return (
    <div>
      <Link to='/page1'>Page 1</Link>
      <Link to='/page2'>Page 2</Link>
      <Link to='/page3/abcd'>Page 3</Link>

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

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default Home
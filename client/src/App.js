import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { authenticate } from './reducers/authReducer'
import { getPop } from './reducers/genreReducer'
import Selectors from './components/Selectors'
import TrackList from './components/TrackList'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate())
    dispatch(getPop())
  }, [dispatch])

  return (
    <div>
      <h1>Find your mood</h1>
      <Selectors />
      <TrackList />
    </div>
  )
}

export default App

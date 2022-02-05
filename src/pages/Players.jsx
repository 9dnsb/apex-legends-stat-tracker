import ApexContext from '../context/apex/ApexContext'
import { searchPlayer } from '../context/apex/ApexActions'
import { useContext, useState } from 'react'
import AlertContext from '../context/alert/AlertContext'

import PlayerResult from '../components/Player/PlayersResult'

function Players() {
  const { dispatch, player } = useContext(ApexContext)
  const { setAlert } = useContext(AlertContext)
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'error')
      console.log('here')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const userData = await searchPlayer(text)
      dispatch({ type: 'GET_PLAYER', payload: userData })
    }
  }

  const handleClear = () => {
    setText('')
    dispatch({ type: 'CLEAR_PLAYER' })
  }

  const header = (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 ml-2">Apex Player Search</h1>
    </div>
  )

  return (
    <>
      {header}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {player && (
          <div>
            <button onClick={handleClear} className="btn btn-ghost btn-lg">
              Clear
            </button>
          </div>
        )}
      </div>
      <PlayerResult />
    </>
  )
}

export default Players

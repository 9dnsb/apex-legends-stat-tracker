import ApexContext from '../context/apex/ApexContext'
import { useContext, useState } from 'react'
import AlertContext from '../context/alert/AlertContext'

import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader'

function Players() {
  const { dispatch } = useContext(ApexContext)
  const { setAlert } = useContext(AlertContext)
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'CLEAR_PLAYER' })
    if (text === '') {
      console.log('here')
      setAlert('Please enter something', 'error')
    } else {
      dispatch({ type: 'SET_PLAYER', payload: text })
      navigate(text)
    }
  }

  return (
    <>
      <PageHeader title={'Apex Player Search'} />
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 mt-4">
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
      </div>
    </>
  )
}

export default Players

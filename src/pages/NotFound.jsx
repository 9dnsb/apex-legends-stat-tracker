import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function NotFound({ notFoundText }) {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">{notFoundText}</p>
          <Link className="btn hover:btn-primary btn-lg" to="/">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

NotFound.defaultProps = {
  notFoundText: '404 - Page Not Found!',
}

NotFound.propTypes = {
  notFoundText: PropTypes.string.isRequired,
}

export default NotFound

import PropTypes from 'prop-types'

function ServerItemP({ children }) {
  return <div className="flex items-center">{children}</div>
}

ServerItemP.propTypes = {
  children: PropTypes.object.isRequired,
}
export default ServerItemP

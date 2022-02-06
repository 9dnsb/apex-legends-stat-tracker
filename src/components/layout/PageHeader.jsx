import PropTypes from 'prop-types'

function PageHeader({ title, center }) {
  return (
    <div className={` ${center && 'text-center'}`}>
      <h1 className={`text-3xl font-bold mb-2 sm:mb-5 mt-5 `}>{title}</h1>
      <p>
        Data from{' '}
        <a
          href="https://apexlegendsstatus.com"
          className="text-accent"
          target="_blank"
          rel="noreferrer"
        >
          apexlegendsstatus.com
        </a>
      </p>
    </div>
  )
}

PageHeader.defaultProps = {
  center: true,
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  center: PropTypes.bool.isRequired,
}

export default PageHeader

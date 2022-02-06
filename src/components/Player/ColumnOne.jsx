import PropTypes from 'prop-types'

function ColumnOne({ row1, row2, row3 }) {
  return (
    <div className="card shadow-lg">
      <div className="card-body">
        {row1}
        <h2 className="card-title mb-0 mt-3">{row2}</h2>
        <p>{row3}</p>
      </div>
    </div>
  )
}

ColumnOne.propTypes = {
  row1: PropTypes.object,
  row2: PropTypes.string,
  row3: PropTypes.string,
}

export default ColumnOne

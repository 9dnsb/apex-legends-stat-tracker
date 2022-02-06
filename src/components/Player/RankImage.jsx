import PropTypes from 'prop-types'

function RankImage({ img }) {
  return (
    <>
      <img src={img} className="w-2/12 -ml-1.5 md:w-4/12 md:-ml-2" alt="" />
    </>
  )
}

RankImage.propTypes = {
  img: PropTypes.string.isRequired,
}

export default RankImage

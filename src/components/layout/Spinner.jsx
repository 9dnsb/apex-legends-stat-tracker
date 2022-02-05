import spinnerSVG from '../assets/spinnerSVG.svg'

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinnerSVG}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner

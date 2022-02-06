import { consArray, consArrayGoodName } from '../../data/ApexData'
import ServerItem from './ServerItem'

function ServerTypeSection() {
  return (
    <>
      {consArray.map((cons, index1) => (
        <div key={cons}>
          <h2 className="text-2xl mt-5 sm:mb-5 text-accent font-medium text-center">
            {consArrayGoodName[index1]}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            <ServerItem
              consArrayGoodName={consArrayGoodName[index1]}
              cons={cons}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default ServerTypeSection

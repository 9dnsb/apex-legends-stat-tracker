import { regionArray, regionArrayGoodName } from '../../data/ApexData'
import PropTypes from 'prop-types'
import { GiNetworkBars } from 'react-icons/gi'
import { FaRegClock } from 'react-icons/fa'
import { FiWatch } from 'react-icons/fi'

import { useContext } from 'react'
import ApexContext from '../../context/apex/ApexContext'
import ServerItemP from './ServerItemP'

function formattedTime(unix_timestamp) {
  const date = new Date(unix_timestamp * 1000)
  const hours = date.getHours()
  const minutes = '0' + date.getMinutes()
  const seconds = '0' + date.getSeconds()
  const formattedTime =
    hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2)
  return formattedTime
}

function ServerItem(props) {
  const { servers } = useContext(ApexContext)
  const setStatusClass = (region) => {
    if (servers[props.cons][region].Status === 'UP') {
      return 'text-success'
    } else if (servers[props.cons][region].Status === 'DOWN') {
      return 'text-error'
    } else return
  }
  return (
    <>
      {regionArray.map((region, index2) => (
        <div className="card shadow-lg " key={region}>
          <div className="card-body">
            <h3 className="card-title ">
              {props.consArrayGoodName}: {regionArrayGoodName[index2]}
            </h3>
            <ServerItemP
              children={
                <>
                  <GiNetworkBars className={`mr-2 ${setStatusClass(region)}`} />
                  <p className={setStatusClass(region)}>
                    Status: {servers[props.cons][region].Status}
                  </p>
                </>
              }
            />
            <ServerItemP
              children={
                <>
                  <FiWatch className="mr-2" />
                  <p>
                    Response Time: {servers[props.cons][region].ResponseTime} ms
                  </p>
                </>
              }
            />
            <ServerItemP
              children={
                <>
                  <FaRegClock className="mr-2" />
                  <p>
                    Last updated:{' '}
                    {formattedTime(servers[props.cons][region].QueryTimestamp)}{' '}
                    {new Date()
                      .toLocaleDateString(undefined, {
                        day: '2-digit',
                        timeZoneName: 'short',
                      })
                      .substring(4)}
                  </p>
                </>
              }
            />
          </div>
        </div>
      ))}
    </>
  )
}

ServerItem.propTypes = {
  consArrayGoodName: PropTypes.string.isRequired,
  cons: PropTypes.string.isRequired,
}

export default ServerItem

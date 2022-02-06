import axios from 'axios'
import { apexData, consArray, regionArray } from '../../data/ApexData'
import { playerInfo } from '../../data/PlayerInfo'
import { mapData } from '../../data/mapData'

const APEX_URL = 'https://api.mozambiquehe.re'
const APEX_TOKEN = 'FVMp339ZWkIuGdP2C8H4'
const apex = axios.create({
  baseURL: APEX_URL,
})

const fillObj = (newServe) => {
  for (let index = 0; index < consArray.length; index++) {
    const element = consArray[index]
    for (let index2 = 0; index2 < regionArray.length; index2++) {
      const element2 = regionArray[index2]
      apexData[element][element2] = newServe[element][element2]
    }
  }
}

const renameKeys = (servers) => {
  return JSON.parse(
    JSON.stringify(servers)
      .split('"EU-East":')
      .join('"EU_East":')
      .split('"EU-West":')
      .join('"EU_West":')
      .split('"US-Central":')
      .join('"US_Central":')
      .split('"US-East":')
      .join('"US_East":')
      .split('"US-West":')
      .join('"US_West":')
      .split('"Playstation-Network":')
      .join('"Playstation_Network":')
      .split('"Xbox-Live":')
      .join('"Xbox_Live":')
  )
}

export const searchServers = async () => {
  const response = apex
    .get(`/servers?auth=${APEX_TOKEN}`)
    .then((response) => {
      fillObj(renameKeys(response.data))
      return apexData
    })
    .catch((error) => {
      if (error.response) {
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
      return error.message
    })
  return response
}

export const searchPlayer = async (player) => {
  const response = apex
    .get(`/bridge?version=5&platform=PC&player=${player}&auth=${APEX_TOKEN}`)
    .then((response) => {
      playerInfo.global = response.data.global
      playerInfo.legends = response.data.legends
      playerInfo.realtime = response.data.realtime
      return playerInfo
    })
    .catch((error) => {
      if (error.response) {
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
      console.log(error.message)
      return error.message
    })
  return response
}

export const searchMap = async () => {
  const response = apex
    .get(`/maprotation?version=2&auth=${APEX_TOKEN}`)
    .then((response) => {
      mapData.battle_royale = response.data.battle_royale
      mapData.arenas = response.data.arenas
      mapData.ranked = response.data.ranked
      mapData.arenasRanked = response.data.arenasRanked
      return mapData
    })
    .catch((error) => {
      if (error.response) {
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
      console.log(error.message)
      return error.message
    })
  return response
}

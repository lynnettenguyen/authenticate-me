import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import './Maps.css'
import { getAPIKey } from '../../store/maps'

const Maps = () => {
  const dispatch = useDispatch()
  const APIKey = useSelector(state => state.map.APIKey)

  useEffect(() => {
    dispatch(getAPIKey())
  }, [])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKey,
    // id: 'google-map'
  })

  const containerStyle = {
    width: '70%',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <>
      {isLoaded &&
        (
          <div className='maps-main'>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
            </GoogleMap>
          </div>
        )}
    </>
  )
}

// React.memo prevents rerenders if props are unchanged
export default React.memo(Maps)

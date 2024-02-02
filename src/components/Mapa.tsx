'use client'
import 'leaflet/dist/leaflet.css'
import React, {useContext, useEffect, useState} from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet"
import { usePlacesContext } from "@/other/context/PlacesContext"
import { Icon } from 'leaflet'


const Mapa = () => {
    const {restaurante, restaurantes} = usePlacesContext()
    const [position, setPosition] = useState<any>()
    const [mapPosition, setMapPosition] = useState<any>({latitude:0,longitude:0})
    const customIcon = new Icon({
      iconUrl:'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
      iconSize:[38, 38]
    })
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude,
            lng = position.coords.longitude;   
        setPosition({lat, lng})  
        setMapPosition({latitude: restaurante?.latitude, longitude: restaurante?.longitude})  
      })
      
    },[restaurante])

    const RestaurantsLocations = ({point}: any) => {
      const map = useMapEvents({})
      if(restaurante.latitude != undefined){
        map.flyTo({lat: restaurante.latitude, lng: restaurante.longitude},map.getZoom())
      }
        const position: [number, number] = [point.latitude, point.longitude];
        return(
            <>
            <Marker icon={customIcon} position={position}>
                <Popup>
                    {point.nome}
                </Popup>
            </Marker> 
            </>
        ) 
    }
    

  const LocationMarker = () => {
    const map = useMapEvents({})
    if(position != undefined){
      map.flyTo({lat: position.lat, lng: position.lng},map.getZoom())
    }
    
    return position === undefined ? null : (
      <Marker icon={customIcon} position={[position.lat,position.lng]}>
        <Popup>Você está aqui!</Popup>
      </Marker>
    )
   }

    return(
      <>
      
        <MapContainer style={{width: '100%', height: '500px', borderRadius:'16px'}} zoom={16} scrollWheelZoom={true} center={[mapPosition.latitude, mapPosition.longitude]} zoomAnimation>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker/>
          {restaurantes?.map((value, i)=>(
              <RestaurantsLocations point={value} key={i}/>
          ))}
        </MapContainer>
      </>
      
    )
}

export default Mapa
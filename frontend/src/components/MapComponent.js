import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {

    const [ selected, setSelected ] = useState({});
  
    const onSelect = item => {
      setSelected(item);
    }
  
    const mapStyles = {        
      height: "50vh",
      width: "100",
    };
    
    const defaultCenter = {
        lat: 41.885, lng: -87.635
    }
    const locations = [
        {
          name: "Main HQ",
          location: { 
            lat: 41.87,
            lng: -87.625 
          },
        },
        {
          name: "River North",
          location: { 
            lat: 41.905,
            lng: -87.635 
          },
        },
                      
      ];
    return (
       <LoadScript
         googleMapsApiKey='AIzaSyBKtYXl5yiSI6pcC0aB0qpe-Rjg36gwnV8'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={12}
            center={defaultCenter}>
                {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            })
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>

       </LoadScript>
    )
  }

  export default MapContainer;

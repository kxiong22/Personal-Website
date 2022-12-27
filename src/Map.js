import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, InfoBox } from '@react-google-maps/api';
import pin from './images/pin.png';

const containerStyle = {
    height: "80vh",
    width: "100vw"
}

const center = {
    lat: 25.295202586754595,
    lng: -51.9337846719139
};

const locations = [
    ["Plano, TX", "My home!", "(2000-Present)", 33.019844, -96.698883],
    ["Cambridge, MA", "I'm a CS major at MIT - the best school in the world!", "(2018-2022)", 42.365250, -71.105011],
    ["Sao Paulo, Brazil", "I did a Global Teaching Lab here during IAP!", "(Jan 2019)", -23.548670, -46.638248],
    ["New York, NY", "I did a winter externship at Bank of America!", "(Jan 2020)", 40.755, -73.987],
    ["Seattle, Washington", "I did a summer internship at AWS!", "(June-Aug 2020)", 47.6062, -122.3321],
    ["Eindhoven, Netherlands", "I did a summer internship at Philips!", "(June-Aug 2019)", 51.441643, 5.469722],
    ["New York, NY", "I did a summer internship at Goldman Sachs!", "(June-Aug 2021)", 40.715, -74.015],
    ["London, UK", "I did a summer internship at J.P. Morgan!", "(June-Aug 2022)", 51.5076, 0.1276],
    ["Agadir, Morocco", "I did a Global Teaching Lab here during IAP!", "(Jan 2023)", 30.4278, -9.598107]
];

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: new Array(locations.length).fill(false)
        };
    }

    toggleInfo(i) {
        console.log(i);
        const isOpenCopy = [...this.state.isOpen];
        isOpenCopy[i] = !isOpenCopy[i];
        this.setState({
            isOpen: isOpenCopy
        });
    }

    renderMarker(i) {
        var pos = {
            lat: locations[i][3],
            lng: locations[i][4]
        };
        return (
            <Marker 
                key = {i}
                position = {pos} 
                onClick = {() => this.toggleInfo(i)}
                onCloseClick = {() => this.toggleInfo(i)}
                icon = {pin}
            >
            {
                this.state.isOpen[i] && 
                <InfoWindow>
                    <div>
                        <h6>{locations[i][0]}</h6>
                        <p>{locations[i][1]}</p>
                        <div>{locations[i][2]}</div>
                    </div>
                </InfoWindow>
            }
            </Marker>
        );
    }

    render() {
        var markers = [];
        for (var i = 0; i < locations.length; i++) {
            markers.push(this.renderMarker(i))
        }

        return (
            <div id = "map-container">
                <div className = "section-title">check out my adventures around the world!</div>
                <LoadScript 
                    googleMapsApiKey={"AIzaSyAjLkTo8Pl1lhIhIGdisIlkzqJq_HScqB4"}
                    mapIds={['45ec0d38fd4fd2fc']}
                >
                    <GoogleMap
                    zoom={3}
                    center={center}
                    mapContainerStyle={containerStyle}
                    options={{ mapId: '45ec0d38fd4fd2fc' }}
                    >
                    <>
                        {markers}
                    </>
                    </GoogleMap>
                </LoadScript>
          </div>

        )
    }
}

export default Map;
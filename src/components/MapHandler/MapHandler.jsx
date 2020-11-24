import React, { Component } from 'react';
import { connect } from "react-redux";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Searcher from '../Searcher/Searcher';

export class MapHandler extends Component { 
  render() {
    return (
      <div id='googleMaps'>
        <Searcher />
        <Map 
          google={this.props.google}
          initialCenter={{
            lat: this.props.mapCenter.lat,
            lng: this.props.mapCenter.lng
          }}
          center={{
            lat: this.props.mapCenter.lat,
            lng: this.props.mapCenter.lng
          }}
          fullscreenControl = {false}
          disableDefaultUI = {true}
        >
          {this.props.markers.map((marker, index) => {
            return (<Marker 
              key={index}
              position={marker} />)
          })}
        </Map>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    address: state.address,
    showingInfoWindow: state.showingInfoWindow,
    activeMarker: state.activeMarker,
    selectedPlace: state.selectedPlace,
    mapCenter: state.mapCenter,
    markers: state.markers
  };
};

const mapDispatchToProps = dispatch => {
  return {
      setAddress: address => dispatch({type:"SET_ADDRESS", payload: address}),
      setMapCenter: newCords => dispatch({type:"SET_MAP_CENTER", payload: newCords}),
      setMarkers: markers => dispatch({type:"SET_MARKERS", payload: markers}),
  };
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapHandler);

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAY2-ifr_nouCf9GlMA5rcMAwUcqDrtcnk')
})(MapContainer)
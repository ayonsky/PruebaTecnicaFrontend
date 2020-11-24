import React, { Component } from 'react';
import { connect } from "react-redux";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import './Searcher.css';

class Searcher extends Component {

    handleChange = address => {
        this.props.setAddress(address);
      };
     
    handleSelect = address => {
        this.props.setAddress(address);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
            console.log('Success', latLng);
            let markers = this.props.markers;
            markers.push(latLng);
            this.props.setMapCenter(latLng);
            this.props.setMarkers(markers);
            })
            .catch(error => console.error('Error', error));
    };

    render() {console.log("Searcher render:",this.props)
        return( 
        <div>
            <PlacesAutocomplete
            value={this.props.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="Searcher">
                <input
                    {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                    })}
                />
                <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                    const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';

                    const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        <div
                        {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                        })}
                        >
                        <span>{suggestion.description}</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            )}
            </PlacesAutocomplete>
        </div>)
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
  
  const SearcherContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Searcher);
  
  export default SearcherContainer;
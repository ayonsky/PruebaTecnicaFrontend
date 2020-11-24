const initialState = {
    address: '',
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 40.4378698,
      lng: -3.8196207
    },
    markers: []
  };

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_ADDRESS":
            return { ...state, address: action.payload }
        case "SET_MAP_CENTER":
            return { ...state, mapCenter: action.payload }
        case "SET_MARKERS":
            return { ...state, markers: action.payload }
        default:
            return state;
    }
}

export default Reducer;
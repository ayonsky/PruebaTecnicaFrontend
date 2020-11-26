import Reducer from './Reducer';

const mockStoreState = {
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

describe("[REDUCER]Validate the correct return of each Action", () => {
    //----------------- TEST -----------------
    it("[ACTION] Return a valid state with the updated Address field", () => {
        const actionData = Reducer(mockStoreState, {
            type: "SET_ADDRESS",
            payload: "Madrid, Spain"
        })
        expect(actionData.address).toEqual("Madrid, Spain");
    })
    //----------------- TEST -----------------
    it("[ACTION] Return a valid state with the updated MapCenter field", () => {
        const actionData = Reducer(mockStoreState, {
            type: "SET_MAP_CENTER",
            payload: {
                lat: 21.2338698,
                lng: -5.1116207
              }
        })
        expect(actionData.mapCenter).toEqual({
            lat: 21.2338698,
            lng: -5.1116207
        });
    })
    //----------------- TEST -----------------
    it("[ACTION] Return a valid state with the updated Markers field", () => {
        const mockMarkers = [{
            lat: 12.232323,
            lng: -5.143437
          },{
            lat: 12.4343433,
            lng: -1.3434331
          },{
            lat: 12.2445565,
            lng: 4.33114334
          }];

        const actionData = Reducer(mockStoreState, {
            type: "SET_MARKERS",
            payload: mockMarkers
        })
        expect(actionData.markers).toEqual(mockMarkers);
    })
})
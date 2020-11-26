import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MapHandler from './components/MapHandler/MapHandler';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />)
})

describe("Validate if <App />  renders", () => {
    //----------------- TEST -----------------
    it("Renders <App /> component", () => {
        expect(wrapper).not.toBeUndefined();
    })
    //----------------- TEST -----------------
    it("Renders correctly the child component <MapHandler />", () =>{
        expect(wrapper.containsMatchingElement(<MapHandler />)).toEqual(true);
    })
})
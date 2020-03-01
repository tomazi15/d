import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductCrdInfo from './ProductCardInfo';

configure({ adapter: new Adapter() });

const props = {
    info: {
        brand: "",
        size: "",
        price: ""
    }
}

describe('Does ProductCardInfo Component Render', () => {

    let wrapper = shallow(<ProductCrdInfo {...props}/>);

    it('ProductCardInfo render its css class', () => {
        expect(wrapper.find('.ProductCardInfo').length).toBe(1);
    });
    it('ProductCardInfo render three spans', () => {
        expect(wrapper.find('span').length).toBe(3);
    });
    it('ProductCardInfo renders Brand text', () => {
        expect(wrapper.find('span').at(0).text()).toEqual('Brand: ');
    });    
});
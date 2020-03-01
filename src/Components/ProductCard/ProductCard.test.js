import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductCard } from './ProductCard';

configure({ adapter: new Adapter() });

const props = {
    products: []
}

describe('Does ProductCard Component Render', () => {

    let wrapper = shallow(<ProductCard {...props}/>);

    it('ProductCard render its css class', () => {
        expect(wrapper.find('.ProductCard').length).toBe(1);
    });
});
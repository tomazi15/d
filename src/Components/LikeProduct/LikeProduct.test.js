import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LikeProduct } from './LikeProduct';

configure({ adapter: new Adapter() });

const props = {

        product: "",
        setLikedProducts: jest.fn(),
        removeLikedProduct: jest.fn()
}

describe('Does LikeProduct Component Render', () => {

    let wrapper = shallow(<LikeProduct {...props}/>);

    it('LikeProduct render its css class', () => {
        expect(wrapper.find('.LikeProduct').length).toBe(1);
    }); 

    it('Trigger the button on LikeProduct', () => {
        expect(wrapper.find('.LikeProduct__button').length).toBe(1);
        wrapper.find('Button').simulate('click');
        expect(wrapper.find('.LikeProduct__like').length).toBe(1);
    });
});
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header';

configure({ adapter: new Adapter() });

const props = {
    liked: ["SOME PRODUCT"]
}

describe('Does Header Component Render', () => {

    let wrapper = shallow(<Header {...props}/>);

    it('Header render its css class', () => {
        expect(wrapper.find('.Header').length).toBe(1);
    });
    
    it('Header renders Navbar', () => {
        expect(wrapper.find('Navbar').length).toBe(1);
    });
    
    it('Header renders NavbarBrand name', () => {
        expect(wrapper.find('NavbarBrand').text()).toBe('Depop');
    });
});
// 组件DOM测试
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkButton from '../src/LinkButton';

// React测试前，必须初始化
Enzyme.configure({
  adapter: new Adapter()
});

describe('Test LinkButton', () => {
  test('check api', () => {
    const component = shallow(<LinkButton/>);
    expect(component.text()).toEqual('dont like'); // 测试初始状态
    
    component.simulate('click');
    expect(component.text()).toEqual('like'); // 点击状态
  });
});


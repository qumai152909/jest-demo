// 快照测试
import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import LinkButton from '../src/LinkButton';

// React测试前，必须初始化
Enzyme.configure({
  adapter: new Adapter()
});

test('renders LinkButton correctly', () => {
  const component = render(<LinkButton/>);
  
  expect(renderToJson(component)).toMatchSnapshot();
});

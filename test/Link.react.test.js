// 使用React的test renderer和Jest的快照特性来和组件交互，获得渲染结果和生成快照文件

import React from 'react';
import CompCity from './Link.react';
import renderer from 'react-test-renderer';

test('CompCity test', () => {
  const component = renderer.create(
    <CompCity/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

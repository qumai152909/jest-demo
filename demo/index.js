import React, { Fragment } from 'react';
import { render } from 'react-dom';
import CompCity from '../src/index.js';

function AppDemo() {
  return (
    <Fragment>
      <CompCity/>
    </Fragment>
  );
}
render(<AppDemo/>, document.getElementById('content'));


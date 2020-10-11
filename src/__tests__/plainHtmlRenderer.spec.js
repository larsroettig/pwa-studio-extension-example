import React from 'react';
import FontAwesomeRenderer from '../fontAwesomeRenderer';
import { render } from '@testing-library/react';

test('render html with two fa-icons', () => {
  const html =
    '<body><h1>Hello World :FontAwesome:globe-europe </h1>' +
    '<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, :FontAwesome:coffee</span></body>';

  const { asFragment } = render(<FontAwesomeRenderer html={html} />);
  expect(asFragment()).toMatchSnapshot();
});

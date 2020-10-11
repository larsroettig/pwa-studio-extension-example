import React from 'react';
import { renderToString } from 'react-dom/server';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import PlainHtmlRenderer from './components/PlainHtmlRenderer';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function FontAwesomeRenderer(props) {
  let html = props.html;
  const result = html.match(/:FontAwesome:[\w\d-]*/g);
  const iconTemplate = iconName =>
    renderToString(<FontAwesomeIcon icon={iconName} />);

  // removes all duplicates
  result.filter((v, i) => result.indexOf(v) === i);
  result.forEach(match => {
    const iconName = match.replace(/:FontAwesome:/g, '');
    html = html.replace(new RegExp(match), iconTemplate(iconName));
  });

  return <PlainHtmlRenderer html={html} />;
}

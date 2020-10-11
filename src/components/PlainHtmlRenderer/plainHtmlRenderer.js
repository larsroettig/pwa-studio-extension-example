import React from 'react';

const toHTML = str => ({ __html: str });

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './plainHtmlRenderer.css';

const PlainHtmlRenderer = props => {
  const { html } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  // Even if empty, render a div with no content, for styling purposes.
  if (!html) {
    return <div />;
  }
  return <div dangerouslySetInnerHTML={toHTML(html)} className={classes} />;
};

export default PlainHtmlRenderer;

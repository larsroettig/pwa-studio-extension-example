import React from 'react';
const toHTML = str => ({ __html: str });

const PlainHtmlRenderer = ({ html }) => {
  // Even if empty, render a div with no content, for styling purposes.
  if (!html) {
    return <div />;
  }
  return <div dangerouslySetInnerHTML={toHTML(html)} />;
};

export default PlainHtmlRenderer;

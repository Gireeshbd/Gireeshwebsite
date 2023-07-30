import React from 'react';

const EmbeddedIframe = () => {
  return (
    <iframe
      src="https://embeds.beehiiv.com/91bb33d6-d192-4f13-8f0d-a72e33332135"
      data-test-id="beehiiv-embed"
      width="480"
      height="320"
      frameBorder="0"
      scrolling="no"
      style={{
        borderRadius: '4px',
        border: '2px solid #e5e7eb',
        margin: '0',
        backgroundColor: 'transparent'
      }}
    ></iframe>
  );
};

export default EmbeddedIframe;

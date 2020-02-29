import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import { theme } from 'zahir-ui';

addParameters({
  options: {
    showRoots: true,
  },
  dependencies: { 
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  }
});

addDecorator(muiTheme([theme({})]))

// Load the font and avoid re-loading it when components change
const fontLinkId = 'storybook-font-link-tag';
const fontUrl = 'https://fonts.googleapis.com/css?family=Muli:400,500,600,700,800,900&display=swap';

const loadFontsForStorybook = () => {
  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement('link');

    fontLink.id = fontLinkId;
    fontLink.href = fontUrl;
    fontLink.rel = 'stylesheet';

    document.head.appendChild(fontLink);
  }
};
loadFontsForStorybook();
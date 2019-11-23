import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  // let req = require.context('../src', true, /\.(tsx|js)$/);
  // req.keys().forEach(filename => req(filename));

  let req = require.context('../src', true, /\.stories\.(tsx|js)$/);
    req.keys().forEach(filename => req(filename));
  //   req = require.context('../src/molecules', true, /\.stories\.(tsx|js)$/);
  //   req.keys().forEach(filename => req(filename));
  //   req = require.context('../src/organisms', true, /\.stories\.(tsx|js)$/);
  //   req.keys().forEach(filename => req(filename));
  //   req = require.context('../src/templates', true, /\.stories\.(tsx|js)$/);
  //   req.keys().forEach(filename => req(filename));
}

// automatically import all files ending in *.stories.js
configure(loadStories, module);

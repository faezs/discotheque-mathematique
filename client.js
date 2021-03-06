// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  const foxLoc = new Location([0, 0, 7]);
  const screen = r360.getDefaultSurface();
  screen.setShape(Surface.SurfaceShape.Flat);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('fbox', { /* initial props */ }),
    screen
  );

  r360.renderToLocation(
    r360.createRoot('Fox'),
    foxLoc
  );

  // Load the initial environment
  const bg = r360.getAssetURL('360_world.jpg');
  console.log(bg);
  r360.compositor.setBackground(bg);
}

window.React360 = {init};

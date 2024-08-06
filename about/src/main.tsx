import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import About from './About';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: About,
  domElementGetter,
  errorBoundary(err: unknown) {
    return <div>Error! {err}</div>;
  },
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById("about")!
}

// const container = document.getElementById("about");
// const root = createRoot(container!);
// root.render(<About />);
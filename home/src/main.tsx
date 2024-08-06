import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
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
  return document.getElementById("home")!
}

// const container = document.getElementById('home');
// const root = createRoot(container!); 
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Header from './Header';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
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
  return document.getElementById("header")!
}

const container = document.getElementById('header');
const root = createRoot(container!);
root.render(<Header />);
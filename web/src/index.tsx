import React from "react"
import ReactDom from "react-dom"
import { App } from './App';
import { NuiProvider } from 'fivem-nui-react-lib';
import ResourceProvider from "./context/ResourceProvider";

ReactDom.render(
  <ResourceProvider>
    <NuiProvider resource="resource-name">
      <App />
    </NuiProvider>
  </ResourceProvider>,
  document.getElementById('app')
)
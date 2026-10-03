import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'

// Called by the prerender plugin in vite.config.js. Runs at build time only.
export function render() {
  return renderToStaticMarkup(<App />)
}

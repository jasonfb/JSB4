// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import ReactOnRails from 'react-on-rails';

import MyComponent from "./components/MyComponent"
ReactOnRails.register({ MyComponent });

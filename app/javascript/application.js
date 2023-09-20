// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import MyComponent from "./components/MyComponent"

const myComponent = new MyComponent();

document.querySelector("#my-app").innerHTML = myComponent.render();

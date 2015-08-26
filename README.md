# reactive
Biased generator for react apps. Supports sass and jade. 
The philosophy is based on development of standalone component.  

#### Features 
- Scaffolding App and Component
- Development and Production level of Compilation 
  - Bundle dependencies, 
  - Sourcemapping, 
  - Transform JSX, 
  - Vendor specific dependencies, 
  - App specific dependencies
  - Handle images & fonts
  
Requirements: webpack & webpack-dev-server
Installation: ./install.sh
Generated Files: 
webpack-config.js, package.json, app.json 

#### Usage 
```
npm add forms/datepicker  /* add a component */
npm run forms/datepicker  /* run component */

/* To run the app */
npm run dev
npm run prod
```

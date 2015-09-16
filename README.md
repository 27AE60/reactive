# reactive

Biased generator for react apps. Supports sass and jade. 

### Philosophy

Based on development of standalone component.  

---
#### Preview
---

### Features
- Scaffolding standalone components
- Bootstrap react + flux application
- Automation of tasks
  - Bundle dependencies, 
  - Sourcemapping, 
  - Transform JSX, 
  - Vendor specific dependencies, 
  - App specific dependencies
  - Handle images & fonts
  - Minify css, js, html
  - Optimize js, images
  - Auto prefix css
  
#### Installation
```
npm install <?>reactive -g
```

#### Usage 
```
# Bootstrapping Project
> reactive init

# Scaffold a component
> reactive init --components form/datepicker

# Watch changes in app
> reactive watch

# Watch changes in component
> reactive watch --components form/datepicker

# Build project
> reactive build

# List react components
> reactive list --components
```

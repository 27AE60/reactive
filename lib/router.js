/* Inspired from Yo router. */
'use strict';

/**
 * Handle commands routing.
 * @constructor
 */
var Router = module.exports = function() {
  this.routes = {};
};

/**
 * Navigate to a route
 * @param {String} name Route name
 * @param {*} arg Arguments of the handler
 */
Router.prototype.navigate = function(name, arg) {
  if (typeof this.routes[name] === 'function') {
    return this.routes[name].call(null, this, arg);
  }

  throw new Error('no routes called: ' + name);
};

/**
 * Register handler to a route
 * @param {String} name Route name
 * @param {Function} handler Route handler
 */
Router.prototype.register = function(name, handler) {
  if (typeof handler === 'function') {
    this.routes[name] = handler;
    return this;
  }
};

"use strict";

(function (core) {
  class Router {
    // Constructors
    constructor() {
      this.ActiveLink = "";
    }

    // Public properties - accessors and mutators
    get ActiveLink() {
      return this.m_activeLink;
    }

    set ActiveLink(link) {
      this.m_activeLink = link;
    }

    // Public methods
    /**
     * Add - creates new route in routing
     *
     * @param {string} route
     * @returns {void}
     */
    Add(route) {
      this.m_routingTable.push(route);
    }

    /**
     * AddTable - replaces routing table with updated version
     * @param {string} routingTable
     * @returns {void}
     */
    AddTable(routingTable) {
      this.m_routingTable = routingTable;
    }

    /**
     *
     * Find - returns the index of provided route, or -1 if the route is not found
     *
     * @param {string} route
     * @returns {number}
     */
    Find(route) {
      return this.m_routingTable.indexOf(route);
    }

    /**
     * Remove - removes item from the routing table and returns boolean representing success of remove attempt
     *
     * @param {string} route
     * @returns {boolean}
     */
    Remove(route) {
      if (this.Find(route) > -1) {
        this.m_routingTable.splice(this.Find(route), 1);
        return true;
      }
      return false;
    }

    /**
     * ToString - returns routing table as a comma-separated string
     *
     * @returns {string}
     */
    ToString() {
      return this.m_routingTable.toString();
    }
  }
  core.Router = Router;
})(core || (core = {}));

let router = new core.Router();
router.AddTable([
  "/",
  "/home",
  "/about",
  "/services",
  "/contact",
  "/contact-list",
  "/projects",
  "/register",
  "/login",
  "/edit",
]);

// Alias for location.pathname
let route = location.pathname;

// Check to see if route in browser has been set in router
if (router.Find(route) > -1) {
  router.ActiveLink = route == "/" ? "home" : route.substring(1);
} else {
  router.ActiveLink = "404";
}

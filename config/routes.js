/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/Home' },
  '/anmelden': { view: 'pages/Login' },
  '/Admin': {view: 'pages/Admin'},
  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'GET /carbrand': { controller: 'CarBrandController', action: 'find' },
  'GET /carmodel': { controller: 'CarModelController', action: 'find' },
  'GET /category': { controller: 'CategoryController', action: 'find' },
  'GET /products': { controller: 'ProductController', action: 'find' },

  'GET /carbrand/new': {view: 'pages/CarBrand/new'},
  'POST /carbrand': { controller:'CarBrandController', action: 'create'},

  'GET /carmodel/new': {controller:'CarModelController', action:'new'},
  'POST /carmodel': {controller: 'CarModelController', action:'create'},

  'GET /category/new': {view: 'pages/Category/new'},
  'POST /category': { controller:'CategoryController', action: 'create'},

  'GET /products/new': {controller:'ProductController', action:'new'},
  'POST /products': {controller: 'ProductController', action:'create'},
};

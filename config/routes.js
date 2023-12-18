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
  'GET /Anmelden': { view: 'pages/Login' },
  'GET /Admin': {action: 'view-admin'},
  'GET /Suche': {action: 'view-all-products'},
  'GET /Start': { view: 'pages/Home' },
  'GET /UeberUns': { view: 'pages/UeberUns' },
  
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

  'GET /carbrand/new': {controller: 'CarBrandController', action: 'new'},
  'POST /carbrand': { controller:'CarBrandController', action: 'create'},
  'GET /carbrand/:id/destroy': {controller:'CarBrandController', action: 'destroyOne'},

  'GET /carmodel/new': {controller:'CarModelController', action:'new'},
  'POST /carmodel': {controller: 'CarModelController', action:'create'},
  'GET /carmodel/:id/destroy': {controller:'CarModelController', action: 'destroyOne'},

  'GET /category/new': {controller:'CategoryController', action: 'new'},
  'POST /category': { controller:'CategoryController', action: 'create'},
  'GET /category/:id/destroy': {controller:'CategoryController', action: 'destroyOne'},

  'GET /products/new': {controller:'ProductController', action:'new'},
  'POST /products': {controller: 'ProductController', action:'create'},
  'GET /products/:id/destroy': {controller:'ProductController', action: 'destroyOne'},
  'GET /products/:id': {controller:'ProductController', action: 'findOne'},
  'GET /products/:id/edit': {controller:'ProductController', action: 'editOne'},
  'POST /products/:id/update': {controller:'ProductController', action: 'updateOne'},

  'GET   /Abmelden':                       { action: 'account/logout' },
  'POST  /login':                          { action: 'entrance/login' },
  'POST  /signup':                         { action: 'entrance/signup' },
  'POST  /updateProfile':                  { action: 'account/update-profile' },
  'POST  /updatePassword':                 { action: 'account/update-password' },
  'GET   /Registrieren':                   { action: 'entrance/view-signup' },

  'GET /shoppingbasket': 'ShoppingBasketController.show',
  'GET /shoppingbasket/put/:productid': 'ShoppingBasketController.put',
  'GET /shoppingbasket/remove/:productid': 'ShoppingBasketController.remove',

  'GET /api/product': { action: 'api/product/index'},
  'GET /api/basket': {  action:'api/basket/get' },
    'POST /api/basket': {  action:'api/basket/add' },
};
/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'view-all-products':true,
  'account/logout': true,
  'api/product/index':true,
  'view-admin': 'is-super-admin',

  CarBrandController: {
    '*': 'is-super-admin',
  },
  CarModelController: {
    '*': 'is-super-admin',
  },
 CategoryController: {
    '*': 'is-super-admin',
  },
  ProductController: {
    'create': 'is-seller-or-admin',
    'find': true,
    'destroyOne': 'is-super-admin',
    'new': 'is-seller-or-admin',
    'findOne': true,
    'editOne': 'is-super-admin',
    'updateOne': 'is-super-admin',
  },
 
};

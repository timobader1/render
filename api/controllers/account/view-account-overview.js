module.exports = {
  friendlyName: 'View account overview',
  description: 'Display "Account Overview" page.',
  exits: {success: {viewTemplatePath: 'pages/account/account-overview'}},
  fn: async function () {
    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures
        ? sails.config.custom.stripePublishableKey
        : void 0,
    };
  },
};

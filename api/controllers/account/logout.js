module.exports = {
  friendlyName: 'Logout',
  description: 'Log out of this app.',
  extendedDescription: "This action deletes the `req.session.userId` key from the session of the requesting user agent.\n  Actual garbage collection of session data depends on this app's session store, and\n  potentially also on the [TTL configuration](https://sailsjs.com/docs/reference/configuration/sails-config-session)\n  you provided for it.\n  \n  Note that this action does not check to see whether or not the requesting user was\n  actually logged in.  (If they weren't, then this action is just a no-op.)",
  exits: {
    success: {
      description: 'The requesting user agent has been successfully logged out.',
    },
    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging out from a web browser, the user is redirected away.',
      responseType: 'redirect',
    },
  },
  fn: async function () {
    delete this.req.session.userId;
    if (!this.req.wantsJSON) {
      throw {redirect: '/Anmelden'};
    }
  },
};

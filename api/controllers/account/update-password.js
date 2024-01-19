module.exports = {
  friendlyName: 'Update password',
  description: 'Update the password for the logged-in user.',
  inputs: {
    password: {
      description: 'The new, unencrypted password.',
      example: 'abc123v2',
      required: !0,
    },
  },
  exits: {
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging in from a web browser, the user is redirected away.',
      responseType: 'redirect',
    },
  },
  fn: async function({password: e}) {
    sails.log.debug ('Update Password....');
    var s = await sails.helpers.passwords.hashPassword (e);
    throw (await User.updateOne ({id: this.req.me.id}).set ({password: s}), {
      redirect: '/account',
    });
  },
};

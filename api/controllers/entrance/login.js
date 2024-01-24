module.exports = {
  friendlyName: 'Login',
  description: 'Log in using the provided email and password combination.',
  extendedDescription: 'This action attempts to look up the user record in the database with the\n  specified email address.  Then, if such a user exists, it uses\n  bcrypt to compare the hashed password from the database with the provided\n  password attempt.',
  inputs: {
    emailAddress: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: !0,
    },
    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: !0,
    },
    rememberMe: {
      description: "Whether to extend the lifetime of the user's session.",
      extendedDescription: 'Note that this is NOT SUPPORTED when using virtual requests (e.g. sending\n  requests over WebSockets instead of HTTP).',
      type: 'boolean',
    },
  },
  exits: {
    success: {
      description: 'The requesting user agent has been successfully logged in.',
      extendedDescription: 'Under the covers, this stores the id of the logged-in user in the session\n  as the `userId` key.  The next time this user agent sends a request, assuming\n  it includes a cookie (like a web browser), Sails will automatically make this\n  user id available as req.session.userId in the corresponding action.  (Also note\n  that, thanks to the included "custom" hook, when a relevant request is received\n  from a logged-in user, that user\'s entire record from the database will be fetched\n  and exposed as `req.me`.)',
    },
    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging in from a web browser, the user is redirected away.',
      responseType: 'redirect',
    },
    badCombo: {
      description: 'The provided email and password combination does not\n        match any user in the database.',
      responseType: 'unauthorized',
    },
  },
  fn: async function({emailAddress: e, password: s, rememberMe: t}) {
    var i = await User.findOne ({emailAddress: e.toLowerCase ()});
    if (!i) throw 'badCombo';
    if (
      (await sails.helpers.passwords
        .checkPassword (s, i.password)
        .intercept ('incorrect', 'badCombo'), t &&
        (this.req.isSocket
          ? sails.log.warn (
              "Received `rememberMe: true` from a virtual request, but it was ignored\nbecause a browser's session cookie cannot be reset over sockets.\nPlease use a traditional HTTP request instead."
            )
          : (this.req.session.cookie.maxAge =
              sails.config.custom.rememberMeCookieMaxAge)), (this.req.session.userId =
        i.id), !this.req.wantsJSON)
    )
      throw {redirect: '/Home'};
  },
};

module.exports = {
  friendlyName: 'Signup',
  description: 'Sign up for a new user account.',
  extendedDescription: 'This creates a new user record in the database, signs in the requesting user agent\n  by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and\n  (if emailing with Mailgun is enabled) sends an account verification email.\n  \n  If a verification email is sent, the new user\'s account is put in an "unconfirmed" state\n  until they confirm they are using a legitimate email address (by clicking the link in\n  the account verification message.)',
  inputs: {
    emailAddress: {
      required: !0,
      type: 'string',
      isEmail: !0,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },
    password: {
      required: !0,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.',
    },
    fullName: {
      required: !0,
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: "The user's full name.",
    },
  },
  exits: {
    success: {description: 'New user account was created successfully.'},
    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request parameters should have been validated/coerced _before_ they were sent.',
    },
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
  fn: async function({emailAddress: e, password: s, fullName: i}) {
    var a = e.toLowerCase (),
      r = await User.create (
        _.extend (
          {
            fullName: i,
            emailAddress: a,
            password: await sails.helpers.passwords.hashPassword (s),
            tosAcceptedByIp: this.req.ip,
          },
          sails.config.custom.verifyEmailAddresses
            ? {
                emailProofToken: await sails.helpers.strings.random (
                  'url-friendly'
                ),
                emailProofTokenExpiresAt: Date.now () +
                  sails.config.custom.emailProofTokenTTL,
                emailStatus: 'unconfirmed',
              }
            : {}
        )
      )
        .intercept ('E_UNIQUE', 'emailAlreadyInUse')
        .intercept ({name: 'UsageError'}, 'invalid')
        .fetch ();
    if (((this.req.session.userId = r.id), !this.req.wantsJSON))
      throw {redirect: '/Anmelden'};
  },
};

module.exports = {
  friendlyName: 'Update profile',
  description: 'Update the profile for the logged-in user.',
  inputs: {fullName: {type: 'string'}, emailAddress: {type: 'string'}},
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
  fn: async function({fullName: e, emailAddress: i}) {
    var a, s = i;
    if (
      (void 0 !== s && (s = s.toLowerCase ()), (a = void 0 === s ||
        ('change-requested' !== this.req.me.emailStatus &&
          s === this.req.me.emailAddress) ||
        ('change-requested' === this.req.me.emailStatus &&
          s === this.req.me.emailChangeCandidate)
        ? ''
        : 'change-requested' === this.req.me.emailStatus &&
            s === this.req.me.emailAddress
            ? 'cancel-pending-change'
            : 'change-requested' === this.req.me.emailStatus &&
                s !== this.req.me.emailAddress
                ? 'modify-pending-change'
                : sails.config.custom.verifyEmailAddresses &&
                    'unconfirmed' !== this.req.me.emailStatus
                    ? 'begin-change'
                    : 'change-immediately'), _.contains (
        ['begin-change', 'change-immediately', 'modify-pending-change'],
        a
      ))
    ) {
      let e = await User.findOne ({
        or: [{emailAddress: s}, {emailChangeCandidate: s}],
      });
      if (e) throw 'emailAlreadyInUse';
    }
    var t = {fullName: e};
    throw (_.extend (t, {
      emailAddress: s,
      emailChangeCandidate: '',
      emailProofToken: '',
      emailProofTokenExpiresAt: 0,
      emailStatus: 'unconfirmed' === this.req.me.emailStatus
        ? 'unconfirmed'
        : 'confirmed',
    }), await User.updateOne ({id: this.req.me.id}).set (t), {
      redirect: '/account',
    });
  },
};

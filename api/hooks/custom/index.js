module.exports = function (e) {
  return {
    initialize: async function () {
      e.log.info ('Initializing project hook... (`api/hooks/custom/`)');
    },
    routes: {
      before: {
        '/*': {
          skipAssets: !0,
          fn: async function (t, o, s) {
            var i, n = require ('url');
            if ('GET' === t.method) {
              if (void 0 !== o.locals._environment)
                throw new Error (
                  'Cannot attach Sails environment as the view local `_environment`, because this view local already exists!  (Is it being attached somewhere else?)'
                );
              if (
                ((o.locals._environment = e.config.environment), void 0 !==
                  o.locals.me)
              )
                throw new Error (
                  'Cannot attach view local `me`, because this view local already exists!  (Is it being attached somewhere else?)'
                );
              o.locals.me = void 0;
            }
            try {
              i = n.parse (e.config.custom.baseUrl).host;
            } catch (e) {}
            if (
              ('staging' === e.config.environment ||
                'production' === e.config.environment) &&
              !t.isSocket &&
              'GET' === t.method &&
              t.hostname !== i
            )
              return e.log.info (
                'Redirecting GET request from `' +
                  t.hostname +
                  '` to configured expected host (`' +
                  i +
                  '`)...'
              ), o.redirect (e.config.custom.baseUrl + t.url);
            if (
              (o.setHeader ('Cache-Control', 'no-cache, no-store'), !t.session)
            )
              return s ();
            if (!t.session.userId) return s ();
            var r = await User.findOne ({id: t.session.userId});
            if (!r)
              return e.log.warn (
                'Somehow, the user record for the logged-in user (`' +
                  t.session.userId +
                  '`) has gone missing....'
              ), delete t.session.userId, o.unauthorized ();
            if (
              ((r.password && 'unconfirmed' !== r.emailStatus) ||
                (r.dontDisplayAccountLinkInNav = !0), void 0 !== t.me)
            )
              throw new Error (
                'Cannot attach logged-in user as `req.me` because this property already exists!  (Is it being attached somewhere else?)'
              );
            t.me = r;
            var a = 6e4, l = Date.now ();
            if (
              (r.lastSeenAt < l - a &&
                User.updateOne ({id: r.id}).set ({lastSeenAt: l}).exec (t => {
                  t
                    ? e.log.error (
                        'Background task failed: Could not update user (`' +
                          r.id +
                          '`) with a new `lastSeenAt` timestamp.  Error details: ' +
                          t.stack
                      )
                    : e.log.verbose (
                        'Updated the `lastSeenAt` timestamp for user `' +
                          r.id +
                          '`.'
                      );
                }), 'GET' === t.method)
            ) {
              if (void 0 !== o.locals.me)
                throw new Error (
                  'Cannot attach logged-in user as the view local `me`, because this view local already exists!  (Is it being attached somewhere else?)'
                );
              var c = _.extend ({}, r);
              c.password &&
                delete c.password, (o.locals.me = c), (o.locals.isBillingEnabled =
                e.config.custom.enableBillingFeatures), (o.locals.isEmailVerificationRequired =
                e.config.custom.verifyEmailAddresses);
            }
            return s ();
          },
        },
      },
    },
  };
};

module.exports = function () {
  var e = this.req, s = this.res;
  return sails.log.verbose (
    'Ran custom response: res.unauthorized()'
  ), e.wantsJSON
    ? s.sendStatus (401)
    : (e.session.userId && delete e.session.userId, s.redirect ('/Anmelden'));
};

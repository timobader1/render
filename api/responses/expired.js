module.exports = function () {
  var s = this.req, e = this.res;
  return sails.log.verbose ('Ran custom response: res.expired()'), s.wantsJSON
    ? e.status (498).send ('Token Expired/Invalid')
    : e.status (498).view ('498');
};

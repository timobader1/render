module.exports = async function (e, n, u) {
  return e.me ? u () : n.unauthorized ();
};

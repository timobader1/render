module.exports = async function (e, n, r) {
  return e.me
    ? e.me.isSellerOrAdmin || e.me.isSuperAdmin ? r () : n.forbidden ()
    : n.unauthorized ();
};

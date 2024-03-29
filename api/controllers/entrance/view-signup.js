module.exports = {
  friendlyName: 'View signup',
  description: 'Display "Signup" page.',
  exits: {
    success: {viewTemplatePath: 'pages/Signup'},
    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect',
    },
  },
  fn: async function () {
    if (this.req.me) throw {redirect: '/'};
    return {};
  },
};

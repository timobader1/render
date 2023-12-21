module.exports = {


    friendlyName: 'View all Products',
  
  
    description: 'Display "Search Page" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/search'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };
  
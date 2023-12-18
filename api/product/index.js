module.exports = {


    friendlyName: 'Index',
  
  
    description: 'Index Product.',
  
  
    inputs: {
  
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
      return products = await Product.find();
  
      
  
    }
  
  
  };
  
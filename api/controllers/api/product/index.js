module.exports = {


    friendlyName: 'Index',
  
  
    description: 'Index Product.',
  
  
    inputs: {
  
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
      sails.log.debug("List all Products....")
      return products = await Product.find().populate("category").populate("carmodel");
  
      
  
    }
  
  
  };
  
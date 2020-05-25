import mongoose from 'mongoose'
import db from './server'
import Product from './product-model'
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  console.log(event)
  try {
    // Use Product.Model to find all products
    const products = await Product.find({category: JSON.parse(event.body.name)}),
          response = {
            msg: "Products successfully found",
            data: products
          }
    
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
    
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}
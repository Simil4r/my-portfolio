import mongoose from 'mongoose'
import db from './server'
import Product from './product-model'
exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    let obj = JSON.parse(event.body)
    try {
        let products = []
        switch (obj.action) {
            case "find":
                products = await Product.find({ category: obj.name }),
                    response = {
                        msg: "Products successfully found",
                        data: products
                    }

                return {
                    statusCode: 200,
                    body: JSON.stringify(response)
                }
                break;
            case "findRecommended":
                products = await Product.find({ recommended: true }),
                    response = {
                        msg: "Products successfully found",
                        data: products
                    }

                return {
                    statusCode: 200,
                    body: JSON.stringify(response)
                }
                break;
            default: console.log("default")
        }

    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message })
        }
    }
}
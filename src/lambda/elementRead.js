import mongoose from 'mongoose'
import db from './server'
import Element from './element-model'
exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    let obj = JSON.parse(event.body)
    try {
        let response = {}
        switch (obj.action) {
            case "find":
                elements = await Element.find({ category: obj.name })
                response = {
                    msg: "Products successfully found",
                    data: elements
                }
                return {
                    statusCode: 200,
                    body: JSON.stringify(response)
                }

            case "add":
                const element = {
                    title: obj.title,
                    description: obj.description,
                    date: obj.date,
                    username: obj.username,
                    done: false
                }
                const newElement = new Element(element);
                newElement.save()
                    .then(() => {
                        return {
                            statusCode: 200,
                            body: JSON.stringify({ data: "User added" })
                        }
                    })
            case "select":
                Element.find({username: obj.username, date: obj.date}, (err, elements)=>{
                    if(err) throw err;
                    return{
                        statusCode: 200,
                        body: JSON.stringify({ data: elements })
                    }
                })
            case "check":
                Element.updateOne({_id: obj.id}, {done: obj.done}, (err, result)=>{
                    if(err) throw err;
                })
            case "update":
                Element.updateOne({_id: obj.id},{
                    title: obj.title,
                    description: obj.description,
                    date: obj.date}, (err, result)=>{
                        if(err) throw err;
                        return{
                            statusCode: 200,
                            body: JSON.stringify({ msg: "edited" })
                        }
                    })
            case "delete":
                Element.deleteOne({_id: obj.id})
                    .then(()=>{return{
                        statusCode: 200,
                        body: JSON.stringify({ msg: "deleted" })
                    }})
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
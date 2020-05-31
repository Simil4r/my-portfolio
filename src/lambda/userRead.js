import mongoose from 'mongoose'
import db from './server'
import User from './user-model'
import bcrypt from 'bcrypt'
exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    let obj = JSON.parse(event.body)
    let user;
    let response = {}
    console.log("WORKING OR NOT?!?!?")
    try {
        switch (obj.action) {
            case "findUser":
                user = await User.findOne({ username: obj.username })
                    console.log("user: " + user)
                    if (user){
                        response = {
                            data: user
                        }
                        return {
                            statusCode: 200,
                            body: JSON.stringify(response)
                        }
                    }
                    else{
                        response = {
                            data: ""
                        }
                    } return {
                        statusCode: 200,
                        body: JSON.stringify(response)
                    }
            case "add":
                bcrypt.hash(obj.password, 10, (err, hash) => {
                    if (err) throw err;
                    const user = {
                        username: obj.username,
                        password: hash
                    }
                    const newUser = new User(user)
                    newUser.save()
                        .then(() => {
                            return {
                                statusCode: 200,
                                body: JSON.stringify({ data: "User added" })
                            }
                        })
                })
            case "login":
                user = await User.findOne({ username: obj.username })
                if (user) {
                    bcrypt.compare(obj.password, user.password, (err, result) => {
                        if (!result) return { statusCode: 404, body: JSON.stringify({ err: "Incorrect username or password" }) }
                        else return { statusCode: 200, body: JSON.stringify({ result: obj.username }) }
                    })
                } else return { statusCode: 404, body: JSON.stringify({ err: "Incorrect username or password" }) }
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
import mongoose from 'mongoose'
import db from './server'
import User from './user-model'
import bcrypt from 'bcrypt'
exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    let obj = JSON.parse(event.body)
    let user;
    try {
        switch (obj.action) {
            case "findUser":
                await User.find({username: boj.username}, (err, users)=>{
                    if(err) return {statusCode: 404, body: JSON.stringify({err: "error"})}
                    return {
                        statusCode: 200,
                        body: JSON.stringify(users)
                    }
                })
            case "add":
                bcrypt.hash(obj.password, 10, (err, hash)=>{
                    if(err) throw err;
                    const user={
                        username: obj.username,
                        password: hash
                    }
                    const newUser = new User(user)
                    newUser.save()
                    .then(()=>{
                        return {
                            statusCode: 200,
                            body: JSON.stringify("User added")
                        }
                    })
                })
            case "login":
                user = await User.findOne({ username: obj.username }, (err, user)=>{
                    if(err) return {statusCode: 404, body: JSON.stringify({err: "Incorrect username or password"})}
                    if(user){
                        bcrypt.compare(obj.password, user.password, (err, result)=>{
                            if(!result) return {statusCode: 404, body: JSON.stringify({err: "Incorrect username or password"})}
                            else return {statusCode: 200, body: JSON.stringify({result: obj.username})}
                        })
                    }else return {statusCode: 404, body: JSON.stringify({err: "Incorrect username or password"})}
                })
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
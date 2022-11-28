const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Check if user already exists
    db.hgetall(user.username, function(err, res) {
      if (err) return callback(err, null)
      if (!res) {
        // Save to DB
        db.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null)
          callback(null, res) // Return callback
        })
      } else {
        callback(new Error("User already exists"), null)
      }
    })
  },
  get: (username, callback) => {
    if(!username)
      return callback(new Error("Username must be provided"), null)
    db.hgetall(username, function(err, res) {
      if (err) return callback(err, null)
      if (res)
        callback(null, res)
      else
        callback(new Error("User doesn't exists"), null)
    })
  },
  //update the name or the age for a user
  update: (user,callback) =>{
    if(!user.username)
      return callback(new Error("Username must be provided"), null)
    //create a user schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Check if user already exists
    db.hgetall(user.username, function(err, res) {
      if (err) return callback(err, null)
      if (res) {
        // Save to DB
        db.hmset(user.username, userObj, (err, res) => {
        if (err) return callback(err, null)
        callback(null, res) // Return callback
        })
      } else {
        callback(new Error("User already exists"), null)
      }
    })
    
  },
  delete: (user,callback) =>{
    if(!user.username)
      return callback(new Error("Username must be provided"), null)
    // Check if user exists
    db.hgetall(user.username, function(err, res) {
      if (err) return callback(err, null)
      if (res) {
        // drop from DB
        db.del(user.username,(err,res)=>{
          if (err) return callback(err, null)
          callback(null, res) // Return callback

        })
      } else {
        callback(new Error("User not found"), null)
      }
    })
    
  }
}

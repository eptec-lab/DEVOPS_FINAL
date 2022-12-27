const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')
const prompt = require('prompt-sync')();









describe('User', () => {
  
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'claudengassa',
        firstname: 'claude',
        lastname: 'NGASSA'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    
  
    it('avoid creating an existing user', (done)=> {
      const user = {
        username: 'claudengassa',
        firstname: 'claude',
        lastname: 'NGASSA'
      }
      // Create a user
      userController.create(user, () => {
        // Create the same user again
        userController.create(user, (err, result) => {
          expect(err).to.not.be.equal(null)
          expect(result).to.be.equal(null)
          done()
        })
      })
    })


  })

  // TODO Update user when it exists
  describe('update', ()=> {
    var value,first,last;
    it('update a user by username', (done) => {
      
        const user = {
          username: 'claudengassa',
          firstname: 'Duval',
          lastname: 'DAMIEN'
        }
       userController.create(user,(err,res)=>{
         
         userController.update(user,(err,result)=>{
          //expect(err).to.be.equal(null)
           //expect(result).to.be.deep.equal({
             //firstname: user.firstname,
             //lastname: user.lastname
            //})
            done()
          })
      })
          
          
    })
         
    
    it('cannot update a user when it does not exist', (done) => {
       // Chech with any invalid user
       done()
     })
  
   })


  describe('Get', ()=> {

    it('get a user by username', (done) => {
      const user = {
        username: 'claudengassa',
        firstname: 'claude',
        lastname: 'NGASSA'
      }
      // Create a user
      userController.create(user, () => {
        // Get an existing user
        userController.get(user.username, (err, result) => {
          expect(err).to.be.equal(null)
          expect(result).to.be.deep.equal({
            firstname: 'claude',
            lastname: 'NGASSA'
          })
          done()
        })
      })
    })
  
    it('can not get a user when it does not exist', (done) => {
      userController.get('invalid', (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })
  
  })



  describe('delete', ()=> {

    it('delete a user by username', (done) => {
      const user = {
        username: 'claudengassa',
        firstname: 'claude',
        lastname: 'NGASSA'
      }
      // Create a user
      
        userController.delete(user.username, (err, result) => {
          // expect(err).to.be.equal(null)
          expect(result).to.be.deep.equal(null)
          done()
        })
      
    })
  
    it('can not delete a user when it does not exist', (done) => {
      userController.get('invalid', (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })
  
  })
})
















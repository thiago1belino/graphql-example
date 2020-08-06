const users =[ 
  {id: 1, name: 'User One', email: "useronse@email.com"},
  {id: 2, name: 'User Two', email: "usertwo@email.com"},
]

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser:() => users[0]
  },
}
// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(){
        this.emit('User logged', data);
    }
}

const user = new Users();

user.on('User logged', data => {
    console.log(data);
});

Users.userLogged({ user: 'Victor Obrien'})
const bycrypt = require ('bycryptjs'); 

class User {
    constructor(id, username, password, role){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    async hashPassword(password){
        this.password = await bycrypt.hash(password, 10);
    }
    async validatePassword(password){
        return bycrypt.compare(password, this.password);
    }
}
module.exports = User;
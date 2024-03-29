class User {
    private name: string;
    username: string;
    password: string;
    constructor(name: string, username: string, password: string) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login(username: string, password: string) {
        if (username === this.username && password === this.password) {
            console.log('Login Successfully')
        } else {
            console.log('Authentication Failed!!');
        }
    }

    setPassword(newPassword: string) {
        let isValid = false;
        isValid = this.validateUsernameOrPassword(newPassword);
        if (isValid) {
            this.password = newPassword
        } else {
            console.log('Password not valid');
        }
    }

    validateUsernameOrPassword(text: string): boolean {
        if (text.length > 6) {
            return true;
        }
        return false;
    }
};
class author extends User {
    numOfPost: number;
    email: string;
    constructor(email: string, name: string, username: string, password: string) {
        super(name, username, password);
        this.email = email;
        this.numOfPost = 0;
    }

    createPost() {
        this.numOfPost++;
    }

    getNumOfPost() {
        return this.numOfPost;
    }
}

let author11 = new Author('ex@gmail.com', 'author1', 'author1', '1234567');
console.log(author1.email);
author.login('author1', '1234567');

let user = new User('user1', 'user1', '123456');

console.log(user1.username);
user1.login('user1', '123456')
user1.setPassword('12')
//console.log(user1.name) Erro Property 'name' is private and only accessible within class 'User'
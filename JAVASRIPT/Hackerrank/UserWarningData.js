//Inherticance
class User {
    constructor(userName) {
      this.username = userName;
    }
  
    getUsername() {
      return this.username;
    }
  
    setUsername(userName) {
      this.username = userName;
    }
  }
  
  class ChatUser extends User {
    constructor(userName) {
      super(userName);
      this.warning = 0;
    }
  
    giveWarning() {
      this.warning += 1;
    }
  
    getWarningCount() {
      return this.warning;
    }
  }
  
  // Example usage:
  
  // Create a ChatUser
  const chatUser = new ChatUser('Alice');
  
  // Get the username
  console.log(chatUser.getUsername()); // Output: Alice
  
  // Give a warning to the chat user
  chatUser.giveWarning();
  chatUser.giveWarning();
  console.log(chatUser.getWarningCount()); // Output: 2
  
  // Change the username
  chatUser.setUsername('Bob');
  console.log(chatUser.getUsername()); // Output: Bob
  
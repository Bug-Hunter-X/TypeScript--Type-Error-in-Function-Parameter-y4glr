function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

function greetUser(users: string[]): string[] {
  return users.map(user => greeter(user));
}

console.log(greetUser(user)); // Correct usage
import { Service } from "typedi";
import User from "../model/User";
import fetch from 'node-fetch';

@Service()
class UserRepository {

  private readonly users: User[] = [
    { name: 'Emily', email: 'emily@email.com' },
    { name: 'John', email: 'john@email.com' },
    { name: 'Jane', email: 'jane@email.com' },
  ];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getRandomUsers(): Promise<User[]> {
    return await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      // Access your data here
      console.log("First user in the array:");
      console.log(data[0]);
      console.log("Name of the first user in the array:");
      console.log(`${data[0].name}`);
      return data;
    });
  }
}

export default UserRepository;
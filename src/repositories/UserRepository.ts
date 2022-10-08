import { Service } from "typedi";
import User from "../models/User";

@Service()
class UserRepository {

  private readonly users: User[] = [
    { name: 'Emily' },
    { name: 'John' },
    { name: 'Jane' },
  ];

  private randomUsers: any = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getRandomUsers(): Promise<User[]> {
    fetch("https://randomuser.me/api/?results=5")
      .then((results) => {
        this.randomUsers = results.json()
        return this.randomUsers;
      })
      .then((data) => {
        console.log(data);
        // Access your data here
        return this.randomUsers;
      });
    return this.randomUsers;
  }
}

export default UserRepository;

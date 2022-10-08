import { Service } from "typedi";
import User from "../model/User";
import UserRepository from "../repository/UserRepository";

@Service()
class UserService {
  constructor(private readonly userRepository: UserRepository) { }
  async getAllUsers(): Promise<User[]> {
    const result = await this.userRepository.getAllUsers();
    return result;
  }

  async getRandomUsers(): Promise<User[]> {
    const result = await this.userRepository.getRandomUsers();
    return result;
  }
}

export default UserService;

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (user.admin === false) { 
      throw new Error("You don't have enough right for this action");
    }
    
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

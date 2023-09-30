import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserRepo, IUserReturn } from "../../interfaces/users.interfaces"
import { returnUserSchema } from "../../schemas/users.schema"

export const retrieveUserService = async (id: string): Promise<IUserReturn> => {
  
    const userRepository: IUserRepo = AppDataSource.getRepository(User)
  
    const findUser = await userRepository.findOne({
      where: {
        id: parseInt(id),
      },
    })
  
    const user = returnUserSchema.parse(findUser!)
  
    return user 

  }
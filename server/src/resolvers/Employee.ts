import { Employee } from "./../entities/Employee";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async employees(): Promise<Employee[]> {
    return Employee.find();
  }
}

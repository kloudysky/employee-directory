import { Employee } from "./../entities/Employee";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class EmployeeInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  title: string;

  @Field()
  photoUrl: string;
}
@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  employees(): Promise<Employee[]> {
    return Employee.find();
  }

  @Mutation(() => Employee)
  async createEmployee(
    @Arg("options", () => EmployeeInput) options: EmployeeInput
  ): Promise<Employee> {
    return await Employee.create(options).save();
  }
}

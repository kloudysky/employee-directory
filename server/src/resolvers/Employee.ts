import { Employee } from "./../entities/Employee";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

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

@InputType()
class EmployeeUpdateInput {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  photoUrl?: string;
}
@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  employees(): Promise<Employee[]> {
    return Employee.find();
  }

  @Query(() => Employee)
  employee(@Arg("id", () => Int) id: number) {
    return Employee.findOne(id);
  }

  @Mutation(() => Employee)
  async createEmployee(
    @Arg("options", () => EmployeeInput) options: EmployeeInput
  ): Promise<Employee> {
    return await Employee.create(options).save();
  }

  @Mutation(() => Boolean)
  async updateEmployee(
    @Arg("id", () => Int) id: number,
    @Arg("options", () => EmployeeUpdateInput) options: EmployeeUpdateInput
  ) {
    await Employee.update({ id }, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("id", () => Int) id: number) {
    await Employee.delete({ id });
    return true;
  }
}

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

  @Query(() => Employee, { nullable: true })
  employee(@Arg("id", () => Int) id: number): Promise<Employee | undefined> {
    return Employee.findOne(id);
  }

  @Mutation(() => Employee)
  async createEmployee(
    @Arg("options", () => EmployeeInput) options: EmployeeInput
  ): Promise<Employee> {
    return await Employee.create(options).save();
  }

  @Mutation(() => Employee, { nullable: true })
  async updateEmployee(
    @Arg("id", () => Int) id: number,
    @Arg("options", () => EmployeeUpdateInput) options: EmployeeUpdateInput
  ): Promise<Employee | undefined> {
    const employee = Employee.findOne(id);
    if (!employee) {
      return undefined;
    }
    if (typeof options !== "undefined") {
      await Employee.update({ id }, options);
    }
    return employee;
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Employee.delete({ id });
    return true;
  }
}

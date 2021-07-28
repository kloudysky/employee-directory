import { Employee } from "./../entities/Employee";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
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
  department: string;

  @Field()
  state: string;

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
  department?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  photoUrl?: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class EmployeeResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Employee, { nullable: true })
  employee?: Employee;
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

  @Mutation(() => EmployeeResponse)
  async createEmployee(
    @Arg("options", () => EmployeeInput) options: EmployeeInput
  ): Promise<EmployeeResponse> {
    if (options.firstName.length < 2) {
      return {
        errors: [
          {
            field: "firstName",
            message: "First name must be longer than 1 character",
          },
        ],
      };
    }
    if (options.lastName.length < 2) {
      return {
        errors: [
          {
            field: "lastName",
            message: "Last name must be longer than 1 character",
          },
        ],
      };
    }
    if (options.title.length <= 2) {
      return {
        errors: [
          {
            field: "title",
            message: "Title must be longer than 2 characters",
          },
        ],
      };
    }
    if (
      options.photoUrl.length > 0 &&
      options.photoUrl.match(/\.(jpeg|jpg|gif|png)$/) === null
    ) {
      return {
        errors: [
          {
            field: "photoUrl",
            message: "You must enter a valid image address or leave blank",
          },
        ],
      };
    } else {
      options.photoUrl =
        "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
    }
    const employee = await Employee.create(options).save();
    return { employee };
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
    //add try catch block
    await Employee.delete({ id });
    return true;
  }
}

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type Employee = {
  __typename?: 'Employee';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  title: Scalars['String'];
  department: Scalars['String'];
  state: Scalars['String'];
  photoUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type EmployeeInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  title: Scalars['String'];
  department: Scalars['String'];
  state: Scalars['String'];
  photoUrl: Scalars['String'];
};

export type EmployeeResponse = {
  __typename?: 'EmployeeResponse';
  errors?: Maybe<Array<FieldError>>;
  employee?: Maybe<Employee>;
};

export type EmployeeUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee: EmployeeResponse;
  updateEmployee?: Maybe<Employee>;
  deleteEmployee: Scalars['Boolean'];
};


export type MutationCreateEmployeeArgs = {
  options: EmployeeInput;
};


export type MutationUpdateEmployeeArgs = {
  options: EmployeeUpdateInput;
  id: Scalars['Int'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  employees: Array<Employee>;
  employee?: Maybe<Employee>;
};


export type QueryEmployeeArgs = {
  id: Scalars['Int'];
};

export type EmployeeFragment = (
  { __typename?: 'Employee' }
  & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'title' | 'department' | 'state' | 'photoUrl' | 'updatedAt' | 'createdAt'>
);

export type CreateEmployeeMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  title: Scalars['String'];
  department: Scalars['String'];
  state: Scalars['String'];
  photoUrl: Scalars['String'];
}>;


export type CreateEmployeeMutation = (
  { __typename?: 'Mutation' }
  & { createEmployee: (
    { __typename?: 'EmployeeResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, employee?: Maybe<(
      { __typename?: 'Employee' }
      & EmployeeFragment
    )> }
  ) }
);

export type EmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeesQuery = (
  { __typename?: 'Query' }
  & { employees: Array<(
    { __typename?: 'Employee' }
    & EmployeeFragment
  )> }
);

export const EmployeeFragmentDoc = gql`
    fragment Employee on Employee {
  id
  firstName
  lastName
  title
  department
  state
  photoUrl
  updatedAt
  createdAt
}
    `;
export const CreateEmployeeDocument = gql`
    mutation CreateEmployee($firstName: String!, $lastName: String!, $title: String!, $department: String!, $state: String!, $photoUrl: String!) {
  createEmployee(
    options: {firstName: $firstName, lastName: $lastName, title: $title, department: $department, state: $state, photoUrl: $photoUrl}
  ) {
    errors {
      field
      message
    }
    employee {
      ...Employee
    }
  }
}
    ${EmployeeFragmentDoc}`;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      title: // value for 'title'
 *      department: // value for 'department'
 *      state: // value for 'state'
 *      photoUrl: // value for 'photoUrl'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, options);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const EmployeesDocument = gql`
    query Employees {
  employees {
    ...Employee
  }
}
    ${EmployeeFragmentDoc}`;

/**
 * __useEmployeesQuery__
 *
 * To run a query within a React component, call `useEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
      }
export function useEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
        }
export type EmployeesQueryHookResult = ReturnType<typeof useEmployeesQuery>;
export type EmployeesLazyQueryHookResult = ReturnType<typeof useEmployeesLazyQuery>;
export type EmployeesQueryResult = Apollo.QueryResult<EmployeesQuery, EmployeesQueryVariables>;
import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Person = {
  __typename?: 'Person';
  name: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags2?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PersonInput = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  person: Person;
};


export type QueryPersonArgs = {
  personInput: PersonInput;
};

export type PersonQueryVariables = Exact<{
  personInput: PersonInput;
}>;


export type PersonQuery = { __typename?: 'Query', person: { __typename?: 'Person', name: string, tags?: Array<string | null> | null, tags2?: Array<string | null> | null } };


export const PersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Person"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"person"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"personInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"tags2"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePersonQuery__
 *
 * To run a query within a Vue component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePersonQuery({
 *   personInput: // value for 'personInput'
 * });
 */
export function usePersonQuery(variables: PersonQueryVariables | VueCompositionApi.Ref<PersonQueryVariables> | ReactiveFunction<PersonQueryVariables>, options: VueApolloComposable.UseQueryOptions<PersonQuery, PersonQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PersonQuery, PersonQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PersonQuery, PersonQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, variables, options);
}
export function usePersonLazyQuery(variables: PersonQueryVariables | VueCompositionApi.Ref<PersonQueryVariables> | ReactiveFunction<PersonQueryVariables>, options: VueApolloComposable.UseQueryOptions<PersonQuery, PersonQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PersonQuery, PersonQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PersonQuery, PersonQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, variables, options);
}
export type PersonQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PersonQuery, PersonQueryVariables>;
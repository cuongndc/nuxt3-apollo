import {
  Resolver, Query, Arg,
} from 'type-graphql'

import { Person, PersonInput } from './schema'

@Resolver()
export default class PersonResolver {
  @Query(
    () => Person,
    // { nullable: true }
  )
  person(@Arg('personInput', () => PersonInput) personInput: PersonInput) {
    const personData = {
      'Phil Xu': {
        name: 'Phil Xu',
        tags: ['Developer', 'ABC'],
        tags2: ['Developer', 'VN'],
      },
    }
    return personData[personInput.name]
  }
}

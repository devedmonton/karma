import gql from 'graphql-tag'

export const schema = gql`
  type Person {
    name: String
  }

  type PersonPage {
    data: [Person]
  }

  type Query {
    people: PersonPage
  }
`
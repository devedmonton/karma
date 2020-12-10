export const QUERY = gql`
  query PeopleQuery {
    people {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ people }) => {
  return JSON.stringify(people)
}

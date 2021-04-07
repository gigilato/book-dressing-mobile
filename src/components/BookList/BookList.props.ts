import { QueryFunctionOptions } from '@apollo/client'
import { BooksQuery, BooksQueryVariables } from '@api/hooks/generated'

export interface BookListProps {
  queryOptions?: QueryFunctionOptions<BooksQuery, BooksQueryVariables>
  variables?: BooksQueryVariables
}

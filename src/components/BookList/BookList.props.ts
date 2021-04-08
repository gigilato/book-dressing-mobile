import { QueryFunctionOptions } from '@apollo/client'
import { BookFragment, BooksQuery, BooksQueryVariables } from '@api/hooks/generated'

export interface BookListProps {
  queryOptions?: QueryFunctionOptions<BooksQuery, BooksQueryVariables>
  onPressBook: (book: BookFragment) => any
}

import { QueryFunctionOptions } from '@apollo/client'
import { BookFragment, BooksQuery, BooksQueryVariables } from '@api/hooks/generated'
import { AsyncFlatListProps } from '@components/ui'

export interface BookListProps
  extends Omit<AsyncFlatListProps<any, any>, 'renderItem' | 'query' | 'data' | 'pageSize'> {
  queryOptions?: QueryFunctionOptions<BooksQuery, BooksQueryVariables>
  onPressBook: (book: BookFragment) => any
}

import { component$, useContext } from '@builder.io/qwik';
import { Book } from '../Book';
import { ReadListContext } from '~/root';

export const BookList = component$(() => {
  const readList = useContext(ReadListContext);

  const { bookStore } = readList;

  return (
    <div class="grid grid-cols-3 place-content-center md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {bookStore.books.map((book) => (
        <Book key={book.title} book={book} />
      ))}
    </div>
  );
});
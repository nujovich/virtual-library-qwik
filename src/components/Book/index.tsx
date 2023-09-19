import { component$, useContext } from '@builder.io/qwik';
import { ReadListContext } from '~/root';

export interface BookProps {
  book : {
    title: string;
    cover: string;
    author: {
        name: string;
    }
    year: number;
  }
}

export const Book = component$<BookProps>(({book}) => {
  const { title, cover, author, year } = book;
  const readList = useContext(ReadListContext);
  const { onAddBook } = readList;
  return (
    <div class="flex flex-col items-center bg-white rounded-lg">
      <div class="relative">
        <img
          class="inset-0 aspect-[314/475] object-cover w-full h-full"
          src={cover}
          alt={title}
          width={314}
          height={475}
        />
      </div>
      <div class="flex flex-col justify-between gap-2 p-4 leading-normal">
        <h3 class="text-gray-900 font-medium text-lg">{title}</h3>
        <p class="text-gray-500">{author.name}</p>
        <p class="text-gray-500">{year}</p>
          <button
            type="submit"
            class="inline-flex items-center uppercase text-white w-32 bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900"
            onClick$={() => onAddBook(book)}
          >
            Add to list
          </button>
      </div>
    </div>
  );
});
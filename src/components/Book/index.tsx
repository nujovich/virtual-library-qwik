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
    <div class="flex flex-col bg-white rounded-lg">
      <div class="relative">
        <img
          class="inset-0 aspect-[24/36] object-cover w-full h-full rounded-t-lg"
          src={cover}
          alt={title}
          width={24}
          height={36}
          srcSet={`${cover} 24w`}
        ></img>
      </div>
      <div class="flex flex-col justify-start gap-2 p-2">
        <h1 class="text-gray-900 font-medium text-lg sm:truncate">{title}</h1>
        <h2 class="text-gray-500">
          <p class="sm:truncate">{author.name}</p>
          <p>{year}</p>
        </h2>
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
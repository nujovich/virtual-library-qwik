import { component$, useContext } from '@builder.io/qwik';
import { ReadListContext } from '~/root';

export const ReadListFlyout = component$(() => {
  const readList = useContext(ReadListContext);

  const { isToggleOpen, bookStore, onRemoveBook } = readList;

  return (
    <aside
      hidden={!isToggleOpen.value}
      class="fixed z-50 right-0 top-20 h-1/2 w-1/2 border-8 border-pink-700 bg-neutral-900 overflow-y-auto"
    >
      {bookStore.favs.length > 0 ? (
        <ul class="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-6 p-4 leading-normal">
          {bookStore.favs.map((book) => (
            <li key={book.title} class="flex flex-col gap-2">
              <img class="w-24 h-36" src={book.cover} alt={book.title} width={24} height={36}/>
              <div class="flex flex-col gap-2">
                <h3 class="text-white font-medium text-lg">{book.title}</h3>
                <p class="text-gray-400">{book.author.name}</p>
                <p class="text-gray-400">{book.year}</p>
                  <button class="uppercase text-white w-32 bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900" onClick$={() => onRemoveBook(book)}>
                    Remove
                  </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p class="text-white font-bold text-lg mt-4 text-center">
          You have no books in your list
        </p>
      )}
    </aside>
  );
});
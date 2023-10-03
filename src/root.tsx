import { type Signal, component$, createContextId, useSignal, useContextProvider, useStore, $, type QRL } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import "./global.css";
import { books } from "./data/books";

type Book = {
  title: string;
  cover: string;
  author: {
    name: string;
  }
  year: number;
}

type ReadListContextType = {
  isToggleOpen: Signal<boolean>;
  bookStore: BooksStoreType;
  onAddBook: QRL<(book: Book) => void>;
  onRemoveBook: QRL<(book: Book) => void>;
}

type BooksStoreType = {
  books: Book[];
  favs: Book[];
}

export const ReadListContext = createContextId<ReadListContextType>("ReadListContext");

export default component$(() => {
  const isToggleOpen = useSignal(false);
  const bookStore = useStore<BooksStoreType>({
    books: books,
    favs: [],
  });
  const readList = useStore<ReadListContextType>({
    isToggleOpen,
    bookStore,
    onAddBook: $((book: Book) => {
      isToggleOpen.value = true;
      bookStore.favs = [...bookStore.favs, book];
      bookStore.books = bookStore.books.filter((b) => b.title !== book.title);
    }),
    onRemoveBook: $((book: Book) => {
      bookStore.books = [...bookStore.books, book];
      bookStore.favs = bookStore.favs.filter((b) => b.title !== book.title);
    }),
  });
  useContextProvider(ReadListContext, readList);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

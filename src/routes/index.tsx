import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BookList } from "~/components/BookList";
import { Header } from "~/components/Header";
import { ReadListFlyout } from "~/components/ReadListFlyout";
import { ReadListFlyoutToggle } from "~/components/ReadListFlyoutToggle";


export default component$(() => {
  return (
    <div>
      <Header />
      <BookList />
      <ReadListFlyout />
      <ReadListFlyoutToggle />
    </div>
      
  );
});

export const head: DocumentHead = {
  title: "Welcome to Virtual Library",
  meta: [
    {
      name: "A site to choose your favourite books",
      content: "Qwik site description",
    },
  ],
};

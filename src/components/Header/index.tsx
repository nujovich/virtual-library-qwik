import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
    return (
        <h1 class="m-3 pb-4 text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-pink-500"
        >
            Virtual Library
        </h1>
    )
});
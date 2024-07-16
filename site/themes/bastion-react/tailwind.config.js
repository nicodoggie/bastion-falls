/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};

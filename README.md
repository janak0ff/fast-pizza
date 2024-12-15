### congiguration

npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

## Installation tailwind prettier extension

To get started, install `prettier-plugin-tailwindcss` as a dev-dependency:

```sh
npm install -D prettier prettier-plugin-tailwindcss
```

Then add the plugin to your [Prettier configuration](https://prettier.io/docs/en/configuration.html):

```json5
// .prettierrc
{
  plugins: ["prettier-plugin-tailwindcss"],
}
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

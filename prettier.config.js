module.exports = {
  plugins: [require('prettier-plugin-tailwindcss'), require('prettier-plugin-astro')],
  semi: false,
  singleCoute: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}

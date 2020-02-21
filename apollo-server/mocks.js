// Enable mocking in vue.config.js with `"pluginOptions": { "enableMocks": true }`
// Customize mocking: https://www.apollographql.com/docs/graphql-tools/mocking.html#Customizing-mocks
export default {
  Lex: () => ({
    title: () => "A new Law",
    description: () => "Something that will be different",
    img: () => "https://via.placeholder.com/1500/FF0000/000000"
  })
};

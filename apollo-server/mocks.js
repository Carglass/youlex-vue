// Enable mocking in vue.config.js with `"pluginOptions": { "enableMocks": true }`
// Customize mocking: https://www.apollographql.com/docs/graphql-tools/mocking.html#Customizing-mocks
export default {
  Lex: () => ({
    title: () => "A new Law",
    description: () => "Something that will be different",
    img: () => "https://via.placeholder.com/1500/FF0000/000000"
  }),
  LexAlinea: () => ({
    text: () =>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis sem ut dui lobortis varius. Nunc at dictum nunc. Etiam imperdiet lacinia fermentum. Vestibulum fringilla orci et ornare consequat. Cras maximus arcu eget orci iaculis ornare. Vivamus scelerisque magna lacus, nec interdum arcu accumsan eget. Curabitur sit amet pulvinar purus. In ac nisl id nisl lacinia porttitor. Donec sagittis sem ut finibus vulputate. Duis condimentum odio nec risus tristique, at egestas nunc luctus. Morbi ullamcorper pretium venenatis. Cras sed erat ac erat varius commodo."
  })
};

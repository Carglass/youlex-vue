<template>
  <div>
    <h1>{{ lexData.title }}</h1>
    <em>from {{ lexData.owner.name }}</em>
    <blockquote>{{ lexData.description }}</blockquote>
    <blockquote>{{ lexData.contents.preambule }}</blockquote>
    <div v-for="section in lexData.contents.sections" :key="section.title">
      <h2>{{ section.title }}</h2>
      <div v-for="article in section.articles" :key="article.title">
        <h3>{{ article.title }}</h3>
        <div v-for="alinea in article.alineas" :key="alinea.text">
          <p>{{ alinea.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lexLayout",
  props: {
    lexData: Object
  }
};
</script>

<template>
  <v-app>
    <v-main>
      <div class="app">
        <Banner />
        <Content />
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Banner,
    Content,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
.app {
  height: 100%;
  background-color: #08214a;
}
</style>

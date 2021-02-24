<template>
  <section class="banner">
    <div class="banner__container">
      <Header />
      <Form />
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header";
import Form from "@/components/Form";

export default {
  name: "Banner",

  components: {
    Header,
    Form,
  },
};
</script>

<style scoped lang="scss">
.banner {
  &__container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 15px;
  }
}
</style>

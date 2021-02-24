<template>
  <header class="header">
    <div class="header__logo"><Logo /></div>
    <p class="header__title">search system</p>
  </header>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 20px 0;

  &__logo {
    font-size: 0;
  }

  &__title {
    margin: 0;
    font-size: 20px;
    color: #fff;
  }
}
</style>

<template>
  <div class="form">
    <input
      class="form__input"
      type="text"
      placeholder="enter package name"
      v-model="input"
    />
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      timeout: null,
      debouncedInput: "",
    };
  },
  computed: {
    input: {
      get() {
        return this.debouncedInput;
      },
      set(val) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.debouncedInput = val;
          this.$store.commit("SET_QUERY", this.debouncedInput);
          this.$store.dispatch("SEARCH_PACKAGES", {
            limit: 10,
            from: 0,
          });
        }, 500);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  text-align: center;
  margin: 20px 0 40px;

  &__input {
    display: inline-block;
    font-size: 24px;
    color: #fff;
    width: 100%;
    max-width: 400px;
    border: 2px solid #fff;
    border-radius: 6px;
    padding: 5px 10px;
  }
}
</style>

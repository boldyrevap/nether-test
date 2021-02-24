<template>
  <section class="content" v-if="packageList.total">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Author Name</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in packageList.objects"
            :key="i"
            @click.prevent="openModal(item.package.name)"
          >
            <td>{{ item.package.name }}</td>
            <td>{{ item.package.author ? item.package.author.name : "" }}</td>
            <td>{{ item.package.version }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
      v-model="page"
      :length="Math.ceil(packageList.total / 10)"
      :total-visible="5"
    ></v-pagination>
    <v-dialog v-if="currentPackage.tags" v-model="dialog" width="500"
      ><v-card>
        <div class="modal-content">
          <div>
            {{ `Latest version: ${currentPackage.tags.latest}` }}
          </div>
          <div>
            {{
              `Last 3 versions: ${currentPackage.versions
                .slice(0, 3)
                .join(", ")}`
            }}
          </div>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.prevent="hideModal()">
            Close
          </v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >
  </section>
</template>

<script>
export default {
  name: "Content",

  data() {
    return {
      page: 1,
      dialog: false,
    };
  },

  watch: {
    page: function() {
      this.$store.dispatch("SEARCH_PACKAGES", {
        limit: 10,
        from: (this.page - 1) * 10,
      });
    },
  },

  computed: {
    packageList() {
      return this.$store.getters.getPackageList;
    },
    currentPackage() {
      return this.$store.getters.getCurrentPackage;
    },
  },

  methods: {
    openModal(name) {
      this.$store.dispatch("GET_PACKAGE", {
        name,
      });
      this.dialog = true;
    },
    hideModal() {
      this.$store.commit("SET_CURRENT_PACKAGE", {});
      this.dialog = false;
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.75);
  background-color: #f7c224;
  border-radius: 10px;
  padding: 10px 15px;

  & > div {
    background: transparent;
  }
}

.modal-content {
  padding: 10px 15px;
}
</style>

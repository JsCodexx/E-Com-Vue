<template>
  <div class="wrapper">
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First
        </button>
      </li>

      <li class="pagination-item">
        <button
        class=" text-dark"
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Previous
        </button>
      </li>

      <!-- Visible Buttons Start -->

      <li
        v-for="page in pages"
        :key="page.name"
        class="pagination-item"
        :class="{ active: isPageActive(page.name) }"
      >
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
        >
          {{ page.name }}
        </button>
      </li>

      <!-- Visible Buttons End -->

      <li class="pagination-item">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          Next
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
  },

  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },

    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },

  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>
<style scoped>
.wrapper {
  margin-top: 3rem;
  /* width: 80%; */
  display: flex;
  justify-content: center;
}
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
  border: 1px solid rgb(169, 167, 167);
  padding: 5px 12px;
  margin: 0.5rem;
  border-radius: 50%;
}
.pagination-item:hover {
  background: rgb(5, 235, 170);
}

.active {
  /* background-color: rgb(37, 9, 243, 43); */
  background-color: rgb(84, 154, 240);
}
button {
  padding: 0;
  border: none;
  background: none;
}
</style>

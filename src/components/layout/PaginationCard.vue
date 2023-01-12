<template>
  <!--  -->
  <!-- </div> -->
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>
  
  <script>
export default {
  // props: {
  //   maxVisibleButtons: {
  //     type: Number,
  //     required: false,
  //     default: 4,
  //   },
  //   totalPages: {
  //     type: Number,
  //     required: true,
  //     default: 10,
  //   },
  //   perPage: {
  //     type: Number,
  //     required: true,
  //     default: 3,
  //   },
  //   currentPage: {
  //     type: Number,
  //     required: true,
  //     default: 3,
  //   },
  // },
  computed: {
    // startPage() {
    //   // When on the first page
    //   if (this.currentPage === 1) {
    //     return 1;
    //   }
    //   // When on the last page
    //   if (this.currentPage === this.totalPages) {
    //     return this.totalPages - this.maxVisibleButtons;
    //   }
    //   // When inbetween
    //   return this.currentPage - 1;
    // },
    // pages() {
    //   const range = [];
    //   for (
    //     let i = this.startPage;
    //     i <=
    //     Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    //     i++
    //   ) {
    //     range.push({
    //       name: i,
    //       isDisabled: i === this.currentPage,
    //     });
    //   }
    //   return range;
    // },
    // isInFirstPage() {
    //   return this.currentPage === 1;
    // },
    // isInLastPage() {
    //   return this.currentPage === this.totalPages;
    // },
  },
  methods: {
    // onClickFirstPage() {
    //   this.$emit('pagechanged', 1);
    // },
    // onClickPreviousPage() {
    //   this.$emit('pagechanged', this.currentPage - 1);
    // },
    // onClickPage(page) {
    //   this.$emit('pagechanged', page);
    // },
    // onClickNextPage() {
    //   this.$emit('pagechanged', this.currentPage + 1);
    // },
    // onClickLastPage() {
    //   this.$emit('pagechanged', this.totalPages);
    // },
    // isPageActive(page) {
    //   return this.currentPage === page;
    // },
  },
};
</script>
<!-- <style> -->
<!-- .main-pagination {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style> -->
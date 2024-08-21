<template>
  <TopHeader />
  <h1>List Page</h1>
  <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4 mx-5">
    <div class="col" v-for="restaurant in restaurants" :key="restaurant?.id">
      <div class="card h-100">
        <img :src="restaurant?.image" class="card-img-top" :alt="restaurant?.title" />
        <div class="card-body">
          <h5 class="card-title">{{ restaurant?.title }}</h5>
          <p class="card-text">{{ restaurant?.shortDescription }}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{ restaurant?.location }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import TopHeader from '../Header.vue';
export default {
  name: 'ListRestaurent',
  components: {
    TopHeader,
  },

  computed: {
    ...mapGetters(['restaurants'])
  },

  mounted() {
    try {
      const user = localStorage.getItem("userInfo");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      } else {
        this.fetchRestaurants();
      }
    } catch (error) {
      console.error("An error occurred during the mounted hook:", error);
    }
  },

  methods: {
    ...mapActions(['fetchRestaurants'])
  }
};
</script>

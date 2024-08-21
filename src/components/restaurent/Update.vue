<template>
  <TopHeader />
  <h1>Update Page</h1>
</template>

<script>
import TopHeader from '../Header.vue';

export default {
  name: 'UpdateRestaurent',
  components: {
    TopHeader,
  },

  mounted() {
    try {
      const user = localStorage.getItem("userInfo");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
    } catch (error) {
      console.error("An error occurred during the mounted hook:", error);
    }
  },
};
</script>

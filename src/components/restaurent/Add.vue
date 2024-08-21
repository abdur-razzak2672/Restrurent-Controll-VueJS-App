<template>
  <TopHeader />
  <h1>Add Page</h1>
 <div class="add-form">
 <div class="form-itemadd">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-12 form-label">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
 </div>
 </div>

</template>

<script>
import { mapGetters } from 'vuex';
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
      console.log("dfdfg",this.restaurants)

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

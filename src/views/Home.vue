<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img :src="require(`@/assets/${destination.image}`)" alt="" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {
    // DestinationDetails,
  },
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: white;
  text-align: center;
  border-radius: 5px;
  display: flex;
}
h2 {
  background: rgb(33, 22, 120);
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 5px;
}

h2:hover {
  background: red;
}
</style>

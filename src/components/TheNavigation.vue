<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
}

#nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav a:hover {
  color: red;
  text-decoration: none;
}

#nav a.vue-school-active-nav {
  background: rgb(33, 22, 120);
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>

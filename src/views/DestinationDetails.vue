<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`../assets/${destination.image}`)"
          alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          class="card"
          v-for="experience in destination.experiences"
          :key="experience.slug"
        >
          <router-link
            :to="{
              name: 'ExperienceDetail',
              params: {
                experienceSlug: experience.slug,
              },
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card_text">
              <h3>{{ experience.name }}</h3>
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}

.cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

card img {
  max-height: 200px;
}

.card {
  padding: 0 20px;
  position: relative;
}

.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>

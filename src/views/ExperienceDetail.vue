<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    experience() {
      return store.destinations
        .find((destination) => destination.slug === this.slug)
        .experiences.find(
          (experience) => experience.slug === this.experienceSlug
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

.experience-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
}
</style>

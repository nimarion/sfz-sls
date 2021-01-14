<template>
  <section class="hero has-text-centered" style="content-visibility: auto">
    <div class="hero-body">
      <div class="container">
        <div v-if="this.$store.getters.sponsors.length > 0" class="columns">
          <div
            v-for="item in this.$store.getters.sponsors"
            :key="item.name"
            class="column"
          >
            <a :href="item.url">
              <b-image :src="item.img" :alt="item.name" ratio="3by1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="hero has-text-centered" style="content-visibility: auto">
    <div class="hero-body">
      <div class="container">
        <div class="columns" v-if="this.$store.getters.sponsors.length > 0">
          <div
            class="column"
            v-for="item in this.$store.getters.sponsors"
            :key="item.name"
          >
            <a :href="item.url">
              <b-image :src="item.img" :alt="item.name" ratio="3by1"></b-image>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

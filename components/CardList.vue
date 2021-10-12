<template>
  <div class="hero-body">
    <!--Cards-->
    <div class="container">
      <div class="section">
        <div v-if="data.length > 0" class="row columns is-multiline">
          <div
            v-for="item in data"
            :key="item.title"
            class="column is-4"
            @click="openLabModal(item)"
          >
            <div class="card large">
              <div class="card-image is-1by1">
                <b-image
                  :src-fallback="require('~/assets/background.jpg')"
                  ratio="1by1"
                  :src="item.image"
                />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 no-padding">
                      {{ item.title }}
                    </p>
                  </div>
                </div>
                <div class="content">
                  {{
                    item.description.split(" ").slice(0, 24).join(" ") + "..."
                  }}
                </div>
                <p>
                  <a @click="openLabModal(item)">Weiterlesen</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openLabModal(item) {
      this.$emit("openModal", item);
    },
  },
};
</script>

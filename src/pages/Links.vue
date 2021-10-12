<template>
  <link-list name="Links" :links="links" />
</template>
<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  async fetch() {
    this.links = await fetch("/links.json").then((res) => res.json());
  },
  head() {
    return {
      title: "Links & Downloads",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Hier findest du interessante Links",
        },
      ],
    };
  },
};
</script>

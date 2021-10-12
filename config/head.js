const head = {
  htmlAttrs: {
    lang: "de",
  },
  title: "Schülerforschungszentrum Saarlouis",
  titleTemplate: "%s - Schülerforschungszentrum Saarlouis",
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "keywords",
      content:
        "Schülerforschungszentrum, Schule, Forschen, MINT, Informatik, Physik, Workshops, Elearing",
    },
    {
      hid: "description",
      name: "description",
      content:
        "Das Schülerforschungszentrum bietet allen Schülerinnen und Schülern einen Ort, wo sie als ganze Klasse Workshops an selbst gewählten Themen aus dem MINT-Bereich unterstützt forschen können.",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "Schülerforschungszentrum Saarlouis",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: "https://sfz-sls.de",
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://sfz-sls.de/background.jpg",
    },
    {
      hid: "og:description",
      name: "og:description",
      content:
        "Das Schülerforschungszentrum bietet allen Schülerinnen und Schülern einen Ort, wo sie als ganze Klasse Workshops an selbst gewählten Themen aus dem MINT-Bereich unterstützt forschen können.",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Schülerforschungszentrum Saarlouis",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "https://sfz-sls.de/background.jpg",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Das Schülerforschungszentrum bietet allen Schülerinnen und Schülern einen Ort, wo sie als ganze Klasse Workshops an selbst gewählten Themen aus dem MINT-Bereich unterstützt forschen können.",
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: "https://sfz-sls.de",
    },
    {
      hid: "twitter:domain",
      name: "twitter:domain",
      content: "sfz-sls.de",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "robots",
      name: "robots",
      content: "index,follow",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      json: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Schülerforschungszentrum Saarlouis",
        email: "info(at)sfz-sls.de",
        url: "https://sfz-sls.de/",
        logo: "https://sfz-sls.de//logo.png",
      },
    },
  ],
};

export default head;

import head from "./config/head";
import pwa from "./config/modules/pwa";
import buildModules from "./config/buildModules";
import plugins from "./config/plugins";
import modules from "./config/modules";

export default {
  target: "static",
  ssr: false,
  router: {
    base: process.env.NODE_ENV === "github" ? "/www/" : "/",
  },
  head,
  components: true,
  buildModules,
  pwa,
  plugins,
  modules,
  fontawesome: {
    icons: {
      solid: [
        "faPlus",
        "faMinus",
        "faFileDownload",
        "faAngleLeft",
        "faAngleRight",
      ],
    },
  },
  generate: {
    fallback: "404.html",
  },
};

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#254D4C",
        secondary: "#CF9EAC",
        anchor: "#8c9eff",
        accent: "#887177",
        error: "#9D3C4F",
      },
      dark: {
        primary: "#8c9eff",
        // secondary: "#CF9EAC",
        // anchor: "#8c9eff",
        // accent: "#254D4C",
        // error: "#9D3C4F",
      },
    },
  },
});

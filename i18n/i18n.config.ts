import fr from "./fr.js";
import ar from "./ar.js";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ar",
  messages: {
    ar,
    fr,
  },
}));

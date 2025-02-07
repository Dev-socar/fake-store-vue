import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

AOS.init({
  duration: 500, // Duración de la animación
  once: true, // Si debe animarse solo una vez
});

import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config";

const app = createApp(App);

app.use(createPinia());
app.use(VueSweetalert2);

app.use(router);
app.use(plugin, defaultConfig(config));

app.mount("#app");

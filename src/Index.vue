<template>
  <Navigation />

  <Header />

  <Portfolio />

  <About />

  <Contact />

  <Footer />
</template>

<script>
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Portfolio from "./components/Portfolio.vue";

export default {
  name: "Index",
  components: {
    Header,
    Navigation,
    Portfolio,
    About,
    Contact,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

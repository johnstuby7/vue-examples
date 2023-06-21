const vm = Vue.createApp({
  data() {
    return {
      firstName: "Steve",
      lastName: "Doe",
      url: "https://google.com",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

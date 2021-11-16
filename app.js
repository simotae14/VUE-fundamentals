const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>'
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    }
  }
}).mount('#app')

// access to the Vue instance Data
// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000)
// second instance
// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Simo',
//       lastName: 'Tae'
//     }
//   }
// }).mount('#test')

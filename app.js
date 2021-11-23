const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: "",
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    },
    increment() {
      this.age++
    },
    updateLastName(msg, event) {
      console.log(msg)
      this.lastName = event.target.value
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
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

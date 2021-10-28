const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
}).mount('#app')

// access to the Vue instance Data
setTimeout(() => {
  vm.firstName = 'Bob'
}, 2000)
// second instance
// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Simo',
//       lastName: 'Tae'
//     }
//   }
// }).mount('#test')

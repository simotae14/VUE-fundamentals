Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
}).mount('#app')
// second instance
Vue.createApp({
  data() {
    return {
      firstName: 'Simo',
      lastName: 'Tae'
    }
  }
}).mount('#test')

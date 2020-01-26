// import something here

// "async" is optional
export default async ({ Vue /* app, router, , ... */ }) => {
  // something to do
  Vue.prototype.$test = str => {
    console.log(str)
  }
}

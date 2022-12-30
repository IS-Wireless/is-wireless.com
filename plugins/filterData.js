import filterData from "~/utils/filterData";

export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('filterData', data => filterData(data))
  }
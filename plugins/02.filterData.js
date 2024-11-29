import filterData from "~/utils/filterData";

export default defineNuxtPlugin(() => {
  return {
    provide:{
    filterData: data => filterData(data)
  }
}
})
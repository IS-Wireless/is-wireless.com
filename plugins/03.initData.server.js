import { defineNuxtPlugin } from "#app";
import { useGeneralStore } from "@/store/general";
import { useAsyncData } from "nuxt/app";

export default defineNuxtPlugin(async (nuxtApp) => {
    const generalStore = useGeneralStore();
    const {data} = await useAsyncData('general',async ()=>{
        return await generalStore.fetchData()
    })
    generalStore.save(data.value)
})
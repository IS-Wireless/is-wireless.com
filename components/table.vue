<template>
    <div class="w-full">
        <table>
            <thead>
                <tr>
                    <th v-for="(item,index) in data.head" :key="index" class="p-5 font-bold cursor-pointer" @click="setSort(index)">
                        {{item}}
                    </th>
                </tr>
            </thead>
            <tbody class="border-y-4 border-solid border-gray-light">
                <tr v-for="(item,index) in sortedData" :key="index" class="border-b border-solid border-gray-light last:border-b-0">
                    <td v-for="(text,index) in item" :key="index" class="px-5 py-2.5">
                        {{text}}
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-2xl text-black">debug: sort by: {{currentSort}} <br>  sort dir: {{currentSortDir}}</p>

    </div>
  
</template>

<script>
export default {
    name: 'Table',
    props:{
        data:{
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            currentSort: '',
            currentSortDir: ''
        }
    },
    computed:{
        sortedData(){

            if (this.currentSort==='') {
                return this.data.content
            }
            else{
                // let invert = this.currentSortDir === 'asc'?1:-1;
                return this.data.content.sort((a,b) => {
                    if(a[this.currentSort] < b[this.currentSort]) return -1 
                })
                // return this.data
            }
        }
    },
    methods:{
        setSort(sort){
            if(sort === this.currentSort){
                this.currentSortDir = this.currentSortDir === 'asc'?'desc':'asc';
            }else if(this.currentSort === ''){
                this.currentSortDir = 'asc';
            }
            this.currentSort = sort;
        }
    }
}
</script>

<style>

</style>
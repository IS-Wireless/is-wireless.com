<template>
    <div class="w-full">
        <table>
            <thead>
                <tr>
                    <th v-for="(item,index) in data.head" :key="index" class="p-5 font-bold cursor-pointer" @click="setSort(index)">
                        <div class="flex items-center">
                            <span class="w-full text-center">{{item}}</span>
                            <div class="">
                                <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 6" class="fill-current transform -rotate-90 transition" :class="[index==currentSort && currentSortDir == 'asc' ? 'text-blue-main' : 'text-gray-default' ]">
                                    <path d="M 0 0 L 0 6 L 3 3 Z"></path>
                                </svg>
                                <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 6" class="fill-current transform rotate-90 transition" :class="[index==currentSort && currentSortDir == 'desc' ? 'text-blue-main' : 'text-gray-default' ]">
                                    <path d="M 0 0 L 0 6 L 3 3 Z"></path>
                                </svg>
                            </div>
                        </div>
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
                let modifier = this.currentSortDir === 'asc'?1:-1;
                return this.data.content.sort((a,b) => {
                    if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier
                    if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier                    
                })
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
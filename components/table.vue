<template>
    <div class="w-full">
        <table>
            <thead>
                <tr>
                    <th v-for="item in data.head" :key="item">
                        {{item}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data.content" :key="item">
                    <td>{{item[0]}}</td>
                </tr>
            </tbody>
        </table>

    </div>
  
</template>

<script>
export default {
    name: 'Table',
    components:{
        data:{
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            currentSort: 'asc',
            currentSortDir: 'asc'
        }
    }
}
</script>

<style>

</style>
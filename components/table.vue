<template>
  <div class="w-full">
    
    <table class="block phablet:table relative">
      <thead>
        <tr>
          <th
            v-for="(item, index) in data.head"
            :key="index"
            class="
              p-5
              font-bold
            "
            
          >
            <div class="flex items-center">
              <span class="w-full text-center phablet:text-gray-dark"
              >{{ item }}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody
        class="
          border-y-4
          border-solid border-gray-light
        "
      >
        <tr
          v-for="(item, index) in data.content"
          :key="index"
          class="
            w-full
            mb-2.5
            border-b
            border-solid border-gray-light
            last:border-b-0
          "
        >
          <td
            v-for="(text, index) in item"
            :key="index"
            class="
              
              px-2.5
              phablet:px-5
              py-2.5
            "
          >
              {{ text }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {

  },
}
</script>

<style></style>

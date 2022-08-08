<template>
  <section_filterable_tiles :data="templateData" />
</template>

<script>
import section_filterable_tiles from '../components/filterable-tiles.vue'
export default {
  data() {
    return {
      templateData: [
        {
          link: 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2022-human-02-01',
          description:
            'AI for human empowerment (AI, Data and RoboticsPartnership)',
          title: 'HORIZON-CL4-2022-HUMAN-02-01',
        },
        {
          link: 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2022-human-02-01',
          description:
            'AI for human empowerment (AI, Data and RoboticsPartnership)',
          title: 'HORIZON-CL4-2022-HUMAN-02-01',
        },
        {
          link: 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2022-human-02-01',
          description:
            'AI for human empowerment (AI, Data and RoboticsPartnership)',
          title: 'HORIZON-CL4-2022-HUMAN-02-01',
        },
        {
          description:
            'AI for human empowerment (AI, Data and RoboticsPartnership)',
          title: 'HORIZON-CL4-2022-HUMAN-02-01',
        },
        {
          link: '',
          description:
            'AI for human empowerment (AI, Data and RoboticsPartnership)',
          title: 'HORIZON-CL4-2022-HUMAN-02-01',
        },
        {
          link: 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-cl4-2022-human-02-01',
          description:
            'AI for human empowerment (AI, Data and RoboticsPartnership)',
          title: 'HORIZON-CL4-2022-HUMAN-02-01',
        },
      ],
    }
  },
  components: {
    section_filterable_tiles,
  },
}
</script>

<style></style>

<template>
  <div class="w-4/5 mx-auto py-10">
    <section_content :data="sectionContent" />
    <RndTeam :data="teamContent" />
  </div>
</template>

<script>
import section_content from '~/components/content-static.vue'
import RndTeam from '~/components/rnd-team.vue'
export default {
  components: {
    section_content,
    RndTeam,
  },
  data() {
    return {
      sectionContent: {
        content:
          '<div class="fusion-title title fusion-title-1 fusion-title-text fusion-title-size-three">\n<h2 class="title-heading-left fusion-responsive-typography-calculated" data-fontsize="30" data-lineheight="39px">IS-Wireless Research & Development</h2>\n<div class="title-sep-container">\n<div class="title-sep sep-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>\n</div>\n</div>\n<div class="fusion-text fusion-text-1"></div>\n',
      },
      teamContent: {
        default: {
          title: 'Meet our R&D Team',
        },
        team: [
          {
            person_name: 'Adam Flizikowski',
            person_title: 'Head of R&D',
            person_image: {
              url: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Slawomir-Pietrzyk-1.jpg',
            },
            person_description:
              'Adam is leading the team and managing the ECSEL JU BRAINE project (dealing with the edge for AI/ML big data processing). Adam has telecommunications background and has 20 years experience in wireless networks, with ca. 15 EU projects participated and tens of proposals contributed. He manages the IPR process in the company as well.',
            head_of_department: true,
          },
          {
            person_name: 'Adam Girycki',
            person_title: 'R&D Expert',
            person_image: {
              url: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Slawomir-Pietrzyk-1.jpg',
            },
            person_linkedin:
              'https://pl.linkedin.com/in/kamil-medrala-05822121b',
            person_description:
              'Adam Girycki holds the position of R&D Expert within the IS-Wireless and particularly expertise in the 3GPP standard, O-RAN alliance, 2G/3G/4G/5G Radio Network Design, Signalling and Radio Network Optimisation. Responsible for the development of the Near-Real Time RAN Intelligent Controller (Near-RT RIC) platform based on O-RAN standard, research and development of the radio resource management algorithms for xApps and MAC layer. Currently, he has also enrolled in a joint PhD degree programme in Engineering Science with Katholieke Universiteit Leuven (KUL), Belgium and developing machine learning-based radio resource allocation algorithm for 6G cell-free mMIMO networks.',
          },
          {
            person_name: 'Hatem OdetAlla',
            person_title: 'R&D Expert',
            person_image: {
              url: '',
            },
            person_description:
              'Adam Girycki holds the position of R&D Expert within the IS-Wireless and particularly expertise in the 3GPP standard, O-RAN alliance, 2G/3G/4G/5G Radio Network Design, Signalling and Radio Network Optimisation. Responsible for the development of the Near-Real Time RAN Intelligent Controller (Near-RT RIC) platform based on O-RAN standard, research and development of the radio resource management algorithms for xApps and MAC layer. Currently, he has also enrolled in a joint PhD degree programme in Engineering Science with Katholieke Universiteit Leuven (KUL), Belgium and developing machine learning-based radio resource allocation algorithm for 6G cell-free mMIMO networks.',
          },
        ],
      },
    }
  },
}
</script>

<style></style>

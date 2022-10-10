<template>
  <div>
    <nav
      class="w-full bg-black z-30"
      :class="expanded ? 'fixed tablet-wide:relative' : 'relative'"
    >
      <div class="mx-auto w-4/5 container flex justify-between h-[80px]">
        <nuxt-link to="/" @click.native="expanded ? toggleExpanded() : null">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1367 463"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            class="block h-full py-4"
          >
            <path
              d="M258.413,168.229C266.463,168.229 272.996,175.175 272.996,183.725C272.996,192.275 266.463,199.221 258.413,199.221C250.367,199.217 243.833,192.275 243.833,183.725C243.833,175.175 250.367,168.233 258.413,168.233L258.413,168.229Z"
              fill="white"
            />
            <path
              d="M218.317,249.833C172.479,205.771 151.813,145.4 178.954,114.396C206.308,83.138 269.975,93.592 320.425,137.746C344.075,158.45 361.042,182.892 369.267,206.229L382.463,206.167C370.808,180.179 351.571,153.929 325.654,131.25C260.413,74.137 178.3,61.263 142.213,102.492C106.108,143.725 128.588,223.446 193.842,280.562C202.15,287.838 214.15,294.383 218.317,300.204L218.317,249.833Z"
              fill-rule="nonzero"
              fill="white"
            />
            <path
              d="M1314.63,205.742L1314.63,178.758L1305,178.758L1305,173.271L1330.78,173.271L1330.78,178.758L1321.18,178.758L1321.18,205.742L1314.63,205.742ZM1334.93,205.742L1334.93,173.271L1344.74,173.271L1350.63,195.404L1356.47,173.271L1366.3,173.271L1366.3,205.742L1360.19,205.742L1360.19,180.179L1353.74,205.742L1347.45,205.742L1341.01,180.179L1341.01,205.742L1334.93,205.742Z"
              fill-rule="nonzero"
              fill="white"
            />
            <path
              d="M267.746,317.921C267.746,325.567 258.321,326 252.758,324.213C250.146,323.412 248.842,321.317 248.842,317.921L248.842,227.525C248.842,224.117 250.146,222.033 252.758,221.242C253.658,221.012 256.454,220.883 261.112,220.883C265.525,220.883 267.746,223.108 267.746,227.525L267.746,317.921Z"
              fill-rule="nonzero"
              fill="white"
            />
            <path
              d="M400.508,299.121C400.508,304.65 399.642,308.983 397.883,312.179C393.029,320.65 378.796,324.858 355.088,324.858L289.583,324.858C285.221,324.858 283.05,322.617 283.05,318.146C283.05,315.121 283.363,313.025 283.975,311.825C284.925,310.108 286.825,309.283 289.583,309.283L355.108,309.283C372.754,309.283 381.604,306.021 381.604,299.479L381.604,290.546C381.604,284.058 373.067,280.604 355.962,280.142C326.825,279.292 310.958,278.621 308.325,278.2C291.308,275.283 282.796,267.662 282.796,255.367L282.796,247.508C282.796,235.129 289.471,227.163 302.858,223.579C309.063,221.917 320.842,221.108 338.142,221.108C342.579,221.108 344.8,223.317 344.8,227.754L344.8,229.808C344.8,234.283 342.579,236.533 338.142,236.533L329.613,236.533C310.971,236.533 301.671,240.146 301.671,247.396L301.671,254.612C301.671,259.142 305.583,262.092 313.333,263.442C316.488,263.975 322.029,264.2 330.054,264.2L355.342,264.2C366.608,264.2 376.15,265.771 383.983,268.913C395.013,273.333 400.508,280.321 400.508,289.846L400.508,299.121Z"
              fill-rule="nonzero"
              fill="white"
            />
            <path
              d="M488.025,271.412C488.025,276.929 485.479,279.675 480.375,279.675L416.737,279.675C412.95,279.675 410.696,278.988 409.842,277.662C409.325,276.683 409.054,274.142 409.054,269.988C409.054,264.488 411.613,261.717 416.729,261.717L480.363,261.717C483.971,261.717 486.192,262.417 487.046,263.754C487.667,264.658 488.004,267.196 488.004,271.412M686.629,229.721C686.629,231.287 686.129,233.075 685.179,235.054L647.263,315.75C645.033,320.508 640.942,322.854 634.825,322.854C629.021,322.854 624.992,320.583 622.704,315.971L592.55,253.958L561.904,316.196C559.592,320.871 555.425,323.192 549.383,323.192C543.137,323.192 538.879,320.763 536.704,315.871L499.525,235.054C498.629,232.3 498.175,230.529 498.175,229.721C498.175,224.904 501.379,222.496 507.808,222.496C513.337,222.496 516.983,224.183 518.683,227.496L550.054,294.063L580.746,232.079C583.104,227.112 587.054,224.642 592.546,224.642C597.846,224.642 601.696,227.079 604.192,231.975L634.812,294.063L666.15,227.496C667.713,224.183 671.296,222.496 676.921,222.496C683.379,222.496 686.604,224.904 686.604,229.721M722.588,209C722.588,212.708 721.175,215.604 718.321,217.742C715.867,219.575 712.863,220.508 709.313,220.508C705.762,220.508 702.754,219.575 700.312,217.742C697.467,215.604 696.042,212.708 696.042,209C696.042,205.337 697.467,202.446 700.312,200.296C702.758,198.446 705.767,197.542 709.313,197.542C712.858,197.542 715.863,198.446 718.321,200.296C721.175,202.446 722.588,205.337 722.588,209ZM719.762,316.471C719.762,322.062 717.229,324.858 712.133,324.858C707.121,324.858 704.204,324.604 703.379,324.129C700.733,323.088 699.412,320.508 699.412,316.471L699.412,230.912C699.412,225.363 701.967,222.6 707.054,222.6C711.971,222.6 714.871,222.871 715.687,223.362C718.421,224.421 719.754,226.938 719.754,230.912L719.754,316.471L719.762,316.471ZM793.3,233.571C793.3,239.196 790.237,241.987 784.183,241.987C783.346,241.987 782.125,241.917 780.55,241.808C778.958,241.692 777.721,241.646 776.896,241.646C761.183,241.646 753.333,245.942 753.333,254.508L753.333,316.471C753.333,320.583 751.9,323.192 749.071,324.242C747.904,324.65 744.942,324.858 740.154,324.858C735.313,324.858 732.85,322.021 732.85,316.371L732.85,254.508C732.85,241.179 739.096,232.154 751.567,227.404C759.217,224.421 770.558,222.933 785.612,222.933C790.742,222.933 793.283,226.483 793.283,233.571M926.833,275.663C926.833,281.829 924.888,284.904 921.104,284.904L819.371,284.904L819.371,285.629C819.371,295.283 824.55,301.458 834.912,304.217C837.146,304.808 840.425,305.229 844.729,305.554C849.046,305.875 854.533,306.033 861.158,306.033C866.213,306.033 868.7,309.508 868.7,316.437C868.7,322.062 866.208,324.858 861.154,324.858C854.329,324.858 848.692,324.833 844.333,324.717C839.992,324.604 836.642,324.421 834.388,324.129C823.125,322.854 814.863,319.954 809.583,315.417C801.979,308.979 798.208,301.375 798.208,292.683L798.208,255.158C798.208,243.375 804.037,234.671 815.646,228.992C823.617,224.904 834.163,222.821 847.283,222.821L885.504,222.821C896.213,222.821 905.096,224.779 912.167,228.675C921.937,233.638 926.796,241.108 926.796,251.1L926.796,275.663L926.833,275.663ZM906.85,265.479L906.85,252.904C906.85,245.254 892.971,241.442 865.237,241.442C848.888,241.442 837.646,242.1 831.579,243.375C822.971,245.15 818.675,248.587 818.675,253.783L818.675,265.479L906.85,265.479ZM959.1,316.471C959.1,322.062 956.575,324.858 951.558,324.858C946.563,324.858 943.633,324.604 942.817,324.129C940.042,323.008 938.65,320.421 938.65,316.471L938.65,203.717C938.65,198.15 941.146,195.404 946.192,195.404C950.929,195.404 953.875,195.604 955.037,196.046C957.758,197.033 959.096,199.608 959.096,203.717L959.096,316.471L959.1,316.471ZM1099.46,275.663C1099.46,281.829 1097.55,284.904 1093.74,284.904L992.008,284.904L992.008,285.629C992.008,295.283 997.196,301.458 1007.53,304.217C1009.78,304.808 1013.05,305.229 1017.35,305.554C1021.66,305.875 1027.15,306.033 1033.8,306.033C1038.82,306.033 1041.35,309.508 1041.35,316.437C1041.35,322.062 1038.82,324.858 1033.8,324.858C1026.95,324.858 1021.31,324.833 1016.95,324.717C1012.6,324.604 1009.27,324.421 1007.02,324.129C995.767,322.854 987.487,319.954 982.192,315.417C974.612,308.979 970.821,301.375 970.821,292.683L970.821,255.158C970.821,243.375 976.65,234.671 988.267,228.992C996.25,224.904 1006.78,222.821 1019.9,222.821L1058.12,222.821C1068.85,222.821 1077.74,224.779 1084.79,228.675C1094.59,233.638 1099.44,241.108 1099.44,251.1L1099.44,275.663L1099.46,275.663ZM1079.46,265.479L1079.46,252.904C1079.46,245.254 1065.59,241.442 1037.87,241.442C1021.49,241.442 1010.28,242.1 1004.21,243.375C995.613,245.15 991.321,248.587 991.321,253.783L991.321,265.479L1079.46,265.479ZM1225.53,295.721C1225.53,315.137 1212.03,324.858 1184.99,324.858L1115.78,324.858C1110.7,324.858 1108.2,322.062 1108.2,316.437C1108.2,309.508 1110.69,306.033 1115.73,306.033L1185.09,306.033C1197.89,306.033 1204.28,302.587 1204.28,295.721L1204.28,291.912C1204.28,285.742 1198.43,282.667 1186.85,282.667L1153.55,282.667C1122.98,282.667 1107.66,273.292 1107.66,254.617L1107.66,249.058C1107.66,236.696 1115.36,228.746 1130.73,225.258C1133.85,224.5 1138.38,223.929 1144.37,223.513C1150.33,223.121 1157.85,222.933 1166.96,222.933C1172.04,222.933 1174.56,226.483 1174.56,233.571C1174.56,239.071 1172.04,241.846 1166.95,241.846L1152.2,241.846C1144.45,241.846 1139.89,241.946 1138.32,242.162C1131.55,243.15 1128.13,245.462 1128.13,249.058L1128.13,254.396C1128.13,260.5 1136.62,263.533 1153.66,263.533L1187.54,263.533C1212.86,263.533 1225.49,272.721 1225.49,291.067L1225.49,295.721L1225.53,295.721ZM1351.65,295.721C1351.65,315.137 1338.12,324.858 1311.1,324.858L1241.87,324.858C1236.8,324.858 1234.29,322.062 1234.29,316.437C1234.29,309.508 1236.79,306.033 1241.83,306.033L1311.19,306.033C1323.98,306.033 1330.39,302.587 1330.39,295.721L1330.39,291.912C1330.39,285.742 1324.55,282.667 1312.93,282.667L1279.68,282.667C1249.05,282.667 1233.78,273.292 1233.78,254.617L1233.78,249.058C1233.78,236.696 1241.47,228.746 1256.84,225.258C1259.97,224.5 1264.49,223.929 1270.49,223.513C1276.44,223.121 1283.94,222.933 1293.05,222.933C1298.15,222.933 1300.69,226.483 1300.69,233.571C1300.69,239.071 1298.14,241.846 1293.04,241.846L1278.3,241.846C1270.59,241.846 1265.98,241.946 1264.41,242.162C1257.65,243.15 1254.23,245.462 1254.23,249.058L1254.23,254.396C1254.23,260.5 1262.74,263.533 1279.73,263.533L1313.68,263.533C1338.97,263.533 1351.62,272.721 1351.62,291.067L1351.62,295.721L1351.65,295.721Z"
              fill-rule="nonzero"
              fill="white"
            />
            <path
              d="M424.487,361.05C372.388,410.562 262.975,390.254 174.842,313.104C83.508,233.146 49.629,122.429 99.192,65.817C148.742,9.208 262.963,28.137 354.304,108.096C388.354,137.896 414.396,171.971 431.129,205.917L452.687,205.813C431.354,167.533 401.075,129.788 362.854,96.329C244.708,-7.092 95.954,-30.4 30.6,44.254C-34.758,118.925 8.033,263.279 126.175,366.704C244.329,470.129 393.075,493.438 458.438,418.779C467.629,408.275 474.608,396.358 479.613,383.404L424.487,361.05Z"
              fill-rule="nonzero"
              fill="white"
            />
          </svg>
        </nuxt-link>
        <div class="grow flex items-center justify-end">
          <ul
            v-if="mainMenu"
            class="h-full flex-shrink-0 hidden tablet-wide:flex items-center justify-end"
          >
            <li
              v-for="item in mainMenu"
              :key="item.id"
              class="navbar-item flex group text-white"
            >
              <CustomLink
                class="p-4 flex h-full justify-center items-center text-base overflow-hidden relative after:bg-blue-main after:content-[''] after:absolute after:block after:left-0 after:-bottom-1 after:h-1 after:w-full after:transform after:transition hover:after:-translate-y-1 transition duration-200"
                :class="
                  item.object == 'custom'
                    ? 'text-blue-main hover:text-blue-main'
                    : 'text-white hover:text-white'
                "
                :url="item.url ? item.url : ''"
                :title="item.title ? item.title : ''"
                :is-external="item.object == 'custom' ? true : false"
              ></CustomLink>
              <div
                class="absolute top-full left-0 flex invisible hover:visible group-hover:visible delay-150 px-5 w-full bg-[#111] cursor-default"
              >
                <ul v-if="item.children" class="w-4/5 container mx-auto flex">
                  <li
                    v-for="subItem in item.children"
                    :key="subItem.id"
                    class="basis-1/4 grow-0 flex"
                  >
                    <div class="menu-sub-col">
                      <CustomLink
                        class="text-base block uppercase font-bold transition duration-200 mt-7 mb-6"
                        :class="
                          subItem.object == 'custom'
                            ? 'text-blue-main hover:text-blue-main'
                            : 'text-white hover:text-blue-main'
                        "
                        :url="subItem.url ? subItem.url : ''"
                        :title="subItem.title ? subItem.title : ''"
                        :is-external="subItem.object == 'custom' ? true : false"
                      ></CustomLink>
                      <ul v-if="subItem.children" class="flex flex-col mb-5">
                        <li
                          v-for="subSubItem in subItem.children"
                          :key="subSubItem.id"
                        >
                          <CustomLink
                            v-if="subSubItem.object"
                            class="py-1.5 block text-sm transition duration-200"
                            :class="
                              subSubItem.object == 'custom'
                                ? 'text-blue-main hover:text-blue-main'
                                : 'text-white hover:text-blue-main'
                            "
                            :url="subSubItem.url ? subSubItem.url : ''"
                            :title="subSubItem.title ? subSubItem.title : ''"
                            :is-external="
                              subSubItem.object == 'custom' ? true : false
                            "
                          ></CustomLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="h-full flex items-center overflow-hidden">
            <li
              class="navbar-item z-50 tablet-wide:z-0 flex p-4 justify-center items-center h-full text-base text-inherit hover:text-inherit relative after:bg-blue-main after:content-[''] after:absolute after:block after:left-0 after:-bottom-1 after:h-1 after:w-full after:transform after:transition tablet:hover:after:-translate-y-1"
              :class="{ 'btn-active': expanded }"
              @click="toggleExpanded"
            >
              <div
                class="h-[21px] w-[25px] flex flex-col justify-between items-center"
              >
                <span
                  class="w-[25px] h-[3px] transition duration-300 bg-white rounded-[1px]"
                ></span>
                <span
                  class="w-[25px] h-[3px] transition-all duration-300 bg-white rounded-[1px]"
                ></span>
                <span
                  class="w-[25px] h-[3px] transition duration-300 bg-white rounded-[1px]"
                ></span>
              </div>
            </li>
            <li
              class="navbar-item hidden tablet-wide:flex p-4 justify-center items-center h-full text-base text-inherit hover:text-inherit relative after:bg-blue-main after:content-[''] after:absolute after:block after:left-0 after:-bottom-1 after:h-1 after:w-full after:transform after:transition hover:after:-translate-y-1"
              @click="toggleMainSearch()"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8564 24.8563C25.0479 24.6647 25.0479 24.3545 24.8563 24.163L17.6572 16.9639L17.6867 16.9311C19.3076 15.1315 20.3038 12.7588 20.3038 10.1518C20.3037 4.55414 15.7496 0 10.1519 0C4.55414 0 0 4.55414 0 10.1519C0 15.7496 4.55414 20.3038 10.1519 20.3038C12.7588 20.3038 15.1315 19.3076 16.9312 17.6867L16.9639 17.6573L24.163 24.8563C24.2587 24.9521 24.3843 25 24.5097 25C24.6351 25 24.7606 24.9521 24.8564 24.8563ZM10.1519 19.323C5.09531 19.323 0.980748 15.209 0.980748 10.1519C0.980748 5.09482 5.09531 0.980687 10.1519 0.980687C15.2085 0.980687 19.323 5.09476 19.323 10.1519C19.323 15.209 15.2085 19.323 10.1519 19.323Z"
                  fill="#FFFFFF"
                />
              </svg>
            </li>
          </ul>
          <div
            class="absolute top-0 right-0 w-full h-full hidden tablet-wide:block pointer-events-none"
          >
            <div class="mx-auto w-4/5 container h-full flex overflow-hidden">
              <span class="w-[200px] shrink-0" />
              <form
                class="flex flex-row h-full grow bg-gray-darkest transition duration-[400ms] pointer-events-auto"
                action="/search/"
                :class="{ 'translate-x-full': !mainSearch }"
              >
                <button
                  class="px-5 flex justify-center items-center text-white hover:text-blue-main"
                >
                  <svg
                    class="fill-current transition"
                    width="16"
                    height="16"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8564 24.8563C25.0479 24.6647 25.0479 24.3545 24.8563 24.163L17.6572 16.9639L17.6867 16.9311C19.3076 15.1315 20.3038 12.7588 20.3038 10.1518C20.3037 4.55414 15.7496 0 10.1519 0C4.55414 0 0 4.55414 0 10.1519C0 15.7496 4.55414 20.3038 10.1519 20.3038C12.7588 20.3038 15.1315 19.3076 16.9312 17.6867L16.9639 17.6573L24.163 24.8563C24.2587 24.9521 24.3843 25 24.5097 25C24.6351 25 24.7606 24.9521 24.8564 24.8563ZM10.1519 19.323C5.09531 19.323 0.980748 15.209 0.980748 10.1519C0.980748 5.09482 5.09531 0.980687 10.1519 0.980687C15.2085 0.980687 19.323 5.09476 19.323 10.1519C19.323 15.209 15.2085 19.323 10.1519 19.323Z"
                    />
                  </svg>
                </button>
                <input
                  ref="searchInput"
                  type="text"
                  name="q"
                  placeholder="Search here..."
                  class="w-full px-5 bg-gray-darkest text-base text-white focus-visible:outline-none"
                />
                <div
                  class="px-5 h-full flex justify-center items-center cursor-pointer text-white hover:text-white/70"
                  @click="toggleMainSearch()"
                >
                  <svg
                    class="text-inherit fill-current transition"
                    width="30"
                    height="30"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="17.0625"
                      y="15.0002"
                      width="28.1956"
                      height="2.91678"
                      rx="1"
                      transform="rotate(45 17.0625 15.0002)"
                    />
                    <rect
                      x="15"
                      y="34.9373"
                      width="28.1956"
                      height="2.91679"
                      rx="1"
                      transform="rotate(-45 15 34.9373)"
                    />
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed flex z-40 top-[80px] tablet-wide:top-0 left-0 w-full bottom-0 overflow-hidden"
        :class="{ 'pointer-events-none': !expanded }"
      >
        <div
          class="w-full transition duration-[400ms]"
          :class="{ 'bg-black/50': expanded }"
          @click="toggleExpanded"
        ></div>
        <div
          class="absolute flex flex-col z-50 top-0 left-full w-full tablet-wide:w-[375px] h-full bg-gray-darkest transform transition duration-[400ms]"
          :class="{ '-translate-x-full ': expanded }"
        >
          <div
            class="w-full h-[80px] py-[30px] pr-10 bg-black hidden tablet-wide:block"
          >
            <div
              class="ml-auto w-8 cursor-pointer text-white hover:text-white/80"
              @click="toggleExpanded"
            >
              <svg
                class="text-inherit fill-current transition"
                width="30"
                height="30"
                viewBox="10 10 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="17.0625"
                  y="15.0002"
                  width="28.1956"
                  height="2.91678"
                  rx="1"
                  transform="rotate(45 17.0625 15.0002)"
                />
                <rect
                  x="15"
                  y="34.9373"
                  width="28.1956"
                  height="2.91679"
                  rx="1"
                  transform="rotate(-45 15 34.9373)"
                />
              </svg>
            </div>
          </div>
          <div class="tablet-wide:hidden">
            <form
              class="flex items-center w- h-[70px] pl-14 pr-7 focus-visible:outline-none"
              action="/search/"
            >
              <input
                type="search"
                name="q"
                placeholder="Search..."
                class="grow h-full text-white bg-gray-darkest focus-visible:outline-none placeholder:text-[#BFBFBF] placeholder:italic focus:outline-none font-lato appearance-none"
              />
              <button
                type="submit"
                class="flex items-center justify-center w-[50px] h-[48px] text-[#BFBFBF] hover:text-blue-main"
              >
                <svg
                  class="fill-current transition"
                  width="26"
                  height="26"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.8564 24.8563C25.0479 24.6647 25.0479 24.3545 24.8563 24.163L17.6572 16.9639L17.6867 16.9311C19.3076 15.1315 20.3038 12.7588 20.3038 10.1518C20.3037 4.55414 15.7496 0 10.1519 0C4.55414 0 0 4.55414 0 10.1519C0 15.7496 4.55414 20.3038 10.1519 20.3038C12.7588 20.3038 15.1315 19.3076 16.9312 17.6867L16.9639 17.6573L24.163 24.8563C24.2587 24.9521 24.3843 25 24.5097 25C24.6351 25 24.7606 24.9521 24.8564 24.8563ZM10.1519 19.323C5.09531 19.323 0.980748 15.209 0.980748 10.1519C0.980748 5.09482 5.09531 0.980687 10.1519 0.980687C15.2085 0.980687 19.323 5.09476 19.323 10.1519C19.323 15.209 15.2085 19.323 10.1519 19.323Z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div
            class="grow flex flex-col justify-between overflow-auto custom-scrollbar"
          >
            <ul v-if="sideMenu" class="flex flex-col tablet-wide:pt-1">
              <li v-for="item in sideMenu" :key="item.id">
                <CustomLink
                  class="hover:text-blue-main transition pl-14 pr-7 block"
                  :class="
                    checkMain(item.url)
                      ? 'tablet-wide:hidden text-xl text-white py-6 border-0 border-b border-solid border-gray-darkest bg-black'
                      : ' text-[#BFBFBF] text-base py-[2px] tablet-wide:pl-[75px] mt-7 overflow-hidden tablet-wide:py-5 tablet-wide:text-xl tablet-wide:text-white tablet-wide:hover:bg-black transition tablet-wide:mt-0 relative after:hidden tablet-wide:after:block after:absolute after:h-full after:w-[10px] after:top-0 after:-left-[5px] after:bg-black hover:after:bg-blue-main hover:after:translate-x-[5px] after:transform after:transition duration-200 after:duration-200 after:content-[``] '
                  "
                  :url="item.url ? item.url : ''"
                  :title="item.title ? item.title : ''"
                  :isExternal="item.object == 'custom' ? true : false"
                  @click.native="toggleExpanded()"
                ></CustomLink>
              </li>
            </ul>
            <div
              v-if="socials"
              class="w-full pl-14 tablet-wide:pl-[75px] pr-7 mb-6 mt-20 tablet-wide:my-0 tablet-wide:py-5 border-0 tablet-wide:border-t-2 border-solid border-black"
            >
              <ul class="flex">
                <li
                  class="flex-0 mr-[30px]"
                  v-for="(item, index) in socials"
                  :key="index"
                >
                  <CustomLink
                    :url="item.url"
                    target="_blank"
                    rel="external nofollow"
                    :isExternal="item.object == 'custom' ? true : false"
                    class="flex justify-center items-center w-8 h-8 hover:bg-opacity-70 transition rounded-md bg-[#BFBFBF]"
                  >
                    <svg
                      v-if="item.object_slug === 'facebook'"
                      width="28"
                      height="40"
                      viewBox="-1 -16 26 65"
                      fill="#111"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.71094 26.4011V44.2499H16.793V26.4011H23.5641L24.8531 17.9999H16.793V12.5448C16.793 10.2468 17.9191 8.00615 21.5297 8.00615H25.1941V0.857716C25.1941 0.857716 21.8684 0.290527 18.6879 0.290527C12.0469 0.290527 7.71094 4.31357 7.71094 11.5968V17.9999H0.328125V26.4011H7.71094Z"
                        fill="#111"
                      />
                    </svg>
                    <svg
                      v-if="item.object_slug === 'twitter'"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.963 7.953v.53c0 5.419-4.12 11.669-11.667 11.669-2.314 0-4.493-.508-6.296-1.667.322.046.646.07.97.07 1.924 0 3.706-.833 5.096-1.945a4.085 4.085 0 01-3.821-2.847 4.267 4.267 0 001.851-.07 4.1 4.1 0 01-3.287-4.027v-.047c.556.3 1.18.485 1.851.51a4.085 4.085 0 01-1.828-3.404c0-.763.208-1.39.557-1.991 2.038 2.477 5.046 4.03 8.448 4.213a4.258 4.258 0 01-.09-.95A4.09 4.09 0 0115.841 3.9c1.182 0 2.245.51 3.011 1.297a8.352 8.352 0 002.592-.995c-.3.949-.95 1.76-1.807 2.27A8.103 8.103 0 0022 5.821a8.502 8.502 0 01-2.037 2.13"
                        fill="#111"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <svg
                      v-if="item.object_slug === 'linkedin'"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33 21V8.87h3.805V21H3.329zm9.75-7.006V21H9.414V11.66s-.06-2.314-.06-2.724h3.604l.122 1.664c.732-1.168 1.833-2.054 3.3-2.054 2.566 0 4.399 1.945 4.399 5.449V21h-3.667v-6.617c0-1.946-.896-2.724-1.994-2.724-1.1 0-2.038.778-2.038 2.335zM7.614 5.383A2.381 2.381 0 112.85 5.38a2.381 2.381 0 014.763.003z"
                        fill="#111"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <svg
                      v-if="item.object_slug === 'mail'"
                      width="25"
                      height="25"
                      viewBox="0 0 60 60"
                      fill="#111"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55 15C55 12.25 52.75 10 50 10H10C7.25 10 5 12.25 5 15V45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15ZM50 15L30 27.5L10 15H50ZM50 45H10V20L30 32.5L50 20V45Z"
                        fill="white"
                      />
                    </svg>
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="expanded" class="h-[80px] tablet-wide:hidden"></div>
  </div>
</template>

<script>
import CustomLink from './custom-link.vue'

import { useFocus } from '@vueuse/core'
import { ref } from '@vue/composition-api'
export default {
  name: 'Navbar',
  components: {
    CustomLink,
  },
  props: {
    mainMenu: {
      type: Array,
      required: true,
    },
    sideMenu: {
      type: Array,
      required: true,
    },
    socials: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      expanded: false,
      mainSearch: false,
    }
  },
  setup() {
    const searchInput = ref()
    const { focused } = useFocus(searchInput, { initialValue: false })
    return { searchInput, focused }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded
    },

    toggleMainSearch() {
      this.mainSearch = !this.mainSearch
      if (this.mainSearch) {
        setTimeout(
          function () {
            this.focused = true
          }.bind(this),
          501
        )
      } else {
        this.focused = false
      }
    },

    checkMain(url) {
      return this.mainMenu.some((item) => {
        return item.url === url
      })
    },
  },
}
</script>

<style>
.navbar-item {
  @apply w-auto h-full cursor-pointer overflow-hidden hover:overflow-visible items-center;
}

.menu-sub-col:hover > a {
  @apply text-blue-main;
}
.nuxt-link-active {
  @apply text-blue-main;
}

.nuxt-link-exact-active {
  @apply text-blue-main hover:text-blue-main;
}
.nuxt-link-active {
  @apply text-blue-main hover:text-blue-main;
}

.btn-active span:nth-child(1) {
  @apply translate-y-[9px] -rotate-45 tablet-wide:transform-none;
}
.btn-active span:nth-child(2) {
  @apply w-px tablet-wide:w-[25px];
}
.btn-active span:nth-child(3) {
  @apply -translate-y-[9px] rotate-45 tablet-wide:transform-none;
}
</style>

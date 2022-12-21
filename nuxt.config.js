require('dotenv').config()
const pkg = require('./package.json')

let appVersionCacheBuster =
  process.env.CONTEXT === 'production'
    ? process.env.CF_PAGES_COMMIT_SHA
    : pkg.version + '_' + Date.now()

const HOSTNAME = process.env.CF_PAGES_URL
  ? process.env.CF_PAGES_URL
  : 'http://localhost:3000/'

const postsStatic = 
[
  {
    name: 'CEO of IS-Wireless in Riga: Central Eastern Europe is ready to steer its 5G revolution',
    path: '/news/ceo-of-is-wireless-in-riga-central-eastern-europe-is-ready-to-steer-its-5g-revolution',
  },
  {
    name: 'What does the future hold for 5G in the Three Seas Region? Telco market representatives will meet iIn Riga to present scenarios for the development of mobile communication in the region',
    path: '/news/what-does-the-future-hold-for-5g-in-the-three-seas-region-telco-market-representatives-will-meet-iin-riga',
  },
  {
    name: 'Supermicro And IS-WIRELESS Enabling 5G In The Open RAN Model',
    path: '/news/supermicro-and-is-wireless-enabling-5g-in-the-open-ran-model',
  },
  {
    name: 'IS-Wireless and FiduciaEdge join forces to deliver robust and secure private 5G networks',
    path: '/news/is-wireless-and-fiduciaedge-join-forces-to-deliver-robust-and-secure-private-5g-networks',
  },
  {
    name: 'Comarch Launches an Innovative 5G Laboratory with IS-Wireless',
    path: '/news/comarch-launches-an-innovative-5g-laboratory-with-is-wireless',
  },
  {
    name: 'Open RAN share in total mobile network deployments is only going to grow – experts argue',
    path: '/news/open-ran-share-in-total-mobile-network-deployments-is-only-going-to-grow-experts-argue',
  },
  {
    name: 'We are facing a true paradigm shift and need more initiatives promoting open ecosystems &#8211; conclusions of Digital Catapult webinar on Open RAN',
    path: '/news/we-are-facing-a-true-paradigm-shift-and-need-more-initiatives-promoting-open-ecosystems',
  },
  {
    name: 'Digital Catapult unveils five companies to explore the potential of Open RAN technology on its SONIC Labs testbed',
    path: '/news/digital-catapult-unveils-five-companies-to-explore-the-potential-of-open-ran-technology-on-its-sonic-labs-testbed',
  },
  {
    name: 'Hawe Telekom and IS-Wireless enter into an agreement to build 5G private networks together',
    path: '/news/hawe-telekom-and-is-wireless-enter-into-an-agreement-to-build-5g-private-networks-together',
  },
  {
    name: 'Opticoms joins forces with IS-Wireless to deliver portable 5G',
    path: '/news/opticoms-joins-forces-with-is-wireless-to-deliver-portable-5g',
  },
  {
    name: 'Three Seas’ digital industry calls for close business cooperation in cybersecurity and 5G deployment',
    path: '/news/we-are-facing-a-true-paradigm-shift-and-need-more-initiatives-promoting-open-ecosystems-2',
  },
  {
    name: 'IS-Wireless: Europe needs to foster its mobile networks market and embrace new players',
    path: '/news/is-wireless-europe-needs-to-foster-its-mobile-networks-market-and-embrace-new-players',
  },
  {
    name: 'Open RAN World: IS-Wireless and Advantech are presenting joint solution',
    path: '/news/open-ran-world-is-wireless-and-advantech-are-presenting-joint-solution',
  },
  {
    name: 'End-to-end Open RAN 5G solution by a Polish provider successfully tested in European labs',
    path: '/news/end-to-end-open-ran-5g-solution-by-a-polish-provider-successfully-tested-in-european-labs',
  },
  {
    name: 'Comarch and IS-Wireless Join Forces to Provide a Comprehensive 5G Mobile Network Solution',
    path: '/news/comarch-and-is-wireless-join-forces-to-provide-a-comprehensive-5g-mobile-network-solution',
  },
  {
    name: 'Crafting a Transatlantic Approach to 5G: Assessing the Evolution of Open RAN in the United States and Europe',
    path: '/news/crafting-a-transatlantic-approach-to-5g-assessing-the-evolution-of-open-ran-in-the-united-states-and-europe',
  },
  {
    name: 'IS-Wireless at MWC Los Angeles 2021',
    path: '/news/is-wireless-at-mwc-los-angeles-2021',
  },
  {
    name: 'Polish 5G provider connects the global research community around Open RAN development of mobile networks',
    path: '/news/polish-5g-provider-connects-the-global-research-community-around-open-ran-development-of-mobile-networks',
  },
  {
    name: 'IS-Wireless announces partnership with Tambora Systems and goes global',
    path: '/news/is-wireless-announces-partnership-with-tambora-systems-and-goes-global',
  },
  {
    name: 'Innovation for emergency services and the military: 4G / 5G connectivity in crisis situations',
    path: '/news/innovation-for-emergency-services-and-the-military-4g-5g-connectivity-in-crisis-situations',
  },
  {
    name: 'IS-Wireless, The National Institute of Telecommunications and Warsaw University of Technology join their efforts for 5G network cybersecurity',
    path: '/news/is-wireless-the-national-institute-of-telecommunications-and-warsaw-university-of-technology-join-their-efforts-for-5g-network-cybersecurity',
  },
  {
    name: 'IS-Wireless will deliver 5G network for Industry 4.0 in Krakow',
    path: '/news/is-wireless-will-deliver-5g-network-for-industry-4-0-in-krakow',
  },
  {
    name: 'Open RAN for Beyond 5G Wireless Networks: Challenges and Visions &#8211; online conference',
    path: '/news/open-ran-for-beyond-5g-wireless-networks-challenges-and-visions-online-conference',
  },
  {
    name: 'IS-Wireless ready to deliver 5G networks to customers',
    path: '/news/is-wireless-ready-to-deliver-5g-networks-to-customers',
  },
  {
    name: 'IS-Wirless at MWC Barcelona',
    path: '/news/is-wirless-at-mwc-barcelona',
  },
  {
    name: '5G explained &#8211; IS-Wireless open day (online)',
    path: '/news/5g-explained-is-wireless-open-day',
  },
  {
    name: 'Conference &#8220;5G Made Together &#8211; Creating Future with Open Ecosystems&#8221;',
    path: '/news/conference-5g-made-together-creating-future-with-open-ecosystems',
  },
  {
    name: 'IS-Wireless at Danish Engineering Society',
    path: '/news/is-wireless-at-danish-engineering-society',
  },
  {
    name: '5G Made Together conference',
    path: '/news/5g-made-together-conference',
  },
  {
    name: 'IS-Wireless nominated for the Future Unicorn Award',
    path: '/news/is-wireless-nominated-for-the-future-unicorn-award',
  },
  {
    name: 'IS-Wireless takes part in Globecom 2020',
    path: '/news/is-wireless-takes-part-in-globecom-2020',
  },
  {
    name: '5G Made by Poland &#8211; first conference on Polish 5G technologies',
    path: '/news/5g-made-by-poland-first-conference-on-polish-5g-technologies',
  },
  {
    name: 'Test frequencies in the 800 MHz band!',
    path: '/news/test-frequencies-in-the-800-mhz-band',
  },
  {
    name: 'Open RAN demonstration made by IS-Wireless',
    path: '/news/open-ran-demonstration-made-by-is-wireless',
  },
  {
    name: 'IS-Wireless is one of the founders of CyberMadeInPoland',
    path: '/news/is-wireless-is-one-of-the-founders-of-cybermadeinpoland',
  },
  {
    name: 'RIC &#8211; RAN Intelligent Controller on PLNOG 2020',
    path: '/news/ric-ran-intelligent-controller-on-plnog-2020',
  },
  {
    name: 'IS-Wireless will present at #ReasonOverHype!',
    path: '/news/is-wireless-will-present-at-reasonoverhype',
  },
  {
    name: 'We are hiring Sales Executive',
    path: '/news/we-are-hiring-sales-executive',
  },
  {
    name: 'IS-Wireless joins Morphemic to work on cloud computing and virtual RAN',
    path: '/news/is-wireless-joins-morphemic',
  },
  {
    name: 'Meet IS-Wireless at Mobile World Congress 2020 in Barcelona!',
    path: '/news/is-wireless-at-mwc-2020-in-barcelona',
  },
  {
    name: 'IS-Wireless joins Braine consortium to work on Edge, AI and security',
    path: '/news/is-wireless-joins-braine-consortium',
  },
  {
    name: 'Meet IS-Wireless at IEEE Globecom 2019 in Waikoloa, HI, USA!',
    path: '/news/meet-is-wireless-at-ieee-globecom-2019',
  },
  {
    name: 'Meet IS-Wireless at 2nd &#8220;Visions for Future Communications Summit&#8221; in Lisbon!',
    path: '/news/meet-is-wireless-at-2nd-visions-for-future-communications-summit',
  },
  {
    name: 'Meet IS-Wireless at TIP Summit&#8217;19 in Amsterdam!',
    path: '/news/meet-is-wireless-at-tip-summit19-in-amsterdam',
  },
  {
    name: '&#8220;Open RAN: Open 5G network architecture&#8221; IS-Wireless during PLNOG conference in Cracow!',
    path: '/news/open-5g-network-architecture-is-wireless-plnog-conference-in-cracow',
  },
  {
    name: 'IS-Wireless has joined TIP Initiative!',
    path: '/news/wireless-joined-tip-initiative',
  },
  {
    name: 'We are hiring 5G researchers for a collaborative PhD project!',
    path: '/news/hiring-5g-researchers-collaborative-phd-project-cell-less-ran-cooperative-schemes-interference-management',
  },
  {
    name: '&#8220;5G: cost or saving?&#8221; presentation by IS-Wireless during PLNOG conference in Warsaw!',
    path: '/news/5g-cost-saving-presentation-wireless-plnog-conference-warsaw',
  },
  {
    name: 'Meet IS-Wireless at Mobile World Congress 2019 in Barcelona!',
    path: '/news/meet-wireless-mobile-world-congress-2019-barcelona',
  },
  {
    name: 'IS-Wireless has joined O-RAN Alliance',
    path: '/news/is-wireless-has-joined-o-ran-alliance',
  },
  {
    name: '&#8220;Business models of network slicing&#8221; presented at NoF 2018 in Poznan',
    path: '/news/business-models',
  },
  {
    name: 'IS-Wireless raises 5 million PLN from ASI Bridge Alfa Bitspiration Booster',
    path: '/news/wireless-raises-5-million-pln-asi-bridge-alfa-bitspiration-booster',
  },
  {
    name: 'WiSHFUL OC 5 Experiment wrap-up',
    path: '/news/wishful-oc-5-experiment-wrap',
  },
  {
    name: '&#8220;Virtualizing 5G Radio Access Network&#8221; keynote by Dr Aleksandra Checko',
    path: '/news/virtualizing-5g-radio-access-network-keynote-dr-aleksandra-checko',
  },
  {
    name: 'IS-Wireless raises 14 million PLN to support development of SD-RAN for 5G mobile networks',
    path: '/news/is-wireless-raises-14-million-pln-to-support-development-of-sd-ran-for-5g-mobile-networksis',
  },
  {
    name: 'TeamUp5G  has been selected for funding!',
    path: '/news/teamup5g-selected-funding',
  },
  {
    name: 'IS-Wireless present at Hubraum 5G Day',
    path: '/news/wireless-present-hubraum-5g-day',
  },
  {
    name: 'UAB Barcelona chooses 5G Toolset!',
    path: '/news/uab-barcelona-chooses-5g-toolset',
  },
  {
    name: 'LTE eNB Scheduler presented at Sorbonne University',
    path: '/news/lte-enb-scheduler-presented-sorbonne-university-paris',
  },
  {
    name: 'Meet IS-Wireless at Mobile World Congress 2018 in Barcelona!',
    path: '/news/tytul-meet-wireless-mobile-world-congress-2018-barcelona',
  },
  {
    name: 'EuWireless project started!',
    path: '/news/euwireless-project-started',
  },
  {
    name: 'IS-Wireless&#8217; NFV proposal accepted into SoftFIRE!',
    path: '/news/wireless-nfv-proposal-accepted-softfire',
  },
  {
    name: 'Meet IS-Wireless at IEEE Globecom 2017 in Singapore!',
    path: '/news/meet-wireless-ieee-globecom-2017-singapore',
  },
  {
    name: 'IS-Wireless applies 5G Toolset within WiSHFUL!',
    path: '/news/wireless-applies-5g-toolset-within-wishful',
  },
  {
    name: 'IS-Wireless joins &#8220;5G for Poland&#8221; agreement',
    path: '/news/wireless-joins-5g-poland-agreement',
  },
  {
    name: '5G Toolset at Signal Processing Symposium',
    path: '/news/5g-toolset-signal-processing-symposium',
  },
  {
    name: 'IS-Wireless will be demonstrating Virtualization Framework at IEEE Globecom 2017!',
    path: '/news/wireless-will-demonstrating-virtualization-framework-ieee-globecom-2017',
  },
  {
    name: 'IS-Wireless&#8217; proposal accepted to Fed4Fire!',
    path: '/news/wireless-proposal-accepted-fed4fire',
  },
  {
    name: '5G ESSENCE project started!',
    path: '/news/5g-essence-project-started',
  },
  {
    name: 'IS-Wireless at ICC 2017 in Paris',
    path: '/news/wireless-icc-2017-paris',
  },
  {
    name: 'Work on 5G continues! 5G ESSENCE selected for funding!',
    path: '/news/work-5g-continues-5g-essence-selected-funding',
  },
  {
    name: 'Meet IS-Wireless at Mobile World Congress 2017 in Barcelona',
    path: '/news/meet-wireless-mobile-world-congress-2017-barcelona',
  },
  {
    name: 'Our scheduler software demonstrated live in Sophia-Antipolis!',
    path: '/news/scheduler-software-demonstrated-live-sophia-antipolis',
  },
  { name: 'Winter 2017 Lead Graphics', path: '/news/winter-lead-graphics' },
  {
    name: 'aLTErnative eNB used by three European universities!',
    path: '/news/alternative-enb-used-three-european-universities',
  },
  {
    name: '5G Experimental Toolset used at TU Dresden',
    path: '/news/5g-experimental-toolset-used-tu-dresden',
  },
  {
    name: 'Meet us at IEEE Globecom 2016 in Washington, D.C.',
    path: '/news/meet-us-ieee-globecom-2016-washington-d-c',
  },
  {
    name: 'IS-Wireless co-authored a book on 5G!',
    path: '/news/wireless-co-authored-book-5g',
  },
  {
    name: 'IS-Wireless contributed to a paper in IEEE Communications Magazine',
    path: '/news/wireless-contributed-paper-ieee-communications-magazine',
  },
  {
    name: 'Only for academia: 5G University Suite!',
    path: '/news/academia-5g-university-suite',
  },
  { name: '5G Experimental Toolset', path: '/news/5g-experimental-toolset' },
  {
    name: 'LTE Simulators – flexible and affordable licensing options!',
    path: '/news/lte-simulators-flexible-affordable-licensing-options',
  },
  {
    name: 'LTE Simulators &#8211; free trials!',
    path: '/news/lte-simulators-free-trials',
  },
  {
    name: 'IS-Wireless Online Store Open!',
    path: '/news/wireless-online-store-open',
  },
  {
    name: 'Summer 2016 Lead Graphics',
    path: '/news/summer-2016-lead-graphics',
  },
  {
    name: 'IS-Wireless&#8217; LTE eNB scheduler at Crowncom',
    path: '/news/wireless-lte-enb-scheduler-crowncom',
  },
  {
    name: 'IS-Wireless demonstrating at OAI Workshop in Sophia-Antipolis',
    path: '/news/wireless-demonstrating-oai-workshop-sophia-antipolis',
  },
  {
    name: 'Spring 2016 Lead Graphics',
    path: '/news/spring-2016-lead-graphics',
  },
  {
    name: 'Visit our new training website and check dates for 4G/5G public courses',
    path: '/news/visit-our-new-training-website-and-check-dates-for-4g5g-public-courses',
  },
  {
    name: 'Introducing aLTErnative &#8211; LTE open source subscription service',
    path: '/news/is-wireless-lte-open-source',
  },
  {
    name: 'aLTErnative Lead Graphics',
    path: '/news/alternative-lead-graphics',
  },
  {
    name: 'IS-Wireless and Sarokal partners to develop new test solutions for 4G and 5G radio',
    path: '/news/is-wireless-and-sarokal-partners-to-develop-new-test-solutions-for-4g-and-5g-radio',
  },
  {
    name: 'IS-Wireless starts H2020 eWINE project! Meet us at MWC!',
    path: '/news/new-h2020-project-acquired-book-meeting-mwc',
  },
  {
    name: 'Globecom Tutorial Materials Available',
    path: '/news/globecom-tutorial-materials',
  },
  {
    name: 'Winter 2015 Lead Graphics',
    path: '/news/winter-2015-lead-graphics',
  },
  {
    name: 'Free Simulation Tools &#8211; Happy December promotion has started!',
    path: '/news/free-simulation-tools-happy-december',
  },
  { name: 'Reselling Program', path: '/news/reselling-program-in-is-wireless' },
  { name: '5G waveform in LTE PHY Lab', path: '/news/5g-lte-phy-lab' },
  {
    name: 'USIM Card API &#8211; SIM Card communication interface',
    path: '/news/usim-card-api-lte-sim-card-communication-tool',
  },
  {
    name: 'Meet us at Globecom. New research deliverables.',
    path: '/news/meet-us-at-globecom-new-research-deliverables',
  },
  {
    name: 'New adaptive LTE eNB Scheduler available.',
    path: '/news/new-adaptive-lte-enb-scheduler-available',
  },
  {
    name: 'Real signal analysis in LTE PHY Lab. HetNets and CA in LTE MAC Lab.',
    path: '/news/real-signal-analysis-in-lte-phy-lab-hetnets-and-ca-in-lte-mac-lab',
  },
  {
    name: 'Autumn 2015 Lead Graphics',
    path: '/news/autumn-2015-lead-graphics',
  },
  {
    name: '5GNOW Deliverables Available. Looking for H2020 Partnerships.',
    path: '/news/5gnow-deliverables-available-looking-for-h2020-partnerships',
  },
  {
    name: '5GNOW completed with “excellent” mark!',
    path: '/news/5gnow-completed-with-excellent-mark',
  },
  { name: 'Meet us at Globecom!', path: '/news/meet-us-at-globecom' },
  {
    name: 'New Courses: LTE-A and 5G!',
    path: '/news/new-courses-lte-a-and-5g',
  },
  {
    name: 'IS-Wireless announcing launch of MTC Lab!',
    path: '/news/is-wireless-announcing-launch-of-mtc-lab',
  },
  {
    name: 'Last chance to team up for 5G',
    path: '/news/last-chance-to-team-up-for-5g',
  },
  {
    name: 'IS-WIRELESS at KKRRiT in Warsaw',
    path: '/news/is-wireless-at-kkrrit-in-warsaw',
  },
  { name: 'IS-Wireless on the road!', path: '/news/is-wireless-on-the-road' },
  {
    name: 'IS-Wireless opens a new office in Poznań in Malta Office Park',
    path: '/news/is-wireless-opens-a-new-office-in-poznan-in-malta-office-park',
  },
  {
    name: 'Meet IS-Wireless at MWC 2014 in Barcelona',
    path: '/news/meet-is-wireless-at-mwc-2014-in-barcelona',
  },
  {
    name: 'IS-Wireless exhibiting in Barcelona for MWC',
    path: '/news/is-wireless-exhibiting-in-barcelona-for-mwc',
  },
  {
    name: 'IS-Wireless announces partnership with Datasoft',
    path: '/news/is-wireless-announces-partnership-with-datasoft',
  },
  {
    name: 'IS-Wireless acquires funds within EU FP7!',
    path: '/news/is-wireless-acquires-funds-within-eu-fp7',
  },
  {
    name: 'Join IS-Wireless in Vilnius to prepare for Horizon 2020!',
    path: '/news/join-is-wireless-in-vilnius-to-prepare-for-horizon-2020-2',
  },
  {
    name: '‘LTE-Advanced as a real 4G system’ FREE Workshop in California from IS-Wireless!',
    path: '/news/lte-advanced-as-a-real-4g-system-free-workshop-in-california-from-is-wireless',
  },
  {
    name: 'IS-Wireless received distinction in the MicroEntrepreneur of the Year 2013!',
    path: '/news/is-wireless-received-distinction-in-the-microentrepreneur-of-the-year-2013',
  },
  {
    name: 'Meet IS-Wireless at Future Network &#038; MobileSummit 2013',
    path: '/news/meet-is-wireless-at-future-network-mobilesummit-2013',
  },
  {
    name: 'IS-Wireless announces availability of LTE STACKS!',
    path: '/news/is-wireless-announces-availability-of-lte-stacks',
  },
  {
    name: 'IS-Wireless at the LTE World Summit 2013',
    path: '/news/is-wireless-at-the-lte-world-summit-2013',
  },
  {
    name: 'Visit IS-Wireless at IEEE ICC 2013',
    path: '/news/visit-is-wireless-at-ieee-icc-2013',
  },
  {
    name: 'IS-Wireless at VTC2013-Spring in Dresden',
    path: '/news/is-wireless-at-vtc2013-spring-in-dresden',
  },
  { name: 'IS-Wireless at FoWS 2013', path: '/news/is-wireless-at-fows-2013' },
  {
    name: 'IS-Wireless is looki​ng for partners in E​U FP7!​',
    path: '/news/is-wireless-is-looking-for-partners-in-eu-fp7',
  },
  {
    name: 'Research on 5G started! IS-Wireless acquires funds within EU FP7.',
    path: '/news/research-on-5g-started-is-wireless-acquires-funds-within-eu-fp7',
  },
  {
    name: 'IS-Wireless at the IX Broadband Forum',
    path: '/news/is-wireless-at-the-ix-broadband-forum',
  },
  {
    name: 'IS-Wireless at ICUMT 2012',
    path: '/news/is-wireless-at-icumt-2012',
  },
  { name: 'SDR’12 – WInnComm – Europe', path: '/news/sdr12-winncomm-europe' },
  {
    name: 'LTE LAB Tour | SDR’12 and TU Delft',
    path: '/news/lte-lab-tour-sdr12-and-tu-delft',
  },
  { name: 'LTE World Summit 2012', path: '/news/lte-world-summit-2012' },
  { name: 'Networking 2012', path: '/news/networking-2012' },
  { name: 'LTE Russia &#038; CIS 2012', path: '/news/lte-russia-cis-2012' },
  {
    name: 'IS-Wireless announces two new LTE courses',
    path: '/news/is-wireless-announces-two-new-lte-courses',
  },
  {
    name: 'European Wireless Conference – EW2012',
    path: '/news/european-wireless-conference-ew2012',
  },
  {
    name: 'Mobile World Congress 2012',
    path: '/news/mobile-world-congress-2012',
  },
  {
    name: 'LTE LAB – a complete suite including link-level and system-level LTE/LTE-A simulators for Matlab',
    path: '/news/lte-lab-a-complete-suite-including-link-level-and-system-level-ltelte-a-simulators-for-matlab',
  },
  {
    name: 'IS-Wireless announces launch of 4G University',
    path: '/news/is-wireless-announces-launch-of-4g-university',
  },
  {
    name: 'IS-Wireless announces a public schedule for LTE &#038; LTE-Advanced courses',
    path: '/news/is-wireless-announces-a-public-schedule-for-lte-lte-advanced-courses',
  },
  {
    name: 'LTE-Advanced Workshops: IS-Wireless “Tour-de-Pologne”',
    path: '/news/lte-advanced-workshops-is-wireless-tour-de-pologne',
  },
  {
    name: 'IS-Wireless announces availability of 4G University Suite',
    path: '/news/is-wireless-announces-availability-of-4g-university-suite',
  },
  {
    name: 'IS-Wireless announces the availability of the first LTE-Advanced baseband reference library for MATLAB – LTE PHY Lab v.2',
    path: '/news/is-wireless-announces-the-availability-of-the-first-lte-advanced-baseband-reference-library-for-matlab-lte-phy-lab-v-2',
  },
  {
    name: 'IS-Wireless announces the final development stage of 4G System Lab',
    path: '/news/is-wireless-announces-the-final-development-stage-of-4g-system-lab',
  },
  {
    name: 'National Conference on Radiocommunication and Television',
    path: '/news/national-conference-on-radiocommunication-and-television',
  },
  {
    name: 'IS-Wireless at the LTE World Summit 2011',
    path: '/news/is-wireless-at-the-lte-world-summit-2011',
  },
  {
    name: 'LTE Workshop, Riyadh, Saudi Arabia',
    path: '/news/lte-workshop-riyadh-saudi-arabia',
  },
  {
    name: 'IS-Wireless “Tour-de-Pologne”',
    path: '/news/is-wireless-tour-de-pologne',
  },
  {
    name: 'IS-Wireless announces availability of LTE PHY Lab',
    path: '/news/is-wireless-announces-availability-of-lte-phy-lab',
  },
  {
    name: 'Partnership with the MathWorks',
    path: '/news/partnership-with-the-mathworks',
  },
  {
    name: 'IS rebrands to IS-Wireless',
    path: '/news/is-rebrands-to-is-wireless',
  },
  { name: 'New positions at IS', path: '/news/new-positions-at-is' },
  {
    name: 'IS to co-sponsor Poznan Telecom Workshop',
    path: '/news/is-to-co-sponsor-poznan-telecom-workshop',
  },
  {
    name: 'IS to participate in the 7th Broadband Forum',
    path: '/news/is-to-participate-in-the-7th-broadband-forum',
  },
  {
    name: 'IS to run a seminar on LTE PHY at WUT',
    path: '/news/is-to-run-a-seminar-on-lte-phy-at-wut',
  },
  {
    name: 'IS to deliver a tutorial on LTE radio planning',
    path: '/news/is-to-deliver-a-tutorial-on-lte-radio-planning',
  },
  {
    name: 'IS to demonstrate LTE PHY Lab',
    path: '/news/is-to-demonstrate-lte-phy-lab',
  },
  {
    name: 'Partnership with Sundance',
    path: '/news/partnership-with-sundance',
  },
  {
    name: 'IS to provide WiMAX radio planning to Netia',
    path: '/news/is-to-provide-wimax-radio-planning-to-netia',
  },
  {
    name: 'IS launches Innovative Affiliate Program',
    path: '/news/is-launches-innovative-affiliate-program',
  },
  {
    name: 'IS at the WiMAX Forum Global Congress',
    path: '/news/is-at-the-wimax-forum-global-congress',
  },
  { name: 'WiMAX PHY Lab announced', path: '/news/wimax-phy-lab-announced' },
  { name: 'New positions at IS', path: '/news/new-positions-at-is-2' },
  { name: 'IS delivering speech', path: '/news/is-delivering-speech' },
  { name: 'IS awarded distinction', path: '/news/is-awarded-distinction' },
  {
    name: 'IS moves into new premises',
    path: '/news/is-moves-into-new-premises',
  },
  { name: 'LTE PHY Lab announced', path: '/news/lte-phy-lab-announced' },
  { name: 'The new web page', path: '/news/the-new-web-page' },
  {
    name: 'Partnership with the Institute of Electronics Systems',
    path: '/news/partnership-with-the-institute-of-electronics-systems',
  },
  {
    name: 'Implementation of WiMAX TX and RX',
    path: '/news/implementation-of-wimax-tx-and-rx',
  },
  {
    name: 'Evaluation of the FP7 project proposals',
    path: '/news/evaluation-of-the-fp7-project-proposals',
  },
  {
    name: 'IS broadens the scope of technical courses',
    path: '/news/is-broadens-the-scope-of-technical-courses',
  },
  {
    name: 'Start delivery of technical courses on 3GPP-LTE',
    path: '/news/start-delivery-of-technical-courses-on-3gpp-lte',
  },
  { name: 'Location in TechnoPort', path: '/news/location-in-technoport' },
  {
    name: 'ICT brokerage event in Aalborg',
    path: '/news/ict-brokerage-event-in-aalborg',
  },
  {
    name: 'WiMAX base station design',
    path: '/news/wimax-base-station-design',
  },
  {
    name: 'Successful trial of the NextG prototype',
    path: '/news/successful-trial-of-the-nextg-prototype',
  },
  {
    name: 'Acquisition of the first assignment',
    path: '/news/acquisition-of-the-first-assignment',
  },
] 

export default {
  env: {
    HOST: HOSTNAME,
    COMMIT: process.env.CF_PAGES_COMMIT_SHA,
    CONTEXT: process.env.CONTEXT,
    API_URL: process.env.API_URL,
    API_AFFIX: process.env.API_AFFIX,
  },
  publicRuntimeConfig: {
    baseURL: HOSTNAME,
    API_URL: process.env.API_URL,
    GMAP_KEY: process.env.API_GMAPS,
    version: appVersionCacheBuster,
    algolia: {
      applicationId: 'VR74LN6Q10',
      apiKey: 'a80619850095c92c2fc1696244c05f41',
    },
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IS-Wireless #5GMadeTogether',
    description: '4G and 5G Mobile Networks of the Future',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '4G and 5G Mobile Networks of the Future',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico?v=' + appVersionCacheBuster,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://is-wireless.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: true,
      },
    ],
  },
  // router: {
  //   extendRoutes(routes, resolve) {
  //     postsStatic.forEach(post =>{
  //       routes.push({
  //         name: post.name,
  //         path: post.path,
  //         component: resolve(__dirname, 'pages/news/_slug.vue')
  //       })
  //     })
  //   }
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', '@/assets/animation.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-google-maps', mode: 'client' },
    { src: '~/plugins/vue-composition-api', mode: 'server' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/pwa',
    [
      '@aceforth/nuxt-netlify',
      {
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        headers: {
          '/*': [
            'Access-Control-Allow-Origin: *',
            `X-Build: ${pkg.version}`,
            `X-Robots-Tag: ${
              process.env.CONTEXT !== 'production' ? 'noindex' : 'index'
            }`,
          ],
          '/favicon.ico': ['Cache-Control: public, max-age=86400'],
        },
        // redirects: [
        //   {
        //     from: 'https://is-wireless.com',
        //     to: 'https://www.is-wireless.com',
        //   },
        // ],
      },
    ],
    // {
    //   src: 'nuxt-magpie',
    //   options: {
    //     concurrency: 20,
    //     baseUrl: `${process.env.API_URL}/wp-content`,
    //     path: '/files',
    //     extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg', 'xml'],
    //   },
    // },
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-algolia',
    {
      src: '@nuxtjs/robots',
      options: {
        robots: {
          UserAgent: '*',
        },
      },
    },
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    {
      src: '@nuxtjs/dotenv',
      options: {
        only: ['API_URL', 'API_AFFIX', 'CONTEXT'],
      },
    },
    {
      src: 'wp-nuxt',
    },
    // 'nuxt-speedkit',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ['vue-share-it', /^vue2-google-maps($|\/)/],
    extend(config) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]

      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
  render: {
    asyncScripts: false,
    resourceHints: false,
    //   // injectScripts: false, #need optimisation
    //   crossorigin: 'anonymous',
    //   http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) =>
    //       preloadFiles
    //         .filter((f) => f.asType === 'script')
    //         .map(
    //           (f) =>
    //             `<${publicPath}${f.file}>; rel=preload; as=${f.asType}; crossorigin`
    //         ),
    //   },
    //   compressor: { threshold: 9, level: 9 },
  },
  generate: {
    dir: 'public',
    crawler: true,
    fallback: '404.html',
  },

  image: {
    screens: {
      default: 320,
      // xxs: 480,
      // xs: 576,
      // sm: 768,
      md: 996,
      lg: 1200,
      // xl: 1367,
      // xxl: 1600,
      '4k': 1921,
    },
    domains: [
      'is-wireless.com',
      'www.is-wireless.com',
      'api.is-wireless.com',
      'img.youtube.com',
      process.env.API_URL,
    ],
    alias: {
      app: 'api.is-wireless.com',
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    },
  },
  pwa: {
    meta: {
      name: 'IS-Wireless',
      theme_color: '#00A2DF',
      ogTitle: false,
      ogDescription: false,
      ogType: false,
      ogSiteName: 'IS-Wireless',
      ogHost: process.env.CF_PAGES_URL,
      ogUrl: false,
      twitterCard: 'summary',
      twitterSite: '@is_wireless',
      twitterCreator: 'Sławomir Pietrzyk',
    },
    manifest: {
      lang: 'en',
      theme_color: '#00A2DF',
      id: '/?standalone=true',
      title: 'IS-Wireless',
      name: 'IS-Wireless',
      shortName: 'IS-Wireless',
      orientation: 'any',
      description:
        'IS-Wireless is an advanced wireless communications company. We are developing protocols, simulators and IP algorithms. We also deliver 4G and 5G courses.',
    },
    workbox: {
      cleanupOutdatedCaches: true,
      // offlineStrategy: 'StaleWhileRevalidate',
      cacheOptions: {
        cacheId: appVersionCacheBuster,
        revision: appVersionCacheBuster,
      },
      offlineStrategy: 'NetworkOnly',
      cacheAssets: false,
    },
    icon: {
      fileName: 'symbol.png',
    },
  },
  wp: {
    discover: true,
    endpoint: `${process.env.API_URL}${process.env.API_AFFIX}`,
    extensions: true,
    customRoutes: [
      {
        extension: 'wp-api-menus/v2',
        route: '/menus/(?P<id>\\d+)',
        name: 'menuIdSelect',
      },
    ],
  },
  layoutTransition: {
    name: 'page',
    mode: 'out-in',
  },

  speedkit: {
    detection: {
      performance: true,
      browserSupport: true,
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },

    fonts: [],
    // fonts: [
    //   {//@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    //     family: 'Lato',
    //     locals: ['Lato'],
    //     fallback: ['Arial', 'sans-serif'],
    //     variances: [
    //       {
    //         style: 'normal',
    //         weight: 400,
    //         sources: [
    //           { src: '@/assets/fonts/font-a-regular.woff', type: 'woff' },
    //           { src: '@/assets/fonts/font-a-regular.woff2', type: 'woff2' },
    //         ],
    //       },
    //       {
    //         style: 'italic',
    //         weight: 400,
    //         sources: [
    //           { src: '@/assets/fonts/font-a-regularItalic.woff', type: 'woff' },
    //           {
    //             src: '@/assets/fonts/font-a-regularItalic.woff2',
    //             type: 'woff2',
    //           },
    //         ],
    //       },
    //       {
    //         style: 'normal',
    //         weight: 700,
    //         sources: [
    //           { src: '@/assets/fonts/font-a-700.woff', type: 'woff' },
    //           { src: '@/assets/fonts/font-a-700.woff2', type: 'woff2' },
    //         ],
    //       },
    //     ],
    //   },
    // ],

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%',
    },

    loader: {
      dataUri: null,
      size: '100px',
      backgroundColor: 'grey',
    },
  },
}

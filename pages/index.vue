<template>
  <div class="overflow-x-hidden snap-y snap-mandatory overflow-y-scroll h-screen" @wheel.prevent="handleScroll">
    <div ref="top" class="invisible" />

    <!-- FAB -->
    <Transition name="fab-transition">
      <nuxt-link v-show="showFAB" v-slot="{ navigate }" to="/timer" custom>
        <div role="button" tabindex="0" class="transition absolute w-full bottom-0 rounded-t-lg xl:w-auto xl:right-6 xl:bottom-4 z-10 xl:rounded-lg text-xl shadow-md px-4 py-3 bg-amber-300 hover:bg-amber-400 shadow-amber-300/30 hover:shadow-amber-300/60 active:duration-500 active:shadow-xl active:shadow-amber-300/80 active:bg-amber-500 text-black font-bold uppercase cursor-pointer flex flex-row space-x-2 items-center border border-neutral-100" @click="navigate">
          <img src="/favicon.svg" width="32" height="32" role="presentation">
          <span v-text="$i18n.t('index.launch')" />
        </div>
      </nuxt-link>
    </Transition>

    <!-- Section 1: intro -->

    <Section ref="section-1" class="snap-center bg-gray-100 justify-center flex flex-col overflow-hidden items-center">
      <Columns class="flex-col xl:flex-row xl:space-x-16 px-4 xl:px-24 pt-8 xl:pt-0">
        <template #left>
          <!-- App title and CTAs -->
          <div class="transition-all duration-1000 flex flex-col justify-center" :class="{ 'opacity-0 -translate-x-4': !loading.mainText }">
            <div class="flex flex-row items-start xl:mr-16">
              <!-- App icon -->
              <div class="mr-4 mt-1 min-w-max min-h-max">
                <img src="/favicon.svg" width="68" height="68" class="bg-red-200 rounded-lg p-2" role="presentation">
              </div>
              <!-- App name and slogan -->
              <div class="flex flex-col">
                <h1 class="text-3xl md:text-5xl font-bold">
                  AnotherPomodoro
                </h1>
                <div class="text-lg md:text-xl" v-text="$i18n.t('index.app_description')" />
              </div>
            </div>
            <!-- CTAs -->
            <div class="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-2 mt-6 gap-2">
              <nuxt-link v-slot="{ navigate }" to="/timer" custom>
                <div class="flex-grow text-center px-6 py-4 bg-amber-300 hover:bg-amber-400 shadow-amber-300/30 hover:shadow-amber-300/60 active:duration-500 active:shadow-xl active:shadow-amber-300/80 active:bg-amber-500 shadow-lg text-2xl rounded-lg font-bold uppercase cursor-pointer transition-all" role="button" tabindex="0" @click="navigate" v-text="$i18n.t('index.cta.quickstart')" />
              </nuxt-link>
              <nuxt-link v-slot="{ navigate }" to="/setup" custom>
                <div class="flex-grow text-center px-6 py-4 bg-slate-300 hover:bg-gray-300 text-2xl rounded-lg font-bold uppercase cursor-pointer transition-all shadow-slate-300/0 hover:shadow-slate-300/40 hover:shadow-lg active:shadow-slate-300/60 active:bg-slate-400" role="button" tabindex="0" @click="navigate" v-text="$i18n.t('index.cta.configure')" />
              </nuxt-link>
            </div>
          </div>
        </template>
        <!-- App screenshot -->
        <template #right>
          <div :class="['transition-all duration-1000 hover:duration-300 overflow-hidden order-first xl:order-last mb-12 xl:mb-0 rounded-lg shadow-red-300/60 shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-red-300/70 w-full max-w-2xl xl:max-w-max self-center', { 'opacity-0 translate-x-4': !loading.screenshot }]">
            <nuxt-img
              :alt="$i18n.t('index.alt.img.screenshot')"
              class=""
              width="1600"
              height="900"
              src="/assets/img/screenshots/720p/Timer_Default_2x.png"
              format="jpg"
              sizes="sm:760px xl:1600px"
              quality="80"
              fit="contain"
            />
          </div>
        </template>
      </Columns>

      <template #after>
        <div class="flex-grow xl:absolute xl:bottom-4 flex flex-col items-center justify-end">
          <!-- Source code, support and social buttons -->
          <div class="flex flex-row space-x-2 mb-4">
            <SupportButton
              :aria-label="$i18n.t('index.alt.links.source')"
              icon-size="28"
              type="github"
              :show-text="false"
              :default-colours="false"
              class="p-2 bg-black hover:bg-gray-800 active:bg-gray-900 text-gray-100"
              utm-tags="?utm_source=AnotherPomodoro&utm_medium=web&utm_content=home"
              tabindex="0"
            />
            <SupportButton
              :aria-label="$i18n.t('index.alt.links.support')"
              icon-size="28"
              type="support"
              :show-text="false"
              :default-colours="false"
              class="p-2 bg-black hover:bg-gray-800 active:bg-gray-900 text-gray-100"
              utm-tags="?utm_source=AnotherPomodoro&utm_medium=web&utm_content=home"
              tabindex="0"
            />
          </div>
          <!-- Scroll indicator -->
          <ScrollIcon size="42" />
        </div>
      </template>
    </Section>

    <!-- Section 2: about Pomodoro and the app -->
    <Section ref="section-2" class="snap-center bg-sky-100 justify-center flex flex-col overflow-hidden px-2">
      <div class="mt-8 text-sky-900 flex flex-col items-center">
        <h2 class="text-5xl font-bold uppercase tracking-tight" v-text="$i18n.t('index.section_whatitdoes.title')" />
        <div class="mt-2 text-lg xl:text-xl text-center">
          <client-only>
            <i18n path="index.section_whatitdoes.subtitle.main" tag="p">
              <b>AnotherPomodoro</b>
            </i18n>
          </client-only>
          <p v-text="$i18n.t('index.section_whatitdoes.subtitle.sub')" />
        </div>

        <!-- Schedule display imitation -->
        <div class="rounded-lg bg-slate-800 p-3 flex flex-row space-x-3 shadow-lg shadow-slate-500/20 mt-16">
          <div :class="['transition duration-500 ring-2 ring-inset ring-transparent w-12 h-12 bg-work rounded-lg', { '!ring-white': section2selectedBox === 1 }]" />
          <div :class="['transition duration-500 ring-2 ring-inset ring-transparent w-12 h-12 bg-shortpause rounded-lg', { '!ring-white': section2selectedBox === 2 }]" />
          <div :class="['transition duration-500 ring-2 ring-inset ring-transparent w-12 h-12 bg-longpause rounded-lg', { '!ring-white': section2selectedBox === 3 }]" />
        </div>

        <!-- Schedule cards -->
        <div class="mt-4 grid grid-flow-row xl:grid-flow-col xl:auto-cols-auto gap-4 items-start">
          <ScheduleCard :title="$i18n.t('index.section_whatitdoes.cards[0].title')" :description="$i18n.t('index.section_whatitdoes.cards[0].description')" :duration="$i18n.t('index.section_whatitdoes.cards[0].duration')" dot-class="bg-work" :class="[{ 'shadow-lg shadow-slate-700/30 !bg-slate-600': section2selectedBox === 1 }]" />

          <IconNext class="hidden xl:block self-center" />

          <ScheduleCard :title="$i18n.t('index.section_whatitdoes.cards[1].title')" :description="$i18n.t('index.section_whatitdoes.cards[1].description')" :duration="$i18n.t('index.section_whatitdoes.cards[1].duration')" dot-class="bg-shortpause" :class="[{ 'shadow-lg shadow-slate-700/30 !bg-slate-600': section2selectedBox === 2 }]" />

          <IconNext class="hidden xl:block self-center" />
          <IconDots class="hidden xl:block self-center" />
          <IconNext class="hidden xl:block self-center" />

          <ScheduleCard :title="$i18n.t('index.section_whatitdoes.cards[2].title')" :description="$i18n.t('index.section_whatitdoes.cards[2].description')" :duration="$i18n.t('index.section_whatitdoes.cards[2].duration')" dot-class="bg-longpause" :class="[{ 'shadow-lg shadow-slate-700/30 !bg-slate-600': section2selectedBox === 3 }]" />
        </div>
      </div>
    </Section>

    <!-- Section 3: Features -->
    <Section ref="section-3" class="snap-center bg-amber-50 justify-center items-center flex flex-col overflow-hidden text-center px-4">
      <h2 class="text-5xl font-bold uppercase tracking-tight text-amber-900" v-text="$i18n.t('index.section_features.title')" />

      <div class="mt-8 grid grid-cols-2 text-lg xl:text-xl xl:grid-cols-4 grid-flow-row gap-4 xl:gap-8 max-w-5xl">
        <div v-for="(feature, index) in section3.smallFeatures" :key="feature" :class="['transition duration-1000 py-4 px-4 rounded-lg text-gray-900 text-opacity-80 flex flex-col justify-center', { '!text-gray-100 text-opacity-100 bg-slate-800': section3.activeFeature === index }]" v-text="$i18n.t('index.section_features.list.' + feature)" />
      </div>
    </Section>

    <!-- Section 4: FAQ -->
    <Section ref="section-4" class="snap-center bg-amber-300 justify-center items-center flex flex-col overflow-hidden text-center">
      <h2 class="text-5xl font-bold uppercase tracking-tight text-black" v-text="$i18n.t('index.faq.title')" />

      <div class="mt-8 px-4 w-full xl:w-[1280px] xl:h-96 h-[36rem] text-left flex flex-col space-y-2">
        <details v-for="(question, i) in faq" :key="'faq-' + i" class="open:bg-gray-50 bg-gray-100 ring-1 ring-transparent open:ring-gray-400 shadow-slate-400/30 open:shadow-lg rounded-lg p-4 w-full transition text-gray-700 open:text-gray-900" :open="openfaq === i" @click.prevent="openfaq = i">
          <summary class="font-bold cursor-pointer" v-text="$i18n.t('index.faq.accordion.' + question.q +'.q')" />
          <div class="mt-2" v-text="$i18n.t('index.faq.accordion.' + question.q + '.a')" />
          <div v-if="question.hint" class="mt-2">
            <span class="rounded-lg bg-amber-400 text-gray-900 py-1 px-2 font-bold" v-text="$i18n.t('index.faq.hint')" />
            {{ $i18n.t('index.faq.accordion.' + question.q + '.hint') }}
          </div>
        </details>
      </div>
    </Section>

    <!-- Section 5: Support -->
    <Section ref="section-5" class="snap-center bg-stone-100 justify-center items-center flex flex-col overflow-hidden text-center px-4">
      <h2 class="text-5xl font-bold uppercase tracking-tight text-black leading-tight" v-text="$i18n.t('index.support.title')" />

      <div class="mt-3 flex flex-col space-y-1">
        <p v-text="$i18n.t('index.support.subtitle[0]')" />
        <i18n path="index.support.subtitle[1].base">
          <b>{{ $i18n.t('index.support.subtitle[1].action') }}</b>
        </i18n>
      </div>

      <div class="mt-8 flex flex-row space-x-2">
        <SupportButton type="github" default-classes />
        <SupportButton type="support" default-classes />
      </div>
      <!-- Share links -->
      <div class="my-2" v-text="$i18n.t('settings.about.share')" />
      <div class="flex flex-row items-center space-x-2 text-sm">
        <a :aria-label="$i18n.t('index.alt.links.share.twitter')" href="https://twitter.com/AnotherPomodoro?utm_source=AnotherPomodoro&utm_medium=web&utm_content=home" class="rounded-full w-12 h-12 bg-[#1da1f2] text-white flex flex-row items-center justify-center space-x-1 transition-colors">
          <AboutTwitter size="24" />
        </a>
        <a :aria-label="$i18n.t('index.alt.links.share.facebook')" href="http://www.facebook.com/share.php?u=https://another-pomodoro.netlify.app" class="rounded-full w-12 h-12 bg-[#1877f2] text-white flex flex-row items-center justify-center space-x-1 transition-colors">
          <AboutFacebook size="24" class="translate-x-[-1px]" />
        </a>
        <a :aria-label="$i18n.t('index.alt.links.share.reddit')" href="https://reddit.com/submit?url=https://another-pomodoro.netlify.app" class="rounded-full w-12 h-12 bg-[#ff4500] text-white flex flex-row items-center justify-center space-x-1 transition-colors">
          <AboutReddit size="24" />
        </a>
      </div>

      <template #after>
        <div class="absolute bottom-20 xl:bottom-4 flex flex-col justify-center items-center">
          <div class="" v-text="$i18n.t('index.support.credits')" />
          <div class="mt-1 px-2 py-1 bg-gray-800 text-gray-50 rounded-lg select-none" v-text="$store.state.version" />
        </div>
      </template>
    </Section>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronRightIcon, DotsIcon, BrandFacebookIcon, BrandTwitterIcon, BrandRedditIcon } from 'vue-tabler-icons'
import Columns from '@/components/index/columns.vue'
import Section from '@/components/index/section.vue'
import ScheduleCard from '@/components/index/scheduleCard.vue'

import SupportButton from '~/components/socialButtons/supportButton.vue'

export default {
  name: 'PageHome',

  components: { Columns, Section, ScheduleCard, ScrollIcon: ChevronDownIcon, IconNext: ChevronRightIcon, IconDots: DotsIcon, SupportButton, AboutFacebook: BrandFacebookIcon, AboutTwitter: BrandTwitterIcon, AboutReddit: BrandRedditIcon },

  data () {
    return {
      loading: {
        mainText: false,
        screenshot: false
      },
      currentSection: 0,
      scroll: {
        sections: [],
        sectionObserver: null,
        fabObserver: null
      },
      section2: {
        selectedBoxIndex: 0,
        selectedBoxOrder: [1, 2, 1, 2, 1, 3],
        selectedBoxInterval: null
      },
      section3: {
        smallFeatures: [
          'customization', 'notifications', 'flexible', 'pwa', 'opensource', 'notrackers', 'noads',
          'clean', 'adaptiveticking', 'localization', 'darkmode', 'more'
        ],
        activeFeature: 4,
        activeFeatureInterval: null
      },
      faq: [
        { q: 'change_timers' },
        { q: 'will_it_help', hint: true },
        { q: 'data_collection' },
        { q: 'remember_settings', hint: true },
        { q: 'need_to_know' },
        { q: 'timer_style' }
      ],
      openfaq: 0,
      showFAB: false
    }
  },

  head () {
    return {
      title: 'AnotherPomodoro',
      link: [
        { rel: 'icon', href: '/favicon.svg' }
      ]
    }
  },

  computed: {
    section2selectedBox () {
      return this.section2.selectedBoxOrder[this.section2.selectedBoxIndex]
    }
  },

  watch: {
    currentSection (newValue) {
      if (this.scroll.sections[newValue]) {
        this.scroll.sections[newValue].scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  },

  mounted () {
    const sectionKeys = Object.keys(this.$refs).filter(key => key.startsWith('section-'))

    for (const key of sectionKeys) {
      this.$refs[key].dataset.scrollkey = this.scroll.sections.length
      this.scroll.sections.push(this.$refs[key])
    }

    this.scroll.sectionObserver = new IntersectionObserver((entries) => {
      // Find section that was scrolled into view
      for (const item of entries) {
        if (item.isIntersecting) {
          this.currentSection = Number.parseInt(item.target.dataset.scrollkey)
          break
        }
      }
    }, {
      root: this.$el,
      threshold: 0.1
    })

    // Register the scroll observer for all sections
    for (const section of this.scroll.sections) {
      this.scroll.sectionObserver.observe(section)
    }

    this.$nextTick(() => {
      // Float in the app title and icon
      this.loading.mainText = true

      setTimeout(() => {
        // Float in the app screenshot
        this.loading.screenshot = true
      }, 1000)
    })

    // start animations
    this.selectedBoxInterval = setInterval(() => {
      this.section2.selectedBoxIndex = this.section2.selectedBoxIndex > 4 ? 0 : this.section2.selectedBoxIndex + 1
    }, 4000)

    this.activeFeatureInterval = setInterval(() => {
      this.section3.activeFeature = Math.floor(Math.random() * (this.section3.smallFeatures.length - 1))
    }, 3000)

    // register FAB scroll observer
    this.scroll.fabObserver = new IntersectionObserver(
      (entries) => {
        this.showFAB = !entries[0].isIntersecting
      },
      {
        root: this.$el,
        threshold: 1.0
      }
    ).observe(this.$refs.top)
  },

  beforeDestroy () {
    clearInterval(this.selectedBoxInterval)
    clearInterval(this.activeFeatureInterval)
    if (this.scroll.fabObserver) {
      this.scroll.fabObserver.disconnect()
    }

    if (this.scroll.sectionObserver) {
      this.scroll.sectionObserver.disconnect()
    }
  },

  methods: {
    setIntersecting (value) {
      this.showFAB = value
    },

    handleScroll (event) {
      if (event.deltaY > 0) {
        // scroll downwards
        this.currentSection = Math.min(this.currentSection + 1, this.scroll.sections.length - 1)
      } else if (event.deltaY < 0) {
        // scroll upwards
        this.currentSection = Math.max(this.currentSection - 1, 0)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fab-transition-enter,
.fab-transition-leave-to {
  @apply scale-0 opacity-0;
}

.main-appear-enter-active {
  @apply transition duration-1000;
}

.main-appear-enter {
  @apply opacity-0 -translate-x-4;
}
</style>

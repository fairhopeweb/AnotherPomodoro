<template>
  <BaseSettingsItem :settings-key="settingsKey" :disabled="disabled" :custom-set-function="customSetFunction">
    <template #content-action="{ settingsValue, update }">
      <input
        class="w-6 h-6 cursor-pointer"
        type="checkbox"
        :checked="settingsValue"
        :value="settingsValue"
        @input="update($event.target.checked)"
      >
    </template>
  </BaseSettingsItem>
</template>

<script>
import settingsInputMixin from '@/assets/mixins/settings/settingsItemBase'

export default {
  components: {
    BaseSettingsItem: () => import(/* webpackMode: "eager" */ '~/components/settings/resolvedSettingsItem.vue')
  },

  mixins: [settingsInputMixin],

  props: {
    settingsKey: {
      type: Array,
      default: () => []
    },

    customSetFunction: {
      type: Function,
      default: undefined
    }
  }
}
</script>

<template>
  <component
    v-on="$listeners"
    v-bind="$attrs"
    :is="tag"
    class="app-link"
    :class="{
      'app-link_thin': thin,
      'app-link_hoverable': hoverable
    }"
  >
    <slot />
    <div
      v-if="$slots.append"
      class="app-link__append"
    >
      <slot name="append" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppLink',

  props: {
    tag: {
      type: String,
      default: 'router-link',
      validator (value) {
        return ['router-link', 'a'].includes(value)
      },
    },
    thin: Boolean,
    hoverable: Boolean,
  },
}
</script>

<style lang="scss">
.app-link {
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-weight: 500;

  &_thin {
    font-size: 13px;
    font-weight: 400;
  }

  &_hoverable:hover {
    text-decoration: underline;
  }

  &__append {
    margin-left: 6px;
  }
}
</style>

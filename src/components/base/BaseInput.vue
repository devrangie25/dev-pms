<template>
  <v-text-field
    :name="props.name"
    :model-value="props.modelValue"
    :type="props.type"
    :label="props.label"
    :variant="props.variant"
    :placeholder="props.placeholder"
    :hide-details="props.hideDetails"
    :prepend-inner-icon="props.prependInnerIcon"
    :append-inner-icon="props.appendInnerIcon"
    :error-messages="props.errorMessages"
    @input="$emit('update:props.modelValue', $event)"
    @click:append-inner="$emit('click:click-append-inner-icon')"
    v-bind="$attrs"
  >
  </v-text-field>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

interface Props {
  name?: string
  type?: string
  label?: string
  modelValue?: string
  hideDetails?: any
  prependInnerIcon?: string // mdi icons only
  appendInnerIcon?: string // mdi icons only
  variant?: any
  placeholder?: string
  errorMessages?: string[] | string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'input-field',
  variant: 'outlined',
  type: 'text',
  hideDetails: 'auto',
})

</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "BaseInput",
})
</script>

<style scoped></style>

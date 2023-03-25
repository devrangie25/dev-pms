<template>
    <v-icon :size="props.size" :color="color">
        {{ props.icon }}
    </v-icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',

  props: {
    size: {
        type: String,
        default: '28',
        required: false
    },
    icon: {
        type: String,
        default: 'mdi-home-outline',
        required: false
    },
    color: {
        type: String,
        default: '#424242',
        required: false
    }
  },

  setup(props) {

    return {
        props
    }
  }
})
</script>

<style scoped></style>

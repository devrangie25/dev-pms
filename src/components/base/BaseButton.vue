<template>
    <v-btn
        :class="props.btnClass"
        :block="props.block"
        :border="props.border"
        :color="props.color"
        :density="buttonDensity"
        :icon="isIcon"
        :size="props.size"
        :to="props.to"
        :type="props.type"
        :disabled="props.disabled"
    >
        <slot name="content" />
    </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

import { Densities } from "../../static/type";

export default defineComponent({
    name: "BaseButton",

    props: {
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },
        block: {
            type: Boolean,
            default: false,
            required: false,
        },
        btnClass: {
            type: String,
            default: "",
            required: false,
        },
        border: {
            type: Boolean,
            default: false,
            required: false,
        },
        color: {
            type: String,
            default: "default",
            required: false,
        },
        density: {
            type: String,
            default: "default",
            required: false,
        },
        isIcon: {
            type: Boolean,
            default: false,
            required: false,
        },
        size: {
            type: String,
            default: 'default',
            required: false
        },
        to: {
            type: undefined,
            default: undefined,
            required: false
        },
        type: {
            type: String,
            default: 'submit',
            required: false
        }
    },

    setup(props) {
        const initializedDensity: Ref<string> = ref(props.density);
        const buttonDensity: Densities = initializedDensity as unknown as Densities;

        return {
            props,
            buttonDensity
        };
    },
});
</script>

<style scoped></style>

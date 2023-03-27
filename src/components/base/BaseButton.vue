<template>
    <v-btn
        :class="props.btnClass"
        :block="props.block"
        :border="props.border"
        :color="props.color"
        :density="density"
        :icon="isIcon"
        :size="props.size"
        :to="props.to"
    >
        <slot name="content" />
    </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export type Densities = "default" | "comfortable" | "compact";

export default defineComponent({
    name: "BaseButton",

    props: {
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
            default: "primary",
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
        }
    },

    setup(props) {
        const initializedDensity: Ref<string> = ref(props.density);
        const density: Densities = initializedDensity as unknown as Densities;

        return {
            props,
            density
        };
    },
});
</script>

<style scoped></style>

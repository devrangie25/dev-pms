<template>
    <v-dialog
        :width="props.width"
        :height="props.height"
        :fullscreen="props.fullscreen"
        :persistent="props.persistent"
        :transition="props.transition"
    >
        <slot name="content" />
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BaseModal",

    props: {
        fullscreen: {
            type: Boolean,
            default: false,
            required: false,
        },
        persistent: {
            type: Boolean,
            default: false,
            required: false,
        },
        scrollable: {
            type: Boolean,
            default: false,
            required: false,
        },
        width: {
            type: String,
            default: "600",
            required: false,
        },
        height: {
            type: String,
            default: '600',
            required: false,
        },
        scrim: {
            type: Boolean,
            default: false,
            required: false,
            description: "Accepts true/false to enable background, and string to define color."
        },
        transition: {
            type: String,
            default: '600',
            required: false,
        },
    },

    setup(props) {

        return {
            props
        };
    },
});
</script>

<style scoped></style>

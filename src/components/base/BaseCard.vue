<template>
    <v-card
        :class="props.cardClass"
        :width="props.width"
        :height="props.height"
        :flat="props.flat"
        :rounded="props.rounded"
        :color="props.color"
    >
        <v-card-title>
            <slot name="card-title" />
        </v-card-title>

        <v-card-text>
            <slot name="card-content" />
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BaseCard",

    props: {
        title: {
            type: String,
            default: "Card Title",
            required: false,
        },
        cardClass: {
            type: String,
            default: "mx-auto pa-3",
            required: false,
        },
        width: {
            type: String,
            default: "100%",
            required: false,
        },
        height: {
            type: String,
            default: "200",
            required: false,
        },
        flat: {
            type: Boolean,
            default: true,
            required: false,
        },
        rounded: {
            type: String,
            default: "xl",
            required: false,
        },
        color: {
            type: String,
            default: "#ffffff",
            required: false,
        },
    },

    setup(props) {
        return {
            props,
        };
    },
});
</script>

<style scoped></style>

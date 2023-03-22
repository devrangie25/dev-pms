<template>
    <v-select
        v-model="select"
        :items="items"
        :label="props.label"
        density="compact"
        hide-details="auto"
        :variant="variant"
    ></v-select>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export type Variants = "outlined" | "filled" | "plain";

export default defineComponent({
    name: "BaseSelect",

    props: {
        items: {
            type: Array,
            default: [],
            required: true,
        },
        label: {
            type: String,
            default: 'Label',
            required: false,
        },
        variant: {
            type: String,
            default: 'outlined',
            required: false,
        }
    },

    setup(props) {
        const select = ref();
        const items = ref([...props.items]);
        const initializedVariant: Ref<string> = ref(props.variant)
        const variant: Variants = initializedVariant as unknown as Variants

        return {
            props,
            select,
            items,
            variant
        };
    },
});
</script>

<style scoped></style>

<template>
    <v-select
        v-model="select"
        :items="items"
        :label="props.label"
        hide-details="auto"
        :variant="selectVariant"
        :density="selectDensity"
        :flat="flat"
        @change="onChangeSelectValue"
    ></v-select>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { Variants, Densities } from "../../static/type";

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
        },
        flat: {
            type: Boolean,
            default: false,
            required: false,
            description: `Removes elevation (shadow) added to element when using the solo or solo-inverted props`
        },
        density: {
            type: String,
            default: 'default',
            required: false,
            description: `Adjusts the vertical height used by the component.`
        }
    },

    setup(props) {
        const select = ref();
        const items = ref([...props.items]);

        const initializedVariant: Ref<string> = ref(props.variant)
        const initializedDensity: Ref<string> = ref(props.density)

        const selectVariant: Variants = initializedVariant as unknown as Variants
        const selectDensity: Densities = initializedDensity as unknown as Densities

        return {
            props,
            select,
            items,
            selectVariant,
            selectDensity
        };
    },

    methods: {
        onChangeSelectValue(selectedValue: any) {
            console.log('selectedValue', this.select);
            this.$emit('selected-value', selectedValue)
        }
    }
});
</script>

<style scoped></style>

<template>
    <v-card flat class="pa-6 rounded-t-xl" color="#f8fafb" height="100%" >
        <tool-bar />
    </v-card>
</template>

<script lang="ts" setup>
import { onMounted, inject } from 'vue'

const supabase: any = inject('supabase');

async function getSampleDb() {
  const { data } = await supabase.from('tbl_users').select('*')
}

onMounted(() => {
  getSampleDb()
})
</script>
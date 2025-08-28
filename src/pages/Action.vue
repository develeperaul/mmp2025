<template>
  <q-page class="tw-container tw-grid tw-content-start env-t env-b page-a">
    <q-btn
      round
      flat
      class="tw-ml-0 tw-mr-auto tw-mb-5"
      @click="router.push({ name: 'home' })"
    >
      <base-icon name="back" class="tw-w-6 tw-h-6 tw-text-back" />
    </q-btn>
    <div
      class="orange_gradient tw-py-7 tw-px-6 tw-rounded-[30px] tw-mb-5 tw-text-white"
    >
      <div>
        <div class="tw-font-semibold tw-text-xl tw-mb-2.5">
          {{ action?.body_action_title }}
        </div>
        <div class="tw-text-body_l">
          {{ action?.subtitle }}
        </div>
      </div>
    </div>
    <div class="tw-bg-white tw-py-6 tw-px-3 tw-rounded-[30px] tw-text-[15px]">
      {{ action?.body_text }}
    </div>
    <a
      v-if="action.body_action_url"
      :href="action.body_action_url"
      class="tw-text-base tw-text-link tw-mx-auto tw-mt-6"
      >Заказать ESIM</a
    >
  </q-page>
</template>
<script setup lang="ts">
import { ActionT } from 'src/models/api/main'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
}>()
const router = useRouter()
const action = ref<ActionT | null>(null)
onMounted(async () => {
  action.value = await mainStore().getAction(props.id)
})
</script>
<style lang="scss" scoped></style>

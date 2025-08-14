<template>
  <div class="search-sel" ref="selectEl">
    <div class="search-sel__inp" @click="toggle">
      <!-- <input
        @input="open"
        type="text"
        list="stationList"
        v-model="stationSearch"
      /> -->

      <template v-if="load">
        <q-spinner-tail color="blue-grey" />
      </template>
      <template v-else>
        <template v-if="model">
          {{ model.name }}
        </template>
        <template v-else>
          {{ label }}
        </template>
      </template>
    </div>
    <div class="search-sel__list" id="stationList">
      <div class="search-sel__opts">
        <div class="search-sel__opts--wrp">
          <div
            class="search-sel__opt"
            v-for="opt in options"
            @click="update(opt)"
          >
            {{ opt.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- <label>({{ receiveStation.code }}) {{ receiveStation.name }}</label>
    <pre>
Receive station: {{ receiveStation }}
Station search: {{ stationSearch }}
Found stations: {{ filteredStations }}
         </pre
    > -->
  </div>
</template>
<script setup lang="ts">
import { RegionT } from 'src/models/api/main'

const selectEl = ref<HTMLElement | null>(null)
const props = withDefaults(
  defineProps<{
    options: RegionT[]
    load?: boolean
    label: string
  }>(),
  {
    label: 'Выберите',
  }
)
const model = defineModel()
const update = (opt: RegionT) => {
  model.value = opt
  close()
}
const emit = defineEmits<{
  (e: 'updateOpt', val: RegionT): void
}>()
const currentOpt = ref<{ id: number; name: string } | null>(null)
const choiceOpt = (obj: { id: number; name: string }) => {
  currentOpt.value = obj
  close()
}

const toggle = () => {
  if (selectEl.value) {
    if (selectEl.value.classList.contains('active')) {
      selectEl.value.classList.remove('active')
    } else {
      selectEl.value.classList.add('active')
    }
  }
}
const close = () => {
  if (selectEl.value) {
    selectEl.value.classList.remove('active')
  }
}
watch(currentOpt, (val) => {
  if (val) emit('updateOpt', val)
})
</script>
<style lang="scss" scoped>
.search-sel {
  @apply tw-relative tw-w-full;
}
.search-sel__inp {
  @apply tw-relative tw-overflow-hidden tw-border tw-border-stroke;
  border-radius: 20px;
  @apply tw-rounded-xl tw-bg-white  tw-px-5 tw-w-full tw-pr-10 tw-font-medium tw-flex tw-items-center;
  height: 50px;
}
.search-sel__list {
  overflow: hidden;
}
.search-sel__opts {
  @apply tw-w-full tw-overflow-hidden  tw-bg-white tw-border-stroke;
  @apply tw-absolute tw-max-h-0  tw-text-body_l;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  bottom: -10px;
  transform: translateY(100%);
  z-index: 1;
}
.search-sel__opts--wrp {
  @apply tw-p-5 tw-grid tw-gap-4;
}
.search-sel.active .search-sel__opts {
  overflow: auto;
  max-height: 350px;
}
</style>

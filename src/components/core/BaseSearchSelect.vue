<template>
  <div class="search-sel" ref="selectEl">
    <div class="search-sel__inp" @click="toggle">
      <input
        @input="open"
        type="text"
        list="stationList"
        v-model="stationSearch"
      />
    </div>
    <div class="search-sel__list" id="stationList">
      <div class="search-sel__opts">
        <div class="search-sel__opts--wrp">
          <div
            class="search-sel__opt"
            v-for="station in filteredStations"
            @click="choiceOpt(station)"
          >
            {{ station.name }}
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
const props = defineProps<{
  stations: RegionT[]
  currentStation?: RegionT
}>()
const emit = defineEmits<{
  (e: 'updateStation', station: RegionT): void
}>()
const sentStation = ref<RegionT | { id: null; name: string }>({
  id: null,
  name: '',
})
const receiveStation = ref<RegionT | null>(null)
const stationSearch = ref('')
const filteredStations = ref<RegionT[]>([])
// const stations = [
//   { code: '400409', name: 'первый' },
//   { code: '403002', name: 'Chernomorskaya TIS' },
//   { code: '402103', name: 'Chernomorsk' },
//   { code: '418101', name: 'второй' },
//   { code: '424600', name: 'Chernomorskaya OPZ' },
// ]
const updateVal = ref(false)
onMounted(() => {
  if (props.currentStation) receiveStation.value = props.currentStation
  filteredStations.value = props.stations
})

const choiceOpt = (s) => {
  receiveStation.value = s
  console.log('close')

  close()
  // close popup
}
watch(stationSearch, (val) => {
  if (val) {
    var filterArray = props.stations.filter((station) =>
      checkStation(val, station)
    )
    if (!receiveStation.value) {
      if (val.length < 3) {
        filteredStations.value = filterArray
        return
      }

      if (filterArray.length == 1) {
        choiceOpt(filterArray[0])

        filteredStations.value = filterArray
        return
      }
      receiveStation.value = null
    } else {
      if (val.length <= 3) receiveStation.value = null
    }

    filteredStations.value = filterArray
  } else {
    filteredStations.value = props.stations
  }
})
watch(receiveStation, (val) => {
  if (val) {
    stationSearch.value = val.name
    emit('updateStation', val)
  }
})
watch(
  () => props.currentStation,
  (val) => {
    console.log(val)

    if (val && val !== null) receiveStation.value = val
  }
)
watch(
  () => props.stations,
  (val) => (filteredStations.value = val)
)
function checkStation(patt, station) {
  var regexp = new RegExp(patt, 'gi')

  return regexp.test(station.id) || regexp.test(station.name)
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
const open = () => {
  if (selectEl.value) {
    selectEl.value.classList.add('active')

    if (!selectEl.value.classList.contains('active')) {
    }
  }
}
const close = () => {
  console.log(selectEl.value)
  if (selectEl.value) {
    selectEl.value.classList.remove('active')
  }
}
</script>
<style lang="scss" scoped>
.search-sel {
  @apply tw-relative tw-w-full;
}
.search-sel__inp {
  @apply tw-relative tw-overflow-hidden tw-border tw-border-stroke;
  border-radius: 20px;
  input {
    @apply tw-rounded-sm tw-bg-white  tw-px-5 tw-w-full tw-outline-none tw-pr-10 tw-font-medium;
    height: 50px;
  }
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
  max-height: 350px;
}
</style>

<template>
  <div>
    <div
      v-if="filesFirst.length"
      v-for="(f, index) in filesFirst"
      class="files__list-item"
    >
      <div class="files__list-item-left">
        <BaseIcon
          name="check"
          class="flex__list-item-first"
          @click="deletePhoto(index, 'first')"
        />
        {{ f.name.length > 25 ? f.name.slice(0, 25) + '...' : f.name }}
      </div>
      <BaseIcon
        name="close"
        class="flex__list-item-last"
        @click="deletePhoto(index, 'first')"
      />
    </div>
    <div class="input-load input-load__first">
      <base-button
        type="button"
        v-if="files"
        :is-white-mini="true"
        class="input-load-button"
        @click="loadFile(0)"
        >Загрузить</base-button
      >
      <input
        type="file"
        multiple
        accept="image/*"
        hidden
        ref="loadFileRefFirst"
        @change="loadInputFile($event, 'first')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const loadFileRef = ref(null)
const loadFileRefFirst = ref(null)
const loadFileRefSecond = ref(null)
const emit = defineEmits(['loadFile', 'testCall'])

const files = ref([])
const filesFirst = ref([])
const filesSecond = ref([])

const loadFile = (type) => {
  if (type) {
    type
    if (loadFileRefSecond.value) {
      loadFileRefSecond.value.click()
    }
  } else {
    if (loadFileRefFirst.value) {
      loadFileRefFirst.value.click()
    }
  }
}

const deletePhoto = (fileIndex, type) => {
  console.log(fileIndex)
  if (type === 'first') {
    filesFirst.value.splice(fileIndex, 1)
  } else if (type === 'second') {
    filesSecond.value.splice(fileIndex, 1)
  }

  files.value = [...filesFirst.value, ...filesSecond.value]

  emit('loadFile', files.value)
}

const loadInputFile = ($event, type) => {
  if (type === 'first') {
    filesFirst.value = [
      ...filesFirst.value,
      ...Object.keys($event.target.files).map(
        (key) => $event.target.files[key]
      ),
    ]
  } else if (type === 'second') {
    filesSecond.value = [
      ...filesSecond.value,
      ...Object.keys($event.target.files).map(
        (key) => $event.target.files[key]
      ),
    ]
  }
  files.value = [...filesFirst.value, ...filesSecond.value]
  emit('loadFile', files.value)
}
</script>

<style scoped>
.input-load {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.16px;
}

.input-load__first,
.input-load__second {
  margin-bottom: 10px;
}

.input-load-button {
  font-size: 14px;
}

.load-subtext {
  color: #636363;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.14px;
  margin-top: 12px;
}

.file__list {
  margin-top: 12px;
}

li {
  list-style: none;
}

.files__list-item {
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.files__list-item-left {
  display: flex;
}

.flex__list-item-last {
  width: 16px;
  height: 16px;
}

.flex__list-item-first {
  width: 16px;
  height: 16px;
  margin-right: 15px;
}
.info-text {
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  letter-spacing: 0.01em;
  color: #636363;
}
</style>

<template>
  <q-page class="tw-container tw-grid tw-content-between page-a">
    <div class="tw-grid tw-content-between">
      <h2 class="title">Паспортные данные</h2>
      <Form @submit="submit" class="tw-grid tw-gap-5">
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Фамилия
          </div>
          <base-input
            name="Фамилия"
            v-model="firstName"
            placeholder="Введите фамилию"
            rules="required"
          />
        </div>
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Имя
          </div>
          <base-input
            name="Имя"
            v-model="lastName"
            placeholder="Введите имя"
            rules="required"
          />
        </div>
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Отчество
          </div>
          <base-input
            name="Отчество"
            v-model="patronymic"
            placeholder="Введите отчество (при наличии)"
          />
        </div>
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Дата рождения
          </div>
          <base-input
            name="Дата рождения"
            v-model="birthDate"
            placeholder="дд.мм.гггг"
            rules="required|min:8"
            maska="##.##.####"
          />
        </div>
        <div>
          <div class="tw-mb-2.5 tw-font-semibold tw-text-body_l">
            Паспорт РФ
          </div>
          <div class="tw-text-body_l tw-mb-3.5">
            Загрузите 2-3 страницы (разворот с фотографией) и 4-5 страницы
            (прописка)
          </div>
          <load-file @loadFile="saveFormDataPassport" />
        </div>
        <base-button type="submit" :load="loadSubmit" :disabled="loadSubmit">
          Отправить
        </base-button>
      </Form>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { personalInfo } from 'src/api/orders'
import { useRouter } from 'vue-router'
const lefFiles = ref<File[]>([])
const props = defineProps<{
  id: string
}>()
const router = useRouter()
const saveFormDataPassport = (files) => {
  lefFiles.value = files
}

const firstName = ref('')
const lastName = ref('')
const patronymic = ref('')
const birthDate = ref('')
const loadSubmit = ref(false)
const submit = async () => {
  loadSubmit.value = true
  if (lefFiles.value.length > 1) {
    try {
      await personalInfo(
        props.id,
        {
          firstName: firstName.value,
          lastName: lastName.value,
          patronymic: patronymic.value,
          birthDate: birthDate.value,
        },
        lefFiles.value
      )
      router.push({ name: 'orders' })
    } catch (e) {
      throw e
    } finally {
      loadSubmit.value = false
    }
  }
}
</script>

<style lang="scss" scoped></style>

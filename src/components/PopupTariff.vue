<template>
  <div class="popup__wrapper">
    <base-icon
      @click="emit('close')"
      name="close"
      class="tw-w-6 tw-h-6 tw-text-back tw-mr-0 tw-ml-auto"
    />
    <div class="tw-text-center tw-text-xl tw-font-bold tw-mt-3">
      {{ card_tariff.name }}
      {{ card_tariff.tariff.name }}
    </div>
    <div>
      <div>
        <div class="tw-mt-4 tw-text-lg tw-font-semibold">Преимущества</div>
        <div class="tw-flex tw-gap-2.5 tw-overflow-auto tw-mt-4 -tw-mx-4">
          <div
            class="tw-p-4 tw-rounded-xl tw-border tw-border-black tw-w-[270px] tw-shrink-0 tw-grid tw-gap-3"
            v-for="(value, index) in card_tariff.tariff.advantages"
            :class="{
              'tw-ml-4': index === 0,
              'tw-mr-4':
                index === card_tariff.tariff.advantages.length - 1 &&
                card_tariff.tariff.advantages.length !== 1,
            }"
          >
            <svg
              v-if="value.has_icon_lightning"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="#F85921" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.3524 6.25137C20.4329 6.17093 20.457 6.05 20.4135 5.94481C20.3699 5.83962 20.2675 5.771 20.1536 5.771H12.5674C12.4563 5.771 12.3559 5.83625 12.3106 5.9375L8.5793 14.2794C8.5402 14.3663 8.54808 14.4672 8.60011 14.5471C8.65186 14.627 8.74074 14.6754 8.83608 14.6754H12.1621L9.3097 21.6965C9.25908 21.8211 9.3038 21.9642 9.4163 22.0377C9.52908 22.1113 9.67786 22.095 9.7718 21.9986L19.2693 12.2457C19.3481 12.1649 19.3709 12.0448 19.3273 11.9408C19.2834 11.8367 19.1819 11.7687 19.0691 11.7681L14.8486 11.7487L20.3524 6.25137Z"
                fill="white"
              />
            </svg>

            <svg
              v-if="value.has_icon_crowd"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="#F85921" />
              <path
                d="M11.139 11.8396C11.7138 13.1843 13.4612 13.8497 14.7794 13.1999C16.5415 12.4831 16.9434 9.89613 15.5152 8.6787C13.3366 6.64792 9.90038 9.11433 11.139 11.8396Z"
                fill="white"
              />
              <path
                d="M16.64 14.5784C16.0878 14.2275 15.4154 14.0387 14.7333 14.0321C14.6523 14.0298 12.3454 14.025 12.3473 14.0432C10.4576 14.1305 8.92386 15.7269 8.92432 17.6558C8.95638 17.9752 8.87225 18.9456 8.97453 19.2446C9.17516 20.1031 9.95009 20.7498 10.8755 20.7498H16.4058C17.4913 20.7544 18.3677 19.848 18.357 18.7986V17.6557C18.3518 16.3662 17.6773 15.2144 16.64 14.5784Z"
                fill="white"
              />
              <path
                d="M6.86756 19.2473H8.1275C8.05556 18.9557 8.10022 17.8906 8.08847 17.5748C8.13003 15.6139 9.43583 13.9359 11.2717 13.3825C11.1064 13.2514 10.9612 13.0763 10.8258 12.9198C10.6975 12.9031 10.5805 12.8975 10.4522 12.8975H8.4174C6.53311 12.8975 5 14.4306 5 16.3149V17.3797C5 18.411 5.83623 19.2473 6.86756 19.2473Z"
                fill="white"
              />
              <path
                d="M9.43719 12.4782C9.78841 12.4782 10.1173 12.4113 10.4239 12.2831C10.169 11.7705 10.024 11.1696 10.056 10.566C10.0852 9.58053 10.5418 8.63787 11.2713 8.0016C9.70501 6.38221 6.76755 7.58087 6.81702 9.86371C6.81699 11.3019 7.99329 12.4782 9.43719 12.4782Z"
                fill="white"
              />
              <path
                d="M18.8641 12.8989H16.8293C16.4288 12.8135 16.2796 13.1649 16.0098 13.384C16.7568 13.6069 17.4202 14.0194 17.9442 14.5713C18.6968 15.3518 19.1707 16.411 19.193 17.5762C19.1817 17.8959 19.225 18.9468 19.154 19.2486C19.154 19.2487 20.4139 19.2487 20.4139 19.2487C21.4453 19.2487 22.2815 18.4124 22.2815 17.3811V16.3163C22.2815 14.432 20.7484 12.8989 18.8641 12.8989Z"
                fill="white"
              />
              <path
                d="M17.0021 9.44652C17.1528 9.83374 17.2258 10.2626 17.2307 10.6953C17.2307 11.2639 17.0969 11.8047 16.8571 12.2841C17.1638 12.4123 17.4927 12.4792 17.8439 12.4792C21.3066 12.3666 21.3054 7.35858 17.8438 7.25C17.1303 7.25 16.4836 7.53986 16.0098 8.00261C16.4502 8.38727 16.7958 8.88346 17.0021 9.44652Z"
                fill="white"
              />
            </svg>

            <div>
              <div class="tw-text-body_l tw-font-medium">
                {{ value.title }}
              </div>
              <div class="tw-text-body_s tw-mt-1">
                {{ value.body }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-grid tw-gap-4">
        <div class="tw-mt-4 tw-text-lg tw-font-semibold">О тарифе</div>
        <div class="tw-grid tw-gap-3">
          <div
            class="about-item"
            v-for="value in card_tariff.tariff.abouts"
            :ref="(el) => itemsAbout.push(el)"
          >
            <div class="about-item__header">
              {{ value.title }}
              <base-icon name="down" class="about-item__header--icon" />
            </div>
            <div class="about-item__body">
              <div class="about-item__body--wrapper">
                {{ value.body }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TariffItemAboutT } from 'src/models/api/main'

const props = defineProps<{
  card_tariff: TariffItemAboutT
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
const itemsAbout = ref<Element[]>([])
onMounted(() => {
  itemsAbout.value.forEach((el) => {
    el.addEventListener('click', toggle)
  })
})
const toggle = (e) => {
  const elC = e.currentTarget
  itemsAbout.value.forEach((el) => {
    el.classList.remove('active')
  })
  if (elC.classList.contains('active')) elC.classList.remove('active')
  else elC.classList.add('active')
}
watch(itemsAbout, (val) => {
  console.log(val)
})
</script>
<style lang="scss" scoped>
.about-item {
  @apply tw-bg-white tw-rounded-xl tw-px-5 tw-py-3.5;
  &__header {
    @apply tw-flex tw-justify-between tw-items-center tw-relative;
    &--icon {
      @apply tw-w-10 tw-h-10 tw-text-secondary tw-absolute -tw-right-2 tw-top-1/2 tw-transform -tw-translate-y-1/2;
      transform-origin: center;
      @apply tw-transition-all tw-duration-300 tw-ease-in-out;
    }
  }
  &__body {
    @apply tw-overflow-hidden;
    display: grid;
    grid-template-rows: 0;
    @apply tw-transition-all tw-duration-300 tw-ease-in-out;
    &--wrapper {
      @apply tw-pt-5;
    }
  }
  &.active .about-item__body {
    grid-template-rows: 1fr;
  }
  &.active .about-item__header--icon {
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>

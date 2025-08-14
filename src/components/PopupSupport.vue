<template>
  <div class="popup__wrapper !tw-bg-white">
    <div class="">
      <base-icon
        @click="emit('close')"
        name="close"
        class="tw-w-6 tw-h-6 tw-text-back tw-mr-0 tw-ml-auto"
      />
      <div class="tw-text-center tw-text-xl tw-font-semibold tw-mb-5">
        Поддержка
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-2.5">
        <div
          class="black_gradient tw-pt-[28px] tw-px-4 tw-pb-4 tw-rounded-xl tw-grid tw-gap-3.5 tw-text-white tw-text-body_s"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#F85921" />
            <g clip-path="url(#clip0_158_3455)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.7809 16.5551C17.7012 16.6346 17.6051 16.7362 17.5032 16.8436C17.249 17.1134 16.9313 17.4489 16.7323 17.5849C15.6848 18.3006 14.2835 17.9582 13.2924 17.5452C11.9848 17.0004 10.5612 15.9962 9.28302 14.7178C8.00361 13.4393 6.9995 12.0153 6.4547 10.7085C6.0422 9.71709 5.699 8.31553 6.41485 7.26787C6.55079 7.06866 6.887 6.75152 7.15649 6.49678C7.2643 6.3952 7.36508 6.29923 7.44477 6.2198C7.58624 6.07903 7.7777 6 7.97728 6C8.17686 6 8.36832 6.07903 8.50979 6.2198L10.437 8.14645C10.5777 8.28792 10.6567 8.47933 10.6567 8.67885C10.6567 8.87837 10.5777 9.06977 10.437 9.21124L9.91201 9.73519C9.73668 9.90924 9.62223 10.1352 9.58571 10.3796C9.54918 10.6239 9.59253 10.8735 9.7093 11.0912C10.4314 12.4541 11.5462 13.5687 12.9092 14.2906C13.1269 14.4073 13.3764 14.4506 13.6207 14.4141C13.865 14.3775 14.0909 14.263 14.2648 14.0876L14.7885 13.5636C14.93 13.4228 15.1214 13.3438 15.321 13.3438C15.5206 13.3438 15.7121 13.4228 15.8535 13.5636L17.7809 15.4906C17.9216 15.632 18.0005 15.8234 18.0005 16.0229C18.0005 16.2224 17.9216 16.4137 17.7809 16.5551Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_158_3455">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(6 6)"
                />
              </clipPath>
            </defs>
          </svg>

          Позвонить
        </div>
        <div
          class="black_gradient tw-pt-[28px] tw-px-4 tw-pb-4 tw-rounded-xl tw-grid tw-gap-3.5 tw-text-white tw-text-body_s"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#F85921" />
            <g clip-path="url(#clip0_158_3461)">
              <path
                d="M16.9999 7.18332L15.1019 16.7524C15.1019 16.7524 14.8366 17.4159 14.1065 17.0974L9.70709 13.7301C10.2984 13.1986 14.8858 9.07426 15.0865 8.88722C15.3965 8.59777 15.2041 8.42551 14.8436 8.64441L8.06763 12.9475L5.45341 12.0675C5.45341 12.0675 5.04185 11.9214 5.00224 11.6029C4.9624 11.2844 5.46677 11.1119 5.46677 11.1119L16.124 6.93113C16.124 6.93113 16.9999 6.54629 16.9999 7.18332Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_158_3461">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(5 6)"
                />
              </clipPath>
            </defs>
          </svg>

          Telegram-бот
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<style lang="scss" scoped></style>

<template>
  <q-page class="tw-container tw-grid env-t env-b page-a" v-if="user">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
          />
          <div class="title">Реферальная программа</div>
        </div>
        <div class="tw-grid tw-gap-5 tw-justify-items-center tw-mb-10">
          <div class="">
            Делитесь ссылкой и получайте 250 ₽ <br />
            за каждого приглашенного друга
          </div>
          <img
            src="src/assets/images/peoples/group.png"
            alt=""
            width="213"
            height="40"
          />
          <base-button class="!tw-w-fit tw-flex tw-items-center tw-justify-center tw-gap-2" @click="copyRefLink">
            <span>
              {{ linkIsInBuffer ? 'Ссылка скопирована' : 'Ссылка для приглашения' }}
            </span>
            <base-icon v-if="linkIsInBuffer" name="check2" class="tw-w-[20px] tw-h-[20px]" />
          </base-button>
        </div>
        <!-- <div
          class="tw-border tw-border-icon_nav tw-border-dashed tw-rounded-xl tw-p-5 tw-flex tw-justify-between tw-mb-[30px]"
        >
          <div>
            <div class="tw-text-lg tw-font-semibold">3 000 ₽</div>
            <div class="tw-text-body_l">Заявка на вывод средств</div>
          </div>
          <base-icon name="loading" class="tw-w-6 tw-h-6" />
        </div> -->
        <div>
          <div
            class="tw-bg-white tw-p-5 tw-rounded-xl tw-grid tw-justify-items-center tw-mb-5"
          >
            <div class="tw-text-body_l tw-mb-2.5">Реферальный счет</div>
            <div class="tw-font-semibold tw-text-3xl tw-mb-4">{{ user.balance }} ₽</div>
            <div class="tw-flex tw-justify-center tw-gap-10">
              <router-link
                :to="{ name: 'ref-account' }"
                class="tw-text-secondary tw-grid tw-gap-2 tw-justify-items-center"
              >
                <base-icon name="arrow-up45" class="tw-w-[34px] tw-h-[34px]" />
                Вывести
              </router-link>
              <router-link
                class="tw-text-secondary tw-grid tw-gap-2 tw-justify-items-center"
                :to="{ name: 'ref-history' }"
              >
                <base-icon name="clock" class="tw-w-[34px] tw-h-[34px]" />
                История
              </router-link>
            </div>
          </div>
          <div class="tw-grid tw-gap-3">
            <!-- <router-link
              :to="{ name: 'ref-list' }"
              class="tw-flex tw-justify-between tw-items-center tw-bg-white tw-py-[18px] tw-px-5 tw-rounded-xl"
            >
              Приглашенные друзья

              <base-icon name="right" class="tw-w-4 tw-h-4" />
            </router-link> -->
            <button
              class="tw-flex tw-justify-between tw-items-center tw-bg-white tw-py-[18px] tw-px-5 tw-rounded-xl"
              @click="showedRules = true"
            >
              Правила программы

              <base-icon name="right" class="tw-w-4 tw-h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <DialogRules v-model="showedRules" @close="showedRules = false" />
  </q-page>
</template>
<script setup lang="ts">
  import useAuthStore from 'src/stores/authStore';
  import DialogRules from 'src/components/Ref/DialogRules.vue';

  const authStore = useAuthStore();
  const user = toRef(authStore, 'user');
  const showedRules = ref(false);
  const linkIsInBuffer = ref(false);

  function copyRefLink() {
    if(!user.value || linkIsInBuffer.value) return;
    const base = process.env.REF_BASE ?? '';
    navigator.clipboard
      .writeText(base + '?referralCode=' + user.value.referralCode)
      .then(() => {
        linkIsInBuffer.value = true;
        setTimeout(() => linkIsInBuffer.value = false, 1000 * 10);
      });
  }
</script>

<style lang="scss" scoped></style>

<template>
  <q-page class="tw-container tw-grid env-t env-b page-a" v-if="user">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
            @click="$router.back"
          />
          <div class="title">Вывод средств</div>
        </div>
      </div>
      <div
        class="tw-bg-black tw-px-5 tw-py-[18px] tw-rounded-xl tw-text-white tw-grid tw-gap-2.5 tw-mb-[30px]"
      >
        <div>Реферальный счет</div>
        <div class="tw-font-semibold tw-text-2xl">{{ user.balance }} ₽</div>
      </div>
      <Form @submit="send" class="tw-grid tw-gap-[60px]">
        <div class="tw-grid tw-gap-5">
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              Счет получателя
            </div>
            <base-input
              name="accountNumber"
              maska="####-####-####-####-####"
              placeholder="Номер счета (20-ти значный)"
              unMask
              rules="required|min:20"
              label="cчет получателя"
              hideLabel
              v-model="form.accountNumber"
            />
          </div>
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              БИК банка-получателя
            </div>
            <base-input
              name="bankBik"
              maska="#########"
              placeholder="Номер БИК (9-ти значный)"
              rules="required|min:9"
              label="БИК"
              hideLabel
              v-model="form.bankBik"
            />
          </div>
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              ИНН получателя
            </div>
            <base-input
              name="inn"
              maska="##########"
              placeholder="ИНН (10-ти значный)"
              rules="required|min:10"
              label="ИНН"
              hideLabel
              v-model="form.inn"
            />
          </div>
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              Сумма вывода
            </div>
            <base-input
              name="amount"
              type="number"
              placeholder="Сумма"
              rules="required"
              label="сумма"
              hideLabel
              v-model="form.amount"
            />
            <div class="tw-text-secondary tw-text-xs tw-mt-2.5" v-if="amountError">
              {{ amountError }}
            </div>
          </div>
        </div>
        <base-button type="submit" :disabled="loading || amountError !== false" class="!tw-w-[200px] tw-justify-self-center">
          Вывести
        </base-button>
      </Form>
    </div>
    <DialogOutputSuccess v-model="openSuccess" />
  </q-page>
</template>

<script setup lang="ts">
  import { reqCreate } from 'src/api/referrals';
  import usePostRequest from 'src/composables/usePostRequest';
  import useAuthStore from 'src/stores/authStore';
  import { Form } from 'vee-validate';
  import DialogOutputSuccess from 'src/components/Ref/DialogOutputSuccess.vue';

  const authStore = useAuthStore();
  const user = toRef(authStore, 'user');

  const openSuccess = ref(false);

  const form = reactive({
    accountNumber: '',
    amount: '' as number | '',
    bankBik: '',
    inn: '',
  });

  const { loading, send } = usePostRequest(
    reqCreate,
    () => ({
      ...form,
      amount: form.amount.toString(),
    }),
    () => {
      openSuccess.value = true;
    },
    'Не удалось создать заявку!',
  );

  const amountError = computed(() => {
    if(!form.amount || !user.value) return false;
    const amount = form.amount;
    if(amount < 3000) return 'Минимальная сумма вывода — 3000 ₽';
    if(amount > user.value.balance) return 'Недостаточно средств для вывода';
    return false;
  });
</script>

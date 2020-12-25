<template>
  <form @submit.prevent="resetPassword">
    <h3>Reset Password</h3>

    <div class="form-group">
      <label for="">Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <div class="form-group">
      <label for="">Password Confirm</label>
      <input
        type="password"
        class="form-control"
        placeholder="Password Confirm"
        v-model="passwordConfirm"
      />
    </div>

    <button class="btn btn-primary btn-block" @click="resetPassword">
      Submit
    </button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Reset',

  data() {
    return {
      password: '',
      passwordConfirm: '',
    };
  },

  methods: {
    async resetPassword() {
      try {
        const res = await axios.post('/api/auth/reset', {
          password: this.password,
          passwordConfirm: this.passwordConfirm,
          token: this.$route.params.token,
        });

        console.log('res', res);
        let { message, isSuccess } = res;
        if (isSuccess) this.$router.push('/login');
        this.common.showToast({ message });
      } catch (err) {
        console.log('err', err);
        this.common.showToast({ message: err.message });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

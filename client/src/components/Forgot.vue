<template>
  <form @submit.prevent="forgotPassword">
    <h3>Forgot Password</h3>

    <div class="form-group">
      <label for="">Email</label>
      <input type="email" placeholder="Email" class="form-control" />
    </div>

    <button class="btn btn-primary btn-block">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Forgot',

  data() {
    return {
      email: '',
    };
  },

  methods: {
    async forgotPassword() {
      try {
        const res = await axios.post('/api/auth/forgot', { email: this.email });

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

<style></style>

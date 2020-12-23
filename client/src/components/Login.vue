<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <div class="form-group">
      <label for="">Email</label>
      <input
        type="email"
        class="form-control"
        placeholder="Email"
        v-model="email"
      />
    </div>

    <div class="form-group">
      <label for="">Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async handleSubmit() {
      const url = `/api/auth/login`;
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log('data', data);

      try {
        const res = await axios.post(url, data);
        const { token, message, isSuccess } = res.data;
        
        if (isSuccess) {
          console.log('token', token);
          localStorage.setItem('token', token);
          this.$router.push('/');
        }

        this.common.showToast({ message })

      } catch (err) {
        console.log('handleSubmit() - err', err);
      }
    },
  },
};
</script>

<style></style>

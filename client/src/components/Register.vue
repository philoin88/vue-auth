<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>

    <div class="form-group">
      <label for="">First Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="First Name"
        v-model="firstName"
      />
    </div>

    <div class="form-group">
      <label for="">Last Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Last Name"
        v-model="lastName"
      />
    </div>

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

    <div class="form-group">
      <label for="">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
    </div>

    <button class="btn btn-primary btn-block">Sing Up</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },

  methods: {
    handleSubmit() {
      let url = 'http://localhost:3000/register';
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email,
      }
      console.log('data', data);

      axios.post(url, data)
        .then(res => {
          console.log('res', res);

        })
        .catch(err => {
          console.log('handleSubmit() - err', err);
        })
    },
  },
};
</script>

<style></style>

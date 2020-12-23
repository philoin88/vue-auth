<template>
  <div>
    Hello!<br />
    {{ userName }}
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState([ 'user' ]),

    userName() {
      if (this.user) return `${this.user.firstName} ${this.user.lastName}`;
      return 'Guest';
    },
  },

  async created() {
    await this.getUser();
  },

  methods: {
    async getUser() {
      if (this.user) {
        const url = `/api/auth/user`
        const res = await axios.get(url);
        const { user, message, isSuccess } = res.data;
  
        if (isSuccess) {
          this.user = user;
          console.log('user', user);
        }
  
        this.common.showToast({ message });
      } else {
        this.$router.push('/login')
      }
    },
  },
};
</script>

<style></style>

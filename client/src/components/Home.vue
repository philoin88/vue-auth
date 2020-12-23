<template>
  <div>
    <h3>
      Hi,
      {{ userName }}
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState(['user']),

    userName() {
      if (this.user) return `${this.user.firstName} ${this.user.lastName}`;
      return 'Guest';
    },
  },
};
</script>

<style></style>

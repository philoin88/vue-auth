<template>
  <div>
    <h3>
      Hi,
      {{ userName }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Home',

  props: {
    user: {
      type: Object,
      default: null
    },
  },

  computed: {
    userName() {
      if (this.user) return `${this.user.firstName} ${this.user.lastName}`;
      return 'Guest';
    },
  },
};
</script>

<style></style>

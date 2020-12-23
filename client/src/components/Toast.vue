<template>
  <div v-if="isShow" class="toast-wrap">
    {{ message }}
  </div>
</template>


<script>
export default {
  name: 'Toast',
  data: () => ({
    message: 'Loading...',
    duration: 3000,
    toastIndex: 0,
    resolve: null,
    isShow: false
  }),
  created() {
    this.setEvent();
  },
  beforeDestroy() {
    this.offEvent();
  },
  methods: {
    setEvent() {
      this.$eventBus.$on('showToast', (params, resolve) => this.showToast(params, resolve));
      this.$eventBus.$on('hideToast', this.hideToast);
    },
    offEvent() {
      this.$eventBus.$off('showToast');
      this.$eventBus.$off('hideToast');
    },
    showToast(params, resolve) {
      if (typeof params !== 'undefined') {
        this.message = typeof params.message !== 'undefined' ? params.message : '';
        this.duration = typeof params.duration !== 'undefined' ? params.duration : 2000;
      }

      this.isShow = true;
      this.resolve = resolve;
      this.toastIndex++;
      let toastIndex = this.toastIndex;
      setTimeout(() => this.hideToast(toastIndex), this.duration);

      // 토스트 외부 화면 클릭 시, 토스트 제거 이벤트
      setTimeout(() => {
        document.addEventListener('click', (event) => this.onClick(event, toastIndex), { once: true });
      }, 0);
    },
    hideToast(toastIndex) {
      let isSameToast = toastIndex === this.toastIndex;
      if (!isSameToast || !this.isShow) return;

      if (typeof this.resolve === 'function') this.resolve();
      this.reset();
    },
    onClick(event, toastIndex) {
      let isSameToast = toastIndex === this.toastIndex;
      if (!isSameToast) return;

      let targetElements = event.path || (event.composedPath && event.composedPath());
      let isClickToast = targetElements.some((element) => {
        if (this.util.isEmptyString(element.className)) return false;
        else return element.className.includes('toast-wrap');
      });
      if (!isClickToast) this.hideToast(toastIndex);
    },
    reset() {
      this.isShow = false;
      this.message = '';
      this.duration = 2000;
      this.resolve = null;
    }
  }
};
</script>

<style>
.toast-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 12px;
  z-index: 900;
}
</style>

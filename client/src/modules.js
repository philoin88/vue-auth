import Vue from 'vue';

const common = {
 // Vue 내부에서 사용하는 Vue 객체 (.vue 파일에서 this)
 vm: {},
 // common 초기화 함수 [Vue 객체를 vm 변수에 세팅]
 init(vm) {
   this.vm = vm;
 },

 // Toast 관련 함수
 showToast(params) {
   return new Promise((resolve) => {
     this.vm.$eventBus.$emit('showToast', params, resolve);
   });
 },

 hideToast() {
   this.vm.$eventBus.$emit('hideToast');
 },
};

// Module을 Vue 전역 Property로 등록
let EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return EventBus;
    }
  },
  common: {
    get() {
      common.init(this);
      return common;
    }
  }
});

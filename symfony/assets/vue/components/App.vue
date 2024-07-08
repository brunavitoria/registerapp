<template>
    <div id="app">
      <component :is="'Step' + step" @next="nextStep" :userId="userId"></component>
    </div>
</template>
  
<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';
  
export default {
    data() {
        return {
        step: 1,
        userId: null,
        };
    },
    components: {
        Step1,
        Step2,
        Step3,
    },
    methods: {
        nextStep(userId) {
        this.userId = userId;
        this.step++;
        },
    },
};
</script>
  
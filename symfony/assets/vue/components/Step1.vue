<template>
    <div>
        <h2>Step 1</h2>
        <form @submit.prevent="submit">
            <div>
                <label for="fullName">Full Name:</label>
                <input type="text" v-model="fullName" required>
            </div>
            <div>
                <label for="birthDate">Birth Date:</label>
                <input type="date" v-model="birthDate" required>
            </div>
            <button type="submit">Next</button>
            <div v-if="error" class="error">{{ error }}</div>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            fullName: '',
            birthDate: '',
            error: null
        };
    },
    methods: {
        async submit() {
            this.error = null;
            console.log(this.fullName, this.birthDate);
            try {
                const response = await axios.post('http://localhost:8080/save-step', {
                    step: 1,
                    fullName: this.fullName,
                    birthDate: this.birthDate,
                });
                this.$emit('next', response.data.userId);
            } catch (error) {
                this.error = error.response ? error.response.data.message : error.message;
            }
        },
    },
};
</script>
  
<style>
.error {
    color: red;
}
</style>
  
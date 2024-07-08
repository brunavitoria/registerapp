<template>
    <div>
        <h2>Step 3</h2>
        <form @submit.prevent="submit">
            <div>
                <label for="phone">Phone:</label>
                <input type="text" v-model="phone" required>
            </div>
            <div>
                <label for="mobile">Mobile:</label>
                <input type="text" v-model="mobile" required>
            </div>
            <button type="submit">Submit</button>
            <div v-if="error" class="error">{{ error }}</div>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            phone: '',
            mobile: '',
            error: null
        };
    },
    methods: {
        async submit() {
            this.error = null;
            try {
                await axios.post('/save-step', {
                    step: 3,
                    phone: this.phone,
                    mobile: this.mobile,
                });
                alert('Form successfully submitted!');
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
  
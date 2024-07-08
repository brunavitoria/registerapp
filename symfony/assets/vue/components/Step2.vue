<template>
    <div>
        <h2>Step 2</h2>
        <form @submit.prevent="submit">
            <div>
                <label for="street">Street:</label>
                <input type="text" v-model="street" required>
            </div>
            <div>
                <label for="number">Number:</label>
                <input type="text" v-model="number" required>
            </div>
            <div>
                <label for="zipCode">Zip Code:</label>
                <input type="text" v-model="zipCode" required>
            </div>
            <div>
                <label for="city">City:</label>
                <input type="text" v-model="city" required>
            </div>
            <div>
                <label for="state">State:</label>
                <input type="text" v-model="state" required>
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
            street: '',
            number: '',
            zipCode: '',
            city: '',
            state: '',
            error: null
        };
    },
    methods: {
        async submit() {
            this.error = null;
            try {
                const response = await axios.post('/save-step', {
                    step: 2,
                    street: this.street,
                    number: this.number,
                    zipCode: this.zipCode,
                    city: this.city,
                    state: this.state,
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
  
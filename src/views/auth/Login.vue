<template>
    <div
        id="page-login"
        class="page page-login"
    >
        <div class="container">
            logowanie
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'LoginPage',
        data() {
            return {
            };
        },
        mounted() {
        },
        methods: {
            ...mapActions(['login']),

            async submit() {
                let result = await this.login();

                if(!result.errors) {
                    this.$router.push('/');
                }
            }
        }
    };
</script>
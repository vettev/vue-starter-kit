<template>
    <button
        :class="classList"
        @click="onClick"
    >
        <span class="text">
            <slot/>
        </span>
        <span
            v-if="loading"
            class="btn-loader"
        >
            <loader
                :variant="type"
                width="20px"
            />
        </span>
    </button>
</template>
<script>
    import Loader from './DefaultLoader.vue';

    export default {
        components: {
            Loader,
        },
        props: {
            withLoader: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                default: 'primary',
            },
            loading: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
            };
        },
        computed: {
            classList() {
                const classes = ['btn'];
                classes.push('btn-' + this.type);

                if(this.loading) {
                    classes.push('loading');
                }

                return classes;
            },
        },
        methods: {
            onClick() {
                if(this.loading) {
                    return;
                }

                this.$emit('click');
            },
        },
    };
</script>

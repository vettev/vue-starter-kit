<template>
    <div class="layout">
        <loader v-if="isLoading" />
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import MainLoader from '@/components/misc/MainLoader.vue';

export default {
    name: 'LayoutDefault',
    components: {
        'loader': MainLoader,
    },
    computed: {
        ...mapGetters([
            'isLoading',
        ]),
    },
};
</script>

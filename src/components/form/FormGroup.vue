<template>
    <div class="form-group">
        <label :for="name">{{ label }} <span v-if="required">*</span></label>
        <textarea
            v-if="type === 'textarea'"
            :disabled="disabled"
            :id="name"
            :name="name"
            :placeholder="placeholder"
            v-model="value"
            class="form-control"
            @keyup.enter="onKeyup"
        />
        <input
            v-else
            :disabled="disabled"
            :id="name"
            :maxLength="maxLength"
            :name="name"
            :placeholder="placeholder"
            :type="type"
            v-model="value"
            class="form-control"
            @keyup.enter="onKeyup"
        >
        <template v-if="errors && errors.length > 0">
            <span
                v-for="(error, index) in errors"
                :key="index"
                class="form-error"
            >
                {{ error }}
            </span>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean,
            },
            errors: {
                default() {
                    return [];
                },
                type: Array,
            },
            label: {
                type: String,
                default: '',
            },
            maxLength: {
                type: Number,
                default: 64,
            },
            name: {
                required: true,
                type: String,
            },
            options: {
                default: () => [],
                type: Array,
            },
            placeholder: {
                default: '',
                type: String,
            },
            required: {
                default: false,
                type: Boolean,
            },
            type: {
                default: 'text',
                type: String,
            },
            val: {
                type: String,
                default: '',
            },
        },
        data ()
        {
            return {
                value: this.val,
            };
        },
        watch: {
            val (val)
            {
                if (val !== this.value)
                {
                    this.value = val;
                }
            },
            value (val)
            {
                if (this.type === 'select')
                {
                    this.$emit('change', val);
                }
                else if (this.type === 'datepicker')
                {
                    this.$emit('input', val);
                }
                else
                {
                    this.$emit('input', val.trim());
                }
            },
        },
        created ()
        {
            if (this.type === 'select' && !this.value)
            {
                this.value = 0;
            }
            else if ((this.type === 'datepicker' || this.type === 'text') && this.val)
            {
                this.$emit('input', this.val.trim());
            }
        },
        methods: {
            onKeyup (e)
            {
                this.$emit('keyup', e);
            },
        },
    };
</script>
<style lang="scss">
    .form-group {
        margin-bottom: 20px;
    }
</style>
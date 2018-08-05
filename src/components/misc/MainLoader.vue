<template>
    <transition name="fade">
        <div
            id="main-loader"
            class="main-loader-container">
            <div class="loader">
                <div class="circle circle-1"/>
                <div class="circle circle-2"/>
            </div>
        </div>
    </transition>
</template>
<style lang="scss">
    .main-loader-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: $loader-bg;

        .loader {
            .circle {
                width: 100px;
                height: 100px;
                border: 3px solid $primary;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);

                &-1 {
                    animation: circle1 2s infinite;
                }
                &-2 {
                    animation: circle2 2s infinite;

                    &::after {
                        content: '';
                        width: 100px;
                        height: 100px;
                        left: 50%;
                        top: 50%;
                        position: absolute;
                        border-radius: 50%;
                        border: 1px solid $primary;
                        animation: circle3 1s infinite;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }

    @keyframes circle1 {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes circle2 {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(0.5);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes circle3 {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
</style>

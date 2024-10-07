<template>
    <div class="top-bar">
        <router-link to="/">
            <img :src="logoIcon" alt="Logo" />
        </router-link>
        <h1>twak.to</h1>
    </div>
</template>

<script>
import logoIcon from '../assets/icons/tawk-logo.svg';

export default {
    name: 'Topbar',
    data: () => ({
        logoIcon
    })
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.top-bar {
    font-family: $font-family;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 5px;
    background-color: #83c99f;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    img {
        width: 100px;
        height: auto;
        margin-right: 20px;
        margin-left: 90px;

    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
    }
}
</style>
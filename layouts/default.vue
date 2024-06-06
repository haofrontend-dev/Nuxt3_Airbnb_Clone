<template>
    <div>
        <!-- Navbar -->
        <Navbar />
        <div class="pb-20 pt-[220px]">
            <slot />
        </div>
        <AuthRegister />
        <AuthLogin />
    </div>
</template>

<script lang="ts" setup></script>

<style></style>

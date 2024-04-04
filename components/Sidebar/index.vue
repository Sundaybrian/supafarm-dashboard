<template>
    <div class="relative">
        <div class="flex lg:hidden">
            <SidebarMenu />
        </div>
        <div class="hidden lg:flex w-[250px] flex flex-col justify-between border-r">
            <SidebarMenu />
        </div>
    </div>
</template>

<script setup>
const open = ref(true)

</script>

<style lang="scss" scoped></style>
<script setup>
const items = ref([
    {
        title: 'Dashboard',
        path: '/',
        icon: "material-symbols:dashboard-outline-rounded"
    },
    {
        title: 'Users',
        path: '/users',
        icon: "ci:users"
    },
    {
        title: 'Settings',
        path: "/settings",
        icon: "ri:settings-2-line"
    },
     {
        title: 'Account',
        path: "/account",
        icon: "mdi:account-tie"
    },
     {
        title: 'Tasks',
        path: "/tasks",
        icon: "clarity:tasks-outline-badged"
    },

])
</script>


<template>
    <div>
        <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
            <Logo />
            <p class="font-bold"> Supafarm</p>
        </header>
        <div class="px-4 grow">
            <div class="grid gap-4">
                <div v-for="item in items" :key="item.title" :item="item"
                    class="flex items-center gap-2 px-2 py-1 transition rounded  cursor-pointer hover:bg-slate-500">
                    <Icon :name="item.icon" color="black" size="20" />
                    <span>{{ item.title }}</span>

                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>
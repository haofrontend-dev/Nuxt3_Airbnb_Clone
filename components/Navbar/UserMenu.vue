<template>
    <div class="relative">
        <div class="flex flex-row items-center gap-3">
            <div
                class="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            >
                Airbnb your home
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button
                        variant="ghost"
                        class="p-4 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md hover:bg-transparent transition"
                        size="sm"
                    >
                        <Icon name="ant-design:menu-outlined" />
                        <div class="hidden md:block">
                            <Icon name="mdi:user-circle-outline" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56" align="end">
                    <template v-if="user">
                        <DropdownMenuItem @click="navigateTo('/trips')">
                            <span>My trips</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="navigateTo('/reservations')">
                            <span>Reservations</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="navigateTo('/favorites')">
                            <span>My favorites</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="navigateTo('/properties')">
                            <span>My properties</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem> Airbnb your home </DropdownMenuItem>
                        <DropdownMenuItem @click="logout">
                            <Icon name="material-symbols:logout" />
                            Logout
                        </DropdownMenuItem>
                    </template>
                    <template v-else>
                        <DropdownMenuItem>
                            <span> Register </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>Login</span>
                        </DropdownMenuItem>
                    </template>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useUser();

async function logout() {
	await $fetch("/api/logout", {
		method: "POST"
	});
    user.value = null;
	await navigateTo("/login");
}

</script>

<style scoped></style>

import { defineNuxtRouteMiddleware, useRequestFetch } from "nuxt/app";
import { useUser } from "~/composables/auth";

export default defineNuxtRouteMiddleware(async () => {
    const user = useUser();
    const data = await useRequestFetch()("/api/user");

    if (data) {
        user.value = data;
    }
});

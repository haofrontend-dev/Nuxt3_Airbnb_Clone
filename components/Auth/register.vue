<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
const { isOpen, onClose, RegisterSchema } = useRegister();
const { onOpen } = useLogin();

const formSchema = toTypedSchema(RegisterSchema);
const form = useForm({
    validationSchema: formSchema,
    initialValues: {
        name: "",
        password: "",
        email: "",
    },
});

const onSubmit = form.handleSubmit((values) => {
    console.log(values);
});

const toggleForm = () => {
    onClose()
    onOpen()
}

</script>

<template>
    <AppModal
        :is-open="isOpen"
        title="Welcome back"
        description="Create to your account!"
        @on-close="onClose"
        v-if="isOpen"
    >
        <div class="space-y-6">
            <form @submit="onSubmit">
                <div class="space-y-4">
                    <FormField v-slot="{ componentField }" name="name">
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="shadcn"
                                    v-bind="componentField"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="shadcn"
                                    v-bind="componentField"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="shadcn"
                                    v-bind="componentField"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <div class="flex flex-col gap-2 py-6">
                    <div class="flex flex-row items-center gap-4 w-full">
                        <Button type="submit"> Submit </Button>
                    </div>
                    <div class="flex flex-col gap-4 mt-3">
                        <hr />
                        <Button variant="outline">
                            <a href="/login/github">
                                <Icon name="mdi:github" />
                                Gibhub
                            </a>
                        </Button>
                        <div class="text-center mt-4 font-light">
                            <p>
                                Already have an account?
                                <span
                                    class="text-primary cursor-pointer hover:underline"
                                    @click="toggleForm"
                                    >Login</span
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </AppModal>
</template>

<style scoped></style>

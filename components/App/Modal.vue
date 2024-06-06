<script setup lang="ts">
interface Props {
    isOpen?: boolean;
    title?: string;
    description?: string;
}

const props = defineProps<Props>();
const emits = defineEmits(["onClose"]);
const isModalVisible = computed({
    get() {
        return props.isOpen;
    },

    set(value) {
        emits("onClose");
    },
});
</script>

<template>
    <Dialog :open="isModalVisible" @update:open="$emit('onClose')">
        <DialogContent>
            <DialogHeader class="flex flex-col justify-center items-center">
                <DialogTitle v-if="title">{{ title }}</DialogTitle>
                <DialogDescription v-if="description">
                    {{ description }}
                </DialogDescription>
            </DialogHeader>

            <slot />
        </DialogContent>
    </Dialog>
</template>

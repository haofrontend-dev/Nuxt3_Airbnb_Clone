import * as z from "zod";

const state = reactive({
    isOpen: false,
});

const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimun 6 characters required",
    }),
});

export default () => {
    const { isOpen } = toRefs(state);

    const onOpen = () => {
        state.isOpen = true;
    };

    const onClose = () => {
        state.isOpen = false;
    };

    return {
        isOpen,
        onOpen,
        onClose,
        LoginSchema,
    };
};

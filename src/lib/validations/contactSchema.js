import { z } from "zod";

export const contactSchema = z.object({
    firstname: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .regex(/^[A-Za-z ]+$/, "Only letters allowed"),

    lastname: z
        .string()
        .regex(/^[A-Za-z ]+$/, "Only letters allowed")
        .optional()
        .or(z.literal("")),

    email: z.string().email("Invalid email address"),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters"),
});

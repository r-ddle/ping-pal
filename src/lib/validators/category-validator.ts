import { z } from "zod";

export const CATEGORY_NAME_VALIDATOR = z.string().min(1, "Category name is required.").regex(/^[a-z0-9-]+$/, "Category name can only contain letters, numbers or hyphens.").refine((name) => name === name.toLowerCase(), { message: "Category name should be in lowercase" });

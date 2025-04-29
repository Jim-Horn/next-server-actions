"use server";

import { generateLink } from "./generate-link";

export async function submitLink(formData: FormData): Promise<string> {
    const input = formData.get("input") as string;
    const newLink = await generateLink(input);
    return newLink;
}

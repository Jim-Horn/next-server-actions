"use server";

export async function generateLink(input: string): Promise<string> {
    const randomId = Math.random().toString(36).substring(2, 10);
    const link = `https://example.com/link/${input}-${randomId}`;
    console.log("Received input:", input);
    return link;
}

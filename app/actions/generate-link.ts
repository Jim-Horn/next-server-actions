"use server";

export async function generateLink(input: string): Promise<string> {
    console.log("Received input from client:", input);
    const randomId = Math.random().toString(36).substring(2, 10);
    return `https://example.com/link/${randomId}`;
}

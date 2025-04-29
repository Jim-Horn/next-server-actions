// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { submitLink } from "./actions/submit-link";

const Container = styled.div`
    padding: 4rem;
    font-family: sans-serif;
    text-align: center;
`;

const Button = styled.button`
    background-color: #0070f3;
    border: none;
    color: white;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background-color: #005ac1;
    }
`;

const LinkDisplay = styled.div`
    margin-top: 2rem;
    font-weight: bold;
    color: #333;
`;

const Section = styled.section`
    text-align: left;
    margin-top: 4rem;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
`;

const Pre = styled.pre`
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
`;

const Code = styled.code`
    font-family: monospace;
`;

export default function Page() {
    const [input, setInput] = useState<string>("");
    const [link, setLink] = useState<string | null>(null);

    useEffect(() => {
        const random = Math.random().toString(36).substring(2, 8);
        setInput(random);
    }, []);

    async function handleSubmit(formData: FormData) {
        const result = await submitLink(formData);
        setLink(result);

        const random = Math.random().toString(36).substring(2, 8);
        setInput(random);
    }

    return (
        <Container>
            <h1>Basic Link Generator POC</h1>

            <form action={handleSubmit}>
                <input type='hidden' name='input' value={input} />
                <Button type='submit'>Generate Link</Button>
            </form>

            {link && <LinkDisplay>{link}</LinkDisplay>}

            <Section>
                <h1>🧪 Server Action Link Generator PoC</h1>
                <p>
                    A minimal proof-of-concept using{" "}
                    <strong>Next.js App Router</strong> with{" "}
                    <strong>Server Actions</strong>,{" "}
                    <strong>Styled Components</strong>, and{" "}
                    <strong>TypeScript</strong> — triggered by a form
                    submission.
                </p>

                <h2>✨ Functionality</h2>
                <p>
                    This app generates a random link server-side using a Server
                    Action. It uses a hidden input in the form and stores the
                    result on the client side after submission. The
                    server-generated link is returned without using any client
                    fetches.
                </p>

                <h2>🗂 Files of Interest</h2>
                <ul>
                    <li>
                        <Code>app/page.tsx</Code>: Client component with the
                        form and button
                    </li>
                    <li>
                        <Code>app/actions/submit-link.ts</Code>: Server Action
                        that receives FormData
                    </li>
                    <li>
                        <Code>app/actions/generate-link.ts</Code>: Helper to
                        generate a link (also a Server Action)
                    </li>
                    <li>
                        <Code>styled-components-registry.tsx</Code>: Configures
                        SSR for Styled Components
                    </li>
                    <li>
                        <Code>next.config.js</Code>: Enables native
                        styledComponents support in Next.js
                    </li>
                    <li>
                        <Code>page.module.css</Code>: Responsive layout and
                        theme styling (not applied in this PoC but included)
                    </li>
                </ul>

                <h2>🛠️ Technologies Used</h2>
                <ul>
                    <li>Next.js 15 (App Router)</li>
                    <li>React 19</li>
                    <li>TypeScript</li>
                    <li>Styled Components v6</li>
                    <li>Server Actions (form-based, async)</li>
                </ul>

                <h2>▶️ How to Run</h2>
                <Pre>
                    <Code>npm install{"\n"}npm run dev</Code>
                </Pre>
                <p>
                    Then open{" "}
                    <a href='http://localhost:3000' target='_blank'>
                        http://localhost:3000
                    </a>{" "}
                    in your browser.
                </p>

                <h2>✍️ Example Output</h2>
                <Pre>
                    <Code>https://example.com/link/sqt7c1-3cg8t6ia</Code>
                </Pre>
                <p>Each click generates a new unique link.</p>

                <h2>💡 Notes</h2>
                <ul>
                    <li>
                        <Code>useEffect</Code> is used to pre-generate the
                        hidden input to avoid hydration mismatches.
                    </li>
                    <li>
                        Styled Components are configured for SSR with the{" "}
                        <Code>StyledComponentsRegistry</Code>.
                    </li>
                    <li>
                        No client-side fetches — everything flows through the
                        form + server action pattern.
                    </li>
                </ul>
            </Section>
        </Container>
    );
}

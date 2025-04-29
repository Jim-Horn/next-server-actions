"use client";

import { useState } from "react";
import styled from "styled-components";
import { generateLink } from "./actions/generate-link";

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

export default function Page() {
    const [link, setLink] = useState<string | null>(null);

    const handleClick = async () => {
        const input = Math.random().toString(36).substring(2, 8);
        const newLink = await generateLink(input);
        setLink(newLink);
    };

    return (
        <Container>
            <h1>Link Generator</h1>
            <Button onClick={handleClick}>Generate Link</Button>
            {link && <LinkDisplay>{link}</LinkDisplay>}
        </Container>
    );
}

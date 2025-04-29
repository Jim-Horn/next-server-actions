# 🧪 Server Action Link Generator PoC

A minimal proof-of-concept using **Next.js App Router** with **Server Actions**, **Styled Components**, and **TypeScript** — triggered by a form submission.

---

## ✨ Functionality

This app generates a random link server-side using a Server Action. It uses a hidden input in the form and stores the result on the client side after submission. The server-generated link is returned without using any client fetches.

---

## 🗂 Files of Interest

-   `app/page.tsx`: Client component with the form and button
-   `app/actions/submit-link.ts`: Server Action that receives FormData
-   `app/actions/generate-link.ts`: Helper to generate a link (also a Server Action)
-   `styled-components-registry.tsx`: Configures SSR for Styled Components
-   `next.config.js`: Enables native `styledComponents` support in Next.js
-   `page.module.css`: Responsive layout and theme styling (not applied in this PoC but included)

---

## 🛠️ Technologies Used

-   Next.js 15 (App Router)
-   React 19
-   TypeScript
-   Styled Components v6
-   Server Actions (form-based, async)

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✍️ Example Output

When clicking the button:

```
https://example.com/link/sqt7c1-3cg8t6ia
```

Each click generates a new unique link.

---

## 💡 Notes

-   `useEffect` is used to pre-generate the hidden input to avoid hydration mismatches
-   Styled Components are configured for SSR with the `StyledComponentsRegistry`
-   No client-side fetches — everything flows through the form + server action pattern

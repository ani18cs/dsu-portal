# Security & Architecture at DSU Portal

This document outlines the core security implementations and architectural decisions driving the Dayananda Sagar University (DSU) Portal.

## Frontend Sanitization
1. **React's Built-In XSS Protection**: By utilizing React and JSX, the portal automatically escapes all data values embedded in the UI. This prevents Cross-Site Scripting (XSS) attacks by ensuring that any user-supplied or AI-generated text is treated exclusively as a string.
2. **DOMPurify (Future-Proofing)**: For any future features requiring rendering raw HTML (such as rich-text articles or announcements), we advocate integrating DOMPurify to strip any malicious `<script>` tags or unsafe attributes before injection.

## Serverless Deployment Benefits
The portal is designed for a modern Serverless environment (e.g., Vercel or AWS Amplify):
1. **Reduced Attack Surface**: With no traditional persistent servers (like EC2 instances), there's no OS layer for attackers to exploit or maintain persistence on.
2. **Automated Scaling & DDoS Mitigation**: The infrastructure scales seamlessly with traffic demands. High-traffic events (such as admission results) are handled efficiently, while relying on the platform's edge CDN logic to mitigate Distributed Denial of Service (DDoS) threats.
3. **Edge Caching**: Assets and static routes are cached globally at Edge nodes, minimizing load times and reducing exposure of backend APIs to direct public traffic.
4. **Zero-Trust AI Endpoints**: Communication with external APIs (like AWS Lex for the AI Concierge) is configured minimally via environment variables, ensuring no sensitive AWS keys are exposed to the client bundle. Any long-term integration should route through secure serverless Next.js API Routes rather than storing API keys on the frontend.

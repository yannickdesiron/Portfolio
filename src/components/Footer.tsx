// components/Footer.tsx
export default function Footer() {
    return (
      <footer
        className="footer"
        style={{
          padding: "1rem",
          textAlign: "center",
        }}
      >
        
        <p style={{ color: "var(--color-text)", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} Yannick Desiron. All rights reserved.
        </p>
      </footer>
    );
  }
  
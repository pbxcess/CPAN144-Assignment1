import Link from "next/link";

export default function Navbar() {
    return (
        <header className="nav">
            <nav className="nav-inner">
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/contact">Contact Me</Link>
            </nav>
            <style jsx>{`
            .nav { border-bottom: 1px solid #c2aee7ff; background:#fafafa;  }
            .nav-inner ( display: flex space-between; gap: 16px; padding: 12px 16px; max-width: 920px; margin:0 auto; }
            .nav-inner a { padding: 6px 8px; border-radius: 8px }
            .nav-inner a:hover { background: #4f3480ff}
            `}
            </style>
        </header>
    )
}
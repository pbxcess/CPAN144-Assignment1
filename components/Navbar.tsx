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
            .nav { border-bottom: 1px solid #e5e7eb; background:#fafafa; }
            .nav-inner ( display: flex;gpa: 16px; padding: 12px 16px; max-width: 920px; margin:0 auto; }
            `}
            </style>
        </header>
    )
}
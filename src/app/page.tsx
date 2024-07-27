import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul>
            <li><a href="/scroll-animation-vision">Scroll animation (vision pro)</a></li>
            <li><a href="/camera-position">Camera position animation</a></li>
        </ul>
      </nav>

    </main>
  );
}

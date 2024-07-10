import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul>
          <li><a href="/scroll-animation">Scroll animation (boxes)</a></li>
          <li><a href="/scroll-animation-model">Scroll animation (model)</a></li>
          <li><a href="/scroll-animation-robot">Scroll animation (robot)</a></li>
        </ul>
      </nav>

    </main>
  );
}

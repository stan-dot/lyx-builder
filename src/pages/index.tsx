import Image from "next/image"

export default function Home() {
  return (
    <div className="home-background">
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <div className="mb-4 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center lg:static lg:w-auto  lg:rounded-xl lg:p-4 lg:border border-red-100 bg-pink-50 font-mono">
            Start 🆙 your development by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://github.com/lukso-network"
              target="_blank"
              rel="noopener noreferrer"
            >
              by{' '}
              <div className="h-10 w-28 relative">
                <Image
                  src="/lukso_wordmark_black.svg"
                  alt="LUKSO Wordmark"
                  className="dark:invert"
                  priority
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain"
                  }} />
              </div>
            </a>
          </div>
        </div>

        <div>
          <div className="h-44 w-60 relative">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/lyx_token_symbol.svg"
              alt="LYX Token Symbol"
              priority
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          </div>
        </div>
        <div className=" rounded-lg border border-red-100 p-5 bg-pink-50 mt-4">
          <h2 className="text-2xl m-5">Learn about LUKSO and LSP Standards</h2>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://docs.lukso.tech/"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Tech Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Read guides and learn about standards, tools, and libraries.
              </p>
            </a>

            <a
              href="https://erc725-inspect.lukso.tech/"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Inspector{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Use the ERC-725 Inspector to retrieve contract data.
              </p>
            </a>

            <a
              href="https://examples.lukso.tech/"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Sample Apps{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore minimal example dApps and app concepts.
              </p>
            </a>

            <a
              href="https://github.com/lukso-network/lukso-playground"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Playground{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Try out code snippets to read and detect contracts.
              </p>
            </a>
          </div>
        </div>
        <div className=" rounded-lg border border-red-100 p-5 bg-pink-50 mt-2">
          <h2 className="text-2xl m-5">Learn about App Development in Next</h2>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Guides{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Start an interactive course with the Next.js tutorials.
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Templates{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore starter templates for your Next.js application.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 hover:border-slate-200 hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Deployment{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your dApp to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
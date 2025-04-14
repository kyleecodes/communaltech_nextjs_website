import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "https://communaltech.notion.site/Kylee-Fields-Communal-Tech-Content-Portfolio-649876b071da4e7dacd8116b89b1ccfe?pvs=4":
  {
    name: "content",
  },
  "https://github.com/kyleecodes":
  {
    name: "github",
  },
  "https://www.linkedin.com/in/kyleecodes/":
  {
    name: "linkedin",
  },
  '/ideas': {
    name: 'ideas + TIL',
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-center relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 justify-center">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500 dark:text-neutral-400 relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}

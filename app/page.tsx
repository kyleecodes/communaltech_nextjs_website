// import { BlogPosts } from 'app/components/posts'
import Socials from "./components/socials";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kylee Fields Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome! I'm a developer advocate and code hobbyist, bridging the gap between code and community. Since 2021, my work has cultivated sustainable tech communities for startups and non-profits. My greatest passions are cutting-edge technology, enabling innovation, and living life in dark mode. 🌙`}
      </p>
      <div className="mt-6 mb-4">
        Connect with me:
        <Socials />
      </div>
    </section>
  );
}

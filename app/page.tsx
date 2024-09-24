// import { BlogPosts } from 'app/components/posts'
import Socials from "./components/socials";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Kylee's corner of the internet 🌐
      </h1>
      <p className="mb-4">
        {`My name is Kylee Fields (she/her), and I bridge the gap between community + code!`}
      </p>
      <p className="mb-4">
        {`
        I'm an open-source developer advocate and community builder from the East Coast of the United States. 🌎`}
      </p>
      <p className="mb-4">
        {`
        Since 2021, my work has cultivated innovative communities, sustainable programs, and technical solutions for open-source startups and non-profits.`}
      </p>
      <p className="mb-4">
        {`
        I specialize in enabling developers to build, and designing systems to solve-problems. Most days, you can find me coding from dark mode terminals. 🌙 `}
      </p>
      <div className="mt-6 mb-4">
        Let's Connect!
        <Socials />
      </div>
    </section>
  );
}

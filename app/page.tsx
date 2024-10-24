// import { BlogPosts } from 'app/components/posts'
import Socials from "./components/socials";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Kylee's corner of the internet 🌐
      </h1>
      <p className="mb-4">
        {`My name is Kylee (she/her) and I’m a developer advocate and open-source developer specializing in bridging the gap between community + code. 🌎`}
      </p>
      <p className="mb-4">
        {`
        Since 2021, my work has cultivated collaborative developer communities, innovative programs, sustainable product adoption, and software solutions for global tech organizations. Currently working in the #techforgood space, I have experience with high-growth startups, and I’m graduating with my Bachelors in Computer Science in winter 2024.`}
      </p>
      <div className="mt-6 mb-4">
      Let's Connect! 🤝 I am always looking to collaborate with passionate technologists and organizations.
        <Socials />
      </div>
    </section>
  );
}

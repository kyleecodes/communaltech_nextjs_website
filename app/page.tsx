// import { BlogPosts } from 'app/components/posts'
import Socials from "./components/socials";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Kylee's corner of the internet 🌐
      </h1>
      <p className="mb-4">
        {`My name is Kylee, and I’m a developer advocate / tech community manager / open-source developer with a passion for bridging the gap between community + code! 🌎`}
      </p>
      <p className="mb-4">
        {`
        Since 2021, my work has cultivated collaborative developer communities, innovative developer programs, sustainable tech product adoption, and software solutions for global tech organizations.`}
      </p>
      <p className="mb-4">
        {`
         Currently consulting under the name “Communal Tech” (because tech is for everyone!) I have worked with open-source startups, blockchain companies, and in the social impact space. 💙`}
      </p>
      <div className="mt-6 mb-4">
        Let's Connect! 🤝 I am always looking to collaborate with passionate
        technologists and organizations.
        <Socials />
      </div>
    </section>
  );
}

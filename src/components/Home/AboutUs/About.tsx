import { Cards } from "./Cards";

export const About = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-[64px] laptop:flex-row section-padding-x section-padding-y">
      <div className="laptop:max-w-[60%]">
        <h2 className="text-left text-h2 font-semibold text-light">
          A <span className="text-accent-purple">Conference</span> for and by
          Cybersecurity community.
        </h2>
        <p className="text-left text-para my-6 max-w-[80%]">
          Security BSides is a community-driven cybersecurity conference where
          people from all over the world come together to collaborate, learn,
          and share their knowledge. We are responsible for organizing an
          independent BSides-approved event for Dehradun.{" "}
        </p>
        <button className="py-4 px-8 rounded-[10px] text-btn bg-primary-purple">
          About Us
        </button>
      </div>
      <Cards />
    </section>
  );
};

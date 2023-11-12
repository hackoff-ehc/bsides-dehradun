import { CardHolder } from "./CardHolder";

export function Interest() {
  return (
    <section className="flex flex-col gap-[80px] section-padding-x section-padding-y">
      <CardHolder title="Show your interest">
        <div className="grid gap-[clamp(24px,2.75vw,48px)] tablet:grid-cols-2 laptop:grid-cols-3">
          {[
            {
              title: "Call For Paper",
              btnTitle: "Click here",
              description:
                "We happily open doors to researchers and hackers around the world to work on the 'next big thing' in security. We request everyone to submit their new research.",
              onClick: () => {},
            },
            {
              title: "Buy Tickets",
              btnTitle: "Click here",
              description:
                "Tickets for BSides Dehradun 2024 will go on sale in early Novmber 2023. We encourage you to purchase your tickets early, as they are expected to sell out quickly.",
              onClick: () => {},
            },
            {
              title: "Become a Sponsor",
              btnTitle: "Click here",
              description:
                "Join the winning team and become a sponsor! We are proud to partner with amazing sponsors who support our mission and vision. Together, we make a difference.",
              onClick: () => {},
            },
          ].map(({ title, btnTitle, description, onClick }) => (
            <div
              key={title}
              className="py-[28px] px-4 flex flex-col items-center text-center border-2 border-solid border-[#0005] bg-grayRadialGradient rounded-[20px] backdrop-blur-[20px]"
              style={{
                boxShadow:
                  "-5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset",
              }}
            >
              <h4 className="pb-4 font-bold">{title}</h4>
              <p className="flex-grow">{description}</p>
              <hr className="my-6 h-[3px] w-full bg-white border-none" />
              <button>{btnTitle}</button>
            </div>
          ))}
        </div>
      </CardHolder>

      <CardHolder title="BSides Conferences Feature">
        <div className="grid gap-[clamp(24px,2.75vw,48px)] tablet:grid-cols-2 laptop:grid-cols-3">
          {[
            "Keynotes and talks",
            "CTF competitions",
            "Workshops",
            "Village events",
            "Panel discussions",
            "Networking events",
          ].map((title) => (
            <div
              key={title}
              className="py-[36px] px-[24px] text-center border-2 border-solid border-[#0005] bg-grayRadialGradient rounded-[20px] backdrop-blur-[20px] flex items-center justify-center font-semibold tablet:py-[48px]"
            >
              {title}
            </div>
          ))}
        </div>
      </CardHolder>
    </section>
  );
}

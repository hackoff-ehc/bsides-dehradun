"use client";

import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export const Cards = () => {
  const [cardOnTop, setCardOnTop] = useState<number>(1);
  const [firstCardScope, animateFirstCard] = useAnimate();
  const [secondCardScope, animateSecondCard] = useAnimate();

  useEffect(() => {
    (async () => {
      if (cardOnTop === 0) {
        await animateSecondCard(secondCardScope.current, {
          translateY: "0%",
          translateX: "50%",
        });
        await animateFirstCard(firstCardScope.current, { zIndex: 1 });
        await animateSecondCard(secondCardScope.current, { zIndex: 0 });
        await animateFirstCard(firstCardScope.current, {
          translateY: "10%",
          translateX: "0%",
        });
      } else if (cardOnTop === 1) {
        await animateFirstCard(firstCardScope.current, {
          translateY: "0%",
          translateX: "0%",
        });
        await animateSecondCard(secondCardScope.current, { zIndex: 1 });
        await animateFirstCard(firstCardScope.current, { zIndex: 0 });
        await animateSecondCard(secondCardScope.current, {
          translateY: "-10%",
          translateX: "50%",
        });
      }
    })();
  }, [cardOnTop]);

  return (
    <div className="grid grid-rows-2 -translate-x-1/4 laptop:translate-x-0">
      {[
        {
          title: "Location",
          firstLine: "Dehradun",
          secondLine: "India",
          backgroundColor: "#6104D7",
          color: "#FFF",
        },
        {
          title: "Date",
          firstLine: "17 February",
          secondLine: "2024",
          backgroundColor: "#FFFFFF",
          color: "#0C0909",
        },
      ].map(
        ({ title, firstLine, secondLine, backgroundColor, color }, index) => (
          <div
            key={title}
            ref={!index ? firstCardScope : secondCardScope}
            className="p-[24px] rounded-[20px] aspect-square flex flex-col items-center text-[#272727] justify-center"
            style={{
              backgroundColor,
              color,
              //   transform: `translate(${!index ? "0px" : "50%"}, ${
              //     !index ? "0px" : "-10%"
              //   })`,
              //   zIndex: index + 1,
            }}
            onClick={() => setCardOnTop(index)}
          >
            <h3 className="p-0 px-[3px] text-[clamp(30px,2.646vw,40px)] font-bold">
              {title}
            </h3>
            <hr className="h-[3px] w-full my-[6px] bg-current border-none laptop:my-[10px]" />
            <p className="text-[clamp(18px,1.587vw,24px)] font-semibold">
              {firstLine}
            </p>
            <p className="text-[clamp(18px,1.587vw,24px)] font-semibold">
              {secondLine}
            </p>
          </div>
        )
      )}
    </div>
  );
};

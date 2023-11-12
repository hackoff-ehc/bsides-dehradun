export const CardHolder = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) => {
  return (
    <div
      className="px-[clamp(36px,4.233vw,64px)] py-[clamp(30px,2.646vw,40px)] bg-[#2c2c2d] rounded-[20px]"
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}
    >
      <h2 className="text-h2 font-bold mb-[24px] text-light-fadedGray text-center laptop:text-left laptop:mb-[40px]">
        {title}
      </h2>
      {children}
    </div>
  );
};

import { H2, P } from "./typography";


type FeatureProps = {
  title: string;
  text: string;
  icon: string;
  align?: "text-left" | "text-right";
};

export const FeatureCard = ({ title, text, icon,  }: FeatureProps) => {
  return (
    <div className={`flex flex-col gap-2 text-center items-center text-[#A8A6B1]`}>
      <img src={icon} className="w-20 h-20 mx-auto md:mx-0" />

      <H2 className="text-lg font-light tracking-wide text-white ">
        {title}
      </H2>

      <P className="text-gray-400 max-w-sm mt-0 pt-0">
        {text}
      </P>
    </div>
  );
};

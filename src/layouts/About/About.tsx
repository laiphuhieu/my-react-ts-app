import { Profile } from "@/types/profile";

const About = ({ image, description }: Profile) => {
  return (
    <section id="about" className="py-[16px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-[32px]">
        <div className="lg:col-span-1">
          <img
            src={image}
            alt="profileIMG"
            className="rounded-[50%] w-[375px] h-[375px]"
          />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center">
          <h2 className="mb-[48px] text-[56px]">About me</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

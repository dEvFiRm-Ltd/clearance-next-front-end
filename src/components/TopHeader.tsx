import Image from "next/image";

const TopHeader = () => {
  return (
    <Image
      alt="topHead"
      width={500}
      className="object-cover w-full"
      height={500}
      src={"/../assets/imgs/tophead.webp"}
    />
  );
};

export default TopHeader;

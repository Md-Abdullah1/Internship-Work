import { Card } from "@/components/ui/card";
// import { Image } from "next/images";
import Image from "next/image";
import user from "../../public/user.jpg";
const CardDemo = () => {
  return (
    <Card className="w-[20vw] h-[20vh]  hover:scale-110  hover:translate-x-3 duration-1000 transition p-2 flex divide-x-2 divide-slate-300 justify-center items-center gap-2 hover:bg-blue-400 group">
      <Image
        src={user}
        width={100}
        height={100}
        alt="user"
        className="w-[3vw] h-[5vh] rounded-full duration-500"
      />
      <h1 className="text-blue-700 text-xl pl-3 group-hover:text-white duration-500">hi card here</h1>
    </Card>
  );
};

export default CardDemo;

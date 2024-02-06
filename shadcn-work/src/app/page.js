// import Image from "next/image";
// import AlertDemo from "../AlertDemocomponents/AlertDemo
// import { DialogDemo } from "@/components/DialogDemo";
// import { Accordian, AccordionDemo } from "@/components/Accordian";
// import { AlertDialogDemo } from "@/components/AlertDialog";
// import CardDemo from "@/components/Card";
// import { CardWithForm } from "@/components/Card2";

import Hero from "@/components/Hero";
// import AlertDemo from "../components/AlertDemo"

export default function Home() {
  return (
    <div className="h-screen   p-4  bg-blue-200  flex justify-between flex-col items-center  gap-3 ">
      
      {/* <AlertDemo/> */}
        <Hero/>
        {/* <DialogDemo /> */}
        {/* <h1 className="text-xl text-blue-500 text-center">Hi hello</h1> */}
        {/* <AccordionDemo className="self-end"/> */}
        {/* <AlertDialogDemo/> */}
        {/* <CardDemo/> */}
        {/* <CardWithForm/> */}
    </div>

  );
}

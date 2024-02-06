// import React from "react";
import { DialogDemo } from "./DialogDemo";
import { AccordionDemo } from "@/components/Accordian";
// import { Accordian, AccordionDemo } from "@/components/Accordian";
import { AlertDialogDemo } from "@/components/AlertDialog";
import CardDemo from "@/components/Card";
import { CardWithForm } from "@/components/Card2";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font  ">
      
      <div className="container mx-auto flex p-5   md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center gap-2">
            <button className="inline-flex text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none rounded text-lg">
              <AccordionDemo />
            </button>
            <DialogDemo />
            <AlertDialogDemo className='text-blue-300'/>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <CardWithForm />
        </div>

      </div>
        <CardDemo className='text-center'/>
      
    </section>
  );
};

export default Hero;

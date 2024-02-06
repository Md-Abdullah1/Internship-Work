// 'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-auto p-3 " >
        <AccordionItem value="item-1" className='duration-400'>
          <AccordionTrigger>hi</AccordionTrigger>
          <AccordionContent>
            Hello 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>how are u</AccordionTrigger>
          <AccordionContent>
            fine biscuit 
          </AccordionContent>
        </AccordionItem>
      
      </Accordion>
    )
  }
  
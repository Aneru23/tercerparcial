import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">MORENADA</AccordionHeader>
          <AccordionBody accordionId="1">
            La danza de los Tobas tiene sus raíces en la ciudad de Oruro, Bolivia. Aunque es un baile folclórico urbano, su origen se relaciona con las tribus indígenas del oriente boliviano y el Chaco. Actualmente, es una danza muy popular en el Carnaval de Oruro y la Fiesta del Gran Poder. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">CAPORAL</AccordionHeader>
          <AccordionBody accordionId="2">
            La danza de caporales es un folclore boliviano que tiene sus raíces en el departamento de La Paz, específicamente en los Yungas. Fue creada a finales de los años sesenta en la ciudad de La Paz, inspirándose en la figura del caporal de la danza afroboliviana de la saya. Los hermanos Estrada Pacheco son considerados sus creadores, quienes presentaron la danza al público en 1969. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">TOBAS</AccordionHeader>
          <AccordionBody accordionId="3">
La danza de los Tobas tiene sus raíces en la ciudad de Oruro, Bolivia. Aunque es un baile folclórico urbano, su origen se relaciona con las tribus indígenas del oriente boliviano y el Chaco. Actualmente, es una danza muy popular en el Carnaval de Oruro y la Fiesta del Gran Poder. 
          </AccordionBody>
        </AccordionItem>
               <AccordionItem>
          <AccordionHeader targetId="4">DIABLADA</AccordionHeader>
          <AccordionBody accordionId="4">
La diablada es originaria del departamento de Oruro en Bolivia, donde se celebra como parte del Carnaval de Oruro, una fiesta declarada Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO. 
          </AccordionBody>
        </AccordionItem>
               <AccordionItem>
          <AccordionHeader targetId="5">TINKU</AccordionHeader>
          <AccordionBody accordionId="5">
El tinku es una tradición cultural que se practica en el norte de Potosí y en el sur de Oruro, ambos departamentos de Bolivia. Se trata de un ritual y una danza folklórica que representa un encuentro o enfrentamiento entre comunidades. La palabra "tinku" significa "encuentro" en quechua y "ataque físico" en aymara. 
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;
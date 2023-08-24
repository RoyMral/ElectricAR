import "../assets/css/AboutBodyContent.css";

function AboutBodyContent() {
  return (
    <>
      <section className="section-about mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px]">
        <h2 className="text-center font-bold text-xl py-5 sm:text-xl sm:py-6 md:text-3xl md:py-8">
          TFG UNED 2023
        </h2>
        <p className="w-[95%] mb-4  mx-auto sm:w-[80%] sm:text-sm sm:mb-5 md:mb-0 md:text-lg">
          Iniciativa educativa en línea: "¡Descubriendo la Energía Eléctrica con
          Realidad Aumentada!" Este proyecto representa el resultado de un arduo
          esfuerzo y dedicación, nacido como un trabajo final de graduación de
          un equipo apegado a la educación y la tecnología. Nuestro objetivo
          principal es llevar el aprendizaje a nuevas dimensiones, y qué mejor
          manera de hacerlo que a través de la realidad aumentada. Hemos creado
          una serie de recursos educativos interactivos que combinan la
          tecnología de realidad aumentada con el fascinante mundo de la
          generación de energía eléctrica.
        </p>
        <div className="md:my-10 bg-teal-100">
          <p className="w-[80%] py-4 mx-auto sm:text-sm md:text-lg sm:p-4 md:py-5">
            Estamos emocionados de compartir nuestro trabajo con ustedes y de
            brindarles la oportunidad de explorar y comprender de manera única
            cómo se produce la energía eléctrica en Costa Rica. Esperamos que
            esta experiencia enriquezca sus conocimientos y les inspire a ser
            parte del cambio hacia un futuro más sostenible y consciente en
            términos de energía eléctrica. ¡Gracias por ser parte de este viaje
            educativo y tecnológico!
          </p>
        </div>
        <h2 className="text-center my-4 text-xl font-bold sm:text-2xl md:my-20 md:text-4xl">
          Equipo detrás del proyecto
        </h2>
        <div className="container-contacts flex justify-around pb-5 md:pb-0">
          <div className="contact text-center">
            <p>Isabel Arroyo</p>
            <p>isabel.arroyo@uned.cr</p>
          </div>
          <div className="contact text-center">
            <p>Roy Morales Almengor</p>
            <p>roy.morales@uned.cr</p>
          </div>
          <div className="contact text-center md:mb-5">
            <p>Yulian Arce Villalobos</p>
            <p>yulian.arce@uned.cr</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutBodyContent;

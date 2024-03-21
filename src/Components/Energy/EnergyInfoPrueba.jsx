import Subtitles from "../Subtitles";
import ModelContent from "./ModelContent";
import ImportImgEnergy from "../../helpers/ImportImgGeotermic";
import * as textos from "../../helpers/Textos";

function EnergyInfoPrueba() {
  const { arImagesEnergy } = ImportImgEnergy();
  const typeEnergy = "Energía Geotérmica";

  return (
    <>
      <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] bg-slate-400">
        <h2 className="text-center">Introducción a la {typeEnergy}</h2>
        <p>
          La energía geotérmica es una forma de energía renovable que proviene
          del calor natural del interior de la Tierra. Uno de los métodos más
          comunes para aprovechar la energía geotérmica es a través de plantas
          geotérmicas, que utilizan el calor del subsuelo para generar
          electricidad o proporcionar calefacción y refrigeración. La energía
          geotérmica ofrece numerosos beneficios, tanto ambientales como
          económicos. Desde el punto de vista económico, es una fuente de
          energía estable y confiable, con costos de operación más bajos a largo
          plazo que otras formas de generación de energía. En resumen, la
          energía geotérmica representa un recurso valioso y prometedor en la
          búsqueda de alternativas energéticas sostenibles y respetuosas con el
          medio ambiente.
        </p>
        <h2 className="text-center">
          Proceso de Generación de Energía Geotérmica
        </h2>
        <p>
          La generación de energía geotérmica es un proceso que aprovecha el
          calor natural del interior de la Tierra para producir electricidad y
          proporcionar calefacción y refrigeración de manera sostenible. En este
          tipo de planta, el vapor generado a partir del agua geotérmica se
          utiliza para mover turbinas que generan electricidad, similar al
          funcionamiento de una planta de energía convencional. Otro tipo de
          planta geotérmica es la de ciclo binario, que se utiliza en áreas
          donde la temperatura del agua geotérmica es más baja. Además de la
          generación de electricidad, la energía geotérmica se utiliza para
          calefacción y refrigeración directa a través de sistemas de
          intercambio de calor en edificios y hogares. En estos sistemas, el
          calor del subsuelo se extrae mediante bombas de calor geotérmicas y se
          utiliza para calentar el agua o el aire interior en invierno, y para
          enfriarlos en verano. En conclusión, el proceso de generación de
          energía geotérmica es una tecnología probada y eficiente que aprovecha
          el calor natural del planeta para proporcionar energía limpia y
          sostenible.
        </p>
      </div>
      <Subtitles title={"Proceso Energía Geotérmica"} />
      <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] sm:flex sm:flex-col sm:justify-center sm:items-center">
        <ModelContent
          imageEnergyOne={arImagesEnergy[0]}
          imageEnergyTwo={arImagesEnergy[1]}
          texto={textos.referenciaGeo1}
        />
        <ModelContent
          imageEnergyOne={arImagesEnergy[2]}
          imageEnergyTwo={arImagesEnergy[3]}
          texto={textos.referenciaGeo2}
        />
      </div>
    </>
  );
}

export default EnergyInfoPrueba;

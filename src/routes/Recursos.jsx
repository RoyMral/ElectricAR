import HeaderSecondary from "../Components/HeaderSecondary";
import Subtitles from "../Components/Subtitles";
import VideoContainer from "../Components/VideoContainer";
import bgRecursos from "../assets/img/recursos/bg-recursos.webp";

function Recursos() {
  const title = "Recursos";
  return (
    <div>
      <HeaderSecondary titulo={title} image={bgRecursos} />
      <Subtitles title="VIDEOS" />
      <div className="mb-2"></div>
      <Subtitles title="¿Cómo funciona la energía Hidroeléctrica?" />
      <VideoContainer videoId={"Z34TbQB79jE"} />
      <div className="mb-2"></div>
      <Subtitles title="5 Tipos de energías renovables" />
      <VideoContainer videoId={"E4ZoFhVPqwY"} />
      <div className="mb-2"></div>
      <Subtitles title="Energía Solar" />
      <VideoContainer videoId={"W_1AJV8rKU4"} />
      <div className="mb-2"></div>
      <Subtitles title="¿Cómo funciona un aerogenerador?" />
      <VideoContainer videoId={"kmN9qD8vXbY"} />
      <div className="mb-2"></div>
      <Subtitles title="¿Qué es la energía?" />
      <VideoContainer videoId={"NAPAMIpGB-s"} />
      <div className="mb-2"></div>
      <Subtitles title="Páginas WEB" />
      <div className="mx-auto sm:w-[640px] md:text-lg md:w-[768px] lg:w-[1024px]">
        <p>
          <a href="https://www.siberzone.es/blog-sistemas-ventilacion/fuentes-energia-renovables/">
            https://www.siberzone.es/blog-sistemas-ventilacion/fuentes-energia-renovables/
          </a>
        </p>
        <p>
          <a href="https://es.wikipedia.org/wiki/Energ%C3%ADa_renovable">
            https://es.wikipedia.org/wiki/Energ%C3%ADa_renovable
          </a>
        </p>
        <p>
          <a href="https://www.enelgreenpower.com/es/learning-hub/energias-renovables">
            https://www.enelgreenpower.com/es/learning-hub/energias-renovables
          </a>
        </p>
        <p>
          <a href="https://www.acciona.com/es/energias-renovables/">
            https://www.acciona.com/es/energias-renovables/
          </a>
        </p>
      </div>
    </div>
  );
}

export default Recursos;

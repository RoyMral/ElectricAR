import HeaderSecondary from "../Components/HeaderSecondary";
import Subtitles from "../Components/Subtitles";
import VideoContainer from "../Components/VideoContainer";
import bgRecursos from "../assets/img/recursos/bg-recursos.webp";

function Recursos() {
  const title = "Recursos";
  return (
    <div>
      <HeaderSecondary titulo={title} image={bgRecursos} />
      <Subtitles title="¿Cómo funciona la energía Hidroeléctrica?" />
      <VideoContainer videoId={"Z34TbQB79jE"} />
    </div>
  );
}

export default Recursos;

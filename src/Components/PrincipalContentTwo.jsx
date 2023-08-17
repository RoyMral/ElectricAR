import arApp from "../assets/img/ar_app.svg";
import arYoung from "../assets/img/ar_young.svg";
import arPulpo from "../assets/img/ar_pulpo.svg";
import "../assets/css/PrincipalContentTwo.css";

function PrincipalContentTwo() {
  return (
    <section className="bg-waves mx-auto pt-[10px] bg-auto bg-no-repeat sm:pt-[30px] md:pt-[10px] lg:pt-[0px] lg:bg-center h-fit pb-[30px] lg:pb-[20px] sm:w-[640px] md:w-[768px] lg:w-[1024px]">
      <h2 className="mt-[100px] font-bold text-[40px] text-teal-500 sm:text-black text-center">
        ¿Realidad Aumentada?
      </h2>
      <div className="container-imgAR mx-auto my-[40px] flex justify-center gap-[20px] h-[120px] sm:h-[180px] md:h-[230px] lg:h-[230px] lg:w-[1024px]">
        <div className="box">
          <img
            className="imgAR-1 w-[94px] sm:w-[104px] md:w-[144px] lg:w-[184px]"
            src={arApp}
            alt="persona con AR"
          />
        </div>
        <div className="box">
          <img
            className="w-[101px] sm:w-[121px] md:w-[161px] lg:w-[201px]"
            src={arYoung}
            alt="joven con AR"
          />
        </div>
        <div className="box">
          <img
            className="imgAR-2 w-[117px] sm:w-[147px] md:w-[197px] lg:w-[233px]"
            src={arPulpo}
            alt="pulpo AR"
          />
        </div>
      </div>
      <p className="imgAR-3 w-[450px] text-center sm:text-start sm:w-[531px] mx-auto text-black lg:text-[20px] md:text-base">
        Parte del contenido se unifica con el tema de realidad aumentada, siendo
        esta, la interacción entre ambientes virtuales y el mundo físico,
        posibilitando su entremezcla por medio de dispositivos tecnológicos,
        como celulares o tabletas.
      </p>
    </section>
  );
}

export default PrincipalContentTwo;

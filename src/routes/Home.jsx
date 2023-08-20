import Header from "../Components/Header";
import PrincipalContentOne from "../Components/PrincipalContentOne";
import PrincipalContentTwo from "../Components/PrincipalContentTwo";
import Footer from "../Components/Footer";
import "../assets/css/Principal.css";

function Home() {
  console.log(location.href);
  return (
    <div className="bg-content">
      {location.href != "/" && (
        <div>
          <Header />
          <PrincipalContentOne />
          <PrincipalContentTwo />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;

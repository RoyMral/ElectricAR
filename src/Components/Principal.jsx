import Header from "./Header";
import PrincipalContentOne from "./PrincipalContentOne";
import PrincipalContentTwo from "./PrincipalContentTwo";
import Footer from "./Footer";
import "../assets/css/Principal.css";

function Principal() {
  return (
    <div className="bg-content">
      <Header />
      <PrincipalContentOne />
      <PrincipalContentTwo />
      <Footer />
    </div>
  );
}

export default Principal;

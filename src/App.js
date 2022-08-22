import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import Card from "./Cards";
import Textbody from "./Textbody";
import Carousel from "./Carousel";
// import Message from "./Message";
import ContactUs from "./Contact_us";

function App() {
  return (
    <div>
      <div className="bg-white align-middle">
        <Navbar />
        <Title />
        <Textbody />
      </div>
      <Card />
      {/* <Carousel /> */}
      <div className="bg-white h-48 justify-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
        urna eu enim porttitor, sit amet pretium eros pulvinar. Morbi sodales
        ipsum at libero tincidunt, in eleifend mauris congue. Cras pharetra dui
        eu interdum semper. Nulla facilisi. Cras interdum sodales iaculis. Cras
        elit mi, finibus sed malesuada ac, scelerisque vitae nisl. Maecenas eu
        faucibus velit, nec mollis sem. Integer vitae dolor at dui elementum
        pulvinar. Integer sed lacus viverra, sagittis tortor sit amet, convallis
        lorem. Aliquam eu mattis dolor, in convallis magna. Mauris pellentesque
        ante nec sapien dignissim lacinia. Aliquam sagittis eros dolor, quis
        tempor nibh rhoncus nec. Mauris non purus scelerisque, ultrices orci
        eget, tempus odio. Maecenas nec ligula risus.
      </div>
      <ContactUs />
      <Footer></Footer>
    </div>
  );
}
// Information center
// Menu task bar Right hand side.
export default App;

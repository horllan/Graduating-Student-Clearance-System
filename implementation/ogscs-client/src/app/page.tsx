import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main >
      {/* Header Section */}
      <div className="bg-slate-100">
        <Header />
      </div>
      {/* Hero section */}
      <div className="h-20">
        <Hero />
      </div>
      <div className="h-screen">
        <h2>Welcome to Online Graduating Student Clearance System</h2>
        <h5>Building an effective information management.</h5>
        <p>Lagos State University Graduating Student Clearance System serves as a more reliable and effective means of undertaking students clearance. Hence, providing borderless access to ensure prompt clearance, alleviating the problems and stress of travelling and queuing up of students during clearance.</p>
        <p>The application aimed at making clearance for graduating students hitch free.</p>
        <div>
          <button type="submit">Get Started</button>
          <button type="submit">Help</button>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}




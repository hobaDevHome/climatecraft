import CityData from "./components/CityData";
import AppTitle from "./components/Title";

function Home() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AppTitle />

      <CityData />
    </div>
  );
}

export default Home;

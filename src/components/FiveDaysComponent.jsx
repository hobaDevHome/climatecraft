import SlidingComponent from "./SlidingComponent";

const contentPropsList = [
  { day: "Mon", temp: "19C", state: "rainy" },
  { day: "Sat", temp: "25C", state: "rainy" },
  { day: "Saun", temp: "17C", state: "sunny" },
  { day: "Tue", temp: "11C", state: "rainy" },
  { day: "Wed", temp: "20C", state: "cloudy" },
];

const FiveDaysComponent = () => {
  return (
    <div>
      <SlidingComponent contentPropsList={contentPropsList} />
    </div>
  );
};

export default FiveDaysComponent;

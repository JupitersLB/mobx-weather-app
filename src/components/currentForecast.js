import bundleLoader from '../utilities/bundleLoader'
import { observer } from "mobx-react";

const CurrentForecast = props => {
  const { location } = props;

  console.log(location.dayList.days[0].dayTime);

  const images = bundleLoader.importFiles()
  const image = bundleLoader.loadImage(images, `${location.icon}.png`);
  const nightImage = bundleLoader.loadImage(images, `${location.dayList.days[0].nightTime.icon}.png`);
  const dayImage = bundleLoader.loadImage(images, `${location.dayList.days[0].dayTime.icon}.png`);

  return (
    <div className="weather-card text-purple-500 flex py-3 px-1 rounded-2xl justify-center mx-auto w-5/6  md:w-4/6 lg:w-1/2 bg-opacity-50 bg-indigo-300">
      <div className="current-weather w-full md:w-4/6">
        <p className="font-bold text-xl">Now in <span className="capitalize">{location.name}</span></p>
        <div className="weather-icon h-20">
          <img className="mx-auto h-full object-cover" src={image} alt="weather-icon"/>
        </div>
        <p>{location.phrase}</p>
        <div className="details pt-1 flex">
          <div className="left w-5/12 md:w-1/2">
            <p className="pt-1"><b>Temp:</b> {location.temp}<span>&#176;</span>c</p>
            <p className="pt-1"><b>Feels:</b> {location.realTemp}<span>&#176;</span>c</p>
            <p className="pt-1"><b>UV Index:</b> {location.UVIndex}</p>
          </div>
          <div className="right w-7/12 md:w-1/2">
            <p className="pt-1"><b>Humidty:</b> {location.humidity}%</p>
            <p className="pt-1"><b>Wind Speed:</b> {location.windSpeed} km/h</p>
            <p className="pt-1"><b>Precipitation:</b> {location.precipitation} mm</p>
          </div>
        </div>
      </div>
      <div className="forecast hidden md:block md:w-2/6">
        <div className="day flex flex-col justify-end pb-1 h-1/2">
          <p className="font-bold">Day</p>
          <img className="mx-auto" src={dayImage} alt="weather-icon"/>
          <p>{location.dayList.days[0].nightTime.phrase}</p>
        </div>
        <div className="night pt-1 h-1/2">
          <p className="font-bold">Night</p>
          <img className="mx-auto" src={nightImage} alt="weather-icon"/>
          <p>{location.dayList.days[0].nightTime.phrase}</p>
        </div>
      </div>
    </div>
  );
}

export default observer(CurrentForecast);

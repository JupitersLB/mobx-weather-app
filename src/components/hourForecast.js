import bundleLoader from '../utilities/bundleLoader'

const HourForecast = props => {
  const { forecast } = props;

  console.log(forecast);

  const images = bundleLoader.importFiles()
  const image = bundleLoader.loadImage(images, `${forecast.icon}.png`);

  return (
    <div className="simple-weather-card rounded-2xl hover:bg-indigo-100 hover:bg-opacity-5 w-3/6 px-3">
      <div className="card-header pb-2">
        <p className="text-lg font-bold">{forecast.time.substr(11,5)}</p>
        <div className="max-min flex justify-center">
          <p>{forecast.temp}<span>&#176;</span>c</p>
        </div>
      </div>
      <div className="card-body flex justify-center">
        <div>
          <div className="weather-icon h-20">
            <img className="mx-auto h-full object-cover" src={image} alt="weather-icon"/>
          </div>
          <p>{forecast.phrase}</p>
          <p>Chance of rain: {forecast.rainProbability}%</p>
        </div>
      </div>
    </div>
  );
}

export default HourForecast;

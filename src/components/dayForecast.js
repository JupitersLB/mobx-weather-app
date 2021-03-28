import bundleLoader from '../utilities/bundleLoader'

const DayForecast = props => {
  const { forecast } = props;

  console.log(forecast);

  const images = bundleLoader.importFiles()
  const dayImage = bundleLoader.loadImage(images, `${forecast.dayTime.icon}.png`);
  const nightImage = bundleLoader.loadImage(images, `${forecast.nightTime.icon}.png`);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dateObject = new Date(forecast.name)
  const day = days[dateObject.getDay()]

  return (
    <div className="simple-weather-card rounded-2xl hover:bg-indigo-100 hover:bg-opacity-5 w-3/6 px-2">
      <div className="card-header pb-2">
        <p className="text-lg font-bold">{day}</p>
        <div className="max-min flex justify-center">
          <p>{forecast.maxTemp}<span>&#176;</span>c</p>
          <p className="pl-1 hidden md:block">| {forecast.minTemp}<span>&#176;</span>c</p>
        </div>
      </div>
      <div className="card-body flex justify-center">
        <div className="sm:w-1/2">
          <p className="font-bold pb-2">Day</p>
          <div className="weather-icon h-20">
            <img className="mx-auto h-full object-cover" src={dayImage} alt="weather-icon"/>
          </div>
          <p>{forecast.dayTime.phrase}</p>
        </div>
        <div className="hidden md:block md:w-1/2">
          <p className="font-bold pb-2">Night</p>
          <div className="weather-icon h-20">
            <img className="mx-auto h-full object-cover" src={nightImage} alt="weather-icon"/>
          </div>
          <p>{forecast.nightTime.phrase}</p>
        </div>
      </div>
    </div>
  );
}

export default DayForecast;

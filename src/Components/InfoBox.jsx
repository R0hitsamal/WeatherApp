import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import weatherConditions from "../../public/weatherCond";

const InfoBox = ({weatherData}) => {
  try {
    const imgUrl = weatherConditions.find(
      (e) => e.main === weatherData.main.toLowerCase()
    );
    const snowImg = "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/74C8/production/_132269892_sevenoaks.jpg";
    return (
      <div className="infobox">
        <Typography variant="h6" align="center" sx={{padding : "25px"}}>
          Weather in {weatherData.city} is {weatherData.description}
        </Typography>
        <Card sx={{maxWidth: 345}}>
          <CardMedia component="img" height="220" image={weatherData.temp < 0 ? snowImg : imgUrl.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{display : "flex", justifyContent : "space-between"}}>
              {weatherData.city}
              <span >{weatherData.temp < 20 ? "🥶" : "🥵" }</span>
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{color: "text.secondary"}}
            >
              <p> Temperature : {weatherData.temp}&deg;C</p>
              <p> Humidity : {weatherData.humidity}%</p>
              <p> Temp Min : {weatherData.temp_min}&deg;C</p>
              <p> Temp Max : {weatherData.temp_max}&deg;C</p>
              <p> Wind : {weatherData.speed} km/h</p>
              <p>
                The weather can be describe as <i>{weatherData.description}</i>{" "}
                and feels like {weatherData.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    return <Typography variant="h4" align="center" sx={{color: "red", marginTop : 15}}>Weather in this location is not found.</Typography>;
  }
};

export default InfoBox;

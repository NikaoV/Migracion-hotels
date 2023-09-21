import styles from "./card.module.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardHotel = ({hotel}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      className={styles.imageHotel}
        sx={{ height: 140 }}
        image={hotel.photo}
        title={hotel.name}
      />
      <CardContent className={styles.containerInfo}>
        <Typography gutterBottom variant="h5" component="div" className={styles.titleHotel}>
           {hotel.name}
        </Typography>
        <Typography variant="h5" color="text.secondary" className={styles.description}>
          {hotel.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className={styles.price}>
            Price: $ {hotel.price}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className={styles.countryCityHotel}>
           Country: {hotel.country} ,  City: {hotel.city}
        </Typography>
      </CardContent>
      <CardActions  className={styles.containerButton} >
        <Button size="small" className={styles.buttonCardHotel}>See More</Button>
        <Button size="small" className={styles.buttonCardHotel}>Book It</Button>
      </CardActions>
    </Card>
  );
};

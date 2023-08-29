import "./page.css";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

// consider adding array for mapping through categories
export default function Home() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/recipe-svgrepo-com.svg"
          alt="breakfast"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Breakfast
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Energize your mornings with our enticing breakfast selection, from
            fluffy pancakes to fresh fruits and nourishing delights.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

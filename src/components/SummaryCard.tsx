import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function SummaryCard(){
  return (

    <div className='flex justify-center gap-5'>
    <Card>
      <CardActionArea className='border-2 '>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Income Title
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea className='border-2'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Expense Title
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  );
}
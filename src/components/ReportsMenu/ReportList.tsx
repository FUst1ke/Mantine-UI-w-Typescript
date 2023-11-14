import { Container, Title, Accordion } from '@mantine/core';
import { CardProps } from './ReportCard';
import classes from './ReportList.module.css'
import ReportCard from './ReportCard';

const ReportList: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <Container size="lg" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
       Data list
      </Title>

      <Accordion variant="separated">
        {cards.map((props, index) => {
          return <ReportCard key={index} item={props}/>
        })}
      </Accordion>        
    </Container>
  );
}

export default ReportList;
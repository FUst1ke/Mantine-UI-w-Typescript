import { Container, Title, Accordion } from '@mantine/core';
import { CardProps } from './CardLayout';
import classes from '../Report/ReportFill.module.css';
import ReportCard from './CardLayout';

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
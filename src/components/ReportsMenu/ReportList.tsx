import { Container } from '@mantine/core';
import { CardProps } from './ReportCard';
import ReportCard from './ReportCard';

const ReportList: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <Container size="sm">
        {cards.map((props, index) => {
            return <ReportCard key={index} item={props}/>
        })}
    </Container>
  );
}

export default ReportList;
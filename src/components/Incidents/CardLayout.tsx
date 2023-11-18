import { Accordion } from '@mantine/core';
// import classes from '../LogMenu/ReportFill.module.css'
import classes from '../Report/ReportFill.module.css'

export interface CardProps {
    name: string,
    phoneNumber: undefined,
    subject: string,
    description: string,
    image?: string
}

const ReportCard: React.FC<{ item: CardProps }> = ({ item }) => {
    return (
        <Accordion.Item className={classes.item} value={item.subject}>
        {/* // value alapján nyitja az itemeket, ha kettő ugyan olyan value-n fut akkor mindkettőt megnyitja. */}
          <Accordion.Control>data label</Accordion.Control>
          <Accordion.Panel>
            name: {item.name} <br />
            description: {item.description} <br />
            phoneNumber: {item.phoneNumber} <br />
            subject: {item.subject} <br />
            attached image: <img src={item.image} alt="" />
          </Accordion.Panel>
        </Accordion.Item>
    )
}

export default ReportCard
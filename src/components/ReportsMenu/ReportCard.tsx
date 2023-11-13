import { Text, Progress } from '@mantine/core';
import classes from '../LogMenu/GetInTouch.module.css'

export interface CardProps {
    name: string,
    phoneNumber: undefined,
    subject: string,
    description: string
}

const ReportCard: React.FC<{ item: CardProps }> = ({ item }) => {
    return (
        <div className={classes.wrapper}>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {item.name}
            {item.description}
            {item.phoneNumber}
            {item.subject}
            </Text>
            <Text fz="lg" fw={500}>
            $5.431 / $10.000
            </Text>
            <Progress value={54.31} mt="md" size="lg" radius="xl" />
        </div>
    )
}

export default ReportCard
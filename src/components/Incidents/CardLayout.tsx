// import { Container, Title, Accordion } from '@mantine/core';
import { Group, Avatar, Text, Accordion, Button, Space } from '@mantine/core';
import { Trash } from 'tabler-icons-react'
import classes from './IncidentList.module.css';
import moment from "moment";

export interface CardProps {
  name: string,
  phoneNumber: undefined,
  subject: string,
  description: string,
  image?: string
}

const date = moment().format("YYYY-MM-DD HH:mm");
const ReportCard: React.FC<{ item: CardProps }> = ({ item }) => {
  return (
    <Accordion.Item value={item.subject}>
      <Accordion.Control>
        <Group wrap="nowrap">
          <Avatar src={item.image} radius="xl" size="lg" />
          <div>
            <Text>{item.subject}</Text>
            <Text size="sm" c="dimmed" fw={400}>
              {item.name} - {date}
            </Text>
          </div>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.description}</Text>
        <Group justify="flex-end" mt="md">
          <Button className={classes.delete} rightSection={<Trash size={14} />} color="red">Delete</Button>
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default ReportCard


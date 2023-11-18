import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, NumberInput } from '@mantine/core'; // iconok hívása
import { ContactIconsList } from './ContactIcons'; // ContactIconList.tsx
import classes from './ReportFill.module.css'; // css
import { useForm } from '@mantine/form';
import { useMantineColorScheme } from '@mantine/core';

// Report menü
import { CardProps } from '../Incidents/CardLayout';
import { useState } from 'react';
import ReportList from '../Incidents/IncidentList';

export function ReportFill() {
  const { setColorScheme } = useMantineColorScheme(); 
  setColorScheme('dark'); 
  const [cards, setCards] = useState<CardProps[]>([])

  const form = useForm({
    initialValues: {
      name: '',
      phoneNumber: undefined,
      subject: '',
      description: '',
      image: ''
    },

    validate: (values) => ({
      name: (0 == values.name.length ? 'Invalid format': null),
      phoneNumber: (values.phoneNumber === undefined ? 'Invalid format' : values.phoneNumber == 0 ? 'Invalid format' : null),
      subject: (0 == values.subject.length ? 'Invalid format': null),
      description: (0 == values.description.length ? 'Invalid format': null),
      // image: (0 == values.name.length ? 'Invalid format': null) // nem szükséges, ha van van ha nincs nincs
    })
  });

  //[] TÖMB
  //{} OBJECT

  const submitData = (value: CardProps) => {
    // fetch luára az adott value, mentsd le adatbázisba
    setCards([...cards, value])
  }

  return (
    <>
    {/* report fill */}
    {/* {1 > 0 ? cumó : null} */}
    <Paper radius="lg" style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} ta="center" className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>
        
        <form className={classes.form} onSubmit={form.onSubmit((values) => submitData(values))}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput {...form.getInputProps('name')} label="Your name" placeholder="Your name"/>
              <NumberInput {...form.getInputProps('phoneNumber')} label="Your phone number" hideControls placeholder="Your phone number" />
            </SimpleGrid>

            <TextInput {...form.getInputProps('subject')} mt="md" label="Subject" placeholder="Subject" />
            <TextInput {...form.getInputProps('image')} mt="md" label="Image" placeholder="Image" />


            <Textarea
              {...form.getInputProps('description')}
              mt="md"
              label="Description"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
    {/* report menü */}
    <ReportList cards={cards}/>
    </>
  );
}
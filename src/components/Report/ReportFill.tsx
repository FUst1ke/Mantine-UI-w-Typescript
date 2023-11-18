import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, NumberInput, useMantineColorScheme, Fieldset, Space, Image } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContactIconsList } from './ContactIcons';
import classes from './ReportFill.module.css';
import { Upload, Power } from 'tabler-icons-react';

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
        <div className={classes.sidebar}>
          <Text fz="lg" fw={700} ta="center" className={classes.title} c="#fff">
            Welcome back, Officer!
          </Text>
          <Group justify="center" mt="md">
            <Image
              radius="md"
              h={200}
              w="auto"
              fit="contain"
              src="https://wiki.argonathrpg.eu/images//2/21/Lossantos_seal.png"
            />
          </Group>
          <Space h="4vmin"/>
          <ContactIconsList/>
        </div>
        
        <form className={classes.form} onSubmit={form.onSubmit((values) => submitData(values))}>
          <Text size="xl" fw={700} className={classes.title}>
            Create a new report
          </Text>

          <div className={classes.fields}>
            <Fieldset legend="Citizen's informations">
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput {...form.getInputProps('name')} label="Name" placeholder="Citizen's name"/>
                <NumberInput {...form.getInputProps('phoneNumber')} label="Phone number" hideControls placeholder="Citizen's phone number" />
              </SimpleGrid>
            </Fieldset>
            <Space h="xs" />
            <Fieldset legend="Incident informations">
              <TextInput {...form.getInputProps('subject')} mt="md" label="Subject" placeholder="Subject" />
              <Textarea
                {...form.getInputProps('description')}
                mt="md"
                label="Description"
                placeholder="Please include all relevant information"
                autosize
                minRows={2}
                maxRows={4}
              />
            </Fieldset>
            <TextInput {...form.getInputProps('image')} mt="md" label="Image (optional)" placeholder="Image" />
            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control} rightSection={<Upload size={18}/>}>
                Send Report
              </Button>
              <Button color="red" className={classes.control} rightSection={<Power size={18}/>}>
                Log Out
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
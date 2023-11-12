import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, NumberInput } from '@mantine/core'; // iconok hívása
import { ContactIconsList } from './ContactIcons'; // ContactIconList.tsx
import classes from './GetInTouch.module.css'; // css
import { useForm } from '@mantine/form';

export function GetInTouch() {
  const form = useForm({
    initialValues: {
      name: '',
      phoneNumber: undefined,
      subject: '',
      description: ''
    },

    validate: (values) => ({
      name: (0 == values.name.length ? 'Érvénytelen adat': null),
      phoneNumber: (values.phoneNumber === undefined ? 'Age is required' : values.phoneNumber == 0 ? 'Érvénytelen adat' : null),
      subject: (0 == values.subject.length ? 'Érvénytelen adat': null),
      description: (0 == values.description.length ? 'Érvénytelen adat': null)
    })
  });

  return (
    <Paper radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} ta="center" className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={form.onSubmit((values) => console.log("VALUES", values))}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput {...form.getInputProps('name')} label="Your name" placeholder="Your name"/>
              <NumberInput {...form.getInputProps('phoneNumber')} label="Your phone number" hideControls placeholder="Your phone number" />
            </SimpleGrid>

            <TextInput {...form.getInputProps('subject')} mt="md" label="Subject" placeholder="Subject" />

            <Textarea
              {...form.getInputProps('description')}
              mt="md"
              label="Your message"
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
  );
}
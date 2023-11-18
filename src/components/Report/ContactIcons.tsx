import { Text, Box, Stack, rem } from '@mantine/core';
import { MapPin, IdBadge, GridPattern } from 'tabler-icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> { // erre még nem sikerült rájönni micsoda -- Hoppá, abstract class akar ez lenni
  icon: typeof MapPin;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {  // Ezzel megcsináljuk a contact inform kinézetét (sortörés etc.)
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [ // ide szúrjuk be az adatokat amiket meg szeretnénk hívni
  { title: 'Officer\'s Name', description: 'John Doe', icon: IdBadge },
  { title: 'Officer\'s Grade', description: 'Litenuant', icon: GridPattern },
  { title: 'Current Location', description: 'LS, Mission Row', icon: MapPin}, // GetStreetNameAtCoord, GetStreetNameFromHashKey
];

export function ContactIconsList() { // ez pedig egy array functionnal kigenerálja, ezek szerint a map ezt csinálja
  const items = MOCKDATA.map((item, index) =>  // item: { title: 'Email', description: 'hello@mantine.dev', icon: At }
  <ContactIcon key={index} {...item} /> // key: 1,2,3 stb..
  );
  return <Stack>{items}</Stack>;
}
import { Text, Box, Stack, rem } from '@mantine/core';
import { Sun, Phone, MapPin, At } from 'tabler-icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> { // erre még nem sikerült rájönni micsoda -- Hoppá, abstract class akar ez lenni
  icon: typeof Sun;
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
  { title: 'Email', description: 'hello@mantine.dev', icon: At },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: Phone },
  { title: 'Address', description: '844 Morris Park avenue', icon: MapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: Sun },
];

export function ContactIconsList() { // ez pedig egy array functionnal kigenerálja, ezek szerint a map ezt csinálja
  // A ContactIconProps-ba jönnek az itemek, azért lesz ...item
  // a key pedig azonosítő hogy melyikről van szó?
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
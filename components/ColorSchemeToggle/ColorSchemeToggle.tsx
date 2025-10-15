'use client';

import { ActionIcon, Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Button onClick={
      () => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
      }
    >
      <ActionIcon>
        {colorScheme === 'light' ? <IconMoon/> : <IconSun/>}
      </ActionIcon>
    </Button>
  );
}

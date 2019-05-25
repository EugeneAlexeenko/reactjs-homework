import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button/Button';
import PreviewItem from '../components/PreviewItem/PreviewItem';


storiesOf('Button', module)
  .add('Button', () => (
    <Button
      isActive = 'false'
      text = 'test'
      className = 'button'
      activeClassName = 'button--active'
    >
    </Button>
  ));

storiesOf('PreviewItem', module)
  .add('PreviewItem', () => (
    <PreviewItem
    >
    </PreviewItem>
  ));

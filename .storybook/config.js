import { addDecorator, addParameters, configure } from '@storybook/html';
import { addReadme } from 'storybook-readme/html';

addDecorator(addReadme);

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
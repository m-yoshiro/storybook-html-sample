import { storiesOf, addParameters } from '@storybook/html';
import Button from '../src/button/button.hbs'
import ButtonReadme from '../src/button/README.md'
import ButtonConfig from '../src/button/button.config.js'
import makeStories from '../.storybook/makeStories.js'

const stories = storiesOf('Button', module);

// Storybook-HTML guide step4
// https://storybook.js.org/docs/guides/guide-html/#step-4-write-your-stories
stories
  .add('with text', () => '<button class="">Hello World</button>')
  .add('With emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  })
  .add('With handlebars', () => {
    return Button({label: 'button'});
  });

// Customize.
// Make stories from config file.
makeStories(stories, Button, ButtonReadme, ButtonConfig);
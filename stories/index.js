import { storiesOf } from '@storybook/html';
import Button from '../src/button/button.hbs'
import ButtonReadme from '../src/button/README.md'
import { configureReadme, addFooter, addHeader } from 'storybook-readme';

storiesOf('Button', module)
  .add('with text', () => '<button class="">Hello World</button>')
  .add('With emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  })
  .add('With handlebars', () => {
    return Button({text: 'button'});
  }, {
    readme: {
      content: ButtonReadme,
      sidebar: ButtonReadme,
    }
  })
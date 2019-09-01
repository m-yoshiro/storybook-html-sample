import { storiesOf, addParameters } from '@storybook/html';
import Button from '../src/button/button.hbs'
import ButtonReadme from '../src/button/README.md'
import ButtonConfig from '../src/button/button.config.js'
import makeStories from '../.storybook/makeStories.js'

const stories = storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    }
  })

stories
  .add('with text', () => '<button class="">Hello World</button>')
  .add('With emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  })
  .add('With handlebars', () => {
    return Button({label: 'button'});
  },{
    readme: {
      sidebar: `
\`\`\`html
${Button({label: 'button'})}
\`\`\`
`,
    }

  });

makeStories(stories, Button, ButtonConfig)
import marked from "marked";

const insertSampleCode = (md, component) => {
  return marked(md).replace('<!-- EXAMPLE-CODE -->', `
\`\`\`html
${component}
\`\`\`
  `);
}

export default insertSampleCode;
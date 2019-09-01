const makeStories = (baseStory, component, configs) => {
  configs.forEach(config => {
    baseStory.add(
      `${config.name}`,
      () => component(config.context),
      {
        readme: { sidebar: `
\`\`\`html
${component(config.context)}
\`\`\`
        `}
      }
    )
  })
}

export default makeStories;
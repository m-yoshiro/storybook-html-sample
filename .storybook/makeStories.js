import insertSampleCode from './insertSampleCode.js'

const makeStories = (baseStory, component, mdTemplate, configs) => {
  configs.forEach(config => {
    baseStory.add(
      `${config.name}`,
      () => component(config.context),
      {
        readme: { sidebar: insertSampleCode(mdTemplate, `${component(config.context)}`)}
      }
    )
  })
}

export default makeStories;
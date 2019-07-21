import { addParameters, configure } from '@storybook/react'

addParameters({
  options: {
    name: 'Lookplex',
    url: 'https://github.com/gautamr2/lpx-react',
    isFullscreen: false,
    showPanel: true
    // more configuration here
  }
})

function loadStories () {
  require('../stories/index.js')
}

configure(loadStories, module)

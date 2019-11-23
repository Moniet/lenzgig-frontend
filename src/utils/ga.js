import ReactGA from 'react-ga'

const GA = {
  click: function({ category = '', action = '', label = '' }) {
    ReactGA.event({
      category,
      action,
      label
    })
  },
  headerLogo: function() {
    const data = {
      category: 'Logo',
      action: 'Logo Click',
      label: 'Header Logo Clicked'
    }
    this.click(data)
  }
}

export { GA }

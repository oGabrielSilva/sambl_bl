import languages from './Strings'

const Constants = {
  appName: 'Sambl',
  languages: Object.keys(languages),
  lang: languages.pt,
}

export const strings = Constants.lang

export default Constants

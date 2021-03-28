/* eslint-disable camelcase */
interface IAppConfig {
  site_to_translate: string;
}

const appConfig = {
  site_to_translate: process.env.REACT_APP_SITE_TO_TRANSLATE,
} as IAppConfig;

export default appConfig;

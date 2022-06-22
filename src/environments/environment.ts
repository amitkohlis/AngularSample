// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  APIUrl: 'http//localhost:8080/api/',
  envName: 'dev',
  clientId: 'a1318ddb-83c3-4f10-a2d4-1c561e5289fb', // Test environment
  authority: 'https://login.microsoftonline.com/dcb1eb55-51ee-493c-ad1f-d6fa8e67d47d', // Prod environment. Uncomment to use.
  redirectUri: '/',
  postLogoutRedirectUri: '/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

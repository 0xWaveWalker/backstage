## API Report File for "@backstage/plugin-analytics-module-newrelic-browser"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AnalyticsApi } from '@backstage/core-plugin-api';
import { AnalyticsEvent } from '@backstage/core-plugin-api';
import { Config } from '@backstage/config';
import { IdentityApi } from '@backstage/core-plugin-api';

// @public
export class NewRelicBrowser implements AnalyticsApi {
  // (undocumented)
  captureEvent(event: AnalyticsEvent): void;
  // (undocumented)
  static fromConfig(
    config: Config,
    options: {
      identityApi?: IdentityApi;
      userIdTransform?:
        | 'sha-256'
        | ((userEntityRef: string) => Promise<string>);
    },
  ): NewRelicBrowser;
}

// (No @packageDocumentation comment for this package)
```
import { InjectionToken } from '@angular/core';

interface AppConfig {
    apiUrl: string;
    appName: string;
    version: string;
}
export const config: AppConfig = {
    apiUrl: 'xxx',
    appName: 'my-app',
    version: '1.0.0',
};
export const APP_CONFIG = new InjectionToken<AppConfig>('app-config');

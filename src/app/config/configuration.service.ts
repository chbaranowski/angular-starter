import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Class for the application configuration.
 * 
 * The JSON configuration for the class can be found in the directory '../../configuration'.
 * Default configuration is config.json the properties can be override in the environment specific 
 * JSON configuration files config-${env}.json
 */
@Injectable()
export class Configuration {

  /** The base URL for the backend calls (default is empty). */
  baseUrl = '';

  /** Some boolean example config property (default is false). */
  enableResources = false;

  /** Some number config example property (default is 42). */
  someNumber = 42;

  constructor(
    /** The configuration profile defined by environment variable with the name CONFIG_PROFILE. */
    readonly profile: string
  ) { }

}

/**
 * Factory method for constructing the configuration. The config ist provided as angular service 
 * based on the environment and the JSON config.
 */
export function createConfiguration(): Configuration {
  let config: Configuration;
  config = Object.assign(new Configuration(environment.name), environment);
  return config;
};

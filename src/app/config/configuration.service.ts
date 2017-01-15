import { Injectable } from '@angular/core';

/**
 * Class for the application configuration.
 * 
 * The JSON configuration for the class can be found in the directory '../../configuration'.
 * Default configuration is config.json the properties can be override in the enviorment specific 
 * JSON configuration files config-${env}.json
 */
@Injectable()
export class Configuration {
  
  /** The base URL for the backend calls (default is empty). */
  baseUrl = ""

  /** Some boolean example config property (default is false). */
  enableResources = false

  /** Some number config example property (default is 42). */
  someNumber = 42

  constructor(
    /** The configuration profile defined by enviorment variable with the name CONFIG_PROFILE. */
    readonly profile: string
  ) { }

}

/**
 * Factory method for constructing the configuration. The config ist provided as angular service 
 * based on the enviorment and the JSON config.
 */
export function createConfiguration(): any {
  return (): Configuration => {
    let config: Configuration;
    let profile = process.env.CONFIG_PROFILE;
    if (profile) {
      config = Object.assign(
        new Configuration(profile),
        require('./../../../configuration/config.json'),
        require('./../../../configuration/config-' + process.env.CONFIG_PROFILE + '.json')
      );
    } else {
      config = Object.assign(
        new Configuration(profile),
        require('./../../../configuration/config.json'));
    }
    return config;
  };
};
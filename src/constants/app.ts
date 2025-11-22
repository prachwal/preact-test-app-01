/**
 * Application constants
 *
 * This file contains application-wide constants that are injected at build time
 * from package.json and environment variables.
 */

// Global variables injected by Vite during build
declare global {
  const __APP_NAME__: string;
  const __APP_VERSION__: string;
  const __BUILD_TIME__: string;
  const __BASE_URL__: string;
}

/**
 * Application name from package.json
 */
export const APP_NAME = typeof __APP_NAME__ !== 'undefined' ? __APP_NAME__ : 'preact-test-app-01';

/**
 * Application version from package.json
 */
export const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.0';

/**
 * Build timestamp
 */
export const BUILD_TIME =
  typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : new Date().toISOString();

/**
 * Base URL configuration
 */
export const BASE_URL = typeof __BASE_URL__ !== 'undefined' ? __BASE_URL__ : '/';

/**
 * Formatted application info for display
 */
export const APP_INFO = {
  name: APP_NAME,
  version: APP_VERSION,
  buildTime: BUILD_TIME,
  baseUrl: BASE_URL,
};

/**
 * Application display name with version
 */
export const APP_DISPLAY_NAME = `${APP_NAME} v${APP_VERSION}`;

/**
 * Copyright year based on build time
 */
export const COPYRIGHT_YEAR = new Date(BUILD_TIME).getFullYear();

/**
 * Full copyright notice
 */
export const COPYRIGHT_NOTICE = `© ${COPYRIGHT_YEAR} ${APP_NAME}. All rights reserved.`;

/**
 * Complete footer text with version
 */
export const FOOTER_TEXT = `${APP_NAME} v${APP_VERSION} - Built on ${new Date(BUILD_TIME).toLocaleDateString()}`;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong',
  TRY_AGAIN: 'Please refresh the page or try again later.',
} as const;

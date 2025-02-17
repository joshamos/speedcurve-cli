/** @module tests */
import { api } from "./api"
import { TestFilters } from "./api"
import TestResult from "./model/test-result"
import Url from "./model/url"

/**
 * Retrieve synthetic test results
 * @example
 * const tests = require('speedcurve').tests
 */

/**
 * Get the details of an individual test
 */
export function get(key: string, testId: string): Promise<TestResult> {
  return api.test(key, testId).then(TestResult.fromApiResponse)
}

/**
 * Get synthetic test results for a SpeedCurve URL
 */
export function getForUrl(key: string, urlId: number, days = 1, filters: TestFilters = {}): Promise<Url> {
  return api.tests(key, urlId, days, filters).then(Url.fromApiResponse)
}

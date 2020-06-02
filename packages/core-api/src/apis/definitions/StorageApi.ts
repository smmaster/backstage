/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApiRef } from '../ApiRef';
import { Observable } from '@backstage/core-api';

export type StorageApi = {
  /**
   * Get persistent data.
   *
   * @param {String} key Unique key associated with the data.
   * @return {Object} data The data that should is stored.
   */
  get<T>(key: string): T | undefined;

  /**
   * Remove persistent data.
   *
   * @param {String} key Unique key associated with the data.
   */
  remove(key: string): Promise<void>;

  /**
   * Save persistant data.
   *
   * @param {String} key Unique key associated with the data.
   * @return
   */
  save(key: string, data: any): Promise<void>;

  /**
   *
   * @param {String} key Unique key associated with the data
   */
  observe$<T>(key: string): Observable<T>;
};

export const storageApiRef = createApiRef<StorageApi>({
  id: 'core.storage',
  description: 'Provides the ability to store data which is unique to the user',
});

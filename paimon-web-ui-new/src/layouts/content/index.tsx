/* Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */

import NavBar from './components/topbar'
import styles from './index.module.scss'

export default defineComponent({
  name: 'ContentPage',
  setup() {
  },
  render() {
    return (
      <div class={styles['container']}>
        <n-layout>
          <n-layout-header style="height: 64px;" bordered>
            <NavBar></NavBar>
          </n-layout-header>
          <n-layout-content content-style="height: calc(100vh - 64px);">
            <router-view />
          </n-layout-content>
        </n-layout>
      </div>
    )
  }
})

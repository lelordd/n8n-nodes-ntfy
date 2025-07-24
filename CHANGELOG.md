# Changelog

All notable changes to this project will be documented in this file.

**NOTE:** If any breaking changes are listed at the beginning of a release, ensure to check out the notes listed under the commits.

## [1.2.0](https://github.com/JYLN/n8n-nodes-ntfy/compare/1.1.1..v1.2.0) - 2025-06-14

### 💥 Breaking Changes

- :sparkles: update emoji/tag selection UI - ([d99fce1](https://github.com/JYLN/n8n-nodes-ntfy/commit/d99fce1a879ca265c8e2e3e4af0bb076972925c9))
  - **Notes:** Emoji/tag selection UI and data structure have changed; existing workflows may require updates


### ✨ Features

- *(field)* :sparkles: add Markdown field - ([65bd98a](https://github.com/JYLN/n8n-nodes-ntfy/commit/65bd98a2cb80b654b3dd6cb672bd63c61fbc66f1))
- *(request)* :sparkles: add Markdown field to helper function for building request to ntfy - ([015334d](https://github.com/JYLN/n8n-nodes-ntfy/commit/015334d9f80e0491b755f82e267e7233491d6112))

### 🐛 Bug Fixes

- *(build)* :bug: correct build script - ([02e866c](https://github.com/JYLN/n8n-nodes-ntfy/commit/02e866c078295d377652061d654963922cec20e7))
- *(field)* :bug: action buttons http request - ([11db35d](https://github.com/JYLN/n8n-nodes-ntfy/commit/11db35d85ef61de6bc18ba81c887b6dbfd0b1524))
- *(field)* :bug: refactor action button field after lint fix script broke it - ([9d38838](https://github.com/JYLN/n8n-nodes-ntfy/commit/9d38838dd05f77d489695165043b26f0fc2dcdb7))

### ♻️ Refactor

- :label: update request type to clean syntax - ([7ad7da3](https://github.com/JYLN/n8n-nodes-ntfy/commit/7ad7da36feee665e6eec138624802a1a8638377a))

### ⚙️ Miscellaneous Tasks

- *(license)* :page_facing_up: update copyright within license - ([25097f9](https://github.com/JYLN/n8n-nodes-ntfy/commit/25097f9f754037a8da98da4e19482ff819d53b66))
- *(node)* :wrench: refactor node implementation due to changes in dependencies, types, and common practices - ([69b0e29](https://github.com/JYLN/n8n-nodes-ntfy/commit/69b0e2944da35c39c999754301d4530e30e67c16))
- *(node)* :card_file_box: update categories in node metadata - ([2ad1c5c](https://github.com/JYLN/n8n-nodes-ntfy/commit/2ad1c5c8100015a833e6c2177d0044bcb693baf8))
- *(release)* :bookmark: bump version to 1.2.0 - ([2b9aaf9](https://github.com/JYLN/n8n-nodes-ntfy/commit/2b9aaf9d6f292038d6a4e662a2d5c2beb2ffb699))
- :wrench: add git-cliff config for automated changelog generation - ([9b9c100](https://github.com/JYLN/n8n-nodes-ntfy/commit/9b9c100e0ec0d0b096731fc2adbc28b58c8667bc))
- :wrench: revert workflow back to npm - ([7389368](https://github.com/JYLN/n8n-nodes-ntfy/commit/7389368f74ec23a98a3c7924c1c4aa9aa63b8e54))
- General updates ([#16](https://github.com/jyln/n8n-nodes-ntfy/issues/16)) - ([dea3b36](https://github.com/JYLN/n8n-nodes-ntfy/commit/dea3b366e8746873982dbc8154ba4b529c4ec9fb))


## [1.1.1](https://github.com/JYLN/n8n-nodes-ntfy/compare/1.1.0..1.1.1) - 2024-10-13

### ✨ Features

- :sparkles: add `icon` field to requestData in execute function - ([5b4e07a](https://github.com/JYLN/n8n-nodes-ntfy/commit/5b4e07a887162956b860436ddaef7de6f9a437ca))
- :sparkles: add `icon` field - ([5177b59](https://github.com/JYLN/n8n-nodes-ntfy/commit/5177b5921af6750b6fce19811f09f0fde87b15f4))

### 💼 Other

- Merge pull request #14 from JYLN/refactor/publish-2

ci: :wrench: more more updates to publish workflow - ([70220f1](https://github.com/JYLN/n8n-nodes-ntfy/commit/70220f18e84c53dc7eeb39aaf4119e5ebac462b2))
- Merge pull request #13 from JYLN/refactor/publish-pnpm

ci: 🔧 even more updates to publish workflow - ([dfb1057](https://github.com/JYLN/n8n-nodes-ntfy/commit/dfb1057889428ea07a57cd9824ec053ae3e42789))
- Merge pull request #11 from JYLN/refactor/publish-1

ci: :wrench: remove pnpm version specification in publish workflow - ([382234c](https://github.com/JYLN/n8n-nodes-ntfy/commit/382234c04c6a4c66877cf4a491367c140b3ce1c2))
- Merge pull request #10 from JYLN/refactor/publish-1

ci: refactor publish workflow for pnpm - ([9adca87](https://github.com/JYLN/n8n-nodes-ntfy/commit/9adca8778339a2fdc4105f2b9092600f04b987f0))
- Merge pull request #8 from JYLN/feat/v1.1.1

v1.1.1 - ([ec393cb](https://github.com/JYLN/n8n-nodes-ntfy/commit/ec393cbda4fd39b20275c5193be7d81045157ae1))
- Merge pull request #9 from JYLN/docs/v1.1.1

docs(wiki): :camera_flash: add screenshots for repository wiki - ([e093a2f](https://github.com/JYLN/n8n-nodes-ntfy/commit/e093a2f6e6048d260a3b8e62e855a9f4b7227b10))
- Merge pull request #6 from JYLN/repo/issue-templates

chore(docs): spell check - ([0cf23d3](https://github.com/JYLN/n8n-nodes-ntfy/commit/0cf23d3d7ecc65b1d476511b00f5c6ed00478008))
- Merge pull request #5 from JYLN/repo/issue-templates

docs: :memo: add feature issue form template - ([27bba9a](https://github.com/JYLN/n8n-nodes-ntfy/commit/27bba9adc124303144ca0983921f6e5f845dea0c))

### 🐛 Bug Fixes

- *(creds)* :bug: add icon property to credentials - ([164737d](https://github.com/JYLN/n8n-nodes-ntfy/commit/164737dc6888e369a92848da89958fb5805cad2b))

### 📝 Documentation

- *(wiki)* :camera_flash: add screenshots for repository wiki - ([5bb9bcc](https://github.com/JYLN/n8n-nodes-ntfy/commit/5bb9bcc8fae38769b7102befaa0215e305386e5d))
- :memo: add feature issue form template - ([20b8d1c](https://github.com/JYLN/n8n-nodes-ntfy/commit/20b8d1c88895b580547ad9c785e783b99c1aea72))

### ⚙️ Miscellaneous Tasks

- *(docs)* :memo: update changelog - ([344968e](https://github.com/JYLN/n8n-nodes-ntfy/commit/344968e0d910594f9c85646b5abdf4a8d7b4b674))
- *(docs)* Spell check - ([0b50e3c](https://github.com/JYLN/n8n-nodes-ntfy/commit/0b50e3c2fba96ade316edce5141029cd66f4a5a6))
- *(release)* :bookmark: bump version to 1.1.1 - ([55046c1](https://github.com/JYLN/n8n-nodes-ntfy/commit/55046c18a2478550fd0601e73e138fed2cbf30cf))
- :wrench: more more updates to publish workflow - ([d890fb1](https://github.com/JYLN/n8n-nodes-ntfy/commit/d890fb1aef96f53092272f87ce97ca8ae0e7c949))
- :wrench: even more updates to publish workflow - ([c2c423a](https://github.com/JYLN/n8n-nodes-ntfy/commit/c2c423a706d8294b76c8d4fefe9cdf9c010c70ad))
- :wrench: more updates to publish workflow due to pnpm swap - ([4424d7e](https://github.com/JYLN/n8n-nodes-ntfy/commit/4424d7e16d7eddd3d5baa6e4ce2ce3a51dfe9381))
- :wrench: remove pnpm version specification in publish workflow - ([66e1721](https://github.com/JYLN/n8n-nodes-ntfy/commit/66e17212db922149ffadc5d65e51d0b0655d2fba))
- Refactor publish workflow for pnpm - ([7fc0ea2](https://github.com/JYLN/n8n-nodes-ntfy/commit/7fc0ea2c68c1962fd49b32ef15d8edc393814e41))
- :recycle: clean up - ([a0286c9](https://github.com/JYLN/n8n-nodes-ntfy/commit/a0286c979bca012f555207784d42665efd1279a9))
- :package: replace npm with pnpm - ([7b6ba33](https://github.com/JYLN/n8n-nodes-ntfy/commit/7b6ba338b5e0c6dda239816ef0ec08aed0890aa5))
- Config for issue templates - ([5714c2d](https://github.com/JYLN/n8n-nodes-ntfy/commit/5714c2d493c37559093303b59f19c09c341c19c3))


## [1.1.0](https://github.com/JYLN/n8n-nodes-ntfy/compare/1.0.1..1.1.0) - 2024-08-25

### 💼 Other

- Merge pull request #3 from JYLN/feat/v1.1.0 - ([6680dec](https://github.com/JYLN/n8n-nodes-ntfy/commit/6680deca9e502eae2e0552ade7e461bc5e2ff57d))
- :scroll: Add screenshots for new fields - ([2443ccc](https://github.com/JYLN/n8n-nodes-ntfy/commit/2443cccb823b3d2e939f36816f5ac3ca913e15b6))
- :package: Update deps based on starter template - ([a928f9b](https://github.com/JYLN/n8n-nodes-ntfy/commit/a928f9bcbe6746ad3d95944022ca28ea3dfafd1b))
- :zap: Refactor generic functions for supporting new fields - ([6a0a4ef](https://github.com/JYLN/n8n-nodes-ntfy/commit/6a0a4ef80da28b70fbe245878f8afc7ee349ae53))
- :sparkles: Create json and binary locator fields - ([6a5126d](https://github.com/JYLN/n8n-nodes-ntfy/commit/6a5126d191ccc483b36dea7f41f2711d9d0ba699))
- :zap: Refactor project structure and add field for notification construction - ([c985dc6](https://github.com/JYLN/n8n-nodes-ntfy/commit/c985dc6f55df817a3cae2e4d6a47f172fa104651))
- :package: Update deps and package version - ([5e641f1](https://github.com/JYLN/n8n-nodes-ntfy/commit/5e641f112e938dcb24da878524b3dc4624950d9e))
- :package: Package lock version bump - ([8682450](https://github.com/JYLN/n8n-nodes-ntfy/commit/86824507c68611b93a716aabe3c41ec32381c63c))


## [1.0.1] - 2024-05-21

### 💼 Other

- :package: Version bump due to previous unpublish - ([68f271a](https://github.com/JYLN/n8n-nodes-ntfy/commit/68f271ac2058b7d8fcfd07351dfbc5a588c28ed7))
- :package: Update package.json and node documentation - ([30a09b0](https://github.com/JYLN/n8n-nodes-ntfy/commit/30a09b0f449915ad8b18eaf0c9ecf70ff7c947ce))
- :package: Add github workflow - ([2e92470](https://github.com/JYLN/n8n-nodes-ntfy/commit/2e92470b245d751289667b712d193b02efa3c3f7))
- :package: Update package.json - ([f9be856](https://github.com/JYLN/n8n-nodes-ntfy/commit/f9be85636dfcabd27d998986379968a110703bb1))
- :writing_hand: Refactor order of additional fields, add description to scheduled delivery field - ([c26f2bd](https://github.com/JYLN/n8n-nodes-ntfy/commit/c26f2bd45824c994c5ff4b323c607ea75327148b))
- :scroll: Update operations section of README - ([7903716](https://github.com/JYLN/n8n-nodes-ntfy/commit/7903716372309c4ff5ae4190b0668fca277b48a1))
- :scroll: Fix broken ToC link - ([c324622](https://github.com/JYLN/n8n-nodes-ntfy/commit/c324622a4ab1de6072159e3338c7e68362fb20f0))
- :scroll: Upload screenshots for credentials wiki page - ([ac109b3](https://github.com/JYLN/n8n-nodes-ntfy/commit/ac109b39a8064efbe26f4225888fa885897661b1))
- :scroll: Update README and upload screenshots for usage wiki page - ([b0006c0](https://github.com/JYLN/n8n-nodes-ntfy/commit/b0006c032a0d2e85db75238366df924d5cd5e0cc))
- :writing_hand: Update .gitignore - ([4f07a3e](https://github.com/JYLN/n8n-nodes-ntfy/commit/4f07a3eed4e4e32655e746be651029650a4d5733))
- :writing_hand: Implement request call in execute function - ([af866b2](https://github.com/JYLN/n8n-nodes-ntfy/commit/af866b25158cafc9f4ba78f92307830a74797aa4))
- :scroll: Update README - ([f64ce47](https://github.com/JYLN/n8n-nodes-ntfy/commit/f64ce476462305d8a08103f42cdc959258a07291))
- :package: Update version - ([c0f3dce](https://github.com/JYLN/n8n-nodes-ntfy/commit/c0f3dcee873c2f464710a3f8d6d54d869cd8175c))
- :writing_hand: Refactor attachment field to allow for optional filename change - ([8153533](https://github.com/JYLN/n8n-nodes-ntfy/commit/8153533d5bbc70b18e27046870a1ce7956d90d8a))
- :writing_hand: Action buttons field - ([0b4e3b6](https://github.com/JYLN/n8n-nodes-ntfy/commit/0b4e3b63a7d5861372a00d3ca0838cc06f3fc555))
- :writing_hand: Add reactive subtitle to node - ([863c049](https://github.com/JYLN/n8n-nodes-ntfy/commit/863c0499809cee252c78c26ce4050f5772913e78))
- :writing_hand: Scheduled delivery field - ([519b5d0](https://github.com/JYLN/n8n-nodes-ntfy/commit/519b5d0226f1d97f33575f694f33340d8ff13588))
- :writing_hand: Refactor tags field in body constructor field due to errors when no emojis/tags present - ([b795239](https://github.com/JYLN/n8n-nodes-ntfy/commit/b79523973c2aa16e8ddf0c796125aeead5af103e))
- :writing_hand: Attachment field - ([21f0fde](https://github.com/JYLN/n8n-nodes-ntfy/commit/21f0fde6da76d5654fdbb61537574be4640d2972))
- :writing_hand: Refactor body and api request constructor functions - ([3471565](https://github.com/JYLN/n8n-nodes-ntfy/commit/3471565a1759ab71f57ba44e9a4e1674467a0d6c))
- :writing_hand: Refactor types - ([9a5b85e](https://github.com/JYLN/n8n-nodes-ntfy/commit/9a5b85e783d1426fea82633e2602a3f4df8077e2))
- :writing_hand: Initial NTFY request function - ([10213d1](https://github.com/JYLN/n8n-nodes-ntfy/commit/10213d1eff3927e056bb4c55d44ff5527f530544))
- :writing_hand: Improve error handling in node execute method - ([177ce8e](https://github.com/JYLN/n8n-nodes-ntfy/commit/177ce8e1166c11c753240475b83e25bcc7a1bb89))
- :writing_hand: Refactor main field props and add todos - ([125900e](https://github.com/JYLN/n8n-nodes-ntfy/commit/125900e894fa4e321a8ba86b885f9ff2de9f6a2c))
- :writing_hand: Refactor body constructor function for additional and missing non-required options - ([86270cf](https://github.com/JYLN/n8n-nodes-ntfy/commit/86270cf7318faa4a31088a3afd8722d7818be00c))
- :writing_hand: Click action field - ([cd1c1c5](https://github.com/JYLN/n8n-nodes-ntfy/commit/cd1c1c56a198afe20789c181a93a4e2b5381c5a4))
- :writing_hand: Initial additional options field - ([d84de4c](https://github.com/JYLN/n8n-nodes-ntfy/commit/d84de4c2b7f0b4e47e787ac6d34b269263242544))
- :writing_hand: Initial execute function and body constructor function - ([fc8d5c6](https://github.com/JYLN/n8n-nodes-ntfy/commit/fc8d5c68227a9117fc3a48a4e0342556c4c5fdeb))
- :writing_hand: Implement credentials field - ([5f23c5b](https://github.com/JYLN/n8n-nodes-ntfy/commit/5f23c5bcf7677980242d5be9270600c9addd73bd))
- :writing_hand: Message field - ([ed808b5](https://github.com/JYLN/n8n-nodes-ntfy/commit/ed808b58c4587d0cd39bc5b425ac9741cf0d46ea))
- :writing_hand: Emojis/tags field - ([e3a9ceb](https://github.com/JYLN/n8n-nodes-ntfy/commit/e3a9cebcc31a0b4e9d0529dd7bced1f33dd745b8))
- :writing_hand: Priority field - ([cc58fb3](https://github.com/JYLN/n8n-nodes-ntfy/commit/cc58fb35b6e30aba3ce9d227667f1adc4875a16b))
- :writing_hand: Refactor field props order - ([2eb24d9](https://github.com/JYLN/n8n-nodes-ntfy/commit/2eb24d960e79614a3709223176a4b66bf0b43930))
- :writing_hand: Title field - ([7b0d9fa](https://github.com/JYLN/n8n-nodes-ntfy/commit/7b0d9fa513ed9e5f5bd81bebe75c12dc43248c06))
- :writing_hand: Topic field - ([4b9650b](https://github.com/JYLN/n8n-nodes-ntfy/commit/4b9650b02ed6d89e0923350892c9ec4a122a93b4))
- :writing_hand: Server url fields - ([e92fd76](https://github.com/JYLN/n8n-nodes-ntfy/commit/e92fd7607dd43ebbfa366429d8f26efae642ed0c))
- :writing_hand: Initial base description configuration - ([3496024](https://github.com/JYLN/n8n-nodes-ntfy/commit/34960246f7b82748187f7ab92e90669200566cf0))
- :writing_hand: Initial codex configuration - ([3ecd956](https://github.com/JYLN/n8n-nodes-ntfy/commit/3ecd956fa2308e16c0d08560b912909a891634e5))
- :package: Install deps - ([58ec7af](https://github.com/JYLN/n8n-nodes-ntfy/commit/58ec7af503bdfbabad276aeb3cf56a4e9888ddf8))
- Remove default example nodes and credentials - ([688c96a](https://github.com/JYLN/n8n-nodes-ntfy/commit/688c96a2d9a263062162382774a6634767aa184a))
- :package: Refactor package.json - ([dfa1e85](https://github.com/JYLN/n8n-nodes-ntfy/commit/dfa1e8529bca6f97eca54ccf9a33736e4f8d799c))
- Initial commit - ([7adbc9e](https://github.com/JYLN/n8n-nodes-ntfy/commit/7adbc9e29c5a443b9450844e600d0bab3c5b9813))


<!-- generated by git-cliff -->

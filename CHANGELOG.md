## [1.0.0-alpha.14](https://github.com/flex-development/docast/compare/1.0.0-alpha.13...1.0.0-alpha.14) (2024-02-15)

### ⚠ BREAKING CHANGES

- **mixins:** remove `Tag#prefix`
- **nodes:** camelcase node types
- **spec:** rewrite specification

### :package: Build

- [[`6367ddb`](https://github.com/flex-development/docast/commit/6367ddb55ec66138ea6c79737df6344f3f494cce)] **deps-dev:** Bump @arethetypeswrong/cli from 0.13.6 to 0.13.8 ([#334](https://github.com/flex-development/docast/issues/334))
- [[`569493c`](https://github.com/flex-development/docast/commit/569493c17dddb27b89605e8d604421e35120ed2e)] **deps-dev:** Bump @arethetypeswrong/cli from 0.13.8 to 0.13.9 ([#341](https://github.com/flex-development/docast/issues/341))
- [[`41f3740`](https://github.com/flex-development/docast/commit/41f37407e04b2fd4a58d899397df98045f05f9fb)] **deps-dev:** Bump @arethetypeswrong/cli from 0.13.9 to 0.13.10 ([#344](https://github.com/flex-development/docast/issues/344))
- [[`8678a83`](https://github.com/flex-development/docast/commit/8678a83db978c1fc53c0ac889431fcdd2286569a)] **deps-dev:** Bump @arethetypeswrong/cli from 0.7.0 to 0.7.1 ([#242](https://github.com/flex-development/docast/issues/242))
- [[`2aa4dcb`](https://github.com/flex-development/docast/commit/2aa4dcb7da8757198170f58c1a069fb4c57c7fa2)] **deps-dev:** Bump @flex-development/decorator-regex from 1.0.0 to 2.0.0 ([#238](https://github.com/flex-development/docast/issues/238))
- [[`48c06e5`](https://github.com/flex-development/docast/commit/48c06e5af03f64ecafe7b0aa1fb8abcca94b5104)] **deps-dev:** Bump @flex-development/mkbuild from 1.0.0-alpha.20 to 1.0.0-alpha.21 ([#254](https://github.com/flex-development/docast/issues/254))
- [[`303b262`](https://github.com/flex-development/docast/commit/303b262a9e410a2952ca7a032ea1b7e3444051b9)] **deps-dev:** Bump @flex-development/mkbuild from 1.0.0-alpha.21 to 1.0.0-alpha.23 ([#288](https://github.com/flex-development/docast/issues/288))
- [[`70ed153`](https://github.com/flex-development/docast/commit/70ed1534dc73c95fd3043f9bc0a050f1639a12ad)] **deps-dev:** Bump @flex-development/mlly from 1.0.0-alpha.15 to 1.0.0-alpha.16 ([#243](https://github.com/flex-development/docast/issues/243))
- [[`fb6899c`](https://github.com/flex-development/docast/commit/fb6899cd68fd06788b2defa7d03686adc4d934b1)] **deps-dev:** Bump @flex-development/mlly from 1.0.0-alpha.16 to 1.0.0-alpha.17 ([#256](https://github.com/flex-development/docast/issues/256))
- [[`0915655`](https://github.com/flex-development/docast/commit/09156552cffd44dcd80c236d59364617e126c76a)] **deps-dev:** Bump @flex-development/pathe from 1.0.3 to 2.0.0 ([#234](https://github.com/flex-development/docast/issues/234))
- [[`49a3043`](https://github.com/flex-development/docast/commit/49a30433732f7ee87dd1f98bc0c15c567df0c546)] **deps-dev:** Bump @flex-development/tsconfig-utils from 1.1.2 to 2.0.0 ([#250](https://github.com/flex-development/docast/issues/250))
- [[`34b141f`](https://github.com/flex-development/docast/commit/34b141f5d588fad3ef247f71fa6064a87b07d8ea)] **deps-dev:** Bump @flex-development/tsconfig-utils from 2.0.0 to 2.0.1 ([#255](https://github.com/flex-development/docast/issues/255))
- [[`24db841`](https://github.com/flex-development/docast/commit/24db84121ccd464f73e31942fdbc209d3d7a2ec3)] **deps-dev:** Bump @flex-development/tsconfig-utils from 2.0.1 to 2.0.2 ([#269](https://github.com/flex-development/docast/issues/269))
- [[`547ad42`](https://github.com/flex-development/docast/commit/547ad423bc019645bc574062abf521dce92c1328)] **deps-dev:** bump @types/node from 20.11.14 to 20.11.19
- [[`c472e81`](https://github.com/flex-development/docast/commit/c472e813b8a878541f0c4fca8f383120b8dabed9)] **deps-dev:** Bump chai from 4.3.7 to 4.3.8 ([#293](https://github.com/flex-development/docast/issues/293))
- [[`6669e10`](https://github.com/flex-development/docast/commit/6669e10ca7e4425b3ed4ad7003507fd112bffdb8)] **deps-dev:** Bump cspell from 6.31.2 to 6.31.3 ([#253](https://github.com/flex-development/docast/issues/253))
- [[`0299dfa`](https://github.com/flex-development/docast/commit/0299dfa4356055d21214bf5297074b9e382a00fa)] **deps-dev:** Bump esbuild from 0.18.17 to 0.18.19 ([#246](https://github.com/flex-development/docast/issues/246))
- [[`1a81675`](https://github.com/flex-development/docast/commit/1a81675e2414185ed377356df6b97ba1a9643d37)] **deps-dev:** Bump esbuild from 0.18.19 to 0.18.20 ([#252](https://github.com/flex-development/docast/issues/252))
- [[`f3fa9cd`](https://github.com/flex-development/docast/commit/f3fa9cd839a512cfedb42b5e9f84d5c2625702c5)] **deps-dev:** Bump esbuild from 0.18.20 to 0.19.0 ([#257](https://github.com/flex-development/docast/issues/257))
- [[`40530da`](https://github.com/flex-development/docast/commit/40530daf492273c01b52ea8a681592134c303fb4)] **deps-dev:** Bump esbuild from 0.19.0 to 0.19.2 ([#270](https://github.com/flex-development/docast/issues/270))
- [[`1d1562c`](https://github.com/flex-development/docast/commit/1d1562c84752da6f5b9954b7840489b8c11316f9)] **deps-dev:** Bump eslint from 8.45.0 to 8.46.0 ([#231](https://github.com/flex-development/docast/issues/231))
- [[`d59abcd`](https://github.com/flex-development/docast/commit/d59abcda11d5c9246b69c6d747840c297cb12fb1)] **deps-dev:** Bump eslint from 8.46.0 to 8.47.0 ([#264](https://github.com/flex-development/docast/issues/264))
- [[`0f79ba8`](https://github.com/flex-development/docast/commit/0f79ba8dc13bcf75d5d7c8db07268eb420caf612)] **deps-dev:** Bump eslint-config-prettier from 8.10.0 to 9.0.0 ([#247](https://github.com/flex-development/docast/issues/247))
- [[`fed6401`](https://github.com/flex-development/docast/commit/fed64013120df9536611c691062acbc3a3d8dc37)] **deps-dev:** Bump eslint-config-prettier from 8.8.0 to 8.9.0 ([#229](https://github.com/flex-development/docast/issues/229))
- [[`d8d8d9c`](https://github.com/flex-development/docast/commit/d8d8d9c27ef881d62fbced8d8cec674b05a2616e)] **deps-dev:** Bump eslint-config-prettier from 8.9.0 to 8.10.0 ([#241](https://github.com/flex-development/docast/issues/241))
- [[`9147303`](https://github.com/flex-development/docast/commit/9147303cbb5f616099f37544ac23912df5f81029)] **deps-dev:** Bump eslint-import-resolver-typescript from 3.5.5 to 3.6.0 ([#259](https://github.com/flex-development/docast/issues/259))
- [[`ea8ba0a`](https://github.com/flex-development/docast/commit/ea8ba0ae8aefefacad5d6cf64c7a54dfdb301a9a)] **deps-dev:** Bump eslint-plugin-import from 2.27.5 to 2.28.0 ([#230](https://github.com/flex-development/docast/issues/230))
- [[`57c4d16`](https://github.com/flex-development/docast/commit/57c4d1607dd673e676eae31a060c59e8a413ffc5)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.0.4 to 48.0.5 ([#324](https://github.com/flex-development/docast/issues/324))
- [[`419af74`](https://github.com/flex-development/docast/commit/419af74c059940bf9b468a2d3df0fbc5e971621d)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.0.5 to 48.0.6 ([#327](https://github.com/flex-development/docast/issues/327))
- [[`53b0760`](https://github.com/flex-development/docast/commit/53b07603fde95c13979b45971cb75c3b3e4e59d9)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.0.6 to 48.1.0 ([#342](https://github.com/flex-development/docast/issues/342))
- [[`6b9afcf`](https://github.com/flex-development/docast/commit/6b9afcf0763ff99c4c69d619a49b461eb62bec2a)] **deps-dev:** Bump eslint-plugin-markdown from 3.0.0 to 3.0.1 ([#232](https://github.com/flex-development/docast/issues/232))
- [[`2f53a93`](https://github.com/flex-development/docast/commit/2f53a93646637d1ec8b8a6b965f715466d169750)] **deps-dev:** Bump eslint-plugin-markdownlint from 0.4.1 to 0.5.0 ([#268](https://github.com/flex-development/docast/issues/268))
- [[`92d03b1`](https://github.com/flex-development/docast/commit/92d03b1c2e0000e6995c274d888e8239102d58d4)] **deps-dev:** Bump eslint-plugin-unicorn from 50.0.1 to 51.0.0 ([#323](https://github.com/flex-development/docast/issues/323))
- [[`a0f9527`](https://github.com/flex-development/docast/commit/a0f952702631c754fda2e383d003c1a2faec584e)] **deps-dev:** Bump eslint-plugin-unicorn from 51.0.0 to 51.0.1 ([#326](https://github.com/flex-development/docast/issues/326))
- [[`a09a3cd`](https://github.com/flex-development/docast/commit/a09a3cdb2a9c8c8805641ce9873f9cd11a355d52)] **deps-dev:** Bump graphql from 16.7.1 to 16.8.0 ([#272](https://github.com/flex-development/docast/issues/272))
- [[`d12d754`](https://github.com/flex-development/docast/commit/d12d754d645608ef222ad1fe0ccd480539030cdf)] **deps-dev:** Bump graphql from 16.8.0 to 16.8.1 ([#299](https://github.com/flex-development/docast/issues/299))
- [[`24e42d4`](https://github.com/flex-development/docast/commit/24e42d4c690ee461529a7303fbae600e75997055)] **deps-dev:** Bump husky from 9.0.10 to 9.0.11 ([#343](https://github.com/flex-development/docast/issues/343))
- [[`82ede0b`](https://github.com/flex-development/docast/commit/82ede0b1531a5a205068fccdc03a66aa8a434449)] **deps-dev:** Bump husky from 9.0.7 to 9.0.10 ([#320](https://github.com/flex-development/docast/issues/320))
- [[`117a47b`](https://github.com/flex-development/docast/commit/117a47b5971b3067331056815d15e7cf45838afa)] **deps-dev:** Bump lint-staged from 15.2.0 to 15.2.1 ([#319](https://github.com/flex-development/docast/issues/319))
- [[`7eeec71`](https://github.com/flex-development/docast/commit/7eeec715b3032866d81e6c23c6b64c03f9a43891)] **deps-dev:** Bump lint-staged from 15.2.1 to 15.2.2 ([#328](https://github.com/flex-development/docast/issues/328))
- [[`947b9e3`](https://github.com/flex-development/docast/commit/947b9e3d94966290bf407f4c871ea1744755debe)] **deps-dev:** Bump prettier from 3.0.0 to 3.0.1 ([#240](https://github.com/flex-development/docast/issues/240))
- [[`5b429bf`](https://github.com/flex-development/docast/commit/5b429bfd3bbd6745faed35c2402c38e0c37619dd)] **deps-dev:** Bump prettier from 3.2.4 to 3.2.5 ([#321](https://github.com/flex-development/docast/issues/321))
- [[`0ee3d16`](https://github.com/flex-development/docast/commit/0ee3d16b377e8c6ec7afc7b7609f8803930747b5)] **deps-dev:** Bump the commitlint group with 1 update ([#258](https://github.com/flex-development/docast/issues/258))
- [[`129c640`](https://github.com/flex-development/docast/commit/129c640e73b3f62ac7e2f7124841842384d3b445)] **deps-dev:** Bump the commitlint group with 2 updates ([#339](https://github.com/flex-development/docast/issues/339))
- [[`5511dae`](https://github.com/flex-development/docast/commit/5511dae043194071ce3e1a341b134c224f926da2)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#235](https://github.com/flex-development/docast/issues/235))
- [[`c7f6edd`](https://github.com/flex-development/docast/commit/c7f6eddec25859849ef1ae86d0b033dcd25bd8eb)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#248](https://github.com/flex-development/docast/issues/248))
- [[`9c190f1`](https://github.com/flex-development/docast/commit/9c190f1d2ce85e0759ff8bfaf3b0590bf069f792)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#267](https://github.com/flex-development/docast/issues/267))
- [[`576d207`](https://github.com/flex-development/docast/commit/576d20768ee1904d8ae15fe970c0aa8d1a98ffec)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#292](https://github.com/flex-development/docast/issues/292))
- [[`48d9433`](https://github.com/flex-development/docast/commit/48d943345ecd6e23a2beae72b7d15d4bfdf18093)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#300](https://github.com/flex-development/docast/issues/300))
- [[`c809203`](https://github.com/flex-development/docast/commit/c809203ff03b9f2a62776b3b9d9900ee89cf838b)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#322](https://github.com/flex-development/docast/issues/322))
- [[`2d1db28`](https://github.com/flex-development/docast/commit/2d1db28bf0c1cdb3231e1729db25c5c9ea5e310e)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#340](https://github.com/flex-development/docast/issues/340))
- [[`ff79013`](https://github.com/flex-development/docast/commit/ff79013eba11671ac887ba127d3bd620e9b1f350)] **deps-dev:** Bump the vitest group with 1 update ([#237](https://github.com/flex-development/docast/issues/237))
- [[`2ad5015`](https://github.com/flex-development/docast/commit/2ad5015401f1da65f9716e211b7de6cceae4cac9)] **deps-dev:** Bump vite from 4.4.7 to 4.4.8 ([#239](https://github.com/flex-development/docast/issues/239))
- [[`bd61d10`](https://github.com/flex-development/docast/commit/bd61d102f82621c318f86ff04d2b0e7c450bfcec)] **deps-dev:** Bump vite from 4.4.8 to 4.4.9 ([#251](https://github.com/flex-development/docast/issues/251))
- [[`144bd25`](https://github.com/flex-development/docast/commit/144bd250324e72d39d3b584dff461dddc0bcacc9)] **deps-dev:** Bump vite from 5.0.12 to 5.1.0 ([#335](https://github.com/flex-development/docast/issues/335))
- [[`746899d`](https://github.com/flex-development/docast/commit/746899d86df76864581e8b8f002c89a9455e374e)] **deps-dev:** Bump vite from 5.1.0 to 5.1.1 ([#338](https://github.com/flex-development/docast/issues/338))
- [[`1760415`](https://github.com/flex-development/docast/commit/1760415b3808f2da76f74c493b34cdea274909d7)] **deps-dev:** Bump vite from 5.1.1 to 5.1.2 ([#345](https://github.com/flex-development/docast/issues/345))
- [[`4749a98`](https://github.com/flex-development/docast/commit/4749a9829e7c266a9f5271e92a1a4efff341acbe)] **deps-dev:** Bump vite-tsconfig-paths from 4.2.3 to 4.3.1 ([#317](https://github.com/flex-development/docast/issues/317))
- [[`800cf9a`](https://github.com/flex-development/docast/commit/800cf9ac95f85f95eae1a22f6e9c1fbdaa4b60b6)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.12 to 6.0.0-alpha.13 ([#233](https://github.com/flex-development/docast/issues/233))
- [[`e018098`](https://github.com/flex-development/docast/commit/e0180983fb35cf56ed6ec8521dcea080b50e4b90)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.13 to 6.0.0-alpha.14 ([#236](https://github.com/flex-development/docast/issues/236))
- [[`78e605b`](https://github.com/flex-development/docast/commit/78e605b8998992067c2c39f5ec57b418b5e5c3ee)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.14 to 6.0.0-alpha.15 ([#244](https://github.com/flex-development/docast/issues/244))
- [[`00850fa`](https://github.com/flex-development/docast/commit/00850fa5c37c361affb4573bd56c3d9921f64a27)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.15 to 6.0.0-alpha.16 ([#249](https://github.com/flex-development/docast/issues/249))
- [[`a2241ed`](https://github.com/flex-development/docast/commit/a2241eda9a7d8f5c5a58672d63b194ddb296903e)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.16 to 6.0.0-alpha.18 ([#260](https://github.com/flex-development/docast/issues/260))
- [[`cee05f5`](https://github.com/flex-development/docast/commit/cee05f50cd1039f701f8e7a0fcaf54ffff5f0eea)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.18 to 6.0.0-alpha.19 ([#262](https://github.com/flex-development/docast/issues/262))
- [[`0813dcd`](https://github.com/flex-development/docast/commit/0813dcdf9c462d31fff6128f5058b75d6877d087)] **deps:** Bump @flex-development/tutils from 6.0.0-alpha.19 to 6.0.0-alpha.20 ([#265](https://github.com/flex-development/docast/issues/265))

### :robot: Continuous Integration

- [[`dfd7f33`](https://github.com/flex-development/docast/commit/dfd7f33ff81d69cd42ad4fca24ab5077145436a5)] **deps:** Bump actions/cache from 3.3.1 to 3.3.2 ([#286](https://github.com/flex-development/docast/issues/286))
- [[`dbddbf1`](https://github.com/flex-development/docast/commit/dbddbf15de1f4f7bc3c946584af08fb87cb18eb7)] **deps:** Bump actions/cache from 3.3.2 to 4.0.0 ([#332](https://github.com/flex-development/docast/issues/332))
- [[`b4cd2a2`](https://github.com/flex-development/docast/commit/b4cd2a24242083eabc702ef828769622533e8627)] **deps:** Bump actions/checkout from 3.5.3 to 3.6.0 ([#277](https://github.com/flex-development/docast/issues/277))
- [[`5a504bb`](https://github.com/flex-development/docast/commit/5a504bb819bbb25c66c98df124c976b1e1d73c9f)] **deps:** Bump actions/checkout from 3.6.0 to 4.0.0 ([#284](https://github.com/flex-development/docast/issues/284))
- [[`cf79cc2`](https://github.com/flex-development/docast/commit/cf79cc2cc31b553c8849c022ac09fc502785269e)] **deps:** Bump actions/checkout from 4.0.0 to 4.1.0 ([#302](https://github.com/flex-development/docast/issues/302))
- [[`4360347`](https://github.com/flex-development/docast/commit/436034727810f30ba699143b94cf08ca34c1d1d1)] **deps:** Bump actions/checkout from 4.1.0 to 4.1.1 ([#306](https://github.com/flex-development/docast/issues/306))
- [[`94cc2d1`](https://github.com/flex-development/docast/commit/94cc2d12a0c50f4fb074d0d7f9d07497023896f8)] **deps:** Bump actions/create-github-app-token from 1.6.0 to 1.7.0 ([#331](https://github.com/flex-development/docast/issues/331))
- [[`7389f7d`](https://github.com/flex-development/docast/commit/7389f7d8018de67cadb6b2cedfb5a4149f6100ae)] **deps:** Bump actions/create-github-app-token from 1.7.0 to 1.8.0 ([#336](https://github.com/flex-development/docast/issues/336))
- [[`f8b1eb6`](https://github.com/flex-development/docast/commit/f8b1eb63da0b4c46a02f1d13dec04b7e4082b6a2)] **deps:** Bump actions/setup-node from 3.7.0 to 3.8.0 ([#266](https://github.com/flex-development/docast/issues/266))
- [[`7f49318`](https://github.com/flex-development/docast/commit/7f49318639558921f659a9c13f201d41341fa1f2)] **deps:** Bump actions/setup-node from 3.8.0 to 3.8.1 ([#273](https://github.com/flex-development/docast/issues/273))
- [[`30402f7`](https://github.com/flex-development/docast/commit/30402f7309d789078089e4e79658a06b7ef8838e)] **deps:** Bump actions/setup-node from 3.8.1 to 4.0.2 ([#329](https://github.com/flex-development/docast/issues/329))
- [[`7c24251`](https://github.com/flex-development/docast/commit/7c242518abf6150f48a802f1024ab33f2c33761a)] **deps:** Bump actions/upload-artifact from 3.1.2 to 3.1.3 ([#285](https://github.com/flex-development/docast/issues/285))
- [[`0965012`](https://github.com/flex-development/docast/commit/0965012b9ac467159c53f6d46b9d89757ea1ff16)] **deps:** Bump actions/upload-artifact from 3.1.3 to 4.3.1 ([#325](https://github.com/flex-development/docast/issues/325))
- [[`b064050`](https://github.com/flex-development/docast/commit/b06405090d91969182f00aa765383c36f3bf0fa9)] **deps:** Bump andstor/file-existence-action from 2.0.0 to 3.0.0 ([#337](https://github.com/flex-development/docast/issues/337))
- [[`33607cb`](https://github.com/flex-development/docast/commit/33607cb7173b6886a56e62f6e723affd080367da)] **deps:** Bump crazy-max/ghaction-import-gpg from 5.3.0 to 5.4.0 ([#283](https://github.com/flex-development/docast/issues/283))
- [[`614c5da`](https://github.com/flex-development/docast/commit/614c5daf754471b7534ffa62fa999e0318c04320)] **deps:** Bump crazy-max/ghaction-import-gpg from 5.4.0 to 6.0.0 ([#290](https://github.com/flex-development/docast/issues/290))
- [[`3236df4`](https://github.com/flex-development/docast/commit/3236df49b05260b19502b2cca7d6bce78120dcdb)] **deps:** Bump crazy-max/ghaction-import-gpg from 6.0.0 to 6.1.0 ([#315](https://github.com/flex-development/docast/issues/315))
- [[`d2dfb92`](https://github.com/flex-development/docast/commit/d2dfb9214b7776fc67c347619069289c965884c8)] **deps:** Bump hmarr/debug-action from 2.1.0 to 3.0.0 ([#333](https://github.com/flex-development/docast/issues/333))
- [[`b7ce43a`](https://github.com/flex-development/docast/commit/b7ce43ac1a181a2c693150df591440fdda39bc8c)] **deps:** Bump kaisugi/action-regex-match from 1.0.0 to 1.0.1 ([#330](https://github.com/flex-development/docast/issues/330))

### :sparkles: Features

- [[`0e244ce`](https://github.com/flex-development/docast/commit/0e244ce6b8d02f160430403cd8b9fb86deaf7ea9)] **types:** `DocastNode`

### :house_with_garden: Housekeeping

- [[`0ba6dc6`](https://github.com/flex-development/docast/commit/0ba6dc6eb09983b835dbb968176f21360349c7a5)] update project architecture
- [[`f475f25`](https://github.com/flex-development/docast/commit/f475f251310ab3e7d7bb5d01bc3e4c96225c47a2)] **github:** add commit scope `chore`

### :mechanical_arm: Refactors

- [[`d2a9d2a`](https://github.com/flex-development/docast/commit/d2a9d2a584473375d143e29f51ce57d5c6293efa)] **content:** [`Description`] re-add `mdast.Paragraph`
- [[`4fdb553`](https://github.com/flex-development/docast/commit/4fdb553bfd74db7d3e698fbc25732086bb0900bd)] **content:** maps
- [[`47342d2`](https://github.com/flex-development/docast/commit/47342d22bc37918fa2220da94469e630df45464c)] **mixins:** remove `Tag#prefix`
- [[`cd14f96`](https://github.com/flex-development/docast/commit/cd14f9633ed0f0770901c4f87c5cf8bf41250fe4)] **nodes:** [`BlockTag`] define `children` as discriminate union
- [[`043d475`](https://github.com/flex-development/docast/commit/043d475a13bb617106c3ed7d80d69d515d690245)] **nodes:** camelcase node types
- [[`4bb7100`](https://github.com/flex-development/docast/commit/4bb71009f1d426da128c1496242c514e99132e3b)] **spec:** rewrite specification

## [1.0.0-alpha.13](https://github.com/flex-development/docast/compare/1.0.0-alpha.12...1.0.0-alpha.13) (2023-07-27)

### ⚠ BREAKING CHANGES

- **nvm:** require `>=16.20.0`

### :package: Build

- [[`5160615`](https://github.com/flex-development/docast/commit/5160615a0fdd8bc0179660a990675e39a348e99d)] **deps-dev:** Bump @commitlint/cli from 17.4.4 to 17.5.0 ([#74](https://github.com/flex-development/docast/issues/74))
- [[`9ff748c`](https://github.com/flex-development/docast/commit/9ff748c10299183118d667436330330e5ff50c35)] **deps-dev:** Bump @commitlint/cli from 17.5.0 to 17.5.1 ([#85](https://github.com/flex-development/docast/issues/85))
- [[`179401f`](https://github.com/flex-development/docast/commit/179401ff6dc26ae7b6c4b513f97ef44c9ea500f3)] **deps-dev:** Bump @commitlint/cli from 17.5.1 to 17.6.1 ([#121](https://github.com/flex-development/docast/issues/121))
- [[`34750bd`](https://github.com/flex-development/docast/commit/34750bdc27f2b088aad7447dd1dd247a379affed)] **deps-dev:** Bump @commitlint/cli from 17.6.1 to 17.6.3 ([#149](https://github.com/flex-development/docast/issues/149))
- [[`51d5da0`](https://github.com/flex-development/docast/commit/51d5da0e9e48efe520907d7c82cfa7e40c2b4846)] **deps-dev:** Bump @flex-development/esm-types from 1.0.0 to 2.0.0 ([#226](https://github.com/flex-development/docast/issues/226))
- [[`7dfcfaa`](https://github.com/flex-development/docast/commit/7dfcfaab6326411e87a32c6a6e85443ae73b914e)] **deps-dev:** Bump @graphql-eslint/eslint-plugin from 3.16.1 to 3.16.2 ([#75](https://github.com/flex-development/docast/issues/75))
- [[`63ad983`](https://github.com/flex-development/docast/commit/63ad98314095368906bdcd66bdff6fcb2f90d229)] **deps-dev:** Bump @graphql-eslint/eslint-plugin from 3.16.2 to 3.17.0 ([#82](https://github.com/flex-development/docast/issues/82))
- [[`9d0ee54`](https://github.com/flex-development/docast/commit/9d0ee546bb5b7af190b044b036401ebb199c6a70)] **deps-dev:** Bump @graphql-eslint/eslint-plugin from 3.17.0 to 3.18.0 ([#89](https://github.com/flex-development/docast/issues/89))
- [[`1eb9e94`](https://github.com/flex-development/docast/commit/1eb9e94c94701d9827da3faa2821902116f5022a)] **deps-dev:** Bump @graphql-eslint/eslint-plugin from 3.18.0 to 3.19.1 ([#187](https://github.com/flex-development/docast/issues/187))
- [[`d4ff078`](https://github.com/flex-development/docast/commit/d4ff078bf886e4a5e3d7af96901faf3c451e2f92)] **deps-dev:** bump @types/unist from 2.0.6 to 3.0.0
- [[`427fb01`](https://github.com/flex-development/docast/commit/427fb01cbe6a1d05d1ef3764c95bd7191e261454)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.54.0 to 5.54.1 ([#29](https://github.com/flex-development/docast/issues/29))
- [[`54ab884`](https://github.com/flex-development/docast/commit/54ab88462530b6f8e44c375203619ab4a37f6007)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.54.1 to 5.55.0 ([#46](https://github.com/flex-development/docast/issues/46))
- [[`df24464`](https://github.com/flex-development/docast/commit/df24464b93c2d965743700a5b378f41209ee6272)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.55.0 to 5.56.0 ([#64](https://github.com/flex-development/docast/issues/64))
- [[`1d40f9e`](https://github.com/flex-development/docast/commit/1d40f9e3792d57d5cc38fab7aea2b0961e8851e4)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.56.0 to 5.57.0 ([#84](https://github.com/flex-development/docast/issues/84))
- [[`e273e6f`](https://github.com/flex-development/docast/commit/e273e6fe03c43c108354020632884367a2fb8f09)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.58.0 to 5.59.0 ([#125](https://github.com/flex-development/docast/issues/125))
- [[`203087f`](https://github.com/flex-development/docast/commit/203087f7f71595e0810e127f6d49bb1d37dc4bc1)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.59.0 to 5.59.1 ([#140](https://github.com/flex-development/docast/issues/140))
- [[`9774afc`](https://github.com/flex-development/docast/commit/9774afc9f26df59935b8720bc2b5783108626ea0)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.59.1 to 5.59.2 ([#144](https://github.com/flex-development/docast/issues/144))
- [[`7527b8f`](https://github.com/flex-development/docast/commit/7527b8f82d3a45a14c4e176c3c1be8768ba1cefb)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.59.2 to 5.59.5 ([#162](https://github.com/flex-development/docast/issues/162))
- [[`65667fb`](https://github.com/flex-development/docast/commit/65667fbbdefe0b40586d91f5a4ceea19c86eb6e5)] **deps-dev:** Bump @typescript-eslint/eslint-plugin from 5.59.5 to 5.59.6 ([#172](https://github.com/flex-development/docast/issues/172))
- [[`02bd223`](https://github.com/flex-development/docast/commit/02bd2239d0c1e5afbb46b7e8ba6e4ed6a8766c4b)] **deps-dev:** Bump @typescript-eslint/parser from 5.54.0 to 5.54.1 ([#31](https://github.com/flex-development/docast/issues/31))
- [[`268457e`](https://github.com/flex-development/docast/commit/268457e3a834ca2e7481b2da29d49369685861d0)] **deps-dev:** Bump @typescript-eslint/parser from 5.54.1 to 5.55.0 ([#49](https://github.com/flex-development/docast/issues/49))
- [[`a9bb8cd`](https://github.com/flex-development/docast/commit/a9bb8cd71bdc23a3190f8e260df6eeeb1dc0a62e)] **deps-dev:** Bump @typescript-eslint/parser from 5.55.0 to 5.56.0 ([#68](https://github.com/flex-development/docast/issues/68))
- [[`2d91cc1`](https://github.com/flex-development/docast/commit/2d91cc1374ffd1bfa2b2eb2ed5af3b4bc46720b5)] **deps-dev:** Bump @typescript-eslint/parser from 5.56.0 to 5.57.0 ([#87](https://github.com/flex-development/docast/issues/87))
- [[`edb2e03`](https://github.com/flex-development/docast/commit/edb2e038d996e7e62be596b65cc564f3cdbbd215)] **deps-dev:** Bump @typescript-eslint/parser from 5.58.0 to 5.59.0 ([#127](https://github.com/flex-development/docast/issues/127))
- [[`93db41b`](https://github.com/flex-development/docast/commit/93db41bdfdc7f31086fafa37e399aae45d83fe1f)] **deps-dev:** Bump @typescript-eslint/parser from 5.59.0 to 5.59.1 ([#138](https://github.com/flex-development/docast/issues/138))
- [[`07398c1`](https://github.com/flex-development/docast/commit/07398c15c1840ce04bb42bd5484585903efab3d9)] **deps-dev:** Bump @typescript-eslint/parser from 5.59.1 to 5.59.2 ([#143](https://github.com/flex-development/docast/issues/143))
- [[`e41eacc`](https://github.com/flex-development/docast/commit/e41eacccbf8ef3efa0b8723551b762b31a9bdcce)] **deps-dev:** Bump @typescript-eslint/parser from 5.59.2 to 5.59.5 ([#161](https://github.com/flex-development/docast/issues/161))
- [[`1d3be84`](https://github.com/flex-development/docast/commit/1d3be848c159a5f6623734b1c662a6c90fda1c2d)] **deps-dev:** Bump @typescript-eslint/parser from 5.59.5 to 5.59.6 ([#169](https://github.com/flex-development/docast/issues/169))
- [[`53af57f`](https://github.com/flex-development/docast/commit/53af57fd4fcee9480323327c8cec842a77d1db64)] **deps-dev:** Bump @typescript-eslint/parser from 5.59.6 to 5.59.8 ([#186](https://github.com/flex-development/docast/issues/186))
- [[`30ff3d3`](https://github.com/flex-development/docast/commit/30ff3d34cdaf222981bbde458c5c556466e1add1)] **deps-dev:** Bump @vitest/coverage-c8 from 0.29.2 to 0.29.3 ([#53](https://github.com/flex-development/docast/issues/53))
- [[`0b9244a`](https://github.com/flex-development/docast/commit/0b9244a9d71cab0d4514b88651a9e572892f054e)] **deps-dev:** Bump @vitest/coverage-c8 from 0.29.3 to 0.29.7 ([#66](https://github.com/flex-development/docast/issues/66))
- [[`9cf4ac9`](https://github.com/flex-development/docast/commit/9cf4ac91bcd9f7fcad16b484163d9e41f6f4d738)] **deps-dev:** Bump @vitest/coverage-c8 from 0.29.7 to 0.29.8 ([#93](https://github.com/flex-development/docast/issues/93))
- [[`10d6043`](https://github.com/flex-development/docast/commit/10d60432d3930a47ccb759909042e32588ce8e76)] **deps-dev:** Bump @vitest/coverage-c8 from 0.30.0 to 0.30.1 ([#117](https://github.com/flex-development/docast/issues/117))
- [[`51012a5`](https://github.com/flex-development/docast/commit/51012a548a88636aa977191c01de92e261d917d7)] **deps-dev:** Bump @vitest/coverage-c8 from 0.30.1 to 0.31.0 ([#147](https://github.com/flex-development/docast/issues/147))
- [[`bbe9197`](https://github.com/flex-development/docast/commit/bbe91970cec8b9b0eaff0d86a747069730b0e155)] **deps-dev:** Bump @vitest/coverage-c8 from 0.31.0 to 0.31.1 ([#175](https://github.com/flex-development/docast/issues/175))
- [[`7b1e6e5`](https://github.com/flex-development/docast/commit/7b1e6e5d6c2718414049f6fa2af5480410da81b0)] **deps-dev:** Bump @vitest/ui from 0.29.2 to 0.29.3 ([#51](https://github.com/flex-development/docast/issues/51))
- [[`9cb7431`](https://github.com/flex-development/docast/commit/9cb7431fd0422797dd6c369274214307f4029969)] **deps-dev:** Bump @vitest/ui from 0.29.3 to 0.29.7 ([#67](https://github.com/flex-development/docast/issues/67))
- [[`ecae190`](https://github.com/flex-development/docast/commit/ecae190937d69689ee8886eceb106e5a51813980)] **deps-dev:** Bump @vitest/ui from 0.29.7 to 0.29.8 ([#92](https://github.com/flex-development/docast/issues/92))
- [[`2a99a74`](https://github.com/flex-development/docast/commit/2a99a7482bca7fb2f3224ff6d4d0210da94a7fd5)] **deps-dev:** Bump @vitest/ui from 0.30.0 to 0.30.1 ([#116](https://github.com/flex-development/docast/issues/116))
- [[`e20635b`](https://github.com/flex-development/docast/commit/e20635b9170ae33cdc82d81fc17ab860e57bf1a9)] **deps-dev:** Bump @vitest/ui from 0.30.1 to 0.31.0 ([#148](https://github.com/flex-development/docast/issues/148))
- [[`98bcff5`](https://github.com/flex-development/docast/commit/98bcff574c47c1ff8eeea2ae53c9c16880a78b3b)] **deps-dev:** Bump @vitest/ui from 0.31.0 to 0.31.1 ([#176](https://github.com/flex-development/docast/issues/176))
- [[`812541f`](https://github.com/flex-development/docast/commit/812541f0d42a5365bc351ad9390b6e648f8a717d)] **deps-dev:** Bump cspell from 6.27.0 to 6.28.0 ([#24](https://github.com/flex-development/docast/issues/24))
- [[`e444187`](https://github.com/flex-development/docast/commit/e444187f1afdd71400bbcce9f3ebc326120d607a)] **deps-dev:** Bump cspell from 6.28.0 to 6.29.3 ([#45](https://github.com/flex-development/docast/issues/45))
- [[`bc6372c`](https://github.com/flex-development/docast/commit/bc6372c444f9c12881fe1c9d8377a34d4d467652)] **deps-dev:** Bump cspell from 6.29.3 to 6.30.0 ([#59](https://github.com/flex-development/docast/issues/59))
- [[`7aec6fb`](https://github.com/flex-development/docast/commit/7aec6fba1e9d7243873ea718a86738cc7010f1e1)] **deps-dev:** Bump cspell from 6.30.0 to 6.30.2 ([#63](https://github.com/flex-development/docast/issues/63))
- [[`c104aa6`](https://github.com/flex-development/docast/commit/c104aa6e5c0b480b7bf52c51f320a04ee82fe1b9)] **deps-dev:** Bump cspell from 6.30.2 to 6.31.1 ([#80](https://github.com/flex-development/docast/issues/80))
- [[`4d22e76`](https://github.com/flex-development/docast/commit/4d22e768971c2832afe37e6e30a4638001b0a2a7)] **deps-dev:** Bump esbuild from 0.17.10 to 0.17.11 ([#27](https://github.com/flex-development/docast/issues/27))
- [[`ca220a8`](https://github.com/flex-development/docast/commit/ca220a8b383d80568efd599577123484b80ee666)] **deps-dev:** Bump esbuild from 0.17.11 to 0.17.12 ([#57](https://github.com/flex-development/docast/issues/57))
- [[`0c80595`](https://github.com/flex-development/docast/commit/0c8059541505e254c2256435eb842ae15806dd0c)] **deps-dev:** Bump esbuild from 0.17.12 to 0.17.14 ([#81](https://github.com/flex-development/docast/issues/81))
- [[`9ea211e`](https://github.com/flex-development/docast/commit/9ea211e89bb64dfaf930987e4242bec1ad46d9e9)] **deps-dev:** Bump esbuild from 0.17.14 to 0.17.15 ([#97](https://github.com/flex-development/docast/issues/97))
- [[`228d60e`](https://github.com/flex-development/docast/commit/228d60ed9b4cc234d53809bad61e27ab30c5b58c)] **deps-dev:** Bump esbuild from 0.17.16 to 0.17.17 ([#122](https://github.com/flex-development/docast/issues/122))
- [[`092ff2a`](https://github.com/flex-development/docast/commit/092ff2ad4a08ba2bfd47206e4e7eb26710d9ded4)] **deps-dev:** Bump esbuild from 0.17.17 to 0.17.18 ([#134](https://github.com/flex-development/docast/issues/134))
- [[`61fa81a`](https://github.com/flex-development/docast/commit/61fa81a39e9f607860a4574f24d657e371d5a9af)] **deps-dev:** Bump esbuild from 0.17.18 to 0.17.19 ([#167](https://github.com/flex-development/docast/issues/167))
- [[`462057f`](https://github.com/flex-development/docast/commit/462057f5f5aaa3b58f550df92be0757793660fd6)] **deps-dev:** Bump eslint from 8.35.0 to 8.36.0 ([#40](https://github.com/flex-development/docast/issues/40))
- [[`6ec0b93`](https://github.com/flex-development/docast/commit/6ec0b930bd74384104bfce4cb40f465712566028)] **deps-dev:** Bump eslint from 8.36.0 to 8.37.0 ([#90](https://github.com/flex-development/docast/issues/90))
- [[`77f16c6`](https://github.com/flex-development/docast/commit/77f16c6b7dd8c293f498b2c576ce61d4a7bafb82)] **deps-dev:** Bump eslint from 8.38.0 to 8.39.0 ([#136](https://github.com/flex-development/docast/issues/136))
- [[`89376f2`](https://github.com/flex-development/docast/commit/89376f23c9a398a21b0f7301111572c50b4366f2)] **deps-dev:** Bump eslint-config-prettier from 8.6.0 to 8.7.0 ([#25](https://github.com/flex-development/docast/issues/25))
- [[`9fe2857`](https://github.com/flex-development/docast/commit/9fe2857f5ecfb21a1c505de5b26b7c9646e88b61)] **deps-dev:** Bump eslint-config-prettier from 8.7.0 to 8.8.0 ([#71](https://github.com/flex-development/docast/issues/71))
- [[`9caabe2`](https://github.com/flex-development/docast/commit/9caabe279a3e0adabb01f850588235cc89ebb1ab)] **deps-dev:** Bump eslint-plugin-jsdoc from 40.0.1 to 40.0.2 ([#44](https://github.com/flex-development/docast/issues/44))
- [[`a26cdb9`](https://github.com/flex-development/docast/commit/a26cdb97b00938499d23a5d30bb13636cbc0def8)] **deps-dev:** Bump eslint-plugin-jsdoc from 40.0.2 to 40.0.3 ([#54](https://github.com/flex-development/docast/issues/54))
- [[`ff731a8`](https://github.com/flex-development/docast/commit/ff731a8138522a96ba623d587df9f757b549caac)] **deps-dev:** Bump eslint-plugin-jsdoc from 40.0.3 to 40.1.0 ([#60](https://github.com/flex-development/docast/issues/60))
- [[`0ac4ac9`](https://github.com/flex-development/docast/commit/0ac4ac9b234312d047c7e3e10628a6aa499644cf)] **deps-dev:** Bump eslint-plugin-jsdoc from 40.1.0 to 40.1.1 ([#96](https://github.com/flex-development/docast/issues/96))
- [[`3a7c989`](https://github.com/flex-development/docast/commit/3a7c989d32142dd58590eb9e9c52ce699f78e64f)] **deps-dev:** Bump eslint-plugin-jsdoc from 40.1.2 to 40.3.0 ([#112](https://github.com/flex-development/docast/issues/112))
- [[`20cb124`](https://github.com/flex-development/docast/commit/20cb124fb4e1bf77a6debeb5302324899e9ac699)] **deps-dev:** Bump eslint-plugin-jsonc from 2.6.0 to 2.7.0 ([#58](https://github.com/flex-development/docast/issues/58))
- [[`445f908`](https://github.com/flex-development/docast/commit/445f90814d1cc13a5fad62fc3686c0dbf38a72fe)] **deps-dev:** Bump eslint-plugin-jsonc from 2.7.0 to 2.8.0 ([#166](https://github.com/flex-development/docast/issues/166))
- [[`fd21ca8`](https://github.com/flex-development/docast/commit/fd21ca82b5a2773ddf1118d232f70bb51ece3cf8)] **deps-dev:** Bump eslint-plugin-markdownlint from 0.4.0 to 0.4.1 ([#32](https://github.com/flex-development/docast/issues/32))
- [[`2880780`](https://github.com/flex-development/docast/commit/28807800d7783ab02c7d9b444958d8605c80b120)] **deps-dev:** Bump eslint-plugin-yml from 1.5.0 to 1.7.0 ([#156](https://github.com/flex-development/docast/issues/156))
- [[`f7c20f2`](https://github.com/flex-development/docast/commit/f7c20f29aede30316aadf9b4f09a4107eb06b4bf)] **deps-dev:** Bump graphql-config from 4.4.1 to 4.5.0 ([#28](https://github.com/flex-development/docast/issues/28))
- [[`8fa04e4`](https://github.com/flex-development/docast/commit/8fa04e4c43559a2c7fa42661c73e33a1bbb22537)] **deps-dev:** Bump jsonc-eslint-parser from 2.1.0 to 2.2.0 ([#34](https://github.com/flex-development/docast/issues/34))
- [[`aca973e`](https://github.com/flex-development/docast/commit/aca973e14eb544a2cd561924676dbde8daf22dad)] **deps-dev:** Bump jsonc-eslint-parser from 2.2.0 to 2.3.0 ([#163](https://github.com/flex-development/docast/issues/163))
- [[`6960317`](https://github.com/flex-development/docast/commit/696031707f726a45514ca5798b25f89b372dbf25)] **deps-dev:** Bump lint-staged from 13.1.2 to 13.2.0 ([#42](https://github.com/flex-development/docast/issues/42))
- [[`8cc5ffb`](https://github.com/flex-development/docast/commit/8cc5ffb64bee1d6827f52d0d41752d5d6d50d52b)] **deps-dev:** Bump lint-staged from 13.2.1 to 13.2.2 ([#141](https://github.com/flex-development/docast/issues/141))
- [[`2904412`](https://github.com/flex-development/docast/commit/290441275eeefea1fe535b1a00aba61cff6ace35)] **deps-dev:** Bump prettier from 2.8.4 to 2.8.5 ([#61](https://github.com/flex-development/docast/issues/61))
- [[`6d934da`](https://github.com/flex-development/docast/commit/6d934dae120e1db023e775c655104e00cc4ec06a)] **deps-dev:** Bump prettier from 2.8.5 to 2.8.6 ([#69](https://github.com/flex-development/docast/issues/69))
- [[`96dd7c3`](https://github.com/flex-development/docast/commit/96dd7c38945c901e71e5f98373815b9fd3d5b963)] **deps-dev:** Bump prettier from 2.8.6 to 2.8.7 ([#78](https://github.com/flex-development/docast/issues/78))
- [[`d79ce3f`](https://github.com/flex-development/docast/commit/d79ce3f2af12341db27c15ffcd42a7e5cbca224c)] **deps-dev:** Bump prettier from 2.8.7 to 2.8.8 ([#135](https://github.com/flex-development/docast/issues/135))
- [[`b35cb5b`](https://github.com/flex-development/docast/commit/b35cb5babf590fbb653db3e471fa142745983b4b)] **deps-dev:** Bump semver from 7.3.8 to 7.4.0 ([#113](https://github.com/flex-development/docast/issues/113))
- [[`5239178`](https://github.com/flex-development/docast/commit/5239178b90f52a98fd531b839c30bd0912aa5dbb)] **deps-dev:** Bump semver from 7.4.0 to 7.5.0 ([#128](https://github.com/flex-development/docast/issues/128))
- [[`425c902`](https://github.com/flex-development/docast/commit/425c902e05afd9576d96f64e2bcc7137dd587b55)] **deps-dev:** Bump semver from 7.5.0 to 7.5.1 ([#168](https://github.com/flex-development/docast/issues/168))
- [[`84b337a`](https://github.com/flex-development/docast/commit/84b337aa06e106f8c96341407c465ccb5afea38e)] **deps-dev:** Bump semver from 7.5.1 to 7.5.2 ([#202](https://github.com/flex-development/docast/issues/202))
- [[`5adb82a`](https://github.com/flex-development/docast/commit/5adb82af05e959c4071e12bfeb91ebfcee6b11cd)] **deps-dev:** Bump the commitlint group with 1 update ([#224](https://github.com/flex-development/docast/issues/224))
- [[`8c46736`](https://github.com/flex-development/docast/commit/8c4673601019d229ce96d468b828b234411f6bfb)] **deps-dev:** Bump the conventional-changelog group with 5 updates ([#225](https://github.com/flex-development/docast/issues/225))
- [[`594ca13`](https://github.com/flex-development/docast/commit/594ca13450100cb244b6d31fc5f6d1e37cfb191c)] **deps-dev:** Bump vite from 4.1.4 to 4.2.0 ([#55](https://github.com/flex-development/docast/issues/55))
- [[`b47b37c`](https://github.com/flex-development/docast/commit/b47b37cf4b19ec816c8afed317dafc927c8609c0)] **deps-dev:** Bump vite from 4.2.0 to 4.2.1 ([#72](https://github.com/flex-development/docast/issues/72))
- [[`35482e6`](https://github.com/flex-development/docast/commit/35482e6ecc56e714f90141b4480377891a3293a5)] **deps-dev:** Bump vite from 4.2.1 to 4.2.2 ([#129](https://github.com/flex-development/docast/issues/129))
- [[`7a03cf8`](https://github.com/flex-development/docast/commit/7a03cf808fb043f7527501d9b8846acc15486b34)] **deps-dev:** Bump vite from 4.2.2 to 4.3.0 ([#131](https://github.com/flex-development/docast/issues/131))
- [[`f917c72`](https://github.com/flex-development/docast/commit/f917c72563075c2decd7fc23358a611c17429d8d)] **deps-dev:** Bump vite from 4.3.0 to 4.3.1 ([#132](https://github.com/flex-development/docast/issues/132))
- [[`5144bf1`](https://github.com/flex-development/docast/commit/5144bf15f493bd8d006f93c91f7f79b7580e35e1)] **deps-dev:** Bump vite from 4.3.1 to 4.3.2 ([#139](https://github.com/flex-development/docast/issues/139))
- [[`b9398b0`](https://github.com/flex-development/docast/commit/b9398b07c9693a9252b0c77e0adf250d6e6cafb7)] **deps-dev:** Bump vite from 4.3.2 to 4.3.4 ([#145](https://github.com/flex-development/docast/issues/145))
- [[`f6a4dc8`](https://github.com/flex-development/docast/commit/f6a4dc89685f2c00f77c385712442a10166a2add)] **deps-dev:** Bump vite from 4.3.4 to 4.3.5 ([#160](https://github.com/flex-development/docast/issues/160))
- [[`91a47cb`](https://github.com/flex-development/docast/commit/91a47cb6bd754af6076ef3c74f20ab47bab4a4f7)] **deps-dev:** Bump vite from 4.3.5 to 4.3.6 ([#171](https://github.com/flex-development/docast/issues/171))
- [[`8428e12`](https://github.com/flex-development/docast/commit/8428e124adff0961b57d957157cf450594c28366)] **deps-dev:** Bump vite from 4.3.6 to 4.3.7 ([#173](https://github.com/flex-development/docast/issues/173))
- [[`0c5baa0`](https://github.com/flex-development/docast/commit/0c5baa0b7301016afed4ced907e4607436ae5c14)] **deps-dev:** Bump vite from 4.3.7 to 4.3.8 ([#177](https://github.com/flex-development/docast/issues/177))
- [[`19df7aa`](https://github.com/flex-development/docast/commit/19df7aaeb6705dcb8e9d54bf72c8b2f9fe798738)] **deps-dev:** Bump vite from 4.3.8 to 4.3.9 ([#193](https://github.com/flex-development/docast/issues/193))
- [[`0274e3d`](https://github.com/flex-development/docast/commit/0274e3d663e352c1e2c60a42d15d80c7c9ab8e51)] **deps-dev:** Bump vite-tsconfig-paths from 4.0.5 to 4.0.7 ([#48](https://github.com/flex-development/docast/issues/48))
- [[`51d44c1`](https://github.com/flex-development/docast/commit/51d44c1a96d939947ddf3a2944430f38ee79efbb)] **deps-dev:** Bump vite-tsconfig-paths from 4.0.9 to 4.1.0 ([#111](https://github.com/flex-development/docast/issues/111))
- [[`af2acf1`](https://github.com/flex-development/docast/commit/af2acf1b7d0a41bb6d14aeaa451bcab138c0fe47)] **deps-dev:** Bump vite-tsconfig-paths from 4.1.0 to 4.2.0 ([#119](https://github.com/flex-development/docast/issues/119))
- [[`3bd29e6`](https://github.com/flex-development/docast/commit/3bd29e66fce22f8fa86ca39f96569344dbdb54d5)] **deps-dev:** Bump vitest from 0.29.2 to 0.29.3 ([#52](https://github.com/flex-development/docast/issues/52))
- [[`3a1e256`](https://github.com/flex-development/docast/commit/3a1e256579b0a58b1b2c1b66e1e510515ae9a0a9)] **deps-dev:** Bump vitest from 0.29.3 to 0.29.7 ([#70](https://github.com/flex-development/docast/issues/70))
- [[`a7d5cec`](https://github.com/flex-development/docast/commit/a7d5cec125605159fe0c5d88ad24febf66345f95)] **deps-dev:** Bump vitest from 0.29.7 to 0.29.8 ([#91](https://github.com/flex-development/docast/issues/91))
- [[`49310fc`](https://github.com/flex-development/docast/commit/49310fc88ac347104c825cfae9af78eaf402c77a)] **deps-dev:** Bump vitest from 0.30.0 to 0.30.1 ([#114](https://github.com/flex-development/docast/issues/114))
- [[`0eec2cd`](https://github.com/flex-development/docast/commit/0eec2cdf821e04311d856f86405ad7fa324c1029)] **deps-dev:** Bump vitest from 0.30.1 to 0.31.0 ([#146](https://github.com/flex-development/docast/issues/146))
- [[`4040e9a`](https://github.com/flex-development/docast/commit/4040e9a2dc03d9c5c9204cfad4b822a3b8ae5ca8)] **deps-dev:** Bump vitest from 0.31.0 to 0.31.1 ([#174](https://github.com/flex-development/docast/issues/174))
- [[`68e5dcb`](https://github.com/flex-development/docast/commit/68e5dcb0453ad13c15977f78168c44cc93cdd730)] **deps-dev:** Bump yaml-eslint-parser from 1.1.0 to 1.2.0 ([#36](https://github.com/flex-development/docast/issues/36))
- [[`b3dab21`](https://github.com/flex-development/docast/commit/b3dab21cb0eb8a404b3a7e2f25dbb05264a7ef21)] **deps-dev:** Bump yaml-eslint-parser from 1.2.0 to 1.2.2 ([#158](https://github.com/flex-development/docast/issues/158))
- [[`01a8486`](https://github.com/flex-development/docast/commit/01a848615f538c951a8bb8553afd2ad3445d8448)] **deps:** bump @flex-development/tutils from 6.0.0-alpha.10 to 6.0.0-alpha.12
- [[`89711c5`](https://github.com/flex-development/docast/commit/89711c5b92eb1674a6a5e79b8e51001beebcdfa1)] **nvm:** require `>=16.20.0`

### :robot: Continuous Integration

- [[`8c59067`](https://github.com/flex-development/docast/commit/8c59067aab1ca679e398bcf96a18629755c242ed)] [[@dependabot](https://github.com/dependabot)] configure grouped version updates
- [[`fc65091`](https://github.com/flex-development/docast/commit/fc65091be38086742b0b8d10ec95e34b436f86a4)] **deps:** Bump actions/add-to-project from 0.4.1 to 0.5.0 ([#99](https://github.com/flex-development/docast/issues/99))
- [[`dfb44cc`](https://github.com/flex-development/docast/commit/dfb44cc3cc06ff410440f71b4efe648cca8cb114)] **deps:** Bump actions/cache from 3.2.6 to 3.3.0 ([#37](https://github.com/flex-development/docast/issues/37))
- [[`4c6fa84`](https://github.com/flex-development/docast/commit/4c6fa8411cd9ad1cf7563b5bf2a75629bff5238e)] **deps:** Bump actions/cache from 3.3.0 to 3.3.1 ([#41](https://github.com/flex-development/docast/issues/41))
- [[`2aefedf`](https://github.com/flex-development/docast/commit/2aefedf4cb7f7a05d021586d2fe06ac05452a86d)] **deps:** Bump actions/checkout from 3.3.0 to 3.5.0 ([#77](https://github.com/flex-development/docast/issues/77))
- [[`387f7fe`](https://github.com/flex-development/docast/commit/387f7fec9eaa49ad4aecf9ea5273472ce688ac85)] **deps:** Bump actions/checkout from 3.5.0 to 3.5.1 ([#118](https://github.com/flex-development/docast/issues/118))
- [[`dfc41ce`](https://github.com/flex-development/docast/commit/dfc41ce0610f3caeefe82c37b0275959f69cff3a)] **deps:** Bump actions/checkout from 3.5.1 to 3.5.2 ([#120](https://github.com/flex-development/docast/issues/120))
- [[`7272bc0`](https://github.com/flex-development/docast/commit/7272bc0aaebe143049c92d7efc1aeaa40a4485b5)] **deps:** Bump actions/checkout from 3.5.2 to 3.5.3 ([#198](https://github.com/flex-development/docast/issues/198))
- [[`2895feb`](https://github.com/flex-development/docast/commit/2895feb8d75fa29f57c1644e4b6ebe30bae15c65)] **deps:** Bump actions/github-script from 6.4.0 to 6.4.1 ([#106](https://github.com/flex-development/docast/issues/106))
- [[`6aae779`](https://github.com/flex-development/docast/commit/6aae7793ee0eb94715b178199722f012196dc3a9)] **deps:** Bump actions/setup-node from 3.6.0 to 3.7.0 ([#210](https://github.com/flex-development/docast/issues/210))
- [[`20a40ae`](https://github.com/flex-development/docast/commit/20a40ae9edfba8386ef7a07e96f754dc0e3ca97b)] **deps:** Bump crazy-max/ghaction-import-gpg from 5.2.0 to 5.3.0 ([#150](https://github.com/flex-development/docast/issues/150))
- [[`cb43550`](https://github.com/flex-development/docast/commit/cb4355048c1a80688356bd35f2d3c2c5713f4f96)] **deps:** Bump dependabot/fetch-metadata from 1.3.6 to 1.4.0 ([#124](https://github.com/flex-development/docast/issues/124))
- [[`aeb5e40`](https://github.com/flex-development/docast/commit/aeb5e40a5368ce6cdb289209d8675f4d9cd7c333)] **deps:** Bump dependabot/fetch-metadata from 1.4.0 to 1.5.0 ([#179](https://github.com/flex-development/docast/issues/179))
- [[`bf2b3b8`](https://github.com/flex-development/docast/commit/bf2b3b8b100a693f8224d366e5c6015f540eb916)] **deps:** Bump dependabot/fetch-metadata from 1.5.0 to 1.5.1 ([#182](https://github.com/flex-development/docast/issues/182))
- [[`130280f`](https://github.com/flex-development/docast/commit/130280f9152af3c97e9c039d7230498fc6405495)] **deps:** Bump dependabot/fetch-metadata from 1.5.1 to 1.6.0 ([#204](https://github.com/flex-development/docast/issues/204))
- [[`e8a17e0`](https://github.com/flex-development/docast/commit/e8a17e054aff1f3385a45d05df73a008e27082bd)] **deps:** Bump dessant/lock-threads from 4.0.0 to 4.0.1 ([#199](https://github.com/flex-development/docast/issues/199))
- [[`97caa16`](https://github.com/flex-development/docast/commit/97caa167bea22b4a801a494caf35e2723e13fd5c)] **deps:** Bump octokit/graphql-action from 2.2.23 to 2.2.24 ([#108](https://github.com/flex-development/docast/issues/108))
- [[`3245ee1`](https://github.com/flex-development/docast/commit/3245ee1159d342a58fec4a80371aacb75d1a9421)] **deps:** Bump octokit/graphql-action from 2.2.24 to 2.2.25 ([#215](https://github.com/flex-development/docast/issues/215))
- [[`7d0c985`](https://github.com/flex-development/docast/commit/7d0c985d8f895db78f4884782717356560729c94)] **workflows:** [`approve-pr`] remove `dependabot-metadata` condition
- [[`da16718`](https://github.com/flex-development/docast/commit/da1671842beaae859dda87d34e1b58afbfd2e3eb)] **workflows:** [`label-linked-issues`] set `GITHUB_TOKEN`
- [[`444ce43`](https://github.com/flex-development/docast/commit/444ce43fc7692b9eac162bcd0a3561211162b0ad)] **workflows:** add `cache-cleanup`
- [[`ccd5749`](https://github.com/flex-development/docast/commit/ccd574950a22f31bb0b655c3393cec9e06aced68)] **workflows:** add `infrastructure`

### :house_with_garden: Housekeeping

- [[`7850ef7`](https://github.com/flex-development/docast/commit/7850ef7f66f4c995ee7f0ecfee84fdb05506fb44)] analyze types distribution
- [[`4cdfca8`](https://github.com/flex-development/docast/commit/4cdfca8baba0a02ee76a122b0243de3e671c82b7)] sync config files
- [[`8825b97`](https://github.com/flex-development/docast/commit/8825b9787064722fced95a2abd7c78a34a29b7d6)] update dev and test environments

## [1.0.0-alpha.12](https://github.com/flex-development/docast/compare/1.0.0-alpha.11...1.0.0-alpha.12) (2023-03-04)

### :bug: Fixes

- [[`e0403e8`](https://github.com/flex-development/docast/commit/e0403e855267a7a23b7276c6b1a69674856d8573)] **interfaces:** [`Context`] `kind`

## [1.0.0-alpha.11](https://github.com/flex-development/docast/compare/1.0.0-alpha.10...1.0.0-alpha.11) (2023-03-03)

### :bug: Fixes

- [[`6a9fcae`](https://github.com/flex-development/docast/commit/6a9fcae5fb68affa120d7fd51fdd47b212ee5d22)] **interfaces:** [`Point`] ensure `offset` is a `number`

## [1.0.0-alpha.10](https://github.com/flex-development/docast/compare/1.0.0-alpha.9...1.0.0-alpha.10) (2023-03-03)

### :package: Build

- [[`74b7512`](https://github.com/flex-development/docast/commit/74b7512579d93d8455a92bf570b50e26514b1511)] **deps-dev:** Bump eslint-plugin-unicorn from 45.0.2 to 46.0.0 ([#20](https://github.com/flex-development/docast/issues/20))
- [[`17ec0c8`](https://github.com/flex-development/docast/commit/17ec0c80d4602f70b1cb305195cf38e904151c8b)] **deps:** add `@flex-development/tutils`

### :robot: Continuous Integration

- [[`d115aaa`](https://github.com/flex-development/docast/commit/d115aaab21ddf257e54a11ed87afae1e1a872e53)] [[@dependabot](https://github.com/dependabot)] configure private registry
- [[`ddd86e2`](https://github.com/flex-development/docast/commit/ddd86e2af3828cc9d08ad359f4f2d2c44dfb63f7)] **deps:** Bump actions/add-to-project from 0.3.0 to 0.4.0 ([#10](https://github.com/flex-development/docast/issues/10))
- [[`4e4c661`](https://github.com/flex-development/docast/commit/4e4c6615f500c2ae407ab39ef5031af0251b8808)] **deps:** Bump actions/add-to-project from 0.4.0 to 0.4.1 ([#18](https://github.com/flex-development/docast/issues/18))
- [[`5adbec7`](https://github.com/flex-development/docast/commit/5adbec715cd7c67eb99598d0b8a10933c07d9b46)] **deps:** Bump actions/checkout from 3.1.0 to 3.2.0 ([#13](https://github.com/flex-development/docast/issues/13))
- [[`eb77407`](https://github.com/flex-development/docast/commit/eb774074daaf4c8e6179353ad4eafdfcbbe6f2e7)] **deps:** Bump actions/checkout from 3.2.0 to 3.3.0 ([#15](https://github.com/flex-development/docast/issues/15))
- [[`d0cbcfa`](https://github.com/flex-development/docast/commit/d0cbcfa57d00028c25cb43d6b68bd387ed9927ce)] **deps:** Bump actions/github-script from 6.3.3 to 6.4.0 ([#17](https://github.com/flex-development/docast/issues/17))
- [[`b900852`](https://github.com/flex-development/docast/commit/b9008524350e84c9ebea053adea394d3b20a0517)] **deps:** Bump actions/setup-node from 3.5.1 to 3.6.0 ([#14](https://github.com/flex-development/docast/issues/14))
- [[`792079c`](https://github.com/flex-development/docast/commit/792079c5c1ccdf830b1a97de516f8de911723fad)] **deps:** Bump dependabot/fetch-metadata from 1.3.5 to 1.3.6 ([#16](https://github.com/flex-development/docast/issues/16))
- [[`1fc0a90`](https://github.com/flex-development/docast/commit/1fc0a90404b9f8ff21d494be4e6dac5ea721dbc2)] **deps:** Bump dessant/lock-threads from 3.0.0 to 4.0.0 ([#12](https://github.com/flex-development/docast/issues/12))
- [[`775ee49`](https://github.com/flex-development/docast/commit/775ee4906a1fb090118e2393d9a0bd82103f2d81)] **deps:** Bump flex-development/dist-tag-action from 1.1.1 to 1.1.2 ([#11](https://github.com/flex-development/docast/issues/11))
- [[`3e1eee8`](https://github.com/flex-development/docast/commit/3e1eee8a2b13df77c5e0282ddfe0fe3dbe8fceef)] **workflows:** [`add-to-project`] add items from repo admin account
- [[`2630af9`](https://github.com/flex-development/docast/commit/2630af98888a13b2af52e9ff82b2ccb7e356b1e5)] **workflows:** [`add-to-project`] run workflow when pr is synchronized
- [[`c42da43`](https://github.com/flex-development/docast/commit/c42da43322115ff49dca81d7795e813c0f74b1bb)] **workflows:** [`approve-pr`] refactor approval step conditional
- [[`704144b`](https://github.com/flex-development/docast/commit/704144bd7d52a46450898ac91b29330b7c61f4a4)] **workflows:** [`ci`] split `ci` job into multiple jobs
- [[`c3961db`](https://github.com/flex-development/docast/commit/c3961dbc19367142e60435abc468325f802fe793)] **workflows:** [`dependabot-auto`] sign lockfile fix commit
- [[`723580d`](https://github.com/flex-development/docast/commit/723580dbe7f6c983f66f98b996cf917e8e637943)] **workflows:** [`integrity`] update `pull_request` event activity types
- [[`b5fca66`](https://github.com/flex-development/docast/commit/b5fca66f93c8ce33302e795d2006be9666ddfea8)] **workflows:** [`release`] publish release from repo admin account
- [[`b17cfd3`](https://github.com/flex-development/docast/commit/b17cfd33bdecd4ec90f49f2e4ae7ce681258666c)] **workflows:** add `auto-merge`
- [[`c60f6b1`](https://github.com/flex-development/docast/commit/c60f6b14680a2f8bfba5ecb4b76956d7e41d63be)] **workflows:** add `typescript-canary`
- [[`2af1e4b`](https://github.com/flex-development/docast/commit/2af1e4b28acebef7103e8c8a84284cd14cf8587a)] **workflows:** use environment files

### :pencil: Documentation

- [[`68e404b`](https://github.com/flex-development/docast/commit/68e404bf698ee71b695135a2d23e10a9df83fd2f)] update overview formatting

### :sparkles: Features

- [[`f28274d`](https://github.com/flex-development/docast/commit/f28274ddfc0f07894959b6dfb9b737f4dec5d5f4)] **types:** `Child`
- [[`fa6d75b`](https://github.com/flex-development/docast/commit/fa6d75bb2879d2c84d59df694b24cb1885ae98db)] **types:** `ParentType`

### :bug: Fixes

- [[`b18b198`](https://github.com/flex-development/docast/commit/b18b198b49578c3649bcb285d4fd2312a7b2fff6)] **install:** [git] make `postinstall` script work with git install

### :house_with_garden: Housekeeping

- [[`bec49b3`](https://github.com/flex-development/docast/commit/bec49b3caf5608d70f66aa692deaa74832817885)] update config files
- [[`a4e63c0`](https://github.com/flex-development/docast/commit/a4e63c0affe338eb1a68208f936036ce836aa2c9)] **github:** add "package manager" dropdown to bug report template
- [[`9c010fe`](https://github.com/flex-development/docast/commit/9c010fe1d299eb509b68d36a0559d441d1b9a3cc)] **github:** add "typescript version" input to bug report template
- [[`3c86791`](https://github.com/flex-development/docast/commit/3c86791192ec79c61a8d977bd33dd0be366a3e44)] **github:** configure sponsor button
- [[`0dd9d60`](https://github.com/flex-development/docast/commit/0dd9d604d4f3f2017181d99304cfe3d42bf31c6f)] **github:** remove "tests" section from pull request template

### :white_check_mark: Testing

- [[`eaf2254`](https://github.com/flex-development/docast/commit/eaf2254b9add2474311edb3e60e7fbe2342892f1)] **ts:** add remaining type tests

## [1.0.0-alpha.9](https://github.com/flex-development/docast/compare/1.0.0-alpha.8...1.0.0-alpha.9) (2022-11-20)

### :sparkles: Features

- [[`0b76065`](https://github.com/flex-development/docast/commit/0b76065b4b29077aaea9ae2749ddb021e2fb10a4)] **nodes:** `BlockTag#text`
- [[`0558cd7`](https://github.com/flex-development/docast/commit/0558cd7df5bb52b56ec0f2c35886f65807346837)] **nodes:** `InlineTag#text`

## [1.0.0-alpha.8](https://github.com/flex-development/docast/compare/1.0.0-alpha.7...1.0.0-alpha.8) (2022-11-19)

### :package: Build

- [[`6a385b5`](https://github.com/flex-development/docast/commit/6a385b582941e7718142bfecc9be3dcf673c8b32)] **deps-dev:** bump typescript from 4.9.1-beta to 4.9.3

### :mechanical_arm: Refactors

- [[`7bbd227`](https://github.com/flex-development/docast/commit/7bbd227eb9e90e2e3630166733688afd7cbbec67)] remove `members` from comment context

## [1.0.0-alpha.7](https://github.com/flex-development/docast/compare/1.0.0-alpha.6...1.0.0-alpha.7) (2022-11-18)

### :sparkles: Features

- [[`f0feb9a`](https://github.com/flex-development/docast/commit/f0feb9ab2f157e5373c81eb819e28f885db4b8d4)] **enums:** `Kind.ACCESSOR`

### :mechanical_arm: Refactors

- [[`5d0d32a`](https://github.com/flex-development/docast/commit/5d0d32a24c43228aab0c52030c1d85f4fbd01c48)] **enums:** `Kind.CONST_ENUM` -> `Kind.ENUM_CONST`
- [[`f992cd1`](https://github.com/flex-development/docast/commit/f992cd14bf52630a34f52d3e4e3ae18fb7f2d725)] **enums:** `Kind.ENUM_MEMBER` -> `Kind.MEMBER`
- [[`179070b`](https://github.com/flex-development/docast/commit/179070b209b9e4112358407767ca99f14b466579)] **enums:** `Kind.METHOD_DECLARATION`, `Kind.METHOD_SIGNATURE` -> `Kind.METHOD`
- [[`bca6e37`](https://github.com/flex-development/docast/commit/bca6e3734a39311485dde66ae44ae0ed3533102c)] **enums:** `Kind.PROPERTY_DECLARATION`, `Kind.PROPERTY_SIGNATURE` -> `Kind.PROPERTY`

## [1.0.0-alpha.6](https://github.com/flex-development/docast/compare/1.0.0-alpha.5...1.0.0-alpha.6) (2022-11-18)

### :sparkles: Features

- [[`ef34041`](https://github.com/flex-development/docast/commit/ef3404175f762b0f6a51b63827e929dbfff70e16)] **enums:** `Kind.STATEMENT`

## [1.0.0-alpha.5](https://github.com/flex-development/docast/compare/1.0.0-alpha.4...1.0.0-alpha.5) (2022-11-18)

### :mechanical_arm: Refactors

- [[`49ddaa3`](https://github.com/flex-development/docast/commit/49ddaa3975618dbda6eec5fd2efbed6219afedad)] **enums:** `Kind.MODULE_DECLARATION` -> `Kind.MODULE`

## [1.0.0-alpha.4](https://github.com/flex-development/docast/compare/1.0.0-alpha.3...1.0.0-alpha.4) (2022-11-13)

### :bug: Fixes

- [[`14c75c2`](https://github.com/flex-development/docast/commit/14c75c2f3c3814e78b70a09c84333ae22807462b)] **enums:** typo in `Modifier.DECLARE` value

### :mechanical_arm: Refactors

- [[`5bbe9f3`](https://github.com/flex-development/docast/commit/5bbe9f3f266379047cda06cf9c1e37aef693a7f0)] remove `modifiers` from comment context

## [1.0.0-alpha.3](https://github.com/flex-development/docast/compare/1.0.0-alpha.2...1.0.0-alpha.3) (2022-11-13)

### :sparkles: Features

- [[`7b2fac1`](https://github.com/flex-development/docast/commit/7b2fac1ec94cecc90784914f7d58bdcbdf20ad70)] **interfaces:** `Point`

## [1.0.0-alpha.2](https://github.com/flex-development/docast/compare/1.0.0-alpha.1...1.0.0-alpha.2) (2022-11-09)

### :sparkles: Features

- [[`56636b5`](https://github.com/flex-development/docast/commit/56636b539d95d0dbe2f439caf076dd99d63c707c)] **enums:** `Kind`, `Modifier`

## 1.0.0-alpha.1 (2022-11-09)

### :robot: Continuous Integration

- [[`be268a6`](https://github.com/flex-development/docast/commit/be268a6e64251acab24f553c5099cd0746338405)] add [@dependabot](https://github.com/dependabot) config

### :pencil: Documentation

- [[`667ffa9`](https://github.com/flex-development/docast/commit/667ffa93bbf109176c5ecab839e5da4d3630a46b)] **spec:** add specification

### :sparkles: Features

- [[`b801fe8`](https://github.com/flex-development/docast/commit/b801fe8462e39c460c0de44fdef263b03ea7d0b4)] **ts:** implement specification in typescript



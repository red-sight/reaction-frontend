import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import providers from "./providers";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      user,
      providers
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  });

  if (process.env.DEV && module.hot) {
    module.hot.accept(["./user"], () => {
      const newUser = require("./user").default;
      Store.hotUpdate({ modules: { user: newUser } });
    });
    module.hot.accept(["./providers"], () => {
      const newProviders = require("./providers").default;
      Store.hotUpdate({ modules: { providers: newProviders } });
    });
  }

  return Store;
}

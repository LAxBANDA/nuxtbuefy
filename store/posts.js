export const state = () => ({
    list: [],
    item: {}
  });
  
export const mutations = {
    SET_ITEMS(state, items) {
        state.list = items;
    },
    SET_ITEM(state, item) {
        state.item = item;
    },
};
  
export const actions = {
    // Items
    async getItem({ commit }, id) {
      try {
        const response = await this.$axios.$get(`posts/${id}`);
        commit("SET_ITEM", response);
      } catch (error) {
        console.log(error);
      }
    },
    async getItems({commit }, payload) {
        try {
            const response = await this.$axios.$get('posts');
            commit("SET_ITEMS", response);
        } catch (error) {
            console.log(error);
        }
    },
};
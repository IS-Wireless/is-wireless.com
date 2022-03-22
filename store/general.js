export const state = () => ({
    
});

export const getters = {
    getData: ($state) => {
        return $state
    }
}

export const mutations = {
    save($state, data) {
        Object.assign($state, data);
    }
};

export const actions = {
    init (context, data) {
        context.commit('save', data);
    }
}

<template>
  <div class="vuestro-sidebar-menu" @click.self="$emit('click')">
    <vuestro-sidebar-item v-for="(route, ridx) in routes"
                          :key="route.path"
                          v-if="route.meta &&
                                (route.meta.sidebar || route.meta.sidebarBottom) &&
                                (route.meta.role ? (route.meta.role === role || role.indexOf(route.meta.role) > -1):true) &&
                                (!route.meta.showFunc || route.meta.showFunc())"
                          :route="route">
    </vuestro-sidebar-item>
  </div>
</template>

<script>

import VuestroSidebarItem from './VuestroSidebarItem.vue';

export default {
  name: 'VuestroSideBarMenu',
  components: {
    VuestroSidebarItem,
  },
  props: {
    role: { type: [String, Array], default: () => [] }, // user role
    routes: { type: Array, required: true },
  },
};

</script>

<style scoped>

.vuestro-sidebar-menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-right: var(--vuestro-sidebar-item-padding-right);
  overflow-x: visible;
  overflow-y: auto;
}

.vuestro-app.mobile .vuestro-sidebar-menu .vuestro-sidebar {
  overflow-y: auto;
}

</style>
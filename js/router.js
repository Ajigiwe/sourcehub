/**
 * Hash-based SPA Router for SourceHub (Non-ESM Version)
 */

window.Router = class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = null;

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRouteChange());
        // Handle initial load
        window.addEventListener('load', () => this.handleRouteChange());
    }

    handleRouteChange() {
        const hash = window.location.hash.slice(1) || '/';
        const matchedRoute = this.matchRoute(hash);

        if (matchedRoute) {
            this.currentRoute = matchedRoute;
            this.renderRoute(matchedRoute);
        } else {
            console.error('No route matched for hash:', hash);
            window.location.hash = '#/';
        }
    }

    matchRoute(hash) {
        for (const route of this.routes) {
            const pattern = route.path.replace(/:\w+/g, '([^/]+)');
            const regex = new RegExp(`^${pattern}$`);
            const match = hash.match(regex);

            if (match) {
                const params = this.getParams(route.path, match);
                return { ...route, params };
            }
        }
        return null;
    }

    getParams(path, match) {
        const keys = (path.match(/:\w+/g) || []).map(key => key.slice(1));
        const values = match.slice(1);
        return keys.reduce((params, key, index) => {
            params[key] = values[index];
            return params;
        }, {});
    }

    async renderRoute(route) {
        const routerView = document.getElementById('router-view');
        if (!routerView) return;

        // Show loading state
        routerView.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';

        try {
            const content = await route.render(route.params);
            routerView.innerHTML = '';
            if (typeof content === 'string') {
                routerView.innerHTML = content;
            } else if (content instanceof HTMLElement) {
                routerView.appendChild(content);
            }
        } catch (error) {
            console.error('Error rendering route:', error);
            routerView.innerHTML = '<div class="section container text-center"><h2>Error</h2><p>Something went wrong while loading this page.</p></div>';
        }

        // Scroll to top on navigation
        window.scrollTo(0, 0);
    }

    static navigate(path) {
        window.location.hash = path;
    }
};

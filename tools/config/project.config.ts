import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the project seed configuration, allowing for specific overrides.
 *
 * # SystemJS configuration
 *
 * SystemJS configuration can be customized here. The configuration of SystemJS for the `dev` environment
 * is set through SYSTEM_CONFIG_DEV. The configuration of SystemJS of the production application is set
 * through SYSTEM_CONFIG. Per default, the configuration of the `dev` environment will be used in production
 * which means we can use SYSTEM_CONFIG_DEV for setting/extending/overriding the module loader configuration.
 *
 * # Script and style injection
 *
 * Additionally, it is also possible to inject scripts and styles directly in the masterpage (index.html) using
 * templating.
 *
 * Example:
 * this.NPM_DEPENDENCIES = [ // The path in 'src' is relative to 'node_modules'.
 *    ...this.NPM_DEPENDENCIES, // inherit the default configuration
 *    {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'}, // inject explicitely into lib section
 *    {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true}, // inject into appropriate section based on extension
 * ];
 *
 * this.APP_ASSETS = [ // The path in 'src' is relative to 'assets'.
 *    ...this.APP_ASSETS,
 *    {src: `jquery/jquery.min.js`, inject: 'libs'}
 * ];
 *.
 * The inject  property of the dependency indicate how to inject it in the masterpage:
 * - libs, the dependency will be injected into the <!-- libs:js --> section of the index file.
 * - shims, the dependency will be injected into the <!-- shims:js --> section of the index file.
 * - true, then the dependency will be injected in <!-- inject:css --> or <!-- inject:js --> (depending on its type)
 *
 * # Build configuration
 *
 * SystemJS build configuration can be set through the SYSTEM_BUILDER_CONFIG property.
 *
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();

    this.APP_TITLE = 'Citadel';

    const themeBase = `${this.ASSETS_SRC}/theme/metronic/assets`;

    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // theme scripts
      {src: `${themeBase}/global/plugins/jquery.min.js`, inject: 'libs'},
      {src: `${themeBase}/global/plugins/bootstrap/js/bootstrap.min.js`, inject: 'libs'},
      {src: `${themeBase}/global/plugins/js.cookie.min.js`, inject: 'libs'},
      {src: `${themeBase}/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js`, inject: 'libs'},
      {src: `${themeBase}/global/plugins/jquery.blockui.min.js`, inject: 'libs'},
      {src: `${themeBase}/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js`, inject: 'libs'},
      {src: `${themeBase}/global/scripts/app.min.js`, inject: 'libs'},
      {src: `${themeBase}/layouts/layout/scripts/layout.min.js`, inject: 'libs'},
      {src: `${themeBase}/layouts/global/scripts/quick-sidebar.min.js`, inject: 'libs'},
      // theme css
      {src: `${themeBase}/global/plugins/font-awesome/css/font-awesome.min.css`, inject: true},
      {src: `${themeBase}/global/plugins/simple-line-icons/simple-line-icons.min.css`, inject: true},
      {src: `${themeBase}/global/plugins/bootstrap/css/bootstrap.min.css`, inject: true},
      {src: `${themeBase}/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css`, inject: true},
      {src: `${themeBase}/global/css/components.min.css`, inject: true},
      {src: `${themeBase}/global/css/plugins.min.css`, inject: true},
      {src: `${themeBase}/layouts/layout/css/layout.min.css`, inject: true},
      {src: `${themeBase}/layouts/layout/css/themes/darkblue.min.css`, inject: true},
      {src: `${themeBase}/layouts/layout/css/custom.min.css`, inject: true},
    ];

    // Adding plugins
    this.SYSTEM_CONFIG_DEV.pluginFirst = true;
    this.SYSTEM_CONFIG_DEV.paths['[css]'] = `node_modules/systemjs-plugin-css/css`;
    this.SYSTEM_CONFIG_DEV.paths['[text]'] = `node_modules/systemjs-plugin-text/text`;

    // Configuring production build
    this.SYSTEM_BUILDER_CONFIG.baseURL = '.';
    this.SYSTEM_BUILDER_CONFIG.pluginFirst = this.SYSTEM_CONFIG_DEV.pluginFirst;
    this.mergeObject(this.SYSTEM_BUILDER_CONFIG.paths, this.SYSTEM_CONFIG_DEV.paths);
  }
}

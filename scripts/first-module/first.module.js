import settingsSelector from './components/settings-selector/settings-selector.component';
import settingsViewer from './components/settings-viewer/settings-viewer.component';
import settingsService from './services/settings.service';

export default angular
  .module('firstModule', [])
  .service('settingsService',settingsService)
  .component('settingsSelector', settingsSelector())
  .component('settingsViewer', settingsViewer())
  .name;
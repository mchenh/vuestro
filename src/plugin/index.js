import VuestroApp from '../components/VuestroApp.vue';
import VuestroAreaChart from '../components/charts/VuestroAreaChart.vue';
import VuestroBarChart from '../components/charts/VuestroBarChart.vue';
import VuestroButton from '../components/VuestroButton.vue';
import VuestroCaret from '../components/VuestroCaret.vue';
import VuestroCard from '../components/VuestroCard.vue';
import VuestroContainer from '../components/VuestroContainer.vue';
import VuestroCleanKvp from '../components/VuestroCleanKvp.vue';
import VuestroColorPicker from '../components/VuestroColorPicker.vue';
import VuestroDropdown from '../components/VuestroDropdown.vue';
import VuestroDonutGauge from '../components/charts/VuestroDonutGauge.vue';
import VuestroEditableText from '../components/VuestroEditableText.vue';
import VuestroEllipsisText from '../components/VuestroEllipsisText.vue';
import VuestroForceGraph from '../components/charts/VuestroForceGraph.vue';
import VuestroGeoPattern from '../components/VuestroGeoPattern.vue';
import VuestroGrid from '../components/VuestroGrid.vue';
import VuestroGridBox from '../components/VuestroGridBox.vue';
import VuestroIcon from '../components/VuestroIcon.vue';
import VuestroListButton from '../components/list/VuestroListButton.vue';
import VuestroListGroup from '../components/list/VuestroListGroup.vue';
import VuestroListGroupToggle from '../components/list/VuestroListGroupToggle.vue';
import VuestroModal from '../components/VuestroModal.vue';
import VuestroObjectBrowser from '../components/VuestroObjectBrowser.vue';
import VuestroPanel from '../components/VuestroPanel.vue';
import VuestroPill from '../components/VuestroPill.vue';
import VuestroSankeyChart from '../components/charts/VuestroSankeyChart.vue';
import VuestroSearchBox from '../components/VuestroSearchBox.vue';
import VuestroSidebar from '../components/sidebar/VuestroSidebar.vue';
import VuestroStatTile from '../components/VuestroStatTile.vue';
import VuestroSvgTooltip from '../components/charts/VuestroSvgTooltip.vue';
import VuestroTable from '../components/VuestroTable.vue';
import VuestroTextField from '../components/VuestroTextField.vue';
import VuestroTimePicker from '../components/VuestroTimePicker.vue';
import VuestroTitle from '../components/VuestroTitle.vue';
import VuestroTray from '../components/VuestroTray.vue';

export default {
  install(Vue, options) {
    Vue.component(VuestroApp.name, VuestroApp);
    Vue.component(VuestroAreaChart.name, VuestroAreaChart);
    Vue.component(VuestroBarChart.name, VuestroBarChart);
    Vue.component(VuestroButton.name, VuestroButton);
    Vue.component(VuestroCaret.name, VuestroCaret);
    Vue.component(VuestroCard.name, VuestroCard);
    Vue.component(VuestroContainer.name, VuestroContainer);
    Vue.component(VuestroCleanKvp.name, VuestroCleanKvp);
    Vue.component(VuestroColorPicker.name, VuestroColorPicker);
    Vue.component(VuestroDropdown.name, VuestroDropdown);
    Vue.component(VuestroDonutGauge.name, VuestroDonutGauge);
    Vue.component(VuestroEditableText.name, VuestroEditableText);
    Vue.component(VuestroEllipsisText.name, VuestroEllipsisText);
    Vue.component(VuestroForceGraph.name, VuestroForceGraph);
    Vue.component(VuestroGeoPattern.name, VuestroGeoPattern);
    Vue.component(VuestroGrid.name, VuestroGrid);
    Vue.component(VuestroGridBox.name, VuestroGridBox);
    Vue.component(VuestroIcon.name, VuestroIcon);
    Vue.component(VuestroListButton.name, VuestroListButton);
    Vue.component(VuestroListGroup.name, VuestroListGroup);
    Vue.component(VuestroListGroupToggle.name, VuestroListGroupToggle);
    Vue.component(VuestroModal.name, VuestroModal);
    Vue.component(VuestroObjectBrowser.name, VuestroObjectBrowser);
    Vue.component(VuestroPanel.name, VuestroPanel);
    Vue.component(VuestroPill.name, VuestroPill);
    Vue.component(VuestroSankeyChart.name, VuestroSankeyChart);
    Vue.component(VuestroSearchBox.name, VuestroSearchBox);
    Vue.component(VuestroSidebar.name, VuestroSidebar);
    Vue.component(VuestroStatTile.name, VuestroStatTile);
    Vue.component(VuestroSvgTooltip.name, VuestroSvgTooltip);
    Vue.component(VuestroTable.name, VuestroTable);
    Vue.component(VuestroTextField.name, VuestroTextField);
    Vue.component(VuestroTimePicker.name, VuestroTimePicker);
    Vue.component(VuestroTitle.name, VuestroTitle);
    Vue.component(VuestroTray.name, VuestroTray);

    Vue.filter('vuestroCommas', (d) => {
      if (typeof(d) === 'number') {
        return Number(d).toLocaleString('en');
      }
      if (typeof(d) === 'string') {
        let n = Number(parseFloat(d)).toLocaleString('en');
        if (!isNaN(n)) {
          return n;
        }
      }
      return d;
    });

    Vue.filter('vuestroPhoneUS', (d) => {
      if (typeof(d) === 'number') {
        d = `${d}`;
      }
      return d.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    });

    Vue.filter('vuestroHMS', (d) => {
      return `${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}:${('0' + d.getSeconds()).slice(-2)}`;
    });

    Vue.filter('vuestroBytes', (intNum) => {
      if (intNum == null) {
        return '';
      }
      const suffixes = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
      if (intNum < 1000) {
        return intNum.toFixed(1) + suffixes[0];
      }
      let i = parseInt(Math.floor(Math.log(intNum) / Math.log(1000)), 10);
      return (intNum / Math.pow(1000, i)).toFixed(1) + suffixes[i];
    });

    Vue.directive('vuestro-blur', {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    });

    Vue.mixin({
      methods: {
        vuestroDownloadAsJson(data, filename) {
          if (!data || !filename) {
            console.error('downloadAsJSON needs data and filename params');
            return;
          }
    			var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data,null,2));
    	    var downloadAnchorNode = document.createElement('a');
    	    downloadAnchorNode.setAttribute("href", dataStr);
    	    downloadAnchorNode.setAttribute("download", filename);
    	    document.body.appendChild(downloadAnchorNode); // required for firefox
    	    downloadAnchorNode.click();
    	    downloadAnchorNode.remove();
        },
      }
    });
  }
};

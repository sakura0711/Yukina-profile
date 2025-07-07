import { e as buildAssetsURL } from '../_/nitro.mjs';
import __nuxt_component_1 from './index-B6x6sN1-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:path';
import 'node:crypto';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './index-CCqbQxu4.mjs';
import '@unhead/shared';
import 'unhead';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("1.DcBxuXG3.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-4" }, _attrs))}><div class="my-8 text-center align-middle text-xl font-black font-semibold tracking-normal text-violet-400"> \u4E00\u500B\u524D\u7AEF\u5C0F\u5EE2\u7269\uFF0C\u6B63\u5728\u5617\u8A66\u5B78\u7FD2\u4F7F\u7528 <br>`);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:raspberrypi-light" }, null, _parent));
  _push(`Raspberry Pi + `);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:nginx" }, null, _parent));
  _push(` Nginx + `);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:nuxtjs-light" }, null, _parent));
  _push(` Nuxt 3 + `);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:vuejs-light" }, null, _parent));
  _push(` Vue3 <br>\u4F86\u67B6\u8A2D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5C0F\u5C0F\u7DB2\u7AD9\u3002\u5E0C\u671B\u53EF\u4EE5\u5805\u6301\u4E0B\u53BB <i class="text-xs text-gray-500">2025/03/08</i>. </div><img${ssrRenderAttr("src", _imports_0)} class="h-60 w-60 rounded-3xl shadow-2xl" alt=""></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContentItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24" }, _attrs))}><div class="flex flex-col items-center"><h1 class="text-6xl font-semibold text-blue-600"><b class="text-[clamp(24px,10vw,5rem)]">Sakura Yukina</b></h1><p class="mt-1 text-[clamp(24px,12vw,10rem)] font-bold">\u843D\u6AFB\u3086\u304D\u306A</p></div>`);
  _push(ssrRenderComponent(_component_ContentItem, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B9xXuwIU.mjs.map

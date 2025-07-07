import { _ as __nuxt_component_0$1 } from './nuxt-link-DxjINoOo.mjs';
import __nuxt_component_1$1 from './index-B6x6sN1-.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderItem",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: [
        "fixed left-0 top-0 flex w-full items-center justify-around px-6 py-4 transition-all duration-300 max-2xl:justify-between md:px-10"
      ] }, _attrs))} data-v-54ef2801>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-54ef2801${_scopeId}><b class="text-2xl font-bold" data-v-54ef2801${_scopeId}>\u{1F338}</b><s class="bg-gradient-to-r from-red-300 via-pink-400 via-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent" data-v-54ef2801${_scopeId}> \u843D\u6AFB\u3086\u304D\u306A</s></p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode("b", { class: "text-2xl font-bold" }, "\u{1F338}"),
                createVNode("s", { class: "bg-gradient-to-r from-red-300 via-pink-400 via-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent" }, " \u843D\u6AFB\u3086\u304D\u306A")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-bold hidden gap-4 md:flex" data-v-54ef2801><div class="relative px-2 py-1 text-lg font-bold text-cyan-600 transition-all duration-300" style="${ssrRenderStyle({ "border-right": "4px double #ced2d9" })}" data-v-54ef2801><!--[-->`);
      ssrRenderList([
        { to: "/introduce", text: "\u7C21\u4ECB" },
        { to: "/project", text: "\u6280\u80FD\u6A39" },
        { to: "/about", text: "\u5947\u602A\u7684\u4F5C\u54C1" }
      ], (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: item.to,
          class: "px-3 hover:text-blue-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center justify-between gap-4 text-zinc-600" data-v-54ef2801><a href="https://github.com/sakura0711" class="flex items-center justify-center gap-2" target="_blank" data-v-54ef2801>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "grommet-icons:github",
        size: "1.5em"
      }, null, _parent));
      _push(`</a><a href="https://discordapp.com/users/565550082016149515" class="flex items-center justify-center gap-2" target="_blank" data-v-54ef2801>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:twotone-discord",
        size: "1.6em"
      }, null, _parent));
      _push(`</a><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=testuseroozx@gmail.com&amp;su=&amp;body=" target="_blank" class="flex items-center justify-center gap-2" data-v-54ef2801>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bx:bxl-gmail",
        size: "1.6em"
      }, null, _parent));
      _push(`</a></div></div><button class="text-3xl md:hidden" data-v-54ef2801>\u2630</button>`);
      if (isOpen.value) {
        _push(`<div class="absolute left-0 top-16 flex w-full flex-col items-center gap-6 bg-white py-4 text-cyan-600 shadow-md transition-all duration-300 md:hidden" data-v-54ef2801><!--[-->`);
        ssrRenderList([
          { to: "/introduce", text: "Intro" },
          { to: "/project", text: "Project" },
          { to: "/about", text: "Contact Us" }
        ], (item, index) => {
          _push(ssrRenderComponent(_component_nuxt_link, {
            key: index,
            to: item.to,
            class: "w-full py-2 text-center text-lg hover:text-blue-500",
            onClick: ($event) => isOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/HeaderItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54ef2801"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/FooterItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeaderItem = __nuxt_component_0;
  const _component_LayoutFooterItem = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LayoutHeaderItem, { class: "fixed left-0 top-0 z-50 block w-full p-8 backdrop-blur-md" }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_LayoutFooterItem, { class: "fixed bottom-0 left-0 z-50 w-full" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-jUL5OL5-.mjs.map

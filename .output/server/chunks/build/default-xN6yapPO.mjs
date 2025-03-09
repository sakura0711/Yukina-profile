import { _ as __nuxt_component_0$1 } from './nuxt-link-DxjINoOo.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0$2 from './index-CpvKNC9G.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './index-CCqbQxu4.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderItem",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "fixed left-0 top-0 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-10",
          isScrolled.value ? "bg-white shadow-md" : "bg-gray-100"
        ]
      }, _attrs))} data-v-f02e16ca>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "text-2xl font-bold text-blue-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SakuraYukina`);
          } else {
            return [
              createTextVNode("SakuraYukina")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="text-3xl md:hidden" data-v-f02e16ca>\u2630</button><div class="hidden gap-8 text-lg md:flex" data-v-f02e16ca><!--[-->`);
      ssrRenderList([
        { to: "/introduce", text: "Intro" },
        { to: "/project", text: "Project" },
        { to: "/about", text: "Contact Us" }
      ], (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: item.to,
          class: "relative px-4 py-2 transition-all duration-300 hover:text-blue-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)} <span class="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full" data-v-f02e16ca${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text) + " ", 1),
                createVNode("span", { class: "absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (isOpen.value) {
        _push(`<div class="absolute left-0 top-16 flex w-full flex-col items-center gap-6 bg-white py-4 shadow-md transition-all duration-300 md:hidden" data-v-f02e16ca><!--[-->`);
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f02e16ca"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-10 items-center justify-center gap-4" }, _attrs))}><a href="https://github.com/sakura0711" class="flex items-center justify-center gap-2" target="_blank">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "skill-icons:github-dark",
    size: "2em"
  }, null, _parent));
  _push(`<i>GitHub</i></a><a href="https://discordapp.com/users/565550082016149515" class="flex items-center justify-center gap-2" target="_blank">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "skill-icons:discord",
    size: "2em"
  }, null, _parent));
  _push(`<i>Discord</i></a><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=testuseroozx@gmail.com&amp;su=&amp;body=" target="_blank" class="flex items-center justify-center gap-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "skill-icons:gmail-light",
    size: "2em"
  }, null, _parent));
  _push(`<i>Gmail</i></a></div>`);
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
  _push(ssrRenderComponent(_component_LayoutHeaderItem, { class: "fixed left-0 top-0 z-50 block w-full shadow-md" }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_LayoutFooterItem, { class: "fixed bottom-0 left-0 z-50 w-full bg-neutral-500/50 p-8 text-white shadow-md backdrop-blur-md" }, null, _parent));
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
//# sourceMappingURL=default-xN6yapPO.mjs.map

import { h as buildAssetsURL } from '../_/nitro.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import __nuxt_component_1 from './index-DKnuNrXC.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'unhead/server';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'node:path';
import 'node:crypto';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './v3-CcFQcKAd.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("1.DcBxuXG3.jpg");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHgklEQVR4nO2bTWwUZRyHV8EEPZtAgLZibGe6nSmF7sBsYltBYjVs02rCRYMeTbwQD1wgAhfccjHRg5F40YR4MJEWQZpY6EwruxVD9ERDQgyEncGFotFUPjpDO2aEDdtJP3Z33q+Z/T3J/9z33ffJPO9s20QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA3XEhmezIy/LhnCSZOUm6mpPle3lJmsnJ8rW8JJ3OS9L+n1taNvFeZ71wf7x9k2Oo+x1TPeOYyjXHVGccQ7nnmupV11RNx1QOzZ5v28x7nYlJSXolJ8sX87LsrTQ5WZ7Ly/LwZHNzK+91x5UHE8mkYyinHEOdc03VW3mUSWdc7Wa+0PzGjc/mZPlEJeIsMg/ysnzI6OlZzXzhMcUzelb7TxXHUGcrE2fhOIbytWc0rWGy2IvJ5Lq8LP9SozxPRpLGL0jSeiaLjjHehS3rXUMZr0WcBWMoF71zylqqizWamtZUmqwKszY92dLyBtVFxxh3vH2nY6p/hJbnyVzyLnU+R23BIbK17N0oJ8tHkbTqkuUaytHK7zrV5SxBg1xrazdpeYJJyzc3b6Cy+BjhnVPWOqY6SlqchdO2g/jCSaZrmbmdk6Re4ouPCe5Ye69jKLfpyvPo7YzownOtrVsYyFNK2nxelj+91Nn5DNFNRBjv2z2rXEM9QiNZS83shNJObAP+l4SsBCpL2sQNXa/7pN3Q9Q3umDLBSpyyu9BHxATyv2FmLpAse1Zam765PVW3b2mF9LadVjpF8i2rcoFM1SC2kbws/85DIDut+RLNW3qqrpLm7dmzyk5rR6y0Nud/BjwE8n/tQWxDOUm6y0ug0lh6arweklbcvn2tndZGy/fO5QlkKHeJbYqHPEGBHj+NYp20wuNkBffN6QnkxU6guCbNCyQLAlEUKG5JKy6SLAjEQKA4JK2wRLIgECOBopo0b4VkQSCGAkUtacUKkgWBOAgUhaQVKkwWBOIkkKhJ86pMFgTiKJBoSSvWkCwIJIBAIiStUGOyIJAgAvFKmhcyWbETaKK17VZUBWKdtCKBZIkg0H1TLRL7UJTDl+e/6nqLuUQkD4FF0gqEksVboOvntl7fO5yZJfbBNA7aXlPW8t5/9zNvojU5H1WBaCXNI5wsXgLNmsrcNyNdD/qG+73M0IBHVKDS9H444p3Z+nJkBSKdtCKFZPEQ6I6x+eHB073/i1MaKgL5oxyZ8j7f9V6kBSKRtAKlZLEW6NfRbd7eU5kF8lAVqDxpPyXbIitQrUmjnSybkUCzpuqdGOnxSsliKhCLpLE4nGqTxiJZNgOBpo0OL5gsLgLRTBrLQ6okaaySZVMWaKlkcROIVtJYH9RSSWOdLJuSQCsli6tANJLG47CCSeORLJuCQJUkSwiBSCaN56E9kki77Q/vdbiMkiWMQKSSxvvgRBmXUbKEEohE0ngfnCjjMkqWkAKFSRrvgxNlXEbJElagWpPG++BEGZdRsoQWqJak8T44UcZllKxICFRN0ngfnCjjMkpWZAQqT9pEa9uSfx7C++BEGZdRsiIlUHnSRjrSDgTSqhJo2uiYI52sSApUStrxHW/fwxNIq0ig30a1hzSSFVmBSkn74J1P7uZk2UXCtEUF8v9i8MTZLpdWsiItUGle3/fDfbOt/Q7uQNoCgf411L8Pnn7NZSFOpAV6lLTL7vepninel1dR5taPHVf2DvcxlSfSAvnzwsc35m09dcDSUy7vA+Q1lr93PXWgb6h/nrU8kRfIH/9n30xr3XY6ZdWdPOlU0dJTu/zPgIc8sRHIx+7sfN5Ka2d5Hyqz0VPnb2nautL+IVBIgXy8ROIpO53aZ6c1J7ZPHT310P/LRy+ReLp87xCIgEAl4po0qyxZQSAQQYFimTR9YbIgEOE70GLEIWnWEsmCQAwEinrSrGWSBYEYChTJpOnLJwsCMRYoKkmzKkwWBOIgkOhJs6pIFgTiKJCQSdOrSxYE4iyQKEmzakwWBBJAIN5Js0IkCwIJJBCXpOnhkgWBBBOIVdIsQskKgl9lCCAQ7aRZBJMVBAIJJBCVpOlkkxUEAgkmEKmkWZSSFQQCCShQ2KTRTFYQCCSwQDUljXKygkAgwQWqNGmskhUEAkVAoJWSxjJZQSBQhARaNGmMkxUEAkVMIB8/U/7/ZPnDOllBIFAEBRKJDP4vDAKFAQJBoFBAIAgUCggEgUIBgSBQKCAQBAoFBIJAoYBAECgUEAgChQICQaBQQCAIFAoIBIFCAYEgUCggEASqd4GsmVolCDPENhBxMjwEOjnwD7ENNGTtKxCo3p5A/VPENtAwaH0JgepLoN0nB74gtoHGrLULAtWXQH3fvbmT6CYasvYY7kB8yLB++gz1m8Q30ZgtvtiYtaZxiWZPhu3d58++U30vUdnIxuzN7sZB+y+8hbElw1Ce3UP9XVQ3s+FYoblh0DbwGs8OJvKcHBij9uRZjMZj1quNg9bxhqw1Ret7ImabEZwMnXvOjP+qnhkaOE78wgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAhKv8BPoQGJr0iG34AAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,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";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fadein-delay2 mx-auto mt-16 w-[70%] rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-md md:min-w-[720px] xl:w-[50%]" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} class="animate-fadein-delay3 absolute -right-20 -top-20 z-10 h-40 w-40 rounded-3xl shadow-2xl" alt=""><h2 class="mb-4 text-2xl font-semibold text-gray-700">\u95DC\u65BC\u6211</h2><p class="mb-5 text-xl font-black font-semibold tracking-normal text-violet-400"> \u4E00\u500B\u524D\u7AEF\u5C0F\u5EE2\u7269\uFF0C\u6B63\u5728\u5617\u8A66\u5B78\u7FD2\u4F7F\u7528 <br>`);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:raspberrypi-light" }, null, _parent));
  _push(`Raspberry Pi + `);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:nginx" }, null, _parent));
  _push(` Nginx + `);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:nuxtjs-light" }, null, _parent));
  _push(` Nuxt 3 + `);
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:vuejs-light" }, null, _parent));
  _push(` Vue3 <br>\u4F86\u67B6\u8A2D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5C0F\u5C0F\u7DB2\u7AD9\u3002\u5E0C\u671B\u53EF\u4EE5\u5805\u6301\u4E0B\u53BB <i class="text-xs text-gray-500">2025/03/08</i>. </p><h2 class="mb-2 text-2xl font-semibold text-gray-700">\u6280\u80FD</h2><ul class="mb-6 flex flex-wrap gap-3"><li class="flex items-center justify-center rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "skill-icons:photoshop",
    class: "mr-2"
  }, null, _parent));
  _push(` photoshop </li><li class="flex items-center justify-center rounded-full bg-green-100 px-4 py-2 font-medium text-green-800">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "skill-icons:vuejs-light",
    class: "mr-2"
  }, null, _parent));
  _push(` Vue3 </li><li class="flex items-center justify-center rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-800">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ep:element-plus",
    class: "mr-2"
  }, null, _parent));
  _push(` element-plus </li><li class="flex items-center justify-center rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-800">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:bootstrap",
    class: "mr-2"
  }, null, _parent));
  _push(` bootstrap </li></ul><h2 class="mb-2 text-2xl font-semibold text-gray-700">\u806F\u7D61\u65B9\u5F0F</h2><div class="flex flex-col flex-wrap gap-1"><span class="font-semibold text-gray-500"><img${ssrRenderAttr("src", _imports_1)} class="ml-[0.1rem] inline-block h-8 w-8" alt=""> testuseroozx@gamil.com</span><span class="font-semibold text-gray-500"><img${ssrRenderAttr("src", _imports_2)} class="inline-block h-9 w-9" alt="">nope</span></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/ContentItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContentItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 py-24" }, _attrs))} data-v-1a04c3b7><div class="animate-fadein flex flex-col items-center" data-v-1a04c3b7><h1 class="text-6xl font-semibold text-blue-600 drop-shadow-lg" data-v-1a04c3b7><b class="text-[clamp(24px,10vw,5rem)]" data-v-1a04c3b7>Sakura Yukina</b></h1><div class="my-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400" data-v-1a04c3b7></div><p class="animate-fadein-delay mt-1 text-[clamp(24px,12vw,10rem)] font-bold text-pink-500" data-v-1a04c3b7>\u843D\u6AFB\u3086\u304D\u306A</p><p class="animate-fadein-delay2 mt-2 text-lg italic text-gray-600" data-v-1a04c3b7></p><div class="animate-fadein-delay3 mt-6 flex gap-4" data-v-1a04c3b7><a href="#" class="rounded-full bg-white p-3 shadow transition hover:bg-blue-100" data-v-1a04c3b7></a><a href="#" class="rounded-full bg-white p-3 shadow transition hover:bg-pink-100" data-v-1a04c3b7></a><a href="#" class="rounded-full bg-white p-3 shadow transition hover:bg-yellow-100" data-v-1a04c3b7></a></div></div><div class="relative flex w-full justify-center" data-v-1a04c3b7>`);
      _push(ssrRenderComponent(ContentItem, { class: "animate-fadein-delay3 relative mt-8" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a04c3b7"]]);

export { index as default };
//# sourceMappingURL=index-kXFnL2wx.mjs.map

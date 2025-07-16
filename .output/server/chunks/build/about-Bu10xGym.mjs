import { defineComponent, ref, mergeProps, createVNode, resolveDynamicComponent, withCtx, getCurrentInstance, watch, onMounted, h, warn, markRaw, renderSlot, createRenderer as createRenderer$1, camelize, effectScope, watchEffect, nextTick, useSSRContext, inject, onUnmounted, BaseTransition, useTransitionState, getTransitionRawChildren, Fragment, createApp as createApp$1, resolveTransitionHooks, setTransitionHooks } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { utils } from '@pixi/core';
import { AlphaFilter } from '@pixi/filter-alpha';
import { BlurFilterPass, BlurFilter } from '@pixi/filter-blur';
import { ColorMatrixFilter } from '@pixi/filter-color-matrix';
import { DisplacementFilter } from '@pixi/filter-displacement';
import { FXAAFilter } from '@pixi/filter-fxaa';
import { NoiseFilter } from '@pixi/filter-noise';
import { Application as Application$1, Text, BitmapText, Texture, Container, DisplayObject, Filter, Sprite, Assets, Ticker, ParticleContainer, SimpleMesh, Graphics, TilingSprite, Mesh, NineSlicePlane, BlurFilter as BlurFilter$1, AlphaFilter as AlphaFilter$1, DisplacementFilter as DisplacementFilter$1, ColorMatrixFilter as ColorMatrixFilter$1, NoiseFilter as NoiseFilter$1, FXAAFilter as FXAAFilter$1, AnimatedSprite, SimplePlane, SimpleRope } from '@pixi/accessibility';
import { throttle, isFunction, isObject, toArray, isString, isUndefined, noop } from '@antfu/utils';
import { nanoid } from 'nanoid';
import '../_/nitro.mjs';
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
import 'vue-router';
import '@iconify/vue';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>ProgramItem</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/ProgramItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProgramItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>ArtItemPage</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/ArtItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ArtItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var elementNames = [
  "container",
  "sprite",
  "graphics",
  "text",
  "bitmap-text",
  "tiling-sprite",
  "animated-sprite",
  "mesh",
  "simple-plane",
  "nine-slice-plane",
  "simple-rope",
  "filter",
  "blur-filter",
  "alpha-filter",
  "displacement-filter",
  "color-matrix-filter",
  "f-x-a-a-filter"
];
var prefix = "pixi-";
function isCustomElement(name) {
  let normalizedName = name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  if (normalizedName.startsWith("-"))
    normalizedName = normalizedName.slice(1);
  const isPixiElement = elementNames.includes(normalizedName);
  const isPrefixElement = normalizedName.startsWith(prefix) && elementNames.includes(normalizedName.slice(prefix.length));
  return isPixiElement || isPrefixElement;
}
const filters = {
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.AlphaFilter
   */
  AlphaFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilter
   */
  BlurFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilterPass
   */
  BlurFilterPass,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.ColorMatrixFilter
   */
  ColorMatrixFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.DisplacementFilter
   */
  DisplacementFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.FXAAFilter
   */
  FXAAFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.NoiseFilter
   */
  NoiseFilter
};
Object.entries(filters).forEach(([key, FilterClass]) => {
  Object.defineProperty(filters, key, {
    get() {
      return utils.deprecation("7.1.0", `filters.${key} has moved to ${key}`), FilterClass;
    }
  });
});
function setTextureOptions(texture, options = {}) {
  for (const key in options)
    texture.baseTexture[key] = options[key];
}
function normalizeTexture(value) {
  if (typeof value === "string")
    return Texture.from(value);
  return value;
}
function isOn(props) {
  return Object.keys(props || {}).some((p) => p.startsWith("on"));
}
var renderers = {};
function setObjectProperty(inst, key, prevValue, nextValue) {
  var _a;
  const scope = effectScope();
  function update() {
    var _a2;
    if (prevValue && nextValue !== prevValue)
      (_a2 = inst[`__vp_scope_${key}`]) == null ? void 0 : _a2.stop();
    for (const [setKey, value] of Object.entries(nextValue))
      inst[key][setKey] = value;
  }
  scope.run(() => {
    watchEffect(update);
    nextTick(update);
  });
  (_a = inst.on) == null ? void 0 : _a.call(inst, "destroyed", () => scope.stop());
  inst[`__vp_scope_${key}`] = scope;
  return true;
}
function setPointProperty(inst, name, key, prevValue, nextValue) {
  switch (key) {
    case name:
      if (isObject(nextValue))
        return setObjectProperty(inst, name, prevValue, nextValue);
      else
        return callInstanceSetter(inst, name, nextValue);
    case `${name}X`:
      return setPropertyValue(inst[name], "x", () => inst[name].x = nextValue);
    case `${name}Y`:
      return setPropertyValue(inst[name], "y", () => inst[name].y = nextValue);
  }
  return false;
}
function setPropertyValue(inst, key, setter) {
  const initKey = `_vp_initkey_${key}`;
  function update() {
    setter();
  }
  if (!inst[initKey]) {
    Reflect.set(inst, initKey, true);
    nextTick(update);
  } else {
    update();
  }
  return true;
}
function callInstanceSetter(inst, key, value) {
  const [v1, v2, v3] = Array.isArray(value) ? value : [value, value, value];
  setPropertyValue(inst[key], key, () => {
    var _a;
    return (_a = inst[key]) == null ? void 0 : _a.set(v1, v2, v3);
  });
  return true;
}
function setSkipFirstValue(inst, key, setter) {
  if (inst[`_vp_skip_first_set_${key}`])
    setPropertyValue(inst, key, setter);
  else
    inst[`_vp_skip_first_set_${key}`] = true;
  return true;
}
var ContainerRender = {
  name: "Container",
  createElement: () => new Container()
};
var ParticleContainerRender = {
  name: "ParticleContainer",
  createElement: (props) => new ParticleContainer(
    props["max-size"] || props.maxSize,
    props.properties
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "max-size":
      case "properties":
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var SpriteRender = {
  name: "Sprite",
  createElement: (props) => new Sprite(normalizeTexture(props.texture)),
  remove(node) {
    node.destroy();
  }
};
var SimpleMeshRender = {
  name: "SimpleMesh",
  createElement: (props) => new SimpleMesh(normalizeTexture(props.texture))
};
var GraphicsRender = {
  name: "Graphics",
  createElement: (props) => new Graphics(props.geometry)
};
var TextRender = {
  name: "Text",
  createElement: (props) => new Text(
    props.text,
    props.style,
    props.canvas
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "text":
        setSkipFirstValue(el, key, () => el.text = next);
        break;
      case "style":
        setSkipFirstValue(el, key, () => setObjectProperty(el, key, prev, next));
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var BitmapTextRender = {
  name: "BitmapText",
  createElement: (props) => new BitmapText(
    props.text,
    props.style
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "text":
        setSkipFirstValue(el, key, () => el.text = next);
        break;
      case "style":
        break;
      case "dirty":
      case "roundPixels":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var TilingSpriteRender = {
  name: "TilingSprite",
  createElement: (props) => new TilingSprite(
    normalizeTexture(props.texture),
    props.width,
    props.height
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "width":
      case "height":
        setSkipFirstValue(el, key, () => el[key] = next);
        break;
      case "uvRespectAnchor":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var AnimatedSpriteRender = {
  name: "AnimatedSprite",
  createElement: (props) => {
    return new AnimatedSprite(
      props.textures.map(normalizeTexture),
      props["auto-update"] || props.autoUpdate
    );
  },
  patchProp(el, key, prev, next) {
    switch (key) {
      case "textures":
        setSkipFirstValue(el, key, () => {
          el.textures = next.map(normalizeTexture);
          el.loop && el.gotoAndPlay(0);
        });
        break;
      case "playing":
        const isPlaying = next === "" || !!next;
        setPropertyValue(el, key, () => isPlaying ? el.play() : el.stop());
        break;
      case "gotoAndPlay":
        setPropertyValue(el, key, () => el.gotoAndPlay(next));
        break;
      case "loop":
      case "updateAnchor":
        patchBooleanProp(el, key, prev, next);
        break;
      case "onComplete":
      case "onFrameChange":
      case "onLoop":
        Reflect.set(el, key, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var MeshRender = {
  name: "Mesh",
  createElement: (props) => new Mesh(
    props.geometry,
    props.shader,
    props.state,
    props.drawMode
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "geometry":
      case "shader":
      case "state":
      case "drawMode":
        setSkipFirstValue(el, key, () => el[key] = next);
        break;
      case "roundPixels":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var NineSlicePlaneRender = {
  name: "NineSlicePlane",
  createElement: (props) => new NineSlicePlane(
    normalizeTexture(props.texture)
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "roundPixels":
      case "autoResize":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var SimplePlaneRender = {
  name: "SimplePlane",
  createElement: (props) => {
    return new SimplePlane(
      normalizeTexture(props.texture),
      props.width,
      props.height
    );
  }
};
var SimpleRopeRender = {
  name: "SimpleRope",
  createElement: (props) => {
    return new SimpleRope(
      normalizeTexture(props.texture),
      props.points
    );
  },
  patchProp(el, key, prev, next) {
    switch (key) {
      case "texture":
      case "points":
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var BlurFilterRender = {
  name: "BlurFilter",
  createElement: (props) => new BlurFilter$1(
    props.blur,
    props.quality,
    props.resolution
  )
};
var AlphaFilterRender = {
  name: "AlphaFilter",
  createElement: (props) => new AlphaFilter$1(props.alpha)
};
var DisplacementFilterRender = {
  name: "DisplacementFilter",
  createElement: (props) => new DisplacementFilter$1(
    props.sprite,
    props.scale
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "sprite":
      case "scale":
        setSkipFirstValue(el, key, () => el.scale = next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var ColorMatrixFilterRender = {
  name: "ColorMatrixFilter",
  createElement: () => new ColorMatrixFilter$1()
};
var NoiseFilterRender = {
  name: "NoiseFilter",
  createElement: (props) => new NoiseFilter$1(
    props.noise,
    props.seed
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "noise":
      case "seed":
        setSkipFirstValue(el, key, () => el[key] = next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var FXAAFilterRender = {
  name: "FXAAFilter",
  createElement: () => new FXAAFilter$1()
};
var defaultRenderer = [
  ContainerRender,
  ParticleContainerRender,
  SpriteRender,
  SimpleMeshRender,
  GraphicsRender,
  TextRender,
  BitmapTextRender,
  TilingSpriteRender,
  AnimatedSpriteRender,
  MeshRender,
  NineSlicePlaneRender,
  SimplePlaneRender,
  SimpleRopeRender,
  BlurFilterRender,
  AlphaFilterRender,
  DisplacementFilterRender,
  ColorMatrixFilterRender,
  NoiseFilterRender,
  FXAAFilterRender
];
function baseUse(options) {
  const { createElement: _createElement, name } = options;
  function createElement2(...args) {
    const element = _createElement(...args);
    element._vp_name = name;
    return element;
  }
  options.createElement = createElement2;
  renderers[name] = options;
}
function use(options) {
  if (Array.isArray(options))
    options.forEach(baseUse);
  else
    baseUse(options);
}
function rendererWithCapture(options) {
  const notOverrides = ["createComment", "insertStaticContent", "createText", "querySelector", "createElement"];
  for (const key in options) {
    if (notOverrides.includes(key))
      continue;
    const fn = options[key];
    if (key === "patchProp") {
      options[key] = (el, pKey, ...args) => {
        var _a;
        const inFn = (_a = renderers[el._vp_name]) == null ? void 0 : _a[key];
        pKey = camelize(pKey);
        return inFn ? inFn(el, pKey, ...args) : fn(el, pKey, ...args);
      };
      continue;
    }
    options[key] = (el, ...args) => {
      var _a;
      const inFn = (_a = renderers[el._vp_name]) == null ? void 0 : _a[key];
      return inFn ? inFn == null ? void 0 : inFn(el, ...args) : fn(el, ...args);
    };
  }
  return options;
}
function rendererWithOptions(renderer2) {
  const _createApp = renderer2.createApp;
  const _render = renderer2.render;
  function createApp3(...args) {
    const app = _createApp(...args);
    Object.assign(app.config.compilerOptions, {
      isCustomElement
    });
    return app;
  }
  function render2(...args) {
    return _render(...args);
  }
  use(defaultRenderer);
  Object.assign(renderer2, { createApp: createApp3, render: render2, use });
}
var Empty = class extends Sprite {
  constructor() {
    super(...arguments);
    __publicField(this, "visible", false);
    __publicField(this, "renderable", false);
    __publicField(this, "_vp_empty", true);
  }
  render() {
  }
};
function insertFilter(child, parent, _anchor) {
  var _a;
  (_a = parent.filters) != null ? _a : parent.filters = [];
  function remove2() {
    var _a2;
    const index = parent.filters.indexOf(child);
    (_a2 = parent.filters) == null ? void 0 : _a2.splice(index >>> 0, 1);
  }
  child.parent = parent;
  child.destroy = remove2;
  parent.filters.push(child);
}
function nextSiblingFilter(node) {
  var _a;
  const index = node.parent.filters.indexOf(node);
  if (node.parent.filters.length <= index + 1)
    return null;
  return (_a = node.parent.filters) == null ? void 0 : _a[index + 1];
}
function insertContainer(child, parent, anchor) {
  if (anchor)
    parent == null ? void 0 : parent.addChildAt(child, parent.getChildIndex(anchor));
  else if (child)
    parent.addChild(child);
}
function nextSiblingContainer(node) {
  var _a;
  const index = node.parent.getChildIndex(node);
  if (node.parent.children.length <= index + 1)
    return null;
  return (_a = node.parent.getChildAt(index + 1)) != null ? _a : null;
}
var defaultBooleanProps = ["accessible", "cullable", "renderable", "visible", "isMask"];
var pointProps = ["position", "scale", "pivot", "skew", "anchor", "tilePosition", "tileScale"];
function patchProp(el, key, prevValue, nextValue) {
  if (patchRenderProp(el, key, prevValue, nextValue))
    return;
  if (patchTextureProp(el, key, prevValue, nextValue))
    return;
  if (defaultBooleanProps.includes(key) && patchBooleanProp(el, key, prevValue, nextValue))
    return;
  if (patchPointProp(el, key, prevValue, nextValue))
    return;
  if (patchEventProp(el, key, prevValue, nextValue))
    return;
  Reflect.set(el, key, nextValue);
}
function patchTextureProp(el, key, _, nextValue) {
  if (key === "texture")
    return setSkipFirstValue(el, key, () => el.texture = normalizeTexture(nextValue));
  if (key === "textureOptions") {
    setTextureOptions(el.texture, nextValue);
    return true;
  }
  return false;
}
function patchRenderProp(el, key, prevValue, nextValue) {
  if (key === "onRender" && !prevValue && isFunction(nextValue)) {
    const scope = effectScope();
    scope.run(() => watchEffect(() => nextValue(el)));
    el.on("destroyed", () => scope.stop());
    return true;
  }
  return false;
}
function patchPointProp(el, key, prevValue, nextValue) {
  for (const name of pointProps) {
    if (key.startsWith(name))
      return setPointProperty(el, name, key, prevValue, nextValue);
  }
  return false;
}
function patchEventProp(el, key, prevValue, nextValue) {
  if (!key.startsWith("on"))
    return false;
  const eventName = key.slice(2).toLowerCase();
  if (prevValue)
    el.off(eventName, prevValue);
  if (nextValue)
    el == null ? void 0 : el.on(eventName, nextValue);
  return true;
}
function patchBooleanProp(_el, _key, _prevValue, nextValue) {
  _el[_key] = nextValue === "" || !!nextValue;
  return true;
}
function createElement(prefix2, name, _, _1, props) {
  let is;
  if (name.startsWith(prefix2)) {
    name = camelize(name);
    is = renderers[name.slice(prefix2.length)].createElement;
  } else {
    name = camelize(name);
    name = name.charAt(0).toUpperCase() + name.slice(1);
    is = renderers[name].createElement;
  }
  if (!is) {
    warn(`Unknown element ${name}`);
    is = () => new Container();
  }
  const element = is(props != null ? props : {});
  if (element instanceof DisplayObject) {
    if (isOn(props) && element.eventMode === "auto")
      element.eventMode = "static";
  }
  if (element instanceof Filter)
    element._vp_filter = true;
  markRaw(element);
  return element;
}
function parentNode(node) {
  return node == null ? void 0 : node.parent;
}
function createText(text) {
  text = text.replace(/\\n/g, "\n");
  return text ? new Text(text) : new Empty(Texture.EMPTY);
}
function createComment() {
  return new Empty(Texture.EMPTY);
}
function remove(node) {
  node.destroy();
}
function insert(child, parent, anchor) {
  if (Reflect.get(child, "_vp_filter"))
    insertFilter(child, parent);
  else
    insertContainer(child, parent, anchor);
}
function nextSibling(node) {
  if (Reflect.get(node, "_vp_filter"))
    return nextSiblingFilter(node);
  else
    return nextSiblingContainer(node);
}
function setText(prefix2, node, text) {
  text = text.replace(/\\n/g, "\n");
  node instanceof Text || node instanceof BitmapText ? node.text = text.trim() : warn(`Text is only supported with ${prefix2}-text element`);
}
var nodeOps = {
  createElement,
  parentNode,
  createText,
  createComment,
  remove,
  insert,
  nextSibling,
  setText
};
function createRenderer(options = {}) {
  const { createElement: createElement2, setText: setText2, ...nodeOps2 } = nodeOps;
  const { prefix: prefix2 = "pixi" } = options;
  const rendererOptions = rendererWithCapture({
    // @ts-expect-error
    createElement: (...args) => createElement2(prefix2, ...args),
    setElementText: (...args) => setText2(prefix2, ...args),
    setText: (...args) => setText2(prefix2, ...args),
    patchProp,
    ...nodeOps2
  });
  return createRenderer$1(rendererOptions);
}
var renderer = createRenderer();
rendererWithOptions(renderer);
var createApp = renderer.createApp;
renderer.render;
var appInjectKey = Symbol("pixi_application");
function inheritParent(app, appContext) {
  const parent = appContext == null ? void 0 : appContext.app;
  if (parent) {
    app.config.globalProperties = parent.config.globalProperties;
    Object.assign(app._context, parent._context);
  }
}
var Application = defineComponent({
  props: {
    antialias: { type: Boolean, default: true },
    autoDensity: { type: Boolean, default: true },
    autoStart: { type: Boolean, default: true },
    background: [Number, String, Array],
    backgroundColor: [Number, String, Array],
    backgroundAlpha: { type: Number, default: 1 },
    clearBeforeRender: { type: Boolean, default: true },
    forceCanvas: Boolean,
    alpha: Number,
    depth: Boolean,
    desynchronized: Boolean,
    failIfMajorPerformanceCaveat: Boolean,
    powerPreference: String,
    premultipliedAlpha: Boolean,
    preserveDrawingBuffer: Boolean,
    stencil: { type: Boolean, default: true },
    width: Number,
    height: Number,
    resolution: Number,
    resizeTo: Object,
    transferControlToOffscreen: Boolean
  },
  setup(props, { slots, expose }) {
    const { appContext } = getCurrentInstance();
    const canvas = ref();
    const pixiApp = ref();
    let app;
    function mount() {
      var _a;
      let view = canvas.value;
      if (props.transferControlToOffscreen)
        view = (_a = canvas.value) == null ? void 0 : _a.transferControlToOffscreen();
      const context = view == null ? void 0 : view.getContext("webgl", {
        alpha: props.alpha,
        antialias: props.antialias,
        depth: props.depth,
        desynchronized: props.desynchronized,
        failIfMajorPerformanceCaveat: props.failIfMajorPerformanceCaveat,
        powerPreference: props.powerPreference,
        premultipliedAlpha: props.premultipliedAlpha,
        preserveDrawingBuffer: props.preserveDrawingBuffer,
        stencil: props.stencil
      });
      if (!context)
        warn("could not crate webgl context");
      const params = { ...props };
      const inst = new Application$1({ view, ...params });
      inst.view.width = params.width;
      inst.view.height = params.height;
      pixiApp.value = markRaw(inst);
      app = createApp({
        render: () => renderSlot(slots, "default")
      });
      inheritParent(app, appContext);
      app.provide(appInjectKey, pixiApp);
      app.mount(pixiApp.value.stage);
    }
    function resize() {
      if (!pixiApp.value)
        return;
      const width = props.width || pixiApp.value.renderer.width;
      const height = props.height || pixiApp.value.renderer.height;
      pixiApp.value.renderer.resize(width, height);
    }
    watch(
      () => [props.width, props.height],
      throttle(50, resize)
    );
    onMounted(mount);
    expose({ canvas, app: pixiApp });
    return () => h("canvas", { ref: canvas });
  }
});
defineComponent({
  props: {
    tag: String,
    root: Object
  },
  setup(props, { slots, attrs }) {
    const { appContext } = getCurrentInstance();
    const element = (void 0).createElement("div");
    const pixiApp = ref(inject(appInjectKey));
    const childApp = ref();
    const root = props.root || pixiApp.value.view.parentNode;
    function mount() {
      if (!root)
        throw new Error("could not find root");
      const app = createApp$1({
        render: () => h(props.tag || "div", attrs, slots)
      });
      inheritParent(app, appContext);
      app.mount(element);
      root.appendChild(element.firstChild);
      childApp.value = app;
    }
    function unmount() {
      if (!childApp.value)
        return;
      childApp.value.unmount();
      childApp.value = void 0;
    }
    onMounted(mount);
    onUnmounted(unmount);
    return () => null;
  }
});
var loaderProps = {
  onResolved: Function,
  onProgress: Function,
  resources: {
    type: [Object, Array],
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  },
  bundleIds: String
};
defineComponent({
  props: loaderProps,
  setup(props, { slots }) {
    const loading = ref(false);
    const textures = ref();
    const progress = ref(0);
    const bundle = props.bundleIds || nanoid(5);
    function onProgress(p) {
      var _a;
      progress.value = p;
      (_a = props.onProgress) == null ? void 0 : _a.call(props, p);
    }
    async function load() {
      var _a;
      Assets.addBundle(bundle, await resolveAssets(props.resources));
      const _textures = await Assets.loadBundle(bundle, onProgress);
      for (const key in _textures)
        setTextureOptions(_textures[key], props.options);
      textures.value = _textures;
      (_a = props.onResolved) == null ? void 0 : _a.call(props, _textures);
    }
    watch(
      () => [props.resources, props.bundleIds],
      () => {
        loading.value = true;
        load().finally(() => loading.value = false);
      },
      { deep: true, immediate: true }
    );
    return () => {
      return loading.value ? renderSlot(slots, "fallback", { progress: progress.value }) : renderSlot(slots, "default", { textures: textures.value });
    };
  }
});
async function parseAsset(asset, alias) {
  const result = await asset;
  const parsed = !isString(result) ? result.default || result : result;
  if (typeof parsed === "string")
    return { alias: alias || parsed, src: parsed };
  else
    return { ...parsed, alias: alias || parsed.alias };
}
async function resolveAssets(assets) {
  const result = [];
  const isArray = Array.isArray(assets);
  for (const key in assets) {
    let asset = assets[key];
    asset = asset.default || asset;
    if (Array.isArray(asset)) {
      result.push(await parseAsset(asset[1], asset[0]));
      continue;
    }
    result.push(
      isArray ? await parseAsset(asset) : await parseAsset(asset, key)
    );
  }
  return result;
}
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function linear(p) {
  return p;
}
function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}
function ignore(fn) {
  try {
    return fn();
  } catch {
  }
}
function createDeferred() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = (v) => {
    resolve(v);
  };
  promise.reject = reject;
  return promise;
}
var pointKeys = [
  "pivot",
  "anchor",
  "position",
  "scale",
  "tileScale",
  "tilePosition",
  "skew",
  "tile"
];
function setPropertyValue2(instance, prop, value) {
  const name = pointKeys.find((key) => prop.startsWith(key));
  if (!name) {
    instance[prop] = value;
    return;
  }
  switch (prop) {
    case name:
      if (typeof value === "object")
        return setObjectProperty2(instance, name, value);
      else
        return setPointProperty2(instance, name, value);
    case `${name}X`:
      return setField(instance[name], "x", value);
    case `${name}Y`:
      return setField(instance[name], "y", value);
  }
}
function setObjectProperty2(instance, name, value) {
  for (const key in value)
    setField(instance[name], key, value[key]);
}
function setField(instance, key, value) {
  if (instance[key] !== void 0)
    Reflect.set(instance, key, value);
}
function setPointProperty2(instance, key, value) {
  instance[key].set(value, value);
}
function setProps(instance, transitions) {
  const optionsKeys = ["delay", "duration", "ease"];
  for (const transition of transitions) {
    const fields = Object.keys(transition).filter((i) => !optionsKeys.includes(i));
    for (const key of fields)
      setPropertyValue2(instance, key, transition[key]);
  }
}
function getValue(instance, prop) {
  const name = pointKeys.find((key) => prop.startsWith(key));
  if (!name)
    return instance[prop];
  switch (prop) {
    case name:
      return instance[name].x || instance[name].y;
    case `${name}X`:
      return instance[name].x;
    case `${name}Y`:
      return instance[name].y;
  }
}
async function callInstanceSetterHook(instance, props, name) {
  const eventName = `on${name[0].toLocaleUpperCase()}${name.slice(1)}`;
  const hook = props[name] || props[eventName];
  const filters2 = instance.filters || [];
  if (!hook)
    return;
  if (isFunction(hook)) {
    hook(instance);
    return;
  }
  filters2.forEach((filter) => callInstanceSetterHook(filter, filter, name));
  setProps(instance, toArray(hook));
}
async function callAnimationHook(instance, props, name, done, context) {
  var _a;
  const eventName = `on${name[0].toLocaleUpperCase()}${name.slice(1)}`;
  const hook = props[name] || props[eventName];
  for (const filter of instance.filters || [])
    callAnimationHook(filter, filter, name, noop);
  if (!hook)
    return;
  context = context || ((_a = instance._v_t_context) != null ? _a : instance._v_t_context = { id: 0, time: 0 });
  const id = ++context.id;
  const abort = () => id !== context.id;
  if (isFunction(hook)) {
    return name === "enter" ? executeInTicker(hook(instance, done), done, abort, context) : executeOutTicker(hook(instance, done), done, abort, context);
  }
  const transitions = toArray(hook).filter(Boolean);
  const proceedings = transitions.map((transition) => {
    var _a3;
    var _a2;
    const duration = props.duration || transition.duration;
    return executeTransition(
      instance,
      (_a3 = (_a2 = normalize(duration)) == null ? void 0 : _a2[name]) != null ? _a3 : 1e3,
      transition,
      abort
    );
  });
  await Promise.all(proceedings);
  done();
}
async function executeTransition(instance, duration, transition, abort) {
  var _a;
  if (transition.delay)
    await delay(transition.delay);
  const optionsKeys = ["delay", "duration", "ease"];
  const fields = Object.keys(transition).filter((i) => !optionsKeys.includes(i));
  const startedAt = Date.now();
  const endAt = Date.now() + duration;
  (_a = transition.ease) != null ? _a : transition.ease = linear;
  const ease = !isFunction(transition.ease) ? createEasingFunction(transition.ease) : transition.ease;
  function exec(key) {
    const from = getValue(instance, key);
    const to = Number(transition[key]);
    const deferred = createDeferred();
    if (isNaN(to) || isUndefined(from))
      throw new Error(`Transition - {${key}} not valid field`);
    function tick() {
      if (abort == null ? void 0 : abort())
        return deferred.resolve();
      const now = Date.now();
      const alpha = ease((now - startedAt) / duration);
      ignore(() => setPropertyValue2(instance, key, lerp(from, to, alpha)));
      if (now > endAt)
        deferred.resolve();
    }
    Ticker.shared.add(tick);
    deferred.then(() => Ticker.shared.remove(tick));
    return deferred;
  }
  await Promise.all(fields.map(exec));
}
async function executeInTicker(ticker, done, abort, context) {
  if (!ticker)
    return;
  const { duration, tick } = ticker;
  const startedAt = Date.now() - context.time;
  const endAt = Date.now() + duration - context.time;
  const deferred = createDeferred();
  function exec() {
    if (abort())
      return deferred.resolve();
    const now = Date.now();
    const progress = (now - startedAt) / duration;
    context.time = now - startedAt;
    tick(progress);
    endAt > now ? requestAnimationFrame(exec) : deferred.resolve();
  }
  exec();
  Ticker.shared.add(exec);
  deferred.then(() => Ticker.shared.remove(exec));
  deferred.then(() => done());
  return deferred;
}
async function executeOutTicker(ticker, done, abort, context) {
  if (!ticker)
    return;
  const { duration, tick } = ticker;
  const endAt = Date.now() + duration;
  const deferred = createDeferred();
  function exec() {
    if (abort == null ? void 0 : abort())
      return deferred.resolve();
    const now = Date.now();
    const progress = (endAt - now) / duration;
    context.time = endAt - now;
    tick(progress);
    endAt > now ? requestAnimationFrame(exec) : deferred.resolve();
  }
  Ticker.shared.add(exec);
  deferred.then(() => Ticker.shared.remove(exec));
  deferred.then(() => done());
  return deferred;
}
function normalize(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return duration;
  } else {
    const n = Number(duration);
    return { enter: n, leave: n };
  }
}
var transitionProps = {
  duration: [Number, Object],
  beforeEnter: [Function, Object, Array],
  enter: [Function, Object, Array],
  afterEnter: [Function, Object, Array],
  enterCancelled: [Function, Object, Array],
  beforeLeave: [Function, Object, Array],
  leave: [Function, Object, Array],
  afterLeave: [Function, Object, Array],
  onBeforeEnter: Function,
  onEnter: Function,
  onAfterEnter: Function,
  onEnterCancelled: Function,
  onBeforeLeave: Function,
  onLeave: Function,
  onAfterLeave: Function,
  appear: Boolean
};
defineComponent({
  name: "PTransition",
  props: transitionProps,
  setup(props, { slots }) {
    const rowProps = resolveTransitionProps(props, { id: 0, time: 0 });
    return () => h(BaseTransition, rowProps, slots);
  }
});
function resolveTransitionProps(props, context) {
  function onBeforeEnter(el) {
    callInstanceSetterHook(el, props, "beforeEnter");
  }
  function onEnter(el, done) {
    callAnimationHook(el, props, "enter", done, context);
  }
  function onAfterEnter(el) {
    callInstanceSetterHook(el, props, "afterEnter");
  }
  function onEnterCancelled(el) {
    callInstanceSetterHook(el, props, "afterEnter");
  }
  function onBeforeLeave(el) {
    callInstanceSetterHook(el, props, "beforeLeave");
  }
  async function onLeave(el, done) {
    callAnimationHook(el, props, "leave", done, context);
  }
  function onAfterLeave(el) {
    callInstanceSetterHook(el, props, "afterLeave");
  }
  return {
    css: false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    appear: props.appear
  };
}
defineComponent({
  name: "PTransitionGroup",
  props: transitionProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    const contexts = {};
    let prevChildren;
    let children;
    function callTransitionHooks(child, key) {
      var _a;
      if (key == null)
        return;
      (_a = contexts[key]) != null ? _a : contexts[key] = { id: 0, time: 0 };
      const rowProps = resolveTransitionProps(props, contexts[key]);
      const transitionHooks = resolveTransitionHooks(child, rowProps, state, instance);
      setTransitionHooks(child, transitionHooks);
    }
    return () => {
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        callTransitionHooks(child, child.key);
      }
      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          callTransitionHooks(child, child.key);
        }
      }
      return createVNode(Fragment, null, children);
    };
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Application = Application;
  _push(ssrRenderComponent(_component_Application, mergeProps({
    width: 240,
    height: 240
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<text${ssrRenderAttr("anchor", 0.5)}${ssrRenderAttr("x", 120)}${ssrRenderAttr("y", 120)} style="${ssrRenderStyle({ fill: "white" })}"${_scopeId}> Hello NuxtJS World </text>`);
      } else {
        return [
          createVNode("text", {
            anchor: 0.5,
            x: 120,
            y: 120,
            style: { fill: "white" }
          }, " Hello NuxtJS World ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/OtherItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OtherItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("ProgramItem");
    const menu = [
      { key: "ProgramItem", text: "\u7A0B\u5F0F\u76F8\u95DC" },
      { key: "ArtItem", text: "\u85DD\u8853\u76F8\u95DC" },
      { key: "OtherItem", text: "\u5176\u4ED6" }
    ];
    const componentMap = {
      ProgramItem,
      ArtItem,
      OtherItem
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-16 flex w-full flex-row items-center justify-start gap-4 px-4 py-8" }, _attrs))} data-v-641b9343><div class="flex w-1/4 max-w-[250px] flex-col gap-2" data-v-641b9343><!--[-->`);
      ssrRenderList(menu, (item) => {
        _push(`<button class="${ssrRenderClass([
          "flex items-center gap-2 rounded px-3 py-2 text-lg font-bold transition-colors transition-transform duration-300",
          "transform",
          activeTab.value === item.key ? "bg-blue-100 text-blue-600 scale-105 shadow-lg" : "text-gray-700 hover:text-blue-500 hover:scale-105 hover:shadow"
        ])}" data-v-641b9343>${ssrInterpolate(item.text)}</button>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(componentMap[activeTab.value]), { class: "mt-4" }, null), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-641b9343"]]);

export { about as default };
//# sourceMappingURL=about-Bu10xGym.mjs.map

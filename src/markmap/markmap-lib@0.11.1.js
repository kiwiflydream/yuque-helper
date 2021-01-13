/**
 * Combined by jsDelivr.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! markmap-lib v0.11.1 | MIT License */
!(function(e, r) {
  'object' == typeof exports && 'undefined' != typeof module
    ? r(exports, require('katex'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'katex'], r)
    : r(((e = 'undefined' != typeof globalThis ? globalThis : e || self).markmap = e.markmap || {}), e.window.katex);
})(this, function(e, r) {
  'use strict';
  function t(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
  }
  var n = t(r);
  function o() {
    return (o =
      Object.assign ||
      function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  /*! markmap-common v0.1.2 | MIT License */ class s {
    constructor() {
      this.listeners = [];
    }
    tap(e) {
      return this.listeners.push(e), () => this.revoke(e);
    }
    revoke(e) {
      const r = this.listeners.indexOf(e);
      r >= 0 && this.listeners.splice(r, 1);
    }
    revokeAll() {
      this.listeners.splice(0);
    }
    call(...e) {
      for (const r of this.listeners) r(...e);
    }
  }
  function i(e) {
    return e.replace(/[&<"]/g, e => ({ '&': '&amp;', '<': '&lt;', '"': '&quot;' }[e]));
  }
  function a(e, r) {
    return `<${e}${
      r
        ? Object.entries(r)
            .map(([e, r]) => {
              if (null != r && !1 !== r) return (e = ` ${i(e)}`), !0 === r ? e : `${e}="${i(r)}"`;
            })
            .filter(Boolean)
            .join('')
        : ''
    }>`;
  }
  function l(e, r, t) {
    return null == r
      ? a(e, t)
      : a(e, t) +
          (r || '') +
          (function(e) {
            return `</${e}>`;
          })(e);
  }
  function c(e, r) {
    return e.map(e => {
      if ('script' === e.type) return l('script', '', e.data);
      if ('iife' === e.type) {
        const { fn: t, getParams: n } = e.data;
        return l(
          'script',
          (function(e, r) {
            const t = r.map(e => ('function' == typeof e ? e.toString() : JSON.stringify(null != e ? e : null))).join(',');
            return `(${e.toString()})(${t})`;
          })(t, (null == n ? void 0 : n(r)) || []).replace(/<(\/script>)/g, '\\x3c$2')
        );
      }
      return '';
    });
  }
  Math.random()
    .toString(36)
    .slice(2, 8);
  function p(e, r, t) {
    const n = document.createElement(e);
    return (
      r &&
        Object.entries(r).forEach(([e, r]) => {
          n[e] = r;
        }),
      t &&
        Object.entries(t).forEach(([e, r]) => {
          n.setAttribute(e, r);
        }),
      n
    );
  }
  const u = (function(e) {
    const r = {};
    return function(...t) {
      const n = `${t[0]}`;
      let o = r[n];
      return o || ((o = { value: e(...t) }), (r[n] = o)), o.value;
    };
  })(e => {
    document.head.append(p('link', { rel: 'preload', as: 'script', href: e }));
  });
  function h(e, r) {
    if ('script' === e.type)
      return new Promise((r, t) => {
        var n;
        document.head.append(p('script', o({}, e.data, { onload: r, onerror: t }))), (null != (n = e.data) && n.src) || r();
      });
    if ('iife' === e.type) {
      const { fn: t, getParams: n } = e.data;
      t(...((null == n ? void 0 : n(r)) || []));
    }
  }
  async function f(e, r) {
    const t = e.filter(e => {
      var r;
      return 'script' === e.type && (null == (r = e.data) ? void 0 : r.src);
    });
    t.length > 1 && t.forEach(e => u(e.data.src)), (r = o({ getMarkmap: () => window.markmap }, r));
    for (const t of e) await h(t, r);
  }
  const d = ['./d3@6.3.0', './markmap-view@0.2.1'].map(e => ({ type: 'script', data: { src: e } }));
  var g = {
      Aacute: 'Á',
      aacute: 'á',
      Abreve: 'Ă',
      abreve: 'ă',
      ac: '∾',
      acd: '∿',
      acE: '∾̳',
      Acirc: 'Â',
      acirc: 'â',
      acute: '´',
      Acy: 'А',
      acy: 'а',
      AElig: 'Æ',
      aelig: 'æ',
      af: '⁡',
      Afr: '𝔄',
      afr: '𝔞',
      Agrave: 'À',
      agrave: 'à',
      alefsym: 'ℵ',
      aleph: 'ℵ',
      Alpha: 'Α',
      alpha: 'α',
      Amacr: 'Ā',
      amacr: 'ā',
      amalg: '⨿',
      AMP: '&',
      amp: '&',
      And: '⩓',
      and: '∧',
      andand: '⩕',
      andd: '⩜',
      andslope: '⩘',
      andv: '⩚',
      ang: '∠',
      ange: '⦤',
      angle: '∠',
      angmsd: '∡',
      angmsdaa: '⦨',
      angmsdab: '⦩',
      angmsdac: '⦪',
      angmsdad: '⦫',
      angmsdae: '⦬',
      angmsdaf: '⦭',
      angmsdag: '⦮',
      angmsdah: '⦯',
      angrt: '∟',
      angrtvb: '⊾',
      angrtvbd: '⦝',
      angsph: '∢',
      angst: 'Å',
      angzarr: '⍼',
      Aogon: 'Ą',
      aogon: 'ą',
      Aopf: '𝔸',
      aopf: '𝕒',
      ap: '≈',
      apacir: '⩯',
      apE: '⩰',
      ape: '≊',
      apid: '≋',
      apos: "'",
      ApplyFunction: '⁡',
      approx: '≈',
      approxeq: '≊',
      Aring: 'Å',
      aring: 'å',
      Ascr: '𝒜',
      ascr: '𝒶',
      Assign: '≔',
      ast: '*',
      asymp: '≈',
      asympeq: '≍',
      Atilde: 'Ã',
      atilde: 'ã',
      Auml: 'Ä',
      auml: 'ä',
      awconint: '∳',
      awint: '⨑',
      backcong: '≌',
      backepsilon: '϶',
      backprime: '‵',
      backsim: '∽',
      backsimeq: '⋍',
      Backslash: '∖',
      Barv: '⫧',
      barvee: '⊽',
      Barwed: '⌆',
      barwed: '⌅',
      barwedge: '⌅',
      bbrk: '⎵',
      bbrktbrk: '⎶',
      bcong: '≌',
      Bcy: 'Б',
      bcy: 'б',
      bdquo: '„',
      becaus: '∵',
      Because: '∵',
      because: '∵',
      bemptyv: '⦰',
      bepsi: '϶',
      bernou: 'ℬ',
      Bernoullis: 'ℬ',
      Beta: 'Β',
      beta: 'β',
      beth: 'ℶ',
      between: '≬',
      Bfr: '𝔅',
      bfr: '𝔟',
      bigcap: '⋂',
      bigcirc: '◯',
      bigcup: '⋃',
      bigodot: '⨀',
      bigoplus: '⨁',
      bigotimes: '⨂',
      bigsqcup: '⨆',
      bigstar: '★',
      bigtriangledown: '▽',
      bigtriangleup: '△',
      biguplus: '⨄',
      bigvee: '⋁',
      bigwedge: '⋀',
      bkarow: '⤍',
      blacklozenge: '⧫',
      blacksquare: '▪',
      blacktriangle: '▴',
      blacktriangledown: '▾',
      blacktriangleleft: '◂',
      blacktriangleright: '▸',
      blank: '␣',
      blk12: '▒',
      blk14: '░',
      blk34: '▓',
      block: '█',
      bne: '=⃥',
      bnequiv: '≡⃥',
      bNot: '⫭',
      bnot: '⌐',
      Bopf: '𝔹',
      bopf: '𝕓',
      bot: '⊥',
      bottom: '⊥',
      bowtie: '⋈',
      boxbox: '⧉',
      boxDL: '╗',
      boxDl: '╖',
      boxdL: '╕',
      boxdl: '┐',
      boxDR: '╔',
      boxDr: '╓',
      boxdR: '╒',
      boxdr: '┌',
      boxH: '═',
      boxh: '─',
      boxHD: '╦',
      boxHd: '╤',
      boxhD: '╥',
      boxhd: '┬',
      boxHU: '╩',
      boxHu: '╧',
      boxhU: '╨',
      boxhu: '┴',
      boxminus: '⊟',
      boxplus: '⊞',
      boxtimes: '⊠',
      boxUL: '╝',
      boxUl: '╜',
      boxuL: '╛',
      boxul: '┘',
      boxUR: '╚',
      boxUr: '╙',
      boxuR: '╘',
      boxur: '└',
      boxV: '║',
      boxv: '│',
      boxVH: '╬',
      boxVh: '╫',
      boxvH: '╪',
      boxvh: '┼',
      boxVL: '╣',
      boxVl: '╢',
      boxvL: '╡',
      boxvl: '┤',
      boxVR: '╠',
      boxVr: '╟',
      boxvR: '╞',
      boxvr: '├',
      bprime: '‵',
      Breve: '˘',
      breve: '˘',
      brvbar: '¦',
      Bscr: 'ℬ',
      bscr: '𝒷',
      bsemi: '⁏',
      bsim: '∽',
      bsime: '⋍',
      bsol: '\\',
      bsolb: '⧅',
      bsolhsub: '⟈',
      bull: '•',
      bullet: '•',
      bump: '≎',
      bumpE: '⪮',
      bumpe: '≏',
      Bumpeq: '≎',
      bumpeq: '≏',
      Cacute: 'Ć',
      cacute: 'ć',
      Cap: '⋒',
      cap: '∩',
      capand: '⩄',
      capbrcup: '⩉',
      capcap: '⩋',
      capcup: '⩇',
      capdot: '⩀',
      CapitalDifferentialD: 'ⅅ',
      caps: '∩︀',
      caret: '⁁',
      caron: 'ˇ',
      Cayleys: 'ℭ',
      ccaps: '⩍',
      Ccaron: 'Č',
      ccaron: 'č',
      Ccedil: 'Ç',
      ccedil: 'ç',
      Ccirc: 'Ĉ',
      ccirc: 'ĉ',
      Cconint: '∰',
      ccups: '⩌',
      ccupssm: '⩐',
      Cdot: 'Ċ',
      cdot: 'ċ',
      cedil: '¸',
      Cedilla: '¸',
      cemptyv: '⦲',
      cent: '¢',
      CenterDot: '·',
      centerdot: '·',
      Cfr: 'ℭ',
      cfr: '𝔠',
      CHcy: 'Ч',
      chcy: 'ч',
      check: '✓',
      checkmark: '✓',
      Chi: 'Χ',
      chi: 'χ',
      cir: '○',
      circ: 'ˆ',
      circeq: '≗',
      circlearrowleft: '↺',
      circlearrowright: '↻',
      circledast: '⊛',
      circledcirc: '⊚',
      circleddash: '⊝',
      CircleDot: '⊙',
      circledR: '®',
      circledS: 'Ⓢ',
      CircleMinus: '⊖',
      CirclePlus: '⊕',
      CircleTimes: '⊗',
      cirE: '⧃',
      cire: '≗',
      cirfnint: '⨐',
      cirmid: '⫯',
      cirscir: '⧂',
      ClockwiseContourIntegral: '∲',
      CloseCurlyDoubleQuote: '”',
      CloseCurlyQuote: '’',
      clubs: '♣',
      clubsuit: '♣',
      Colon: '∷',
      colon: ':',
      Colone: '⩴',
      colone: '≔',
      coloneq: '≔',
      comma: ',',
      commat: '@',
      comp: '∁',
      compfn: '∘',
      complement: '∁',
      complexes: 'ℂ',
      cong: '≅',
      congdot: '⩭',
      Congruent: '≡',
      Conint: '∯',
      conint: '∮',
      ContourIntegral: '∮',
      Copf: 'ℂ',
      copf: '𝕔',
      coprod: '∐',
      Coproduct: '∐',
      COPY: '©',
      copy: '©',
      copysr: '℗',
      CounterClockwiseContourIntegral: '∳',
      crarr: '↵',
      Cross: '⨯',
      cross: '✗',
      Cscr: '𝒞',
      cscr: '𝒸',
      csub: '⫏',
      csube: '⫑',
      csup: '⫐',
      csupe: '⫒',
      ctdot: '⋯',
      cudarrl: '⤸',
      cudarrr: '⤵',
      cuepr: '⋞',
      cuesc: '⋟',
      cularr: '↶',
      cularrp: '⤽',
      Cup: '⋓',
      cup: '∪',
      cupbrcap: '⩈',
      CupCap: '≍',
      cupcap: '⩆',
      cupcup: '⩊',
      cupdot: '⊍',
      cupor: '⩅',
      cups: '∪︀',
      curarr: '↷',
      curarrm: '⤼',
      curlyeqprec: '⋞',
      curlyeqsucc: '⋟',
      curlyvee: '⋎',
      curlywedge: '⋏',
      curren: '¤',
      curvearrowleft: '↶',
      curvearrowright: '↷',
      cuvee: '⋎',
      cuwed: '⋏',
      cwconint: '∲',
      cwint: '∱',
      cylcty: '⌭',
      Dagger: '‡',
      dagger: '†',
      daleth: 'ℸ',
      Darr: '↡',
      dArr: '⇓',
      darr: '↓',
      dash: '‐',
      Dashv: '⫤',
      dashv: '⊣',
      dbkarow: '⤏',
      dblac: '˝',
      Dcaron: 'Ď',
      dcaron: 'ď',
      Dcy: 'Д',
      dcy: 'д',
      DD: 'ⅅ',
      dd: 'ⅆ',
      ddagger: '‡',
      ddarr: '⇊',
      DDotrahd: '⤑',
      ddotseq: '⩷',
      deg: '°',
      Del: '∇',
      Delta: 'Δ',
      delta: 'δ',
      demptyv: '⦱',
      dfisht: '⥿',
      Dfr: '𝔇',
      dfr: '𝔡',
      dHar: '⥥',
      dharl: '⇃',
      dharr: '⇂',
      DiacriticalAcute: '´',
      DiacriticalDot: '˙',
      DiacriticalDoubleAcute: '˝',
      DiacriticalGrave: '`',
      DiacriticalTilde: '˜',
      diam: '⋄',
      Diamond: '⋄',
      diamond: '⋄',
      diamondsuit: '♦',
      diams: '♦',
      die: '¨',
      DifferentialD: 'ⅆ',
      digamma: 'ϝ',
      disin: '⋲',
      div: '÷',
      divide: '÷',
      divideontimes: '⋇',
      divonx: '⋇',
      DJcy: 'Ђ',
      djcy: 'ђ',
      dlcorn: '⌞',
      dlcrop: '⌍',
      dollar: '$',
      Dopf: '𝔻',
      dopf: '𝕕',
      Dot: '¨',
      dot: '˙',
      DotDot: '⃜',
      doteq: '≐',
      doteqdot: '≑',
      DotEqual: '≐',
      dotminus: '∸',
      dotplus: '∔',
      dotsquare: '⊡',
      doublebarwedge: '⌆',
      DoubleContourIntegral: '∯',
      DoubleDot: '¨',
      DoubleDownArrow: '⇓',
      DoubleLeftArrow: '⇐',
      DoubleLeftRightArrow: '⇔',
      DoubleLeftTee: '⫤',
      DoubleLongLeftArrow: '⟸',
      DoubleLongLeftRightArrow: '⟺',
      DoubleLongRightArrow: '⟹',
      DoubleRightArrow: '⇒',
      DoubleRightTee: '⊨',
      DoubleUpArrow: '⇑',
      DoubleUpDownArrow: '⇕',
      DoubleVerticalBar: '∥',
      DownArrow: '↓',
      Downarrow: '⇓',
      downarrow: '↓',
      DownArrowBar: '⤓',
      DownArrowUpArrow: '⇵',
      DownBreve: '̑',
      downdownarrows: '⇊',
      downharpoonleft: '⇃',
      downharpoonright: '⇂',
      DownLeftRightVector: '⥐',
      DownLeftTeeVector: '⥞',
      DownLeftVector: '↽',
      DownLeftVectorBar: '⥖',
      DownRightTeeVector: '⥟',
      DownRightVector: '⇁',
      DownRightVectorBar: '⥗',
      DownTee: '⊤',
      DownTeeArrow: '↧',
      drbkarow: '⤐',
      drcorn: '⌟',
      drcrop: '⌌',
      Dscr: '𝒟',
      dscr: '𝒹',
      DScy: 'Ѕ',
      dscy: 'ѕ',
      dsol: '⧶',
      Dstrok: 'Đ',
      dstrok: 'đ',
      dtdot: '⋱',
      dtri: '▿',
      dtrif: '▾',
      duarr: '⇵',
      duhar: '⥯',
      dwangle: '⦦',
      DZcy: 'Џ',
      dzcy: 'џ',
      dzigrarr: '⟿',
      Eacute: 'É',
      eacute: 'é',
      easter: '⩮',
      Ecaron: 'Ě',
      ecaron: 'ě',
      ecir: '≖',
      Ecirc: 'Ê',
      ecirc: 'ê',
      ecolon: '≕',
      Ecy: 'Э',
      ecy: 'э',
      eDDot: '⩷',
      Edot: 'Ė',
      eDot: '≑',
      edot: 'ė',
      ee: 'ⅇ',
      efDot: '≒',
      Efr: '𝔈',
      efr: '𝔢',
      eg: '⪚',
      Egrave: 'È',
      egrave: 'è',
      egs: '⪖',
      egsdot: '⪘',
      el: '⪙',
      Element: '∈',
      elinters: '⏧',
      ell: 'ℓ',
      els: '⪕',
      elsdot: '⪗',
      Emacr: 'Ē',
      emacr: 'ē',
      empty: '∅',
      emptyset: '∅',
      EmptySmallSquare: '◻',
      emptyv: '∅',
      EmptyVerySmallSquare: '▫',
      emsp: ' ',
      emsp13: ' ',
      emsp14: ' ',
      ENG: 'Ŋ',
      eng: 'ŋ',
      ensp: ' ',
      Eogon: 'Ę',
      eogon: 'ę',
      Eopf: '𝔼',
      eopf: '𝕖',
      epar: '⋕',
      eparsl: '⧣',
      eplus: '⩱',
      epsi: 'ε',
      Epsilon: 'Ε',
      epsilon: 'ε',
      epsiv: 'ϵ',
      eqcirc: '≖',
      eqcolon: '≕',
      eqsim: '≂',
      eqslantgtr: '⪖',
      eqslantless: '⪕',
      Equal: '⩵',
      equals: '=',
      EqualTilde: '≂',
      equest: '≟',
      Equilibrium: '⇌',
      equiv: '≡',
      equivDD: '⩸',
      eqvparsl: '⧥',
      erarr: '⥱',
      erDot: '≓',
      Escr: 'ℰ',
      escr: 'ℯ',
      esdot: '≐',
      Esim: '⩳',
      esim: '≂',
      Eta: 'Η',
      eta: 'η',
      ETH: 'Ð',
      eth: 'ð',
      Euml: 'Ë',
      euml: 'ë',
      euro: '€',
      excl: '!',
      exist: '∃',
      Exists: '∃',
      expectation: 'ℰ',
      ExponentialE: 'ⅇ',
      exponentiale: 'ⅇ',
      fallingdotseq: '≒',
      Fcy: 'Ф',
      fcy: 'ф',
      female: '♀',
      ffilig: 'ﬃ',
      fflig: 'ﬀ',
      ffllig: 'ﬄ',
      Ffr: '𝔉',
      ffr: '𝔣',
      filig: 'ﬁ',
      FilledSmallSquare: '◼',
      FilledVerySmallSquare: '▪',
      fjlig: 'fj',
      flat: '♭',
      fllig: 'ﬂ',
      fltns: '▱',
      fnof: 'ƒ',
      Fopf: '𝔽',
      fopf: '𝕗',
      ForAll: '∀',
      forall: '∀',
      fork: '⋔',
      forkv: '⫙',
      Fouriertrf: 'ℱ',
      fpartint: '⨍',
      frac12: '½',
      frac13: '⅓',
      frac14: '¼',
      frac15: '⅕',
      frac16: '⅙',
      frac18: '⅛',
      frac23: '⅔',
      frac25: '⅖',
      frac34: '¾',
      frac35: '⅗',
      frac38: '⅜',
      frac45: '⅘',
      frac56: '⅚',
      frac58: '⅝',
      frac78: '⅞',
      frasl: '⁄',
      frown: '⌢',
      Fscr: 'ℱ',
      fscr: '𝒻',
      gacute: 'ǵ',
      Gamma: 'Γ',
      gamma: 'γ',
      Gammad: 'Ϝ',
      gammad: 'ϝ',
      gap: '⪆',
      Gbreve: 'Ğ',
      gbreve: 'ğ',
      Gcedil: 'Ģ',
      Gcirc: 'Ĝ',
      gcirc: 'ĝ',
      Gcy: 'Г',
      gcy: 'г',
      Gdot: 'Ġ',
      gdot: 'ġ',
      gE: '≧',
      ge: '≥',
      gEl: '⪌',
      gel: '⋛',
      geq: '≥',
      geqq: '≧',
      geqslant: '⩾',
      ges: '⩾',
      gescc: '⪩',
      gesdot: '⪀',
      gesdoto: '⪂',
      gesdotol: '⪄',
      gesl: '⋛︀',
      gesles: '⪔',
      Gfr: '𝔊',
      gfr: '𝔤',
      Gg: '⋙',
      gg: '≫',
      ggg: '⋙',
      gimel: 'ℷ',
      GJcy: 'Ѓ',
      gjcy: 'ѓ',
      gl: '≷',
      gla: '⪥',
      glE: '⪒',
      glj: '⪤',
      gnap: '⪊',
      gnapprox: '⪊',
      gnE: '≩',
      gne: '⪈',
      gneq: '⪈',
      gneqq: '≩',
      gnsim: '⋧',
      Gopf: '𝔾',
      gopf: '𝕘',
      grave: '`',
      GreaterEqual: '≥',
      GreaterEqualLess: '⋛',
      GreaterFullEqual: '≧',
      GreaterGreater: '⪢',
      GreaterLess: '≷',
      GreaterSlantEqual: '⩾',
      GreaterTilde: '≳',
      Gscr: '𝒢',
      gscr: 'ℊ',
      gsim: '≳',
      gsime: '⪎',
      gsiml: '⪐',
      GT: '>',
      Gt: '≫',
      gt: '>',
      gtcc: '⪧',
      gtcir: '⩺',
      gtdot: '⋗',
      gtlPar: '⦕',
      gtquest: '⩼',
      gtrapprox: '⪆',
      gtrarr: '⥸',
      gtrdot: '⋗',
      gtreqless: '⋛',
      gtreqqless: '⪌',
      gtrless: '≷',
      gtrsim: '≳',
      gvertneqq: '≩︀',
      gvnE: '≩︀',
      Hacek: 'ˇ',
      hairsp: ' ',
      half: '½',
      hamilt: 'ℋ',
      HARDcy: 'Ъ',
      hardcy: 'ъ',
      hArr: '⇔',
      harr: '↔',
      harrcir: '⥈',
      harrw: '↭',
      Hat: '^',
      hbar: 'ℏ',
      Hcirc: 'Ĥ',
      hcirc: 'ĥ',
      hearts: '♥',
      heartsuit: '♥',
      hellip: '…',
      hercon: '⊹',
      Hfr: 'ℌ',
      hfr: '𝔥',
      HilbertSpace: 'ℋ',
      hksearow: '⤥',
      hkswarow: '⤦',
      hoarr: '⇿',
      homtht: '∻',
      hookleftarrow: '↩',
      hookrightarrow: '↪',
      Hopf: 'ℍ',
      hopf: '𝕙',
      horbar: '―',
      HorizontalLine: '─',
      Hscr: 'ℋ',
      hscr: '𝒽',
      hslash: 'ℏ',
      Hstrok: 'Ħ',
      hstrok: 'ħ',
      HumpDownHump: '≎',
      HumpEqual: '≏',
      hybull: '⁃',
      hyphen: '‐',
      Iacute: 'Í',
      iacute: 'í',
      ic: '⁣',
      Icirc: 'Î',
      icirc: 'î',
      Icy: 'И',
      icy: 'и',
      Idot: 'İ',
      IEcy: 'Е',
      iecy: 'е',
      iexcl: '¡',
      iff: '⇔',
      Ifr: 'ℑ',
      ifr: '𝔦',
      Igrave: 'Ì',
      igrave: 'ì',
      ii: 'ⅈ',
      iiiint: '⨌',
      iiint: '∭',
      iinfin: '⧜',
      iiota: '℩',
      IJlig: 'Ĳ',
      ijlig: 'ĳ',
      Im: 'ℑ',
      Imacr: 'Ī',
      imacr: 'ī',
      image: 'ℑ',
      ImaginaryI: 'ⅈ',
      imagline: 'ℐ',
      imagpart: 'ℑ',
      imath: 'ı',
      imof: '⊷',
      imped: 'Ƶ',
      Implies: '⇒',
      in: '∈',
      incare: '℅',
      infin: '∞',
      infintie: '⧝',
      inodot: 'ı',
      Int: '∬',
      int: '∫',
      intcal: '⊺',
      integers: 'ℤ',
      Integral: '∫',
      intercal: '⊺',
      Intersection: '⋂',
      intlarhk: '⨗',
      intprod: '⨼',
      InvisibleComma: '⁣',
      InvisibleTimes: '⁢',
      IOcy: 'Ё',
      iocy: 'ё',
      Iogon: 'Į',
      iogon: 'į',
      Iopf: '𝕀',
      iopf: '𝕚',
      Iota: 'Ι',
      iota: 'ι',
      iprod: '⨼',
      iquest: '¿',
      Iscr: 'ℐ',
      iscr: '𝒾',
      isin: '∈',
      isindot: '⋵',
      isinE: '⋹',
      isins: '⋴',
      isinsv: '⋳',
      isinv: '∈',
      it: '⁢',
      Itilde: 'Ĩ',
      itilde: 'ĩ',
      Iukcy: 'І',
      iukcy: 'і',
      Iuml: 'Ï',
      iuml: 'ï',
      Jcirc: 'Ĵ',
      jcirc: 'ĵ',
      Jcy: 'Й',
      jcy: 'й',
      Jfr: '𝔍',
      jfr: '𝔧',
      jmath: 'ȷ',
      Jopf: '𝕁',
      jopf: '𝕛',
      Jscr: '𝒥',
      jscr: '𝒿',
      Jsercy: 'Ј',
      jsercy: 'ј',
      Jukcy: 'Є',
      jukcy: 'є',
      Kappa: 'Κ',
      kappa: 'κ',
      kappav: 'ϰ',
      Kcedil: 'Ķ',
      kcedil: 'ķ',
      Kcy: 'К',
      kcy: 'к',
      Kfr: '𝔎',
      kfr: '𝔨',
      kgreen: 'ĸ',
      KHcy: 'Х',
      khcy: 'х',
      KJcy: 'Ќ',
      kjcy: 'ќ',
      Kopf: '𝕂',
      kopf: '𝕜',
      Kscr: '𝒦',
      kscr: '𝓀',
      lAarr: '⇚',
      Lacute: 'Ĺ',
      lacute: 'ĺ',
      laemptyv: '⦴',
      lagran: 'ℒ',
      Lambda: 'Λ',
      lambda: 'λ',
      Lang: '⟪',
      lang: '⟨',
      langd: '⦑',
      langle: '⟨',
      lap: '⪅',
      Laplacetrf: 'ℒ',
      laquo: '«',
      Larr: '↞',
      lArr: '⇐',
      larr: '←',
      larrb: '⇤',
      larrbfs: '⤟',
      larrfs: '⤝',
      larrhk: '↩',
      larrlp: '↫',
      larrpl: '⤹',
      larrsim: '⥳',
      larrtl: '↢',
      lat: '⪫',
      lAtail: '⤛',
      latail: '⤙',
      late: '⪭',
      lates: '⪭︀',
      lBarr: '⤎',
      lbarr: '⤌',
      lbbrk: '❲',
      lbrace: '{',
      lbrack: '[',
      lbrke: '⦋',
      lbrksld: '⦏',
      lbrkslu: '⦍',
      Lcaron: 'Ľ',
      lcaron: 'ľ',
      Lcedil: 'Ļ',
      lcedil: 'ļ',
      lceil: '⌈',
      lcub: '{',
      Lcy: 'Л',
      lcy: 'л',
      ldca: '⤶',
      ldquo: '“',
      ldquor: '„',
      ldrdhar: '⥧',
      ldrushar: '⥋',
      ldsh: '↲',
      lE: '≦',
      le: '≤',
      LeftAngleBracket: '⟨',
      LeftArrow: '←',
      Leftarrow: '⇐',
      leftarrow: '←',
      LeftArrowBar: '⇤',
      LeftArrowRightArrow: '⇆',
      leftarrowtail: '↢',
      LeftCeiling: '⌈',
      LeftDoubleBracket: '⟦',
      LeftDownTeeVector: '⥡',
      LeftDownVector: '⇃',
      LeftDownVectorBar: '⥙',
      LeftFloor: '⌊',
      leftharpoondown: '↽',
      leftharpoonup: '↼',
      leftleftarrows: '⇇',
      LeftRightArrow: '↔',
      Leftrightarrow: '⇔',
      leftrightarrow: '↔',
      leftrightarrows: '⇆',
      leftrightharpoons: '⇋',
      leftrightsquigarrow: '↭',
      LeftRightVector: '⥎',
      LeftTee: '⊣',
      LeftTeeArrow: '↤',
      LeftTeeVector: '⥚',
      leftthreetimes: '⋋',
      LeftTriangle: '⊲',
      LeftTriangleBar: '⧏',
      LeftTriangleEqual: '⊴',
      LeftUpDownVector: '⥑',
      LeftUpTeeVector: '⥠',
      LeftUpVector: '↿',
      LeftUpVectorBar: '⥘',
      LeftVector: '↼',
      LeftVectorBar: '⥒',
      lEg: '⪋',
      leg: '⋚',
      leq: '≤',
      leqq: '≦',
      leqslant: '⩽',
      les: '⩽',
      lescc: '⪨',
      lesdot: '⩿',
      lesdoto: '⪁',
      lesdotor: '⪃',
      lesg: '⋚︀',
      lesges: '⪓',
      lessapprox: '⪅',
      lessdot: '⋖',
      lesseqgtr: '⋚',
      lesseqqgtr: '⪋',
      LessEqualGreater: '⋚',
      LessFullEqual: '≦',
      LessGreater: '≶',
      lessgtr: '≶',
      LessLess: '⪡',
      lesssim: '≲',
      LessSlantEqual: '⩽',
      LessTilde: '≲',
      lfisht: '⥼',
      lfloor: '⌊',
      Lfr: '𝔏',
      lfr: '𝔩',
      lg: '≶',
      lgE: '⪑',
      lHar: '⥢',
      lhard: '↽',
      lharu: '↼',
      lharul: '⥪',
      lhblk: '▄',
      LJcy: 'Љ',
      ljcy: 'љ',
      Ll: '⋘',
      ll: '≪',
      llarr: '⇇',
      llcorner: '⌞',
      Lleftarrow: '⇚',
      llhard: '⥫',
      lltri: '◺',
      Lmidot: 'Ŀ',
      lmidot: 'ŀ',
      lmoust: '⎰',
      lmoustache: '⎰',
      lnap: '⪉',
      lnapprox: '⪉',
      lnE: '≨',
      lne: '⪇',
      lneq: '⪇',
      lneqq: '≨',
      lnsim: '⋦',
      loang: '⟬',
      loarr: '⇽',
      lobrk: '⟦',
      LongLeftArrow: '⟵',
      Longleftarrow: '⟸',
      longleftarrow: '⟵',
      LongLeftRightArrow: '⟷',
      Longleftrightarrow: '⟺',
      longleftrightarrow: '⟷',
      longmapsto: '⟼',
      LongRightArrow: '⟶',
      Longrightarrow: '⟹',
      longrightarrow: '⟶',
      looparrowleft: '↫',
      looparrowright: '↬',
      lopar: '⦅',
      Lopf: '𝕃',
      lopf: '𝕝',
      loplus: '⨭',
      lotimes: '⨴',
      lowast: '∗',
      lowbar: '_',
      LowerLeftArrow: '↙',
      LowerRightArrow: '↘',
      loz: '◊',
      lozenge: '◊',
      lozf: '⧫',
      lpar: '(',
      lparlt: '⦓',
      lrarr: '⇆',
      lrcorner: '⌟',
      lrhar: '⇋',
      lrhard: '⥭',
      lrm: '‎',
      lrtri: '⊿',
      lsaquo: '‹',
      Lscr: 'ℒ',
      lscr: '𝓁',
      Lsh: '↰',
      lsh: '↰',
      lsim: '≲',
      lsime: '⪍',
      lsimg: '⪏',
      lsqb: '[',
      lsquo: '‘',
      lsquor: '‚',
      Lstrok: 'Ł',
      lstrok: 'ł',
      LT: '<',
      Lt: '≪',
      lt: '<',
      ltcc: '⪦',
      ltcir: '⩹',
      ltdot: '⋖',
      lthree: '⋋',
      ltimes: '⋉',
      ltlarr: '⥶',
      ltquest: '⩻',
      ltri: '◃',
      ltrie: '⊴',
      ltrif: '◂',
      ltrPar: '⦖',
      lurdshar: '⥊',
      luruhar: '⥦',
      lvertneqq: '≨︀',
      lvnE: '≨︀',
      macr: '¯',
      male: '♂',
      malt: '✠',
      maltese: '✠',
      Map: '⤅',
      map: '↦',
      mapsto: '↦',
      mapstodown: '↧',
      mapstoleft: '↤',
      mapstoup: '↥',
      marker: '▮',
      mcomma: '⨩',
      Mcy: 'М',
      mcy: 'м',
      mdash: '—',
      mDDot: '∺',
      measuredangle: '∡',
      MediumSpace: ' ',
      Mellintrf: 'ℳ',
      Mfr: '𝔐',
      mfr: '𝔪',
      mho: '℧',
      micro: 'µ',
      mid: '∣',
      midast: '*',
      midcir: '⫰',
      middot: '·',
      minus: '−',
      minusb: '⊟',
      minusd: '∸',
      minusdu: '⨪',
      MinusPlus: '∓',
      mlcp: '⫛',
      mldr: '…',
      mnplus: '∓',
      models: '⊧',
      Mopf: '𝕄',
      mopf: '𝕞',
      mp: '∓',
      Mscr: 'ℳ',
      mscr: '𝓂',
      mstpos: '∾',
      Mu: 'Μ',
      mu: 'μ',
      multimap: '⊸',
      mumap: '⊸',
      nabla: '∇',
      Nacute: 'Ń',
      nacute: 'ń',
      nang: '∠⃒',
      nap: '≉',
      napE: '⩰̸',
      napid: '≋̸',
      napos: 'ŉ',
      napprox: '≉',
      natur: '♮',
      natural: '♮',
      naturals: 'ℕ',
      nbsp: ' ',
      nbump: '≎̸',
      nbumpe: '≏̸',
      ncap: '⩃',
      Ncaron: 'Ň',
      ncaron: 'ň',
      Ncedil: 'Ņ',
      ncedil: 'ņ',
      ncong: '≇',
      ncongdot: '⩭̸',
      ncup: '⩂',
      Ncy: 'Н',
      ncy: 'н',
      ndash: '–',
      ne: '≠',
      nearhk: '⤤',
      neArr: '⇗',
      nearr: '↗',
      nearrow: '↗',
      nedot: '≐̸',
      NegativeMediumSpace: '​',
      NegativeThickSpace: '​',
      NegativeThinSpace: '​',
      NegativeVeryThinSpace: '​',
      nequiv: '≢',
      nesear: '⤨',
      nesim: '≂̸',
      NestedGreaterGreater: '≫',
      NestedLessLess: '≪',
      NewLine: '\n',
      nexist: '∄',
      nexists: '∄',
      Nfr: '𝔑',
      nfr: '𝔫',
      ngE: '≧̸',
      nge: '≱',
      ngeq: '≱',
      ngeqq: '≧̸',
      ngeqslant: '⩾̸',
      nges: '⩾̸',
      nGg: '⋙̸',
      ngsim: '≵',
      nGt: '≫⃒',
      ngt: '≯',
      ngtr: '≯',
      nGtv: '≫̸',
      nhArr: '⇎',
      nharr: '↮',
      nhpar: '⫲',
      ni: '∋',
      nis: '⋼',
      nisd: '⋺',
      niv: '∋',
      NJcy: 'Њ',
      njcy: 'њ',
      nlArr: '⇍',
      nlarr: '↚',
      nldr: '‥',
      nlE: '≦̸',
      nle: '≰',
      nLeftarrow: '⇍',
      nleftarrow: '↚',
      nLeftrightarrow: '⇎',
      nleftrightarrow: '↮',
      nleq: '≰',
      nleqq: '≦̸',
      nleqslant: '⩽̸',
      nles: '⩽̸',
      nless: '≮',
      nLl: '⋘̸',
      nlsim: '≴',
      nLt: '≪⃒',
      nlt: '≮',
      nltri: '⋪',
      nltrie: '⋬',
      nLtv: '≪̸',
      nmid: '∤',
      NoBreak: '⁠',
      NonBreakingSpace: ' ',
      Nopf: 'ℕ',
      nopf: '𝕟',
      Not: '⫬',
      not: '¬',
      NotCongruent: '≢',
      NotCupCap: '≭',
      NotDoubleVerticalBar: '∦',
      NotElement: '∉',
      NotEqual: '≠',
      NotEqualTilde: '≂̸',
      NotExists: '∄',
      NotGreater: '≯',
      NotGreaterEqual: '≱',
      NotGreaterFullEqual: '≧̸',
      NotGreaterGreater: '≫̸',
      NotGreaterLess: '≹',
      NotGreaterSlantEqual: '⩾̸',
      NotGreaterTilde: '≵',
      NotHumpDownHump: '≎̸',
      NotHumpEqual: '≏̸',
      notin: '∉',
      notindot: '⋵̸',
      notinE: '⋹̸',
      notinva: '∉',
      notinvb: '⋷',
      notinvc: '⋶',
      NotLeftTriangle: '⋪',
      NotLeftTriangleBar: '⧏̸',
      NotLeftTriangleEqual: '⋬',
      NotLess: '≮',
      NotLessEqual: '≰',
      NotLessGreater: '≸',
      NotLessLess: '≪̸',
      NotLessSlantEqual: '⩽̸',
      NotLessTilde: '≴',
      NotNestedGreaterGreater: '⪢̸',
      NotNestedLessLess: '⪡̸',
      notni: '∌',
      notniva: '∌',
      notnivb: '⋾',
      notnivc: '⋽',
      NotPrecedes: '⊀',
      NotPrecedesEqual: '⪯̸',
      NotPrecedesSlantEqual: '⋠',
      NotReverseElement: '∌',
      NotRightTriangle: '⋫',
      NotRightTriangleBar: '⧐̸',
      NotRightTriangleEqual: '⋭',
      NotSquareSubset: '⊏̸',
      NotSquareSubsetEqual: '⋢',
      NotSquareSuperset: '⊐̸',
      NotSquareSupersetEqual: '⋣',
      NotSubset: '⊂⃒',
      NotSubsetEqual: '⊈',
      NotSucceeds: '⊁',
      NotSucceedsEqual: '⪰̸',
      NotSucceedsSlantEqual: '⋡',
      NotSucceedsTilde: '≿̸',
      NotSuperset: '⊃⃒',
      NotSupersetEqual: '⊉',
      NotTilde: '≁',
      NotTildeEqual: '≄',
      NotTildeFullEqual: '≇',
      NotTildeTilde: '≉',
      NotVerticalBar: '∤',
      npar: '∦',
      nparallel: '∦',
      nparsl: '⫽⃥',
      npart: '∂̸',
      npolint: '⨔',
      npr: '⊀',
      nprcue: '⋠',
      npre: '⪯̸',
      nprec: '⊀',
      npreceq: '⪯̸',
      nrArr: '⇏',
      nrarr: '↛',
      nrarrc: '⤳̸',
      nrarrw: '↝̸',
      nRightarrow: '⇏',
      nrightarrow: '↛',
      nrtri: '⋫',
      nrtrie: '⋭',
      nsc: '⊁',
      nsccue: '⋡',
      nsce: '⪰̸',
      Nscr: '𝒩',
      nscr: '𝓃',
      nshortmid: '∤',
      nshortparallel: '∦',
      nsim: '≁',
      nsime: '≄',
      nsimeq: '≄',
      nsmid: '∤',
      nspar: '∦',
      nsqsube: '⋢',
      nsqsupe: '⋣',
      nsub: '⊄',
      nsubE: '⫅̸',
      nsube: '⊈',
      nsubset: '⊂⃒',
      nsubseteq: '⊈',
      nsubseteqq: '⫅̸',
      nsucc: '⊁',
      nsucceq: '⪰̸',
      nsup: '⊅',
      nsupE: '⫆̸',
      nsupe: '⊉',
      nsupset: '⊃⃒',
      nsupseteq: '⊉',
      nsupseteqq: '⫆̸',
      ntgl: '≹',
      Ntilde: 'Ñ',
      ntilde: 'ñ',
      ntlg: '≸',
      ntriangleleft: '⋪',
      ntrianglelefteq: '⋬',
      ntriangleright: '⋫',
      ntrianglerighteq: '⋭',
      Nu: 'Ν',
      nu: 'ν',
      num: '#',
      numero: '№',
      numsp: ' ',
      nvap: '≍⃒',
      nVDash: '⊯',
      nVdash: '⊮',
      nvDash: '⊭',
      nvdash: '⊬',
      nvge: '≥⃒',
      nvgt: '>⃒',
      nvHarr: '⤄',
      nvinfin: '⧞',
      nvlArr: '⤂',
      nvle: '≤⃒',
      nvlt: '<⃒',
      nvltrie: '⊴⃒',
      nvrArr: '⤃',
      nvrtrie: '⊵⃒',
      nvsim: '∼⃒',
      nwarhk: '⤣',
      nwArr: '⇖',
      nwarr: '↖',
      nwarrow: '↖',
      nwnear: '⤧',
      Oacute: 'Ó',
      oacute: 'ó',
      oast: '⊛',
      ocir: '⊚',
      Ocirc: 'Ô',
      ocirc: 'ô',
      Ocy: 'О',
      ocy: 'о',
      odash: '⊝',
      Odblac: 'Ő',
      odblac: 'ő',
      odiv: '⨸',
      odot: '⊙',
      odsold: '⦼',
      OElig: 'Œ',
      oelig: 'œ',
      ofcir: '⦿',
      Ofr: '𝔒',
      ofr: '𝔬',
      ogon: '˛',
      Ograve: 'Ò',
      ograve: 'ò',
      ogt: '⧁',
      ohbar: '⦵',
      ohm: 'Ω',
      oint: '∮',
      olarr: '↺',
      olcir: '⦾',
      olcross: '⦻',
      oline: '‾',
      olt: '⧀',
      Omacr: 'Ō',
      omacr: 'ō',
      Omega: 'Ω',
      omega: 'ω',
      Omicron: 'Ο',
      omicron: 'ο',
      omid: '⦶',
      ominus: '⊖',
      Oopf: '𝕆',
      oopf: '𝕠',
      opar: '⦷',
      OpenCurlyDoubleQuote: '“',
      OpenCurlyQuote: '‘',
      operp: '⦹',
      oplus: '⊕',
      Or: '⩔',
      or: '∨',
      orarr: '↻',
      ord: '⩝',
      order: 'ℴ',
      orderof: 'ℴ',
      ordf: 'ª',
      ordm: 'º',
      origof: '⊶',
      oror: '⩖',
      orslope: '⩗',
      orv: '⩛',
      oS: 'Ⓢ',
      Oscr: '𝒪',
      oscr: 'ℴ',
      Oslash: 'Ø',
      oslash: 'ø',
      osol: '⊘',
      Otilde: 'Õ',
      otilde: 'õ',
      Otimes: '⨷',
      otimes: '⊗',
      otimesas: '⨶',
      Ouml: 'Ö',
      ouml: 'ö',
      ovbar: '⌽',
      OverBar: '‾',
      OverBrace: '⏞',
      OverBracket: '⎴',
      OverParenthesis: '⏜',
      par: '∥',
      para: '¶',
      parallel: '∥',
      parsim: '⫳',
      parsl: '⫽',
      part: '∂',
      PartialD: '∂',
      Pcy: 'П',
      pcy: 'п',
      percnt: '%',
      period: '.',
      permil: '‰',
      perp: '⊥',
      pertenk: '‱',
      Pfr: '𝔓',
      pfr: '𝔭',
      Phi: 'Φ',
      phi: 'φ',
      phiv: 'ϕ',
      phmmat: 'ℳ',
      phone: '☎',
      Pi: 'Π',
      pi: 'π',
      pitchfork: '⋔',
      piv: 'ϖ',
      planck: 'ℏ',
      planckh: 'ℎ',
      plankv: 'ℏ',
      plus: '+',
      plusacir: '⨣',
      plusb: '⊞',
      pluscir: '⨢',
      plusdo: '∔',
      plusdu: '⨥',
      pluse: '⩲',
      PlusMinus: '±',
      plusmn: '±',
      plussim: '⨦',
      plustwo: '⨧',
      pm: '±',
      Poincareplane: 'ℌ',
      pointint: '⨕',
      Popf: 'ℙ',
      popf: '𝕡',
      pound: '£',
      Pr: '⪻',
      pr: '≺',
      prap: '⪷',
      prcue: '≼',
      prE: '⪳',
      pre: '⪯',
      prec: '≺',
      precapprox: '⪷',
      preccurlyeq: '≼',
      Precedes: '≺',
      PrecedesEqual: '⪯',
      PrecedesSlantEqual: '≼',
      PrecedesTilde: '≾',
      preceq: '⪯',
      precnapprox: '⪹',
      precneqq: '⪵',
      precnsim: '⋨',
      precsim: '≾',
      Prime: '″',
      prime: '′',
      primes: 'ℙ',
      prnap: '⪹',
      prnE: '⪵',
      prnsim: '⋨',
      prod: '∏',
      Product: '∏',
      profalar: '⌮',
      profline: '⌒',
      profsurf: '⌓',
      prop: '∝',
      Proportion: '∷',
      Proportional: '∝',
      propto: '∝',
      prsim: '≾',
      prurel: '⊰',
      Pscr: '𝒫',
      pscr: '𝓅',
      Psi: 'Ψ',
      psi: 'ψ',
      puncsp: ' ',
      Qfr: '𝔔',
      qfr: '𝔮',
      qint: '⨌',
      Qopf: 'ℚ',
      qopf: '𝕢',
      qprime: '⁗',
      Qscr: '𝒬',
      qscr: '𝓆',
      quaternions: 'ℍ',
      quatint: '⨖',
      quest: '?',
      questeq: '≟',
      QUOT: '"',
      quot: '"',
      rAarr: '⇛',
      race: '∽̱',
      Racute: 'Ŕ',
      racute: 'ŕ',
      radic: '√',
      raemptyv: '⦳',
      Rang: '⟫',
      rang: '⟩',
      rangd: '⦒',
      range: '⦥',
      rangle: '⟩',
      raquo: '»',
      Rarr: '↠',
      rArr: '⇒',
      rarr: '→',
      rarrap: '⥵',
      rarrb: '⇥',
      rarrbfs: '⤠',
      rarrc: '⤳',
      rarrfs: '⤞',
      rarrhk: '↪',
      rarrlp: '↬',
      rarrpl: '⥅',
      rarrsim: '⥴',
      Rarrtl: '⤖',
      rarrtl: '↣',
      rarrw: '↝',
      rAtail: '⤜',
      ratail: '⤚',
      ratio: '∶',
      rationals: 'ℚ',
      RBarr: '⤐',
      rBarr: '⤏',
      rbarr: '⤍',
      rbbrk: '❳',
      rbrace: '}',
      rbrack: ']',
      rbrke: '⦌',
      rbrksld: '⦎',
      rbrkslu: '⦐',
      Rcaron: 'Ř',
      rcaron: 'ř',
      Rcedil: 'Ŗ',
      rcedil: 'ŗ',
      rceil: '⌉',
      rcub: '}',
      Rcy: 'Р',
      rcy: 'р',
      rdca: '⤷',
      rdldhar: '⥩',
      rdquo: '”',
      rdquor: '”',
      rdsh: '↳',
      Re: 'ℜ',
      real: 'ℜ',
      realine: 'ℛ',
      realpart: 'ℜ',
      reals: 'ℝ',
      rect: '▭',
      REG: '®',
      reg: '®',
      ReverseElement: '∋',
      ReverseEquilibrium: '⇋',
      ReverseUpEquilibrium: '⥯',
      rfisht: '⥽',
      rfloor: '⌋',
      Rfr: 'ℜ',
      rfr: '𝔯',
      rHar: '⥤',
      rhard: '⇁',
      rharu: '⇀',
      rharul: '⥬',
      Rho: 'Ρ',
      rho: 'ρ',
      rhov: 'ϱ',
      RightAngleBracket: '⟩',
      RightArrow: '→',
      Rightarrow: '⇒',
      rightarrow: '→',
      RightArrowBar: '⇥',
      RightArrowLeftArrow: '⇄',
      rightarrowtail: '↣',
      RightCeiling: '⌉',
      RightDoubleBracket: '⟧',
      RightDownTeeVector: '⥝',
      RightDownVector: '⇂',
      RightDownVectorBar: '⥕',
      RightFloor: '⌋',
      rightharpoondown: '⇁',
      rightharpoonup: '⇀',
      rightleftarrows: '⇄',
      rightleftharpoons: '⇌',
      rightrightarrows: '⇉',
      rightsquigarrow: '↝',
      RightTee: '⊢',
      RightTeeArrow: '↦',
      RightTeeVector: '⥛',
      rightthreetimes: '⋌',
      RightTriangle: '⊳',
      RightTriangleBar: '⧐',
      RightTriangleEqual: '⊵',
      RightUpDownVector: '⥏',
      RightUpTeeVector: '⥜',
      RightUpVector: '↾',
      RightUpVectorBar: '⥔',
      RightVector: '⇀',
      RightVectorBar: '⥓',
      ring: '˚',
      risingdotseq: '≓',
      rlarr: '⇄',
      rlhar: '⇌',
      rlm: '‏',
      rmoust: '⎱',
      rmoustache: '⎱',
      rnmid: '⫮',
      roang: '⟭',
      roarr: '⇾',
      robrk: '⟧',
      ropar: '⦆',
      Ropf: 'ℝ',
      ropf: '𝕣',
      roplus: '⨮',
      rotimes: '⨵',
      RoundImplies: '⥰',
      rpar: ')',
      rpargt: '⦔',
      rppolint: '⨒',
      rrarr: '⇉',
      Rrightarrow: '⇛',
      rsaquo: '›',
      Rscr: 'ℛ',
      rscr: '𝓇',
      Rsh: '↱',
      rsh: '↱',
      rsqb: ']',
      rsquo: '’',
      rsquor: '’',
      rthree: '⋌',
      rtimes: '⋊',
      rtri: '▹',
      rtrie: '⊵',
      rtrif: '▸',
      rtriltri: '⧎',
      RuleDelayed: '⧴',
      ruluhar: '⥨',
      rx: '℞',
      Sacute: 'Ś',
      sacute: 'ś',
      sbquo: '‚',
      Sc: '⪼',
      sc: '≻',
      scap: '⪸',
      Scaron: 'Š',
      scaron: 'š',
      sccue: '≽',
      scE: '⪴',
      sce: '⪰',
      Scedil: 'Ş',
      scedil: 'ş',
      Scirc: 'Ŝ',
      scirc: 'ŝ',
      scnap: '⪺',
      scnE: '⪶',
      scnsim: '⋩',
      scpolint: '⨓',
      scsim: '≿',
      Scy: 'С',
      scy: 'с',
      sdot: '⋅',
      sdotb: '⊡',
      sdote: '⩦',
      searhk: '⤥',
      seArr: '⇘',
      searr: '↘',
      searrow: '↘',
      sect: '§',
      semi: ';',
      seswar: '⤩',
      setminus: '∖',
      setmn: '∖',
      sext: '✶',
      Sfr: '𝔖',
      sfr: '𝔰',
      sfrown: '⌢',
      sharp: '♯',
      SHCHcy: 'Щ',
      shchcy: 'щ',
      SHcy: 'Ш',
      shcy: 'ш',
      ShortDownArrow: '↓',
      ShortLeftArrow: '←',
      shortmid: '∣',
      shortparallel: '∥',
      ShortRightArrow: '→',
      ShortUpArrow: '↑',
      shy: '­',
      Sigma: 'Σ',
      sigma: 'σ',
      sigmaf: 'ς',
      sigmav: 'ς',
      sim: '∼',
      simdot: '⩪',
      sime: '≃',
      simeq: '≃',
      simg: '⪞',
      simgE: '⪠',
      siml: '⪝',
      simlE: '⪟',
      simne: '≆',
      simplus: '⨤',
      simrarr: '⥲',
      slarr: '←',
      SmallCircle: '∘',
      smallsetminus: '∖',
      smashp: '⨳',
      smeparsl: '⧤',
      smid: '∣',
      smile: '⌣',
      smt: '⪪',
      smte: '⪬',
      smtes: '⪬︀',
      SOFTcy: 'Ь',
      softcy: 'ь',
      sol: '/',
      solb: '⧄',
      solbar: '⌿',
      Sopf: '𝕊',
      sopf: '𝕤',
      spades: '♠',
      spadesuit: '♠',
      spar: '∥',
      sqcap: '⊓',
      sqcaps: '⊓︀',
      sqcup: '⊔',
      sqcups: '⊔︀',
      Sqrt: '√',
      sqsub: '⊏',
      sqsube: '⊑',
      sqsubset: '⊏',
      sqsubseteq: '⊑',
      sqsup: '⊐',
      sqsupe: '⊒',
      sqsupset: '⊐',
      sqsupseteq: '⊒',
      squ: '□',
      Square: '□',
      square: '□',
      SquareIntersection: '⊓',
      SquareSubset: '⊏',
      SquareSubsetEqual: '⊑',
      SquareSuperset: '⊐',
      SquareSupersetEqual: '⊒',
      SquareUnion: '⊔',
      squarf: '▪',
      squf: '▪',
      srarr: '→',
      Sscr: '𝒮',
      sscr: '𝓈',
      ssetmn: '∖',
      ssmile: '⌣',
      sstarf: '⋆',
      Star: '⋆',
      star: '☆',
      starf: '★',
      straightepsilon: 'ϵ',
      straightphi: 'ϕ',
      strns: '¯',
      Sub: '⋐',
      sub: '⊂',
      subdot: '⪽',
      subE: '⫅',
      sube: '⊆',
      subedot: '⫃',
      submult: '⫁',
      subnE: '⫋',
      subne: '⊊',
      subplus: '⪿',
      subrarr: '⥹',
      Subset: '⋐',
      subset: '⊂',
      subseteq: '⊆',
      subseteqq: '⫅',
      SubsetEqual: '⊆',
      subsetneq: '⊊',
      subsetneqq: '⫋',
      subsim: '⫇',
      subsub: '⫕',
      subsup: '⫓',
      succ: '≻',
      succapprox: '⪸',
      succcurlyeq: '≽',
      Succeeds: '≻',
      SucceedsEqual: '⪰',
      SucceedsSlantEqual: '≽',
      SucceedsTilde: '≿',
      succeq: '⪰',
      succnapprox: '⪺',
      succneqq: '⪶',
      succnsim: '⋩',
      succsim: '≿',
      SuchThat: '∋',
      Sum: '∑',
      sum: '∑',
      sung: '♪',
      Sup: '⋑',
      sup: '⊃',
      sup1: '¹',
      sup2: '²',
      sup3: '³',
      supdot: '⪾',
      supdsub: '⫘',
      supE: '⫆',
      supe: '⊇',
      supedot: '⫄',
      Superset: '⊃',
      SupersetEqual: '⊇',
      suphsol: '⟉',
      suphsub: '⫗',
      suplarr: '⥻',
      supmult: '⫂',
      supnE: '⫌',
      supne: '⊋',
      supplus: '⫀',
      Supset: '⋑',
      supset: '⊃',
      supseteq: '⊇',
      supseteqq: '⫆',
      supsetneq: '⊋',
      supsetneqq: '⫌',
      supsim: '⫈',
      supsub: '⫔',
      supsup: '⫖',
      swarhk: '⤦',
      swArr: '⇙',
      swarr: '↙',
      swarrow: '↙',
      swnwar: '⤪',
      szlig: 'ß',
      Tab: '\t',
      target: '⌖',
      Tau: 'Τ',
      tau: 'τ',
      tbrk: '⎴',
      Tcaron: 'Ť',
      tcaron: 'ť',
      Tcedil: 'Ţ',
      tcedil: 'ţ',
      Tcy: 'Т',
      tcy: 'т',
      tdot: '⃛',
      telrec: '⌕',
      Tfr: '𝔗',
      tfr: '𝔱',
      there4: '∴',
      Therefore: '∴',
      therefore: '∴',
      Theta: 'Θ',
      theta: 'θ',
      thetasym: 'ϑ',
      thetav: 'ϑ',
      thickapprox: '≈',
      thicksim: '∼',
      ThickSpace: '  ',
      thinsp: ' ',
      ThinSpace: ' ',
      thkap: '≈',
      thksim: '∼',
      THORN: 'Þ',
      thorn: 'þ',
      Tilde: '∼',
      tilde: '˜',
      TildeEqual: '≃',
      TildeFullEqual: '≅',
      TildeTilde: '≈',
      times: '×',
      timesb: '⊠',
      timesbar: '⨱',
      timesd: '⨰',
      tint: '∭',
      toea: '⤨',
      top: '⊤',
      topbot: '⌶',
      topcir: '⫱',
      Topf: '𝕋',
      topf: '𝕥',
      topfork: '⫚',
      tosa: '⤩',
      tprime: '‴',
      TRADE: '™',
      trade: '™',
      triangle: '▵',
      triangledown: '▿',
      triangleleft: '◃',
      trianglelefteq: '⊴',
      triangleq: '≜',
      triangleright: '▹',
      trianglerighteq: '⊵',
      tridot: '◬',
      trie: '≜',
      triminus: '⨺',
      TripleDot: '⃛',
      triplus: '⨹',
      trisb: '⧍',
      tritime: '⨻',
      trpezium: '⏢',
      Tscr: '𝒯',
      tscr: '𝓉',
      TScy: 'Ц',
      tscy: 'ц',
      TSHcy: 'Ћ',
      tshcy: 'ћ',
      Tstrok: 'Ŧ',
      tstrok: 'ŧ',
      twixt: '≬',
      twoheadleftarrow: '↞',
      twoheadrightarrow: '↠',
      Uacute: 'Ú',
      uacute: 'ú',
      Uarr: '↟',
      uArr: '⇑',
      uarr: '↑',
      Uarrocir: '⥉',
      Ubrcy: 'Ў',
      ubrcy: 'ў',
      Ubreve: 'Ŭ',
      ubreve: 'ŭ',
      Ucirc: 'Û',
      ucirc: 'û',
      Ucy: 'У',
      ucy: 'у',
      udarr: '⇅',
      Udblac: 'Ű',
      udblac: 'ű',
      udhar: '⥮',
      ufisht: '⥾',
      Ufr: '𝔘',
      ufr: '𝔲',
      Ugrave: 'Ù',
      ugrave: 'ù',
      uHar: '⥣',
      uharl: '↿',
      uharr: '↾',
      uhblk: '▀',
      ulcorn: '⌜',
      ulcorner: '⌜',
      ulcrop: '⌏',
      ultri: '◸',
      Umacr: 'Ū',
      umacr: 'ū',
      uml: '¨',
      UnderBar: '_',
      UnderBrace: '⏟',
      UnderBracket: '⎵',
      UnderParenthesis: '⏝',
      Union: '⋃',
      UnionPlus: '⊎',
      Uogon: 'Ų',
      uogon: 'ų',
      Uopf: '𝕌',
      uopf: '𝕦',
      UpArrow: '↑',
      Uparrow: '⇑',
      uparrow: '↑',
      UpArrowBar: '⤒',
      UpArrowDownArrow: '⇅',
      UpDownArrow: '↕',
      Updownarrow: '⇕',
      updownarrow: '↕',
      UpEquilibrium: '⥮',
      upharpoonleft: '↿',
      upharpoonright: '↾',
      uplus: '⊎',
      UpperLeftArrow: '↖',
      UpperRightArrow: '↗',
      Upsi: 'ϒ',
      upsi: 'υ',
      upsih: 'ϒ',
      Upsilon: 'Υ',
      upsilon: 'υ',
      UpTee: '⊥',
      UpTeeArrow: '↥',
      upuparrows: '⇈',
      urcorn: '⌝',
      urcorner: '⌝',
      urcrop: '⌎',
      Uring: 'Ů',
      uring: 'ů',
      urtri: '◹',
      Uscr: '𝒰',
      uscr: '𝓊',
      utdot: '⋰',
      Utilde: 'Ũ',
      utilde: 'ũ',
      utri: '▵',
      utrif: '▴',
      uuarr: '⇈',
      Uuml: 'Ü',
      uuml: 'ü',
      uwangle: '⦧',
      vangrt: '⦜',
      varepsilon: 'ϵ',
      varkappa: 'ϰ',
      varnothing: '∅',
      varphi: 'ϕ',
      varpi: 'ϖ',
      varpropto: '∝',
      vArr: '⇕',
      varr: '↕',
      varrho: 'ϱ',
      varsigma: 'ς',
      varsubsetneq: '⊊︀',
      varsubsetneqq: '⫋︀',
      varsupsetneq: '⊋︀',
      varsupsetneqq: '⫌︀',
      vartheta: 'ϑ',
      vartriangleleft: '⊲',
      vartriangleright: '⊳',
      Vbar: '⫫',
      vBar: '⫨',
      vBarv: '⫩',
      Vcy: 'В',
      vcy: 'в',
      VDash: '⊫',
      Vdash: '⊩',
      vDash: '⊨',
      vdash: '⊢',
      Vdashl: '⫦',
      Vee: '⋁',
      vee: '∨',
      veebar: '⊻',
      veeeq: '≚',
      vellip: '⋮',
      Verbar: '‖',
      verbar: '|',
      Vert: '‖',
      vert: '|',
      VerticalBar: '∣',
      VerticalLine: '|',
      VerticalSeparator: '❘',
      VerticalTilde: '≀',
      VeryThinSpace: ' ',
      Vfr: '𝔙',
      vfr: '𝔳',
      vltri: '⊲',
      vnsub: '⊂⃒',
      vnsup: '⊃⃒',
      Vopf: '𝕍',
      vopf: '𝕧',
      vprop: '∝',
      vrtri: '⊳',
      Vscr: '𝒱',
      vscr: '𝓋',
      vsubnE: '⫋︀',
      vsubne: '⊊︀',
      vsupnE: '⫌︀',
      vsupne: '⊋︀',
      Vvdash: '⊪',
      vzigzag: '⦚',
      Wcirc: 'Ŵ',
      wcirc: 'ŵ',
      wedbar: '⩟',
      Wedge: '⋀',
      wedge: '∧',
      wedgeq: '≙',
      weierp: '℘',
      Wfr: '𝔚',
      wfr: '𝔴',
      Wopf: '𝕎',
      wopf: '𝕨',
      wp: '℘',
      wr: '≀',
      wreath: '≀',
      Wscr: '𝒲',
      wscr: '𝓌',
      xcap: '⋂',
      xcirc: '◯',
      xcup: '⋃',
      xdtri: '▽',
      Xfr: '𝔛',
      xfr: '𝔵',
      xhArr: '⟺',
      xharr: '⟷',
      Xi: 'Ξ',
      xi: 'ξ',
      xlArr: '⟸',
      xlarr: '⟵',
      xmap: '⟼',
      xnis: '⋻',
      xodot: '⨀',
      Xopf: '𝕏',
      xopf: '𝕩',
      xoplus: '⨁',
      xotime: '⨂',
      xrArr: '⟹',
      xrarr: '⟶',
      Xscr: '𝒳',
      xscr: '𝓍',
      xsqcup: '⨆',
      xuplus: '⨄',
      xutri: '△',
      xvee: '⋁',
      xwedge: '⋀',
      Yacute: 'Ý',
      yacute: 'ý',
      YAcy: 'Я',
      yacy: 'я',
      Ycirc: 'Ŷ',
      ycirc: 'ŷ',
      Ycy: 'Ы',
      ycy: 'ы',
      yen: '¥',
      Yfr: '𝔜',
      yfr: '𝔶',
      YIcy: 'Ї',
      yicy: 'ї',
      Yopf: '𝕐',
      yopf: '𝕪',
      Yscr: '𝒴',
      yscr: '𝓎',
      YUcy: 'Ю',
      yucy: 'ю',
      Yuml: 'Ÿ',
      yuml: 'ÿ',
      Zacute: 'Ź',
      zacute: 'ź',
      Zcaron: 'Ž',
      zcaron: 'ž',
      Zcy: 'З',
      zcy: 'з',
      Zdot: 'Ż',
      zdot: 'ż',
      zeetrf: 'ℨ',
      ZeroWidthSpace: '​',
      Zeta: 'Ζ',
      zeta: 'ζ',
      Zfr: 'ℨ',
      zfr: '𝔷',
      ZHcy: 'Ж',
      zhcy: 'ж',
      zigrarr: '⇝',
      Zopf: 'ℤ',
      zopf: '𝕫',
      Zscr: '𝒵',
      zscr: '𝓏',
      zwj: '‍',
      zwnj: '‌',
    },
    m = Object.prototype.hasOwnProperty;
  function b(e) {
    return (t = e), (r = g) && m.call(r, t) ? g[e] : e;
    var r, t;
  }
  var v = Object.prototype.hasOwnProperty;
  function k(e) {
    var r = [].slice.call(arguments, 1);
    return (
      r.forEach(function(r) {
        if (r) {
          if ('object' != typeof r) throw new TypeError(r + 'must be object');
          Object.keys(r).forEach(function(t) {
            e[t] = r[t];
          });
        }
      }),
      e
    );
  }
  var y = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function _(e) {
    return e.indexOf('\\') < 0 ? e : e.replace(y, '$1');
  }
  function w(e) {
    return (
      !(e >= 55296 && e <= 57343) &&
      !(e >= 64976 && e <= 65007) &&
      65535 != (65535 & e) &&
      65534 != (65535 & e) &&
      !(e >= 0 && e <= 8) &&
      11 !== e &&
      !(e >= 14 && e <= 31) &&
      !(e >= 127 && e <= 159) &&
      !(e > 1114111)
    );
  }
  function x(e) {
    if (e > 65535) {
      var r = 55296 + ((e -= 65536) >> 10),
        t = 56320 + (1023 & e);
      return String.fromCharCode(r, t);
    }
    return String.fromCharCode(e);
  }
  var q = /&([a-z#][a-z0-9]{1,31});/gi,
    A = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  function C(e, r) {
    var t = 0,
      n = b(r);
    return r !== n ? n : 35 === r.charCodeAt(0) && A.test(r) && w((t = 'x' === r[1].toLowerCase() ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10))) ? x(t) : e;
  }
  function S(e) {
    return e.indexOf('&') < 0 ? e : e.replace(q, C);
  }
  var E = /[&<>"]/,
    M = /[&<>"]/g,
    L = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  function T(e) {
    return L[e];
  }
  function D(e) {
    return E.test(e) ? e.replace(M, T) : e;
  }
  var I = {};
  function N(e, r) {
    return ++r >= e.length - 2
      ? r
      : 'paragraph_open' === e[r].type && e[r].tight && 'inline' === e[r + 1].type && 0 === e[r + 1].content.length && 'paragraph_close' === e[r + 2].type && e[r + 2].tight
      ? N(e, r + 2)
      : r;
  }
  (I.blockquote_open = function() {
    return '<blockquote>\n';
  }),
    (I.blockquote_close = function(e, r) {
      return '</blockquote>' + R(e, r);
    }),
    (I.code = function(e, r) {
      return e[r].block ? '<pre><code>' + D(e[r].content) + '</code></pre>' + R(e, r) : '<code>' + D(e[r].content) + '</code>';
    }),
    (I.fence = function(e, r, t, n, o) {
      var s,
        i,
        a,
        l,
        c = e[r],
        p = '',
        u = t.langPrefix;
      if (c.params) {
        if (((i = (s = c.params.split(/\s+/g)).join(' ')), (a = o.rules.fence_custom), (l = s[0]), a && v.call(a, l))) return o.rules.fence_custom[s[0]](e, r, t, n, o);
        p = ' class="' + u + D(S(_(i))) + '"';
      }
      return '<pre><code' + p + '>' + ((t.highlight && t.highlight.apply(t.highlight, [c.content].concat(s))) || D(c.content)) + '</code></pre>' + R(e, r);
    }),
    (I.fence_custom = {}),
    (I.heading_open = function(e, r) {
      return '<h' + e[r].hLevel + '>';
    }),
    (I.heading_close = function(e, r) {
      return '</h' + e[r].hLevel + '>\n';
    }),
    (I.hr = function(e, r, t) {
      return (t.xhtmlOut ? '<hr />' : '<hr>') + R(e, r);
    }),
    (I.bullet_list_open = function() {
      return '<ul>\n';
    }),
    (I.bullet_list_close = function(e, r) {
      return '</ul>' + R(e, r);
    }),
    (I.list_item_open = function() {
      return '<li>';
    }),
    (I.list_item_close = function() {
      return '</li>\n';
    }),
    (I.ordered_list_open = function(e, r) {
      var t = e[r];
      return '<ol' + (t.order > 1 ? ' start="' + t.order + '"' : '') + '>\n';
    }),
    (I.ordered_list_close = function(e, r) {
      return '</ol>' + R(e, r);
    }),
    (I.paragraph_open = function(e, r) {
      return e[r].tight ? '' : '<p>';
    }),
    (I.paragraph_close = function(e, r) {
      var t = !(e[r].tight && r && 'inline' === e[r - 1].type && !e[r - 1].content);
      return (e[r].tight ? '' : '</p>') + (t ? R(e, r) : '');
    }),
    (I.link_open = function(e, r, t) {
      var n = e[r].title ? ' title="' + D(S(e[r].title)) + '"' : '',
        o = t.linkTarget ? ' target="' + t.linkTarget + '"' : '';
      return '<a href="' + D(e[r].href) + '"' + n + o + '>';
    }),
    (I.link_close = function() {
      return '</a>';
    }),
    (I.image = function(e, r, t) {
      var n = ' src="' + D(e[r].src) + '"',
        o = e[r].title ? ' title="' + D(S(e[r].title)) + '"' : '';
      return '<img' + n + (' alt="' + (e[r].alt ? D(S(_(e[r].alt))) : '') + '"') + o + (t.xhtmlOut ? ' /' : '') + '>';
    }),
    (I.table_open = function() {
      return '<table>\n';
    }),
    (I.table_close = function() {
      return '</table>\n';
    }),
    (I.thead_open = function() {
      return '<thead>\n';
    }),
    (I.thead_close = function() {
      return '</thead>\n';
    }),
    (I.tbody_open = function() {
      return '<tbody>\n';
    }),
    (I.tbody_close = function() {
      return '</tbody>\n';
    }),
    (I.tr_open = function() {
      return '<tr>';
    }),
    (I.tr_close = function() {
      return '</tr>\n';
    }),
    (I.th_open = function(e, r) {
      var t = e[r];
      return '<th' + (t.align ? ' style="text-align:' + t.align + '"' : '') + '>';
    }),
    (I.th_close = function() {
      return '</th>';
    }),
    (I.td_open = function(e, r) {
      var t = e[r];
      return '<td' + (t.align ? ' style="text-align:' + t.align + '"' : '') + '>';
    }),
    (I.td_close = function() {
      return '</td>';
    }),
    (I.strong_open = function() {
      return '<strong>';
    }),
    (I.strong_close = function() {
      return '</strong>';
    }),
    (I.em_open = function() {
      return '<em>';
    }),
    (I.em_close = function() {
      return '</em>';
    }),
    (I.del_open = function() {
      return '<del>';
    }),
    (I.del_close = function() {
      return '</del>';
    }),
    (I.ins_open = function() {
      return '<ins>';
    }),
    (I.ins_close = function() {
      return '</ins>';
    }),
    (I.mark_open = function() {
      return '<mark>';
    }),
    (I.mark_close = function() {
      return '</mark>';
    }),
    (I.sub = function(e, r) {
      return '<sub>' + D(e[r].content) + '</sub>';
    }),
    (I.sup = function(e, r) {
      return '<sup>' + D(e[r].content) + '</sup>';
    }),
    (I.hardbreak = function(e, r, t) {
      return t.xhtmlOut ? '<br />\n' : '<br>\n';
    }),
    (I.softbreak = function(e, r, t) {
      return t.breaks ? (t.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
    }),
    (I.text = function(e, r) {
      return D(e[r].content);
    }),
    (I.htmlblock = function(e, r) {
      return e[r].content;
    }),
    (I.htmltag = function(e, r) {
      return e[r].content;
    }),
    (I.abbr_open = function(e, r) {
      return '<abbr title="' + D(S(e[r].title)) + '">';
    }),
    (I.abbr_close = function() {
      return '</abbr>';
    }),
    (I.footnote_ref = function(e, r) {
      var t = Number(e[r].id + 1).toString(),
        n = 'fnref' + t;
      return e[r].subId > 0 && (n += ':' + e[r].subId), '<sup class="footnote-ref"><a href="#fn' + t + '" id="' + n + '">[' + t + ']</a></sup>';
    }),
    (I.footnote_block_open = function(e, r, t) {
      return (t.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n';
    }),
    (I.footnote_block_close = function() {
      return '</ol>\n</section>\n';
    }),
    (I.footnote_open = function(e, r) {
      return '<li id="fn' + Number(e[r].id + 1).toString() + '"  class="footnote-item">';
    }),
    (I.footnote_close = function() {
      return '</li>\n';
    }),
    (I.footnote_anchor = function(e, r) {
      var t = 'fnref' + Number(e[r].id + 1).toString();
      return e[r].subId > 0 && (t += ':' + e[r].subId), ' <a href="#' + t + '" class="footnote-backref">↩</a>';
    }),
    (I.dl_open = function() {
      return '<dl>\n';
    }),
    (I.dt_open = function() {
      return '<dt>';
    }),
    (I.dd_open = function() {
      return '<dd>';
    }),
    (I.dl_close = function() {
      return '</dl>\n';
    }),
    (I.dt_close = function() {
      return '</dt>\n';
    }),
    (I.dd_close = function() {
      return '</dd>\n';
    });
  var R = (I.getBreak = function(e, r) {
    return (r = N(e, r)) < e.length && 'list_item_close' === e[r].type ? '' : '\n';
  });
  function O() {
    (this.rules = k({}, I)), (this.getBreak = I.getBreak);
  }
  function z() {
    (this.__rules__ = []), (this.__cache__ = null);
  }
  function U(e, r, t, n, o) {
    (this.src = e),
      (this.env = n),
      (this.options = t),
      (this.parser = r),
      (this.tokens = o),
      (this.pos = 0),
      (this.posMax = this.src.length),
      (this.level = 0),
      (this.pending = ''),
      (this.pendingLevel = 0),
      (this.cache = []),
      (this.isInLabel = !1),
      (this.linkLevel = 0),
      (this.linkContent = ''),
      (this.labelUnmatchedScopes = 0);
  }
  function j(e, r) {
    var t,
      n,
      o,
      s = -1,
      i = e.posMax,
      a = e.pos,
      l = e.isInLabel;
    if (e.isInLabel) return -1;
    if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;
    for (e.pos = r + 1, e.isInLabel = !0, t = 1; e.pos < i; ) {
      if (91 === (o = e.src.charCodeAt(e.pos))) t++;
      else if (93 === o && 0 === --t) {
        n = !0;
        break;
      }
      e.parser.skipToken(e);
    }
    return n ? ((s = e.pos), (e.labelUnmatchedScopes = 0)) : (e.labelUnmatchedScopes = t - 1), (e.pos = a), (e.isInLabel = l), s;
  }
  function V(e, r, t, n) {
    var o, s, i, a, l, c;
    if (42 !== e.charCodeAt(0)) return -1;
    if (91 !== e.charCodeAt(1)) return -1;
    if (-1 === e.indexOf(']:')) return -1;
    if ((s = j((o = new U(e, r, t, n, [])), 1)) < 0 || 58 !== e.charCodeAt(s + 1)) return -1;
    for (a = o.posMax, i = s + 2; i < a && 10 !== o.src.charCodeAt(i); i++);
    return (
      (l = e.slice(2, s)),
      0 === (c = e.slice(s + 2, i).trim()).length ? -1 : (n.abbreviations || (n.abbreviations = {}), void 0 === n.abbreviations[':' + l] && (n.abbreviations[':' + l] = c), i)
    );
  }
  function B(e) {
    var r = S(e);
    try {
      r = decodeURI(r);
    } catch (e) {}
    return encodeURI(r);
  }
  function P(e, r) {
    var t,
      n,
      o,
      s = r,
      i = e.posMax;
    if (60 === e.src.charCodeAt(r)) {
      for (r++; r < i; ) {
        if (10 === (t = e.src.charCodeAt(r))) return !1;
        if (62 === t) return (o = B(_(e.src.slice(s + 1, r)))), !!e.parser.validateLink(o) && ((e.pos = r + 1), (e.linkContent = o), !0);
        92 === t && r + 1 < i ? (r += 2) : r++;
      }
      return !1;
    }
    for (n = 0; r < i && 32 !== (t = e.src.charCodeAt(r)) && !(t < 32 || 127 === t); )
      if (92 === t && r + 1 < i) r += 2;
      else {
        if (40 === t && ++n > 1) break;
        if (41 === t && --n < 0) break;
        r++;
      }
    return s !== r && ((o = _(e.src.slice(s, r))), !!e.parser.validateLink(o) && ((e.linkContent = o), (e.pos = r), !0));
  }
  function $(e, r) {
    var t,
      n = r,
      o = e.posMax,
      s = e.src.charCodeAt(r);
    if (34 !== s && 39 !== s && 40 !== s) return !1;
    for (r++, 40 === s && (s = 41); r < o; ) {
      if ((t = e.src.charCodeAt(r)) === s) return (e.pos = r + 1), (e.linkContent = _(e.src.slice(n + 1, r))), !0;
      92 === t && r + 1 < o ? (r += 2) : r++;
    }
    return !1;
  }
  function G(e) {
    return e
      .trim()
      .replace(/\s+/g, ' ')
      .toUpperCase();
  }
  function H(e, r, t, n) {
    var o, s, i, a, l, c, p, u, h;
    if (91 !== e.charCodeAt(0)) return -1;
    if (-1 === e.indexOf(']:')) return -1;
    if ((s = j((o = new U(e, r, t, n, [])), 0)) < 0 || 58 !== e.charCodeAt(s + 1)) return -1;
    for (a = o.posMax, i = s + 2; i < a && (32 === (l = o.src.charCodeAt(i)) || 10 === l); i++);
    if (!P(o, i)) return -1;
    for (p = o.linkContent, c = i = o.pos, i += 1; i < a && (32 === (l = o.src.charCodeAt(i)) || 10 === l); i++);
    for (i < a && c !== i && $(o, i) ? ((u = o.linkContent), (i = o.pos)) : ((u = ''), (i = c)); i < a && 32 === o.src.charCodeAt(i); ) i++;
    return i < a && 10 !== o.src.charCodeAt(i) ? -1 : ((h = G(e.slice(1, s))), void 0 === n.references[h] && (n.references[h] = { title: u, href: p }), i);
  }
  (O.prototype.renderInline = function(e, r, t) {
    for (var n = this.rules, o = e.length, s = 0, i = ''; o--; ) i += n[e[s].type](e, s++, r, t, this);
    return i;
  }),
    (O.prototype.render = function(e, r, t) {
      for (var n = this.rules, o = e.length, s = -1, i = ''; ++s < o; )
        'inline' === e[s].type ? (i += this.renderInline(e[s].children, r, t)) : (i += n[e[s].type](e, s, r, t, this));
      return i;
    }),
    (z.prototype.__find__ = function(e) {
      for (var r = this.__rules__.length, t = -1; r--; ) if (this.__rules__[++t].name === e) return t;
      return -1;
    }),
    (z.prototype.__compile__ = function() {
      var e = this,
        r = [''];
      e.__rules__.forEach(function(e) {
        e.enabled &&
          e.alt.forEach(function(e) {
            r.indexOf(e) < 0 && r.push(e);
          });
      }),
        (e.__cache__ = {}),
        r.forEach(function(r) {
          (e.__cache__[r] = []),
            e.__rules__.forEach(function(t) {
              t.enabled && ((r && t.alt.indexOf(r) < 0) || e.__cache__[r].push(t.fn));
            });
        });
    }),
    (z.prototype.at = function(e, r, t) {
      var n = this.__find__(e),
        o = t || {};
      if (-1 === n) throw new Error('Parser rule not found: ' + e);
      (this.__rules__[n].fn = r), (this.__rules__[n].alt = o.alt || []), (this.__cache__ = null);
    }),
    (z.prototype.before = function(e, r, t, n) {
      var o = this.__find__(e),
        s = n || {};
      if (-1 === o) throw new Error('Parser rule not found: ' + e);
      this.__rules__.splice(o, 0, { name: r, enabled: !0, fn: t, alt: s.alt || [] }), (this.__cache__ = null);
    }),
    (z.prototype.after = function(e, r, t, n) {
      var o = this.__find__(e),
        s = n || {};
      if (-1 === o) throw new Error('Parser rule not found: ' + e);
      this.__rules__.splice(o + 1, 0, { name: r, enabled: !0, fn: t, alt: s.alt || [] }), (this.__cache__ = null);
    }),
    (z.prototype.push = function(e, r, t) {
      var n = t || {};
      this.__rules__.push({ name: e, enabled: !0, fn: r, alt: n.alt || [] }), (this.__cache__ = null);
    }),
    (z.prototype.enable = function(e, r) {
      (e = Array.isArray(e) ? e : [e]),
        r &&
          this.__rules__.forEach(function(e) {
            e.enabled = !1;
          }),
        e.forEach(function(e) {
          var r = this.__find__(e);
          if (r < 0) throw new Error('Rules manager: invalid rule name ' + e);
          this.__rules__[r].enabled = !0;
        }, this),
        (this.__cache__ = null);
    }),
    (z.prototype.disable = function(e) {
      (e = Array.isArray(e) ? e : [e]).forEach(function(e) {
        var r = this.__find__(e);
        if (r < 0) throw new Error('Rules manager: invalid rule name ' + e);
        this.__rules__[r].enabled = !1;
      }, this),
        (this.__cache__ = null);
    }),
    (z.prototype.getRules = function(e) {
      return null === this.__cache__ && this.__compile__(), this.__cache__[e] || [];
    }),
    (U.prototype.pushPending = function() {
      this.tokens.push({ type: 'text', content: this.pending, level: this.pendingLevel }), (this.pending = '');
    }),
    (U.prototype.push = function(e) {
      this.pending && this.pushPending(), this.tokens.push(e), (this.pendingLevel = this.level);
    }),
    (U.prototype.cacheSet = function(e, r) {
      for (var t = this.cache.length; t <= e; t++) this.cache.push(0);
      this.cache[e] = r;
    }),
    (U.prototype.cacheGet = function(e) {
      return e < this.cache.length ? this.cache[e] : 0;
    });
  var Z = ' \n()[]\'".,!?-';
  function F(e) {
    return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
  }
  var K = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    X = /\((c|tm|r|p)\)/gi,
    J = { c: '©', r: '®', p: '§', tm: '™' };
  var Y = /['"]/,
    W = /['"]/g,
    Q = /[-\s()\[\]]/;
  function ee(e, r) {
    return !(r < 0 || r >= e.length) && !Q.test(e[r]);
  }
  function re(e, r, t) {
    return e.substr(0, r) + t + e.substr(r + 1);
  }
  var te = [
    [
      'block',
      function(e) {
        e.inlineMode
          ? e.tokens.push({ type: 'inline', content: e.src.replace(/\n/g, ' ').trim(), level: 0, lines: [0, 1], children: [] })
          : e.block.parse(e.src, e.options, e.env, e.tokens);
      },
    ],
    [
      'abbr',
      function(e) {
        var r,
          t,
          n,
          o,
          s = e.tokens;
        if (!e.inlineMode)
          for (r = 1, t = s.length - 1; r < t; r++)
            if ('paragraph_open' === s[r - 1].type && 'inline' === s[r].type && 'paragraph_close' === s[r + 1].type) {
              for (n = s[r].content; n.length && !((o = V(n, e.inline, e.options, e.env)) < 0); ) n = n.slice(o).trim();
              (s[r].content = n), n.length || ((s[r - 1].tight = !0), (s[r + 1].tight = !0));
            }
      },
    ],
    [
      'references',
      function(e) {
        var r,
          t,
          n,
          o,
          s = e.tokens;
        if (((e.env.references = e.env.references || {}), !e.inlineMode))
          for (r = 1, t = s.length - 1; r < t; r++)
            if ('inline' === s[r].type && 'paragraph_open' === s[r - 1].type && 'paragraph_close' === s[r + 1].type) {
              for (n = s[r].content; n.length && !((o = H(n, e.inline, e.options, e.env)) < 0); ) n = n.slice(o).trim();
              (s[r].content = n), n.length || ((s[r - 1].tight = !0), (s[r + 1].tight = !0));
            }
      },
    ],
    [
      'inline',
      function(e) {
        var r,
          t,
          n,
          o = e.tokens;
        for (t = 0, n = o.length; t < n; t++) 'inline' === (r = o[t]).type && e.inline.parse(r.content, e.options, e.env, r.children);
      },
    ],
    [
      'footnote_tail',
      function(e) {
        var r,
          t,
          n,
          o,
          s,
          i,
          a,
          l,
          c,
          p = 0,
          u = !1,
          h = {};
        if (
          e.env.footnotes &&
          ((e.tokens = e.tokens.filter(function(e) {
            return 'footnote_reference_open' === e.type
              ? ((u = !0), (l = []), (c = e.label), !1)
              : 'footnote_reference_close' === e.type
              ? ((u = !1), (h[':' + c] = l), !1)
              : (u && l.push(e), !u);
          })),
          e.env.footnotes.list)
        ) {
          for (i = e.env.footnotes.list, e.tokens.push({ type: 'footnote_block_open', level: p++ }), r = 0, t = i.length; r < t; r++) {
            for (
              e.tokens.push({ type: 'footnote_open', id: r, level: p++ }),
                i[r].tokens
                  ? ((a = []).push({ type: 'paragraph_open', tight: !1, level: p++ }),
                    a.push({ type: 'inline', content: '', level: p, children: i[r].tokens }),
                    a.push({ type: 'paragraph_close', tight: !1, level: --p }))
                  : i[r].label && (a = h[':' + i[r].label]),
                e.tokens = e.tokens.concat(a),
                s = 'paragraph_close' === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null,
                o = i[r].count > 0 ? i[r].count : 1,
                n = 0;
              n < o;
              n++
            )
              e.tokens.push({ type: 'footnote_anchor', id: r, subId: n, level: p });
            s && e.tokens.push(s), e.tokens.push({ type: 'footnote_close', level: --p });
          }
          e.tokens.push({ type: 'footnote_block_close', level: --p });
        }
      },
    ],
    [
      'abbr2',
      function(e) {
        var r,
          t,
          n,
          o,
          s,
          i,
          a,
          l,
          c,
          p,
          u,
          h,
          f = e.tokens;
        if (e.env.abbreviations)
          for (
            e.env.abbrRegExp ||
              ((h =
                '(^|[' +
                Z.split('')
                  .map(F)
                  .join('') +
                '])(' +
                Object.keys(e.env.abbreviations)
                  .map(function(e) {
                    return e.substr(1);
                  })
                  .sort(function(e, r) {
                    return r.length - e.length;
                  })
                  .map(F)
                  .join('|') +
                ')($|[' +
                Z.split('')
                  .map(F)
                  .join('') +
                '])'),
              (e.env.abbrRegExp = new RegExp(h, 'g'))),
              p = e.env.abbrRegExp,
              t = 0,
              n = f.length;
            t < n;
            t++
          )
            if ('inline' === f[t].type)
              for (r = (o = f[t].children).length - 1; r >= 0; r--)
                if ('text' === (s = o[r]).type) {
                  for (l = 0, i = s.content, p.lastIndex = 0, c = s.level, a = []; (u = p.exec(i)); )
                    p.lastIndex > l && a.push({ type: 'text', content: i.slice(l, u.index + u[1].length), level: c }),
                      a.push({ type: 'abbr_open', title: e.env.abbreviations[':' + u[2]], level: c++ }),
                      a.push({ type: 'text', content: u[2], level: c }),
                      a.push({ type: 'abbr_close', level: --c }),
                      (l = p.lastIndex - u[3].length);
                  a.length && (l < i.length && a.push({ type: 'text', content: i.slice(l), level: c }), (f[t].children = o = [].concat(o.slice(0, r), a, o.slice(r + 1))));
                }
      },
    ],
    [
      'replacements',
      function(e) {
        var r, t, n, o, s, i;
        if (e.options.typographer)
          for (s = e.tokens.length - 1; s >= 0; s--)
            if ('inline' === e.tokens[s].type)
              for (r = (o = e.tokens[s].children).length - 1; r >= 0; r--)
                'text' === (t = o[r]).type &&
                  ((n = t.content),
                  (n =
                    (i = n).indexOf('(') < 0
                      ? i
                      : i.replace(X, function(e, r) {
                          return J[r.toLowerCase()];
                        })),
                  K.test(n) &&
                    (n = n
                      .replace(/\+-/g, '±')
                      .replace(/\.{2,}/g, '…')
                      .replace(/([?!])…/g, '$1..')
                      .replace(/([?!]){4,}/g, '$1$1$1')
                      .replace(/,{2,}/g, ',')
                      .replace(/(^|[^-])---([^-]|$)/gm, '$1—$2')
                      .replace(/(^|\s)--(\s|$)/gm, '$1–$2')
                      .replace(/(^|[^-\s])--([^-\s]|$)/gm, '$1–$2')),
                  (t.content = n));
      },
    ],
    [
      'smartquotes',
      function(e) {
        var r, t, n, o, s, i, a, l, c, p, u, h, f, d, g, m, b;
        if (e.options.typographer)
          for (b = [], g = e.tokens.length - 1; g >= 0; g--)
            if ('inline' === e.tokens[g].type)
              for (m = e.tokens[g].children, b.length = 0, r = 0; r < m.length; r++)
                if ('text' === (t = m[r]).type && !Y.test(t.text)) {
                  for (a = m[r].level, f = b.length - 1; f >= 0 && !(b[f].level <= a); f--);
                  (b.length = f + 1), (s = 0), (i = (n = t.content).length);
                  e: for (; s < i && ((W.lastIndex = s), (o = W.exec(n))); )
                    if (((l = !ee(n, o.index - 1)), (s = o.index + 1), (d = "'" === o[0]), (c = !ee(n, s)) || l)) {
                      if (((u = !c), (h = !l)))
                        for (f = b.length - 1; f >= 0 && ((p = b[f]), !(b[f].level < a)); f--)
                          if (p.single === d && b[f].level === a) {
                            (p = b[f]),
                              d
                                ? ((m[p.token].content = re(m[p.token].content, p.pos, e.options.quotes[2])), (t.content = re(t.content, o.index, e.options.quotes[3])))
                                : ((m[p.token].content = re(m[p.token].content, p.pos, e.options.quotes[0])), (t.content = re(t.content, o.index, e.options.quotes[1]))),
                              (b.length = f);
                            continue e;
                          }
                      u ? b.push({ token: r, pos: o.index, single: d, level: a }) : h && d && (t.content = re(t.content, o.index, '’'));
                    } else d && (t.content = re(t.content, o.index, '’'));
                }
      },
    ],
  ];
  function ne() {
    (this.options = {}), (this.ruler = new z());
    for (var e = 0; e < te.length; e++) this.ruler.push(te[e][0], te[e][1]);
  }
  function oe(e, r, t, n, o) {
    var s, i, a, l, c, p, u;
    for (
      this.src = e,
        this.parser = r,
        this.options = t,
        this.env = n,
        this.tokens = o,
        this.bMarks = [],
        this.eMarks = [],
        this.tShift = [],
        this.blkIndent = 0,
        this.line = 0,
        this.lineMax = 0,
        this.tight = !1,
        this.parentType = 'root',
        this.ddIndent = -1,
        this.level = 0,
        this.result = '',
        p = 0,
        u = !1,
        a = l = p = 0,
        c = (i = this.src).length;
      l < c;
      l++
    ) {
      if (((s = i.charCodeAt(l)), !u)) {
        if (32 === s) {
          p++;
          continue;
        }
        u = !0;
      }
      (10 !== s && l !== c - 1) || (10 !== s && l++, this.bMarks.push(a), this.eMarks.push(l), this.tShift.push(p), (u = !1), (p = 0), (a = l + 1));
    }
    this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), (this.lineMax = this.bMarks.length - 1);
  }
  function se(e, r) {
    var t, n, o;
    return (n = e.bMarks[r] + e.tShift[r]) >= (o = e.eMarks[r]) || (42 !== (t = e.src.charCodeAt(n++)) && 45 !== t && 43 !== t) || (n < o && 32 !== e.src.charCodeAt(n)) ? -1 : n;
  }
  function ie(e, r) {
    var t,
      n = e.bMarks[r] + e.tShift[r],
      o = e.eMarks[r];
    if (n + 1 >= o) return -1;
    if ((t = e.src.charCodeAt(n++)) < 48 || t > 57) return -1;
    for (;;) {
      if (n >= o) return -1;
      if (!((t = e.src.charCodeAt(n++)) >= 48 && t <= 57)) {
        if (41 === t || 46 === t) break;
        return -1;
      }
    }
    return n < o && 32 !== e.src.charCodeAt(n) ? -1 : n;
  }
  (ne.prototype.process = function(e) {
    var r, t, n;
    for (r = 0, t = (n = this.ruler.getRules('')).length; r < t; r++) n[r](e);
  }),
    (oe.prototype.isEmpty = function(e) {
      return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
    }),
    (oe.prototype.skipEmptyLines = function(e) {
      for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
      return e;
    }),
    (oe.prototype.skipSpaces = function(e) {
      for (var r = this.src.length; e < r && 32 === this.src.charCodeAt(e); e++);
      return e;
    }),
    (oe.prototype.skipChars = function(e, r) {
      for (var t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++);
      return e;
    }),
    (oe.prototype.skipCharsBack = function(e, r, t) {
      if (e <= t) return e;
      for (; e > t; ) if (r !== this.src.charCodeAt(--e)) return e + 1;
      return e;
    }),
    (oe.prototype.getLines = function(e, r, t, n) {
      var o,
        s,
        i,
        a,
        l,
        c = e;
      if (e >= r) return '';
      if (c + 1 === r) return (s = this.bMarks[c] + Math.min(this.tShift[c], t)), (i = n ? this.eMarks[c] + 1 : this.eMarks[c]), this.src.slice(s, i);
      for (a = new Array(r - e), o = 0; c < r; c++, o++)
        (l = this.tShift[c]) > t && (l = t), l < 0 && (l = 0), (s = this.bMarks[c] + l), (i = c + 1 < r || n ? this.eMarks[c] + 1 : this.eMarks[c]), (a[o] = this.src.slice(s, i));
      return a.join('');
    });
  var ae = {};
  [
    'article',
    'aside',
    'button',
    'blockquote',
    'body',
    'canvas',
    'caption',
    'col',
    'colgroup',
    'dd',
    'div',
    'dl',
    'dt',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'iframe',
    'li',
    'map',
    'object',
    'ol',
    'output',
    'p',
    'pre',
    'progress',
    'script',
    'section',
    'style',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'tr',
    'thead',
    'ul',
    'video',
  ].forEach(function(e) {
    ae[e] = !0;
  });
  var le = /^<([a-zA-Z]{1,15})[\s\/>]/,
    ce = /^<\/([a-zA-Z]{1,15})[\s>]/;
  function pe(e, r) {
    var t = e.bMarks[r] + e.blkIndent,
      n = e.eMarks[r];
    return e.src.substr(t, n - t);
  }
  function ue(e, r) {
    var t,
      n,
      o = e.bMarks[r] + e.tShift[r],
      s = e.eMarks[r];
    return o >= s || (126 !== (n = e.src.charCodeAt(o++)) && 58 !== n) || o === (t = e.skipSpaces(o)) || t >= s ? -1 : t;
  }
  var he = [
    [
      'code',
      function(e, r, t) {
        var n, o;
        if (e.tShift[r] - e.blkIndent < 4) return !1;
        for (o = n = r + 1; n < t; )
          if (e.isEmpty(n)) n++;
          else {
            if (!(e.tShift[n] - e.blkIndent >= 4)) break;
            o = ++n;
          }
        return (e.line = n), e.tokens.push({ type: 'code', content: e.getLines(r, o, 4 + e.blkIndent, !0), block: !0, lines: [r, e.line], level: e.level }), !0;
      },
    ],
    [
      'fences',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a,
          l,
          c = !1,
          p = e.bMarks[r] + e.tShift[r],
          u = e.eMarks[r];
        if (p + 3 > u) return !1;
        if (126 !== (o = e.src.charCodeAt(p)) && 96 !== o) return !1;
        if (((l = p), (s = (p = e.skipChars(p, o)) - l) < 3)) return !1;
        if ((i = e.src.slice(p, u).trim()).indexOf('`') >= 0) return !1;
        if (n) return !0;
        for (a = r; !(++a >= t) && !((p = l = e.bMarks[a] + e.tShift[a]) < (u = e.eMarks[a]) && e.tShift[a] < e.blkIndent); )
          if (e.src.charCodeAt(p) === o && !(e.tShift[a] - e.blkIndent >= 4 || (p = e.skipChars(p, o)) - l < s || (p = e.skipSpaces(p)) < u)) {
            c = !0;
            break;
          }
        return (
          (s = e.tShift[r]), (e.line = a + (c ? 1 : 0)), e.tokens.push({ type: 'fence', params: i, content: e.getLines(r + 1, a, s, !0), lines: [r, e.line], level: e.level }), !0
        );
      },
      ['paragraph', 'blockquote', 'list'],
    ],
    [
      'blockquote',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a,
          l,
          c,
          p,
          u,
          h,
          f,
          d,
          g = e.bMarks[r] + e.tShift[r],
          m = e.eMarks[r];
        if (g > m) return !1;
        if (62 !== e.src.charCodeAt(g++)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (n) return !0;
        for (
          32 === e.src.charCodeAt(g) && g++,
            l = e.blkIndent,
            e.blkIndent = 0,
            a = [e.bMarks[r]],
            e.bMarks[r] = g,
            s = (g = g < m ? e.skipSpaces(g) : g) >= m,
            i = [e.tShift[r]],
            e.tShift[r] = g - e.bMarks[r],
            u = e.parser.ruler.getRules('blockquote'),
            o = r + 1;
          o < t && !((g = e.bMarks[o] + e.tShift[o]) >= (m = e.eMarks[o]));
          o++
        )
          if (62 !== e.src.charCodeAt(g++)) {
            if (s) break;
            for (d = !1, h = 0, f = u.length; h < f; h++)
              if (u[h](e, o, t, !0)) {
                d = !0;
                break;
              }
            if (d) break;
            a.push(e.bMarks[o]), i.push(e.tShift[o]), (e.tShift[o] = -1337);
          } else
            32 === e.src.charCodeAt(g) && g++,
              a.push(e.bMarks[o]),
              (e.bMarks[o] = g),
              (s = (g = g < m ? e.skipSpaces(g) : g) >= m),
              i.push(e.tShift[o]),
              (e.tShift[o] = g - e.bMarks[o]);
        for (
          c = e.parentType,
            e.parentType = 'blockquote',
            e.tokens.push({ type: 'blockquote_open', lines: (p = [r, 0]), level: e.level++ }),
            e.parser.tokenize(e, r, o),
            e.tokens.push({ type: 'blockquote_close', level: --e.level }),
            e.parentType = c,
            p[1] = e.line,
            h = 0;
          h < i.length;
          h++
        )
          (e.bMarks[h + r] = a[h]), (e.tShift[h + r] = i[h]);
        return (e.blkIndent = l), !0;
      },
      ['paragraph', 'blockquote', 'list'],
    ],
    [
      'hr',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a = e.bMarks[r],
          l = e.eMarks[r];
        if ((a += e.tShift[r]) > l) return !1;
        if (42 !== (o = e.src.charCodeAt(a++)) && 45 !== o && 95 !== o) return !1;
        for (s = 1; a < l; ) {
          if ((i = e.src.charCodeAt(a++)) !== o && 32 !== i) return !1;
          i === o && s++;
        }
        return !(s < 3) && (n || ((e.line = r + 1), e.tokens.push({ type: 'hr', lines: [r, e.line], level: e.level })), !0);
      },
      ['paragraph', 'blockquote', 'list'],
    ],
    [
      'list',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a,
          l,
          c,
          p,
          u,
          h,
          f,
          d,
          g,
          m,
          b,
          v,
          k,
          y,
          _,
          w,
          x,
          q,
          A = !0;
        if ((u = ie(e, r)) >= 0) g = !0;
        else {
          if (!((u = se(e, r)) >= 0)) return !1;
          g = !1;
        }
        if (e.level >= e.options.maxNesting) return !1;
        if (((d = e.src.charCodeAt(u - 1)), n)) return !0;
        for (
          b = e.tokens.length,
            g
              ? ((p = e.bMarks[r] + e.tShift[r]),
                (f = Number(e.src.substr(p, u - p - 1))),
                e.tokens.push({ type: 'ordered_list_open', order: f, lines: (k = [r, 0]), level: e.level++ }))
              : e.tokens.push({ type: 'bullet_list_open', lines: (k = [r, 0]), level: e.level++ }),
            o = r,
            v = !1,
            _ = e.parser.ruler.getRules('list');
          !(
            !(o < t) ||
            ((h = (m = e.skipSpaces(u)) >= e.eMarks[o] ? 1 : m - u) > 4 && (h = 1),
            h < 1 && (h = 1),
            (s = u - e.bMarks[o] + h),
            e.tokens.push({ type: 'list_item_open', lines: (y = [r, 0]), level: e.level++ }),
            (a = e.blkIndent),
            (l = e.tight),
            (i = e.tShift[r]),
            (c = e.parentType),
            (e.tShift[r] = m - e.bMarks[r]),
            (e.blkIndent = s),
            (e.tight = !0),
            (e.parentType = 'list'),
            e.parser.tokenize(e, r, t, !0),
            (e.tight && !v) || (A = !1),
            (v = e.line - r > 1 && e.isEmpty(e.line - 1)),
            (e.blkIndent = a),
            (e.tShift[r] = i),
            (e.tight = l),
            (e.parentType = c),
            e.tokens.push({ type: 'list_item_close', level: --e.level }),
            (o = r = e.line),
            (y[1] = o),
            (m = e.bMarks[r]),
            o >= t) ||
            e.isEmpty(o) ||
            e.tShift[o] < e.blkIndent
          );

        ) {
          for (q = !1, w = 0, x = _.length; w < x; w++)
            if (_[w](e, o, t, !0)) {
              q = !0;
              break;
            }
          if (q) break;
          if (g) {
            if ((u = ie(e, o)) < 0) break;
          } else if ((u = se(e, o)) < 0) break;
          if (d !== e.src.charCodeAt(u - 1)) break;
        }
        return (
          e.tokens.push({ type: g ? 'ordered_list_close' : 'bullet_list_close', level: --e.level }),
          (k[1] = o),
          (e.line = o),
          A &&
            (function(e, r) {
              var t,
                n,
                o = e.level + 2;
              for (t = r + 2, n = e.tokens.length - 2; t < n; t++)
                e.tokens[t].level === o && 'paragraph_open' === e.tokens[t].type && ((e.tokens[t + 2].tight = !0), (e.tokens[t].tight = !0), (t += 2));
            })(e, b),
          !0
        );
      },
      ['paragraph', 'blockquote'],
    ],
    [
      'footnote',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a,
          l,
          c = e.bMarks[r] + e.tShift[r],
          p = e.eMarks[r];
        if (c + 4 > p) return !1;
        if (91 !== e.src.charCodeAt(c)) return !1;
        if (94 !== e.src.charCodeAt(c + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (a = c + 2; a < p; a++) {
          if (32 === e.src.charCodeAt(a)) return !1;
          if (93 === e.src.charCodeAt(a)) break;
        }
        return (
          a !== c + 2 &&
          !(a + 1 >= p || 58 !== e.src.charCodeAt(++a)) &&
          (n ||
            (a++,
            e.env.footnotes || (e.env.footnotes = {}),
            e.env.footnotes.refs || (e.env.footnotes.refs = {}),
            (l = e.src.slice(c + 2, a - 2)),
            (e.env.footnotes.refs[':' + l] = -1),
            e.tokens.push({ type: 'footnote_reference_open', label: l, level: e.level++ }),
            (o = e.bMarks[r]),
            (s = e.tShift[r]),
            (i = e.parentType),
            (e.tShift[r] = e.skipSpaces(a) - a),
            (e.bMarks[r] = a),
            (e.blkIndent += 4),
            (e.parentType = 'footnote'),
            e.tShift[r] < e.blkIndent && ((e.tShift[r] += e.blkIndent), (e.bMarks[r] -= e.blkIndent)),
            e.parser.tokenize(e, r, t, !0),
            (e.parentType = i),
            (e.blkIndent -= 4),
            (e.tShift[r] = s),
            (e.bMarks[r] = o),
            e.tokens.push({ type: 'footnote_reference_close', level: --e.level })),
          !0)
        );
      },
      ['paragraph'],
    ],
    [
      'heading',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a = e.bMarks[r] + e.tShift[r],
          l = e.eMarks[r];
        if (a >= l) return !1;
        if (35 !== (o = e.src.charCodeAt(a)) || a >= l) return !1;
        for (s = 1, o = e.src.charCodeAt(++a); 35 === o && a < l && s <= 6; ) s++, (o = e.src.charCodeAt(++a));
        return (
          !(s > 6 || (a < l && 32 !== o)) &&
          (n ||
            ((l = e.skipCharsBack(l, 32, a)),
            (i = e.skipCharsBack(l, 35, a)) > a && 32 === e.src.charCodeAt(i - 1) && (l = i),
            (e.line = r + 1),
            e.tokens.push({ type: 'heading_open', hLevel: s, lines: [r, e.line], level: e.level }),
            a < l && e.tokens.push({ type: 'inline', content: e.src.slice(a, l).trim(), level: e.level + 1, lines: [r, e.line], children: [] }),
            e.tokens.push({ type: 'heading_close', hLevel: s, level: e.level })),
          !0)
        );
      },
      ['paragraph', 'blockquote'],
    ],
    [
      'lheading',
      function(e, r, t) {
        var n,
          o,
          s,
          i = r + 1;
        return (
          !(i >= t) &&
          !(e.tShift[i] < e.blkIndent) &&
          !(e.tShift[i] - e.blkIndent > 3) &&
          !((o = e.bMarks[i] + e.tShift[i]) >= (s = e.eMarks[i])) &&
          (45 === (n = e.src.charCodeAt(o)) || 61 === n) &&
          ((o = e.skipChars(o, n)),
          !((o = e.skipSpaces(o)) < s) &&
            ((o = e.bMarks[r] + e.tShift[r]),
            (e.line = i + 1),
            e.tokens.push({ type: 'heading_open', hLevel: 61 === n ? 1 : 2, lines: [r, e.line], level: e.level }),
            e.tokens.push({ type: 'inline', content: e.src.slice(o, e.eMarks[r]).trim(), level: e.level + 1, lines: [r, e.line - 1], children: [] }),
            e.tokens.push({ type: 'heading_close', hLevel: 61 === n ? 1 : 2, level: e.level }),
            !0))
        );
      },
    ],
    [
      'htmlblock',
      function(e, r, t, n) {
        var o,
          s,
          i,
          a = e.bMarks[r],
          l = e.eMarks[r],
          c = e.tShift[r];
        if (((a += c), !e.options.html)) return !1;
        if (c > 3 || a + 2 >= l) return !1;
        if (60 !== e.src.charCodeAt(a)) return !1;
        if (33 === (o = e.src.charCodeAt(a + 1)) || 63 === o) {
          if (n) return !0;
        } else {
          if (
            47 !== o &&
            !(function(e) {
              var r = 32 | e;
              return r >= 97 && r <= 122;
            })(o)
          )
            return !1;
          if (47 === o) {
            if (!(s = e.src.slice(a, l).match(ce))) return !1;
          } else if (!(s = e.src.slice(a, l).match(le))) return !1;
          if (!0 !== ae[s[1].toLowerCase()]) return !1;
          if (n) return !0;
        }
        for (i = r + 1; i < e.lineMax && !e.isEmpty(i); ) i++;
        return (e.line = i), e.tokens.push({ type: 'htmlblock', level: e.level, lines: [r, e.line], content: e.getLines(r, i, 0, !0) }), !0;
      },
      ['paragraph', 'blockquote'],
    ],
    [
      'table',
      function(e, r, t, n) {
        var o, s, i, a, l, c, p, u, h, f, d;
        if (r + 2 > t) return !1;
        if (((l = r + 1), e.tShift[l] < e.blkIndent)) return !1;
        if ((i = e.bMarks[l] + e.tShift[l]) >= e.eMarks[l]) return !1;
        if (124 !== (o = e.src.charCodeAt(i)) && 45 !== o && 58 !== o) return !1;
        if (((s = pe(e, r + 1)), !/^[-:| ]+$/.test(s))) return !1;
        if ((c = s.split('|')) <= 2) return !1;
        for (u = [], a = 0; a < c.length; a++) {
          if (!(h = c[a].trim())) {
            if (0 === a || a === c.length - 1) continue;
            return !1;
          }
          if (!/^:?-+:?$/.test(h)) return !1;
          58 === h.charCodeAt(h.length - 1) ? u.push(58 === h.charCodeAt(0) ? 'center' : 'right') : 58 === h.charCodeAt(0) ? u.push('left') : u.push('');
        }
        if (-1 === (s = pe(e, r).trim()).indexOf('|')) return !1;
        if (((c = s.replace(/^\||\|$/g, '').split('|')), u.length !== c.length)) return !1;
        if (n) return !0;
        for (
          e.tokens.push({ type: 'table_open', lines: (f = [r, 0]), level: e.level++ }),
            e.tokens.push({ type: 'thead_open', lines: [r, r + 1], level: e.level++ }),
            e.tokens.push({ type: 'tr_open', lines: [r, r + 1], level: e.level++ }),
            a = 0;
          a < c.length;
          a++
        )
          e.tokens.push({ type: 'th_open', align: u[a], lines: [r, r + 1], level: e.level++ }),
            e.tokens.push({ type: 'inline', content: c[a].trim(), lines: [r, r + 1], level: e.level, children: [] }),
            e.tokens.push({ type: 'th_close', level: --e.level });
        for (
          e.tokens.push({ type: 'tr_close', level: --e.level }),
            e.tokens.push({ type: 'thead_close', level: --e.level }),
            e.tokens.push({ type: 'tbody_open', lines: (d = [r + 2, 0]), level: e.level++ }),
            l = r + 2;
          l < t && !(e.tShift[l] < e.blkIndent) && -1 !== (s = pe(e, l).trim()).indexOf('|');
          l++
        ) {
          for (c = s.replace(/^\||\|$/g, '').split('|'), e.tokens.push({ type: 'tr_open', level: e.level++ }), a = 0; a < c.length; a++)
            e.tokens.push({ type: 'td_open', align: u[a], level: e.level++ }),
              (p = c[a].substring(124 === c[a].charCodeAt(0) ? 1 : 0, 124 === c[a].charCodeAt(c[a].length - 1) ? c[a].length - 1 : c[a].length).trim()),
              e.tokens.push({ type: 'inline', content: p, level: e.level, children: [] }),
              e.tokens.push({ type: 'td_close', level: --e.level });
          e.tokens.push({ type: 'tr_close', level: --e.level });
        }
        return e.tokens.push({ type: 'tbody_close', level: --e.level }), e.tokens.push({ type: 'table_close', level: --e.level }), (f[1] = d[1] = l), (e.line = l), !0;
      },
      ['paragraph'],
    ],
    [
      'deflist',
      function(e, r, t, n) {
        var o, s, i, a, l, c, p, u, h, f, d, g, m, b;
        if (n) return !(e.ddIndent < 0) && ue(e, r) >= 0;
        if (((p = r + 1), e.isEmpty(p) && ++p > t)) return !1;
        if (e.tShift[p] < e.blkIndent) return !1;
        if ((o = ue(e, p)) < 0) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        (c = e.tokens.length), e.tokens.push({ type: 'dl_open', lines: (l = [r, 0]), level: e.level++ }), (i = r), (s = p);
        e: for (;;) {
          for (
            b = !0,
              m = !1,
              e.tokens.push({ type: 'dt_open', lines: [i, i], level: e.level++ }),
              e.tokens.push({ type: 'inline', content: e.getLines(i, i + 1, e.blkIndent, !1).trim(), level: e.level + 1, lines: [i, i], children: [] }),
              e.tokens.push({ type: 'dt_close', level: --e.level });
            ;

          ) {
            if (
              (e.tokens.push({ type: 'dd_open', lines: (a = [p, 0]), level: e.level++ }),
              (g = e.tight),
              (h = e.ddIndent),
              (u = e.blkIndent),
              (d = e.tShift[s]),
              (f = e.parentType),
              (e.blkIndent = e.ddIndent = e.tShift[s] + 2),
              (e.tShift[s] = o - e.bMarks[s]),
              (e.tight = !0),
              (e.parentType = 'deflist'),
              e.parser.tokenize(e, s, t, !0),
              (e.tight && !m) || (b = !1),
              (m = e.line - s > 1 && e.isEmpty(e.line - 1)),
              (e.tShift[s] = d),
              (e.tight = g),
              (e.parentType = f),
              (e.blkIndent = u),
              (e.ddIndent = h),
              e.tokens.push({ type: 'dd_close', level: --e.level }),
              (a[1] = p = e.line),
              p >= t)
            )
              break e;
            if (e.tShift[p] < e.blkIndent) break e;
            if ((o = ue(e, p)) < 0) break;
            s = p;
          }
          if (p >= t) break;
          if (((i = p), e.isEmpty(i))) break;
          if (e.tShift[i] < e.blkIndent) break;
          if ((s = i + 1) >= t) break;
          if ((e.isEmpty(s) && s++, s >= t)) break;
          if (e.tShift[s] < e.blkIndent) break;
          if ((o = ue(e, s)) < 0) break;
        }
        return (
          e.tokens.push({ type: 'dl_close', level: --e.level }),
          (l[1] = p),
          (e.line = p),
          b &&
            (function(e, r) {
              var t,
                n,
                o = e.level + 2;
              for (t = r + 2, n = e.tokens.length - 2; t < n; t++)
                e.tokens[t].level === o && 'paragraph_open' === e.tokens[t].type && ((e.tokens[t + 2].tight = !0), (e.tokens[t].tight = !0), (t += 2));
            })(e, c),
          !0
        );
      },
      ['paragraph'],
    ],
    [
      'paragraph',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a,
          l = r + 1;
        if (l < (t = e.lineMax) && !e.isEmpty(l))
          for (a = e.parser.ruler.getRules('paragraph'); l < t && !e.isEmpty(l); l++)
            if (!(e.tShift[l] - e.blkIndent > 3)) {
              for (o = !1, s = 0, i = a.length; s < i; s++)
                if (a[s](e, l, t, !0)) {
                  o = !0;
                  break;
                }
              if (o) break;
            }
        return (
          (n = e.getLines(r, l, e.blkIndent, !1).trim()),
          (e.line = l),
          n.length &&
            (e.tokens.push({ type: 'paragraph_open', tight: !1, lines: [r, e.line], level: e.level }),
            e.tokens.push({ type: 'inline', content: n, level: e.level + 1, lines: [r, e.line], children: [] }),
            e.tokens.push({ type: 'paragraph_close', tight: !1, level: e.level })),
          !0
        );
      },
    ],
  ];
  function fe() {
    this.ruler = new z();
    for (var e = 0; e < he.length; e++) this.ruler.push(he[e][0], he[e][1], { alt: (he[e][2] || []).slice() });
  }
  fe.prototype.tokenize = function(e, r, t) {
    for (var n, o = this.ruler.getRules(''), s = o.length, i = r, a = !1; i < t && ((e.line = i = e.skipEmptyLines(i)), !(i >= t)) && !(e.tShift[i] < e.blkIndent); ) {
      for (n = 0; n < s && !o[n](e, i, t, !1); n++);
      if (((e.tight = !a), e.isEmpty(e.line - 1) && (a = !0), (i = e.line) < t && e.isEmpty(i))) {
        if (((a = !0), ++i < t && 'list' === e.parentType && e.isEmpty(i))) break;
        e.line = i;
      }
    }
  };
  var de = /[\n\t]/g,
    ge = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
    me = /\u00a0/g;
  function be(e) {
    switch (e) {
      case 10:
      case 92:
      case 96:
      case 42:
      case 95:
      case 94:
      case 91:
      case 93:
      case 33:
      case 38:
      case 60:
      case 62:
      case 123:
      case 125:
      case 36:
      case 37:
      case 64:
      case 126:
      case 43:
      case 61:
      case 58:
        return !0;
      default:
        return !1;
    }
  }
  fe.prototype.parse = function(e, r, t, n) {
    var o,
      s = 0,
      i = 0;
    if (!e) return [];
    (e = (e = e.replace(me, ' ')).replace(ge, '\n')).indexOf('\t') >= 0 &&
      (e = e.replace(de, function(r, t) {
        var n;
        return 10 === e.charCodeAt(t) ? ((s = t + 1), (i = 0), r) : ((n = '    '.slice((t - s - i) % 4)), (i = t - s + 1), n);
      })),
      (o = new oe(e, this, r, t, n)),
      this.tokenize(o, o.line, o.lineMax);
  };
  for (var ve = [], ke = 0; ke < 256; ke++) ve.push(0);
  function ye(e) {
    return (e >= 48 && e <= 57) || (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
  }
  function _e(e, r) {
    var t,
      n,
      o,
      s = r,
      i = !0,
      a = !0,
      l = e.posMax,
      c = e.src.charCodeAt(r);
    for (t = r > 0 ? e.src.charCodeAt(r - 1) : -1; s < l && e.src.charCodeAt(s) === c; ) s++;
    return (
      s >= l && (i = !1),
      (o = s - r) >= 4
        ? (i = a = !1)
        : ((32 !== (n = s < l ? e.src.charCodeAt(s) : -1) && 10 !== n) || (i = !1), (32 !== t && 10 !== t) || (a = !1), 95 === c && (ye(t) && (i = !1), ye(n) && (a = !1))),
      { can_open: i, can_close: a, delims: o }
    );
  }
  '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function(e) {
    ve[e.charCodeAt(0)] = 1;
  });
  var we = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  var xe = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  var qe = [
      'coap',
      'doi',
      'javascript',
      'aaa',
      'aaas',
      'about',
      'acap',
      'cap',
      'cid',
      'crid',
      'data',
      'dav',
      'dict',
      'dns',
      'file',
      'ftp',
      'geo',
      'go',
      'gopher',
      'h323',
      'http',
      'https',
      'iax',
      'icap',
      'im',
      'imap',
      'info',
      'ipp',
      'iris',
      'iris.beep',
      'iris.xpc',
      'iris.xpcs',
      'iris.lwz',
      'ldap',
      'mailto',
      'mid',
      'msrp',
      'msrps',
      'mtqp',
      'mupdate',
      'news',
      'nfs',
      'ni',
      'nih',
      'nntp',
      'opaquelocktoken',
      'pop',
      'pres',
      'rtsp',
      'service',
      'session',
      'shttp',
      'sieve',
      'sip',
      'sips',
      'sms',
      'snmp',
      'soap.beep',
      'soap.beeps',
      'tag',
      'tel',
      'telnet',
      'tftp',
      'thismessage',
      'tn3270',
      'tip',
      'tv',
      'urn',
      'vemmi',
      'ws',
      'wss',
      'xcon',
      'xcon-userid',
      'xmlrpc.beep',
      'xmlrpc.beeps',
      'xmpp',
      'z39.50r',
      'z39.50s',
      'adiumxtra',
      'afp',
      'afs',
      'aim',
      'apt',
      'attachment',
      'aw',
      'beshare',
      'bitcoin',
      'bolo',
      'callto',
      'chrome',
      'chrome-extension',
      'com-eventbrite-attendee',
      'content',
      'cvs',
      'dlna-playsingle',
      'dlna-playcontainer',
      'dtn',
      'dvb',
      'ed2k',
      'facetime',
      'feed',
      'finger',
      'fish',
      'gg',
      'git',
      'gizmoproject',
      'gtalk',
      'hcp',
      'icon',
      'ipn',
      'irc',
      'irc6',
      'ircs',
      'itms',
      'jar',
      'jms',
      'keyparc',
      'lastfm',
      'ldaps',
      'magnet',
      'maps',
      'market',
      'message',
      'mms',
      'ms-help',
      'msnim',
      'mumble',
      'mvn',
      'notes',
      'oid',
      'palm',
      'paparazzi',
      'platform',
      'proxy',
      'psyc',
      'query',
      'res',
      'resource',
      'rmi',
      'rsync',
      'rtmp',
      'secondlife',
      'sftp',
      'sgn',
      'skype',
      'smb',
      'soldat',
      'spotify',
      'ssh',
      'steam',
      'svn',
      'teamspeak',
      'things',
      'udp',
      'unreal',
      'ut2004',
      'ventrilo',
      'view-source',
      'webcal',
      'wtai',
      'wyciwyg',
      'xfire',
      'xri',
      'ymsgr',
    ],
    Ae = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
    Ce = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
  function Se(e, r) {
    return (
      (e = e.source),
      (r = r || ''),
      function t(n, o) {
        return n ? ((o = o.source || o), (e = e.replace(n, o)), t) : new RegExp(e, r);
      }
    );
  }
  var Ee = Se(/(?:unquoted|single_quoted|double_quoted)/)('unquoted', /[^"'=<>`\x00-\x20]+/)('single_quoted', /'[^']*'/)('double_quoted', /"[^"]*"/)(),
    Me = Se(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)('attr_name', /[a-zA-Z_:][a-zA-Z0-9:._-]*/)('attr_value', Ee)(),
    Le = Se(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)('attribute', Me)(),
    Te = Se(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)('open_tag', Le)('close_tag', /<\/[A-Za-z][A-Za-z0-9]*\s*>/)(
      'comment',
      /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/
    )('processing', /<[?].*?[?]>/)('declaration', /<![A-Z]+\s+[^>]*>/)('cdata', /<!\[CDATA\[[\s\S]*?\]\]>/)();
  var De = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
    Ie = /^&([a-z][a-z0-9]{1,31});/i;
  var Ne = [
    [
      'text',
      function(e, r) {
        for (var t = e.pos; t < e.posMax && !be(e.src.charCodeAt(t)); ) t++;
        return t !== e.pos && (r || (e.pending += e.src.slice(e.pos, t)), (e.pos = t), !0);
      },
    ],
    [
      'newline',
      function(e, r) {
        var t,
          n,
          o = e.pos;
        if (10 !== e.src.charCodeAt(o)) return !1;
        if (((t = e.pending.length - 1), (n = e.posMax), !r))
          if (t >= 0 && 32 === e.pending.charCodeAt(t))
            if (t >= 1 && 32 === e.pending.charCodeAt(t - 1)) {
              for (var s = t - 2; s >= 0; s--)
                if (32 !== e.pending.charCodeAt(s)) {
                  e.pending = e.pending.substring(0, s + 1);
                  break;
                }
              e.push({ type: 'hardbreak', level: e.level });
            } else (e.pending = e.pending.slice(0, -1)), e.push({ type: 'softbreak', level: e.level });
          else e.push({ type: 'softbreak', level: e.level });
        for (o++; o < n && 32 === e.src.charCodeAt(o); ) o++;
        return (e.pos = o), !0;
      },
    ],
    [
      'escape',
      function(e, r) {
        var t,
          n = e.pos,
          o = e.posMax;
        if (92 !== e.src.charCodeAt(n)) return !1;
        if (++n < o) {
          if ((t = e.src.charCodeAt(n)) < 256 && 0 !== ve[t]) return r || (e.pending += e.src[n]), (e.pos += 2), !0;
          if (10 === t) {
            for (r || e.push({ type: 'hardbreak', level: e.level }), n++; n < o && 32 === e.src.charCodeAt(n); ) n++;
            return (e.pos = n), !0;
          }
        }
        return r || (e.pending += '\\'), e.pos++, !0;
      },
    ],
    [
      'backticks',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a = e.pos;
        if (96 !== e.src.charCodeAt(a)) return !1;
        for (t = a, a++, n = e.posMax; a < n && 96 === e.src.charCodeAt(a); ) a++;
        for (o = e.src.slice(t, a), s = i = a; -1 !== (s = e.src.indexOf('`', i)); ) {
          for (i = s + 1; i < n && 96 === e.src.charCodeAt(i); ) i++;
          if (i - s === o.length)
            return (
              r ||
                e.push({
                  type: 'code',
                  content: e.src
                    .slice(a, s)
                    .replace(/[ \n]+/g, ' ')
                    .trim(),
                  block: !1,
                  level: e.level,
                }),
              (e.pos = i),
              !0
            );
        }
        return r || (e.pending += o), (e.pos += o.length), !0;
      },
    ],
    [
      'del',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a = e.posMax,
          l = e.pos;
        if (126 !== e.src.charCodeAt(l)) return !1;
        if (r) return !1;
        if (l + 4 >= a) return !1;
        if (126 !== e.src.charCodeAt(l + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (((s = l > 0 ? e.src.charCodeAt(l - 1) : -1), (i = e.src.charCodeAt(l + 2)), 126 === s)) return !1;
        if (126 === i) return !1;
        if (32 === i || 10 === i) return !1;
        for (n = l + 2; n < a && 126 === e.src.charCodeAt(n); ) n++;
        if (n > l + 3) return (e.pos += n - l), r || (e.pending += e.src.slice(l, n)), !0;
        for (e.pos = l + 2, o = 1; e.pos + 1 < a; ) {
          if (
            126 === e.src.charCodeAt(e.pos) &&
            126 === e.src.charCodeAt(e.pos + 1) &&
            ((s = e.src.charCodeAt(e.pos - 1)),
            126 !== (i = e.pos + 2 < a ? e.src.charCodeAt(e.pos + 2) : -1) && 126 !== s && (32 !== s && 10 !== s ? o-- : 32 !== i && 10 !== i && o++, o <= 0))
          ) {
            t = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return t
          ? ((e.posMax = e.pos),
            (e.pos = l + 2),
            r || (e.push({ type: 'del_open', level: e.level++ }), e.parser.tokenize(e), e.push({ type: 'del_close', level: --e.level })),
            (e.pos = e.posMax + 2),
            (e.posMax = a),
            !0)
          : ((e.pos = l), !1);
      },
    ],
    [
      'ins',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a = e.posMax,
          l = e.pos;
        if (43 !== e.src.charCodeAt(l)) return !1;
        if (r) return !1;
        if (l + 4 >= a) return !1;
        if (43 !== e.src.charCodeAt(l + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (((s = l > 0 ? e.src.charCodeAt(l - 1) : -1), (i = e.src.charCodeAt(l + 2)), 43 === s)) return !1;
        if (43 === i) return !1;
        if (32 === i || 10 === i) return !1;
        for (n = l + 2; n < a && 43 === e.src.charCodeAt(n); ) n++;
        if (n !== l + 2) return (e.pos += n - l), r || (e.pending += e.src.slice(l, n)), !0;
        for (e.pos = l + 2, o = 1; e.pos + 1 < a; ) {
          if (
            43 === e.src.charCodeAt(e.pos) &&
            43 === e.src.charCodeAt(e.pos + 1) &&
            ((s = e.src.charCodeAt(e.pos - 1)),
            43 !== (i = e.pos + 2 < a ? e.src.charCodeAt(e.pos + 2) : -1) && 43 !== s && (32 !== s && 10 !== s ? o-- : 32 !== i && 10 !== i && o++, o <= 0))
          ) {
            t = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return t
          ? ((e.posMax = e.pos),
            (e.pos = l + 2),
            r || (e.push({ type: 'ins_open', level: e.level++ }), e.parser.tokenize(e), e.push({ type: 'ins_close', level: --e.level })),
            (e.pos = e.posMax + 2),
            (e.posMax = a),
            !0)
          : ((e.pos = l), !1);
      },
    ],
    [
      'mark',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a = e.posMax,
          l = e.pos;
        if (61 !== e.src.charCodeAt(l)) return !1;
        if (r) return !1;
        if (l + 4 >= a) return !1;
        if (61 !== e.src.charCodeAt(l + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (((s = l > 0 ? e.src.charCodeAt(l - 1) : -1), (i = e.src.charCodeAt(l + 2)), 61 === s)) return !1;
        if (61 === i) return !1;
        if (32 === i || 10 === i) return !1;
        for (n = l + 2; n < a && 61 === e.src.charCodeAt(n); ) n++;
        if (n !== l + 2) return (e.pos += n - l), r || (e.pending += e.src.slice(l, n)), !0;
        for (e.pos = l + 2, o = 1; e.pos + 1 < a; ) {
          if (
            61 === e.src.charCodeAt(e.pos) &&
            61 === e.src.charCodeAt(e.pos + 1) &&
            ((s = e.src.charCodeAt(e.pos - 1)),
            61 !== (i = e.pos + 2 < a ? e.src.charCodeAt(e.pos + 2) : -1) && 61 !== s && (32 !== s && 10 !== s ? o-- : 32 !== i && 10 !== i && o++, o <= 0))
          ) {
            t = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return t
          ? ((e.posMax = e.pos),
            (e.pos = l + 2),
            r || (e.push({ type: 'mark_open', level: e.level++ }), e.parser.tokenize(e), e.push({ type: 'mark_close', level: --e.level })),
            (e.pos = e.posMax + 2),
            (e.posMax = a),
            !0)
          : ((e.pos = l), !1);
      },
    ],
    [
      'emphasis',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a,
          l,
          c = e.posMax,
          p = e.pos,
          u = e.src.charCodeAt(p);
        if (95 !== u && 42 !== u) return !1;
        if (r) return !1;
        if (((t = (l = _e(e, p)).delims), !l.can_open)) return (e.pos += t), r || (e.pending += e.src.slice(p, e.pos)), !0;
        if (e.level >= e.options.maxNesting) return !1;
        for (e.pos = p + t, a = [t]; e.pos < c; )
          if (e.src.charCodeAt(e.pos) !== u) e.parser.skipToken(e);
          else {
            if (((n = (l = _e(e, e.pos)).delims), l.can_close)) {
              for (s = a.pop(), i = n; s !== i; ) {
                if (i < s) {
                  a.push(s - i);
                  break;
                }
                if (((i -= s), 0 === a.length)) break;
                (e.pos += s), (s = a.pop());
              }
              if (0 === a.length) {
                (t = s), (o = !0);
                break;
              }
              e.pos += n;
              continue;
            }
            l.can_open && a.push(n), (e.pos += n);
          }
        return o
          ? ((e.posMax = e.pos),
            (e.pos = p + t),
            r ||
              ((2 !== t && 3 !== t) || e.push({ type: 'strong_open', level: e.level++ }),
              (1 !== t && 3 !== t) || e.push({ type: 'em_open', level: e.level++ }),
              e.parser.tokenize(e),
              (1 !== t && 3 !== t) || e.push({ type: 'em_close', level: --e.level }),
              (2 !== t && 3 !== t) || e.push({ type: 'strong_close', level: --e.level })),
            (e.pos = e.posMax + t),
            (e.posMax = c),
            !0)
          : ((e.pos = p), !1);
      },
    ],
    [
      'sub',
      function(e, r) {
        var t,
          n,
          o = e.posMax,
          s = e.pos;
        if (126 !== e.src.charCodeAt(s)) return !1;
        if (r) return !1;
        if (s + 2 >= o) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (e.pos = s + 1; e.pos < o; ) {
          if (126 === e.src.charCodeAt(e.pos)) {
            t = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return t && s + 1 !== e.pos
          ? (n = e.src.slice(s + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)
            ? ((e.pos = s), !1)
            : ((e.posMax = e.pos), (e.pos = s + 1), r || e.push({ type: 'sub', level: e.level, content: n.replace(we, '$1') }), (e.pos = e.posMax + 1), (e.posMax = o), !0)
          : ((e.pos = s), !1);
      },
    ],
    [
      'sup',
      function(e, r) {
        var t,
          n,
          o = e.posMax,
          s = e.pos;
        if (94 !== e.src.charCodeAt(s)) return !1;
        if (r) return !1;
        if (s + 2 >= o) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (e.pos = s + 1; e.pos < o; ) {
          if (94 === e.src.charCodeAt(e.pos)) {
            t = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return t && s + 1 !== e.pos
          ? (n = e.src.slice(s + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)
            ? ((e.pos = s), !1)
            : ((e.posMax = e.pos), (e.pos = s + 1), r || e.push({ type: 'sup', level: e.level, content: n.replace(xe, '$1') }), (e.pos = e.posMax + 1), (e.posMax = o), !0)
          : ((e.pos = s), !1);
      },
    ],
    [
      'links',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a,
          l,
          c,
          p = !1,
          u = e.pos,
          h = e.posMax,
          f = e.pos,
          d = e.src.charCodeAt(f);
        if ((33 === d && ((p = !0), (d = e.src.charCodeAt(++f))), 91 !== d)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (((t = f + 1), (n = j(e, f)) < 0)) return !1;
        if ((a = n + 1) < h && 40 === e.src.charCodeAt(a)) {
          for (a++; a < h && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++);
          if (a >= h) return !1;
          for (f = a, P(e, a) ? ((s = e.linkContent), (a = e.pos)) : (s = ''), f = a; a < h && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++);
          if (a < h && f !== a && $(e, a)) for (i = e.linkContent, a = e.pos; a < h && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++);
          else i = '';
          if (a >= h || 41 !== e.src.charCodeAt(a)) return (e.pos = u), !1;
          a++;
        } else {
          if (e.linkLevel > 0) return !1;
          for (; a < h && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++);
          if (
            (a < h && 91 === e.src.charCodeAt(a) && ((f = a + 1), (a = j(e, a)) >= 0 ? (o = e.src.slice(f, a++)) : (a = f - 1)),
            o || (void 0 === o && (a = n + 1), (o = e.src.slice(t, n))),
            !(l = e.env.references[G(o)]))
          )
            return (e.pos = u), !1;
          (s = l.href), (i = l.title);
        }
        return (
          r ||
            ((e.pos = t),
            (e.posMax = n),
            p
              ? e.push({ type: 'image', src: s, title: i, alt: e.src.substr(t, n - t), level: e.level })
              : (e.push({ type: 'link_open', href: s, title: i, level: e.level++ }),
                e.linkLevel++,
                e.parser.tokenize(e),
                e.linkLevel--,
                e.push({ type: 'link_close', level: --e.level }))),
          (e.pos = a),
          (e.posMax = h),
          !0
        );
      },
    ],
    [
      'footnote_inline',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i = e.posMax,
          a = e.pos;
        return (
          !(a + 2 >= i) &&
          94 === e.src.charCodeAt(a) &&
          91 === e.src.charCodeAt(a + 1) &&
          !(e.level >= e.options.maxNesting) &&
          ((t = a + 2),
          !((n = j(e, a + 1)) < 0) &&
            (r ||
              (e.env.footnotes || (e.env.footnotes = {}),
              e.env.footnotes.list || (e.env.footnotes.list = []),
              (o = e.env.footnotes.list.length),
              (e.pos = t),
              (e.posMax = n),
              e.push({ type: 'footnote_ref', id: o, level: e.level }),
              e.linkLevel++,
              (s = e.tokens.length),
              e.parser.tokenize(e),
              (e.env.footnotes.list[o] = { tokens: e.tokens.splice(s) }),
              e.linkLevel--),
            (e.pos = n + 1),
            (e.posMax = i),
            !0))
        );
      },
    ],
    [
      'footnote_ref',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i = e.posMax,
          a = e.pos;
        if (a + 3 > i) return !1;
        if (!e.env.footnotes || !e.env.footnotes.refs) return !1;
        if (91 !== e.src.charCodeAt(a)) return !1;
        if (94 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (n = a + 2; n < i; n++) {
          if (32 === e.src.charCodeAt(n)) return !1;
          if (10 === e.src.charCodeAt(n)) return !1;
          if (93 === e.src.charCodeAt(n)) break;
        }
        return (
          n !== a + 2 &&
          !(n >= i) &&
          (n++,
          (t = e.src.slice(a + 2, n - 1)),
          void 0 !== e.env.footnotes.refs[':' + t] &&
            (r ||
              (e.env.footnotes.list || (e.env.footnotes.list = []),
              e.env.footnotes.refs[':' + t] < 0
                ? ((o = e.env.footnotes.list.length), (e.env.footnotes.list[o] = { label: t, count: 0 }), (e.env.footnotes.refs[':' + t] = o))
                : (o = e.env.footnotes.refs[':' + t]),
              (s = e.env.footnotes.list[o].count),
              e.env.footnotes.list[o].count++,
              e.push({ type: 'footnote_ref', id: o, subId: s, level: e.level })),
            (e.pos = n),
            (e.posMax = i),
            !0))
        );
      },
    ],
    [
      'autolink',
      function(e, r) {
        var t,
          n,
          o,
          s,
          i,
          a = e.pos;
        return (
          60 === e.src.charCodeAt(a) &&
          !((t = e.src.slice(a)).indexOf('>') < 0) &&
          ((n = t.match(Ce))
            ? !(qe.indexOf(n[1].toLowerCase()) < 0) &&
              ((i = B((s = n[0].slice(1, -1)))),
              !!e.parser.validateLink(s) &&
                (r ||
                  (e.push({ type: 'link_open', href: i, level: e.level }),
                  e.push({ type: 'text', content: s, level: e.level + 1 }),
                  e.push({ type: 'link_close', level: e.level })),
                (e.pos += n[0].length),
                !0))
            : !!(o = t.match(Ae)) &&
              ((i = B('mailto:' + (s = o[0].slice(1, -1)))),
              !!e.parser.validateLink(i) &&
                (r ||
                  (e.push({ type: 'link_open', href: i, level: e.level }),
                  e.push({ type: 'text', content: s, level: e.level + 1 }),
                  e.push({ type: 'link_close', level: e.level })),
                (e.pos += o[0].length),
                !0)))
        );
      },
    ],
    [
      'htmltag',
      function(e, r) {
        var t,
          n,
          o,
          s = e.pos;
        return (
          !!e.options.html &&
          ((o = e.posMax),
          !(60 !== e.src.charCodeAt(s) || s + 2 >= o) &&
            !(
              33 !== (t = e.src.charCodeAt(s + 1)) &&
              63 !== t &&
              47 !== t &&
              !(function(e) {
                var r = 32 | e;
                return r >= 97 && r <= 122;
              })(t)
            ) &&
            !!(n = e.src.slice(s).match(Te)) &&
            (r || e.push({ type: 'htmltag', content: e.src.slice(s, s + n[0].length), level: e.level }), (e.pos += n[0].length), !0))
        );
      },
    ],
    [
      'entity',
      function(e, r) {
        var t,
          n,
          o = e.pos,
          s = e.posMax;
        if (38 !== e.src.charCodeAt(o)) return !1;
        if (o + 1 < s)
          if (35 === e.src.charCodeAt(o + 1)) {
            if ((n = e.src.slice(o).match(De)))
              return (
                r || ((t = 'x' === n[1][0].toLowerCase() ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10)), (e.pending += w(t) ? x(t) : x(65533))), (e.pos += n[0].length), !0
              );
          } else if ((n = e.src.slice(o).match(Ie))) {
            var i = b(n[1]);
            if (n[1] !== i) return r || (e.pending += i), (e.pos += n[0].length), !0;
          }
        return r || (e.pending += '&'), e.pos++, !0;
      },
    ],
  ];
  function Re() {
    this.ruler = new z();
    for (var e = 0; e < Ne.length; e++) this.ruler.push(Ne[e][0], Ne[e][1]);
    this.validateLink = Oe;
  }
  function Oe(e) {
    var r = e.trim().toLowerCase();
    return -1 === (r = S(r)).indexOf(':') || -1 === ['vbscript', 'javascript', 'file', 'data'].indexOf(r.split(':')[0]);
  }
  (Re.prototype.skipToken = function(e) {
    var r,
      t,
      n = this.ruler.getRules(''),
      o = n.length,
      s = e.pos;
    if ((t = e.cacheGet(s)) > 0) e.pos = t;
    else {
      for (r = 0; r < o; r++) if (n[r](e, !0)) return void e.cacheSet(s, e.pos);
      e.pos++, e.cacheSet(s, e.pos);
    }
  }),
    (Re.prototype.tokenize = function(e) {
      for (var r, t, n = this.ruler.getRules(''), o = n.length, s = e.posMax; e.pos < s; ) {
        for (t = 0; t < o && !(r = n[t](e, !1)); t++);
        if (r) {
          if (e.pos >= s) break;
        } else e.pending += e.src[e.pos++];
      }
      e.pending && e.pushPending();
    }),
    (Re.prototype.parse = function(e, r, t, n) {
      var o = new U(e, this, r, t, n);
      this.tokenize(o);
    });
  var ze = {
    default: {
      options: { html: !1, xhtmlOut: !1, breaks: !1, langPrefix: 'language-', linkTarget: '', typographer: !1, quotes: '“”‘’', highlight: null, maxNesting: 20 },
      components: {
        core: { rules: ['block', 'inline', 'references', 'replacements', 'smartquotes', 'references', 'abbr2', 'footnote_tail'] },
        block: { rules: ['blockquote', 'code', 'fences', 'footnote', 'heading', 'hr', 'htmlblock', 'lheading', 'list', 'paragraph', 'table'] },
        inline: { rules: ['autolink', 'backticks', 'del', 'emphasis', 'entity', 'escape', 'footnote_ref', 'htmltag', 'links', 'newline', 'text'] },
      },
    },
    full: {
      options: { html: !1, xhtmlOut: !1, breaks: !1, langPrefix: 'language-', linkTarget: '', typographer: !1, quotes: '“”‘’', highlight: null, maxNesting: 20 },
      components: { core: {}, block: {}, inline: {} },
    },
    commonmark: {
      options: { html: !0, xhtmlOut: !0, breaks: !1, langPrefix: 'language-', linkTarget: '', typographer: !1, quotes: '“”‘’', highlight: null, maxNesting: 20 },
      components: {
        core: { rules: ['block', 'inline', 'references', 'abbr2'] },
        block: { rules: ['blockquote', 'code', 'fences', 'heading', 'hr', 'htmlblock', 'lheading', 'list', 'paragraph'] },
        inline: { rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'htmltag', 'links', 'newline', 'text'] },
      },
    },
  };
  function Ue(e, r, t) {
    (this.src = r),
      (this.env = t),
      (this.options = e.options),
      (this.tokens = []),
      (this.inlineMode = !1),
      (this.inline = e.inline),
      (this.block = e.block),
      (this.renderer = e.renderer),
      (this.typographer = e.typographer);
  }
  function je(e, r) {
    'string' != typeof e && ((r = e), (e = 'default')),
      r &&
        null != r.linkify &&
        console.warn(
          "linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"
        ),
      (this.inline = new Re()),
      (this.block = new fe()),
      (this.core = new ne()),
      (this.renderer = new O()),
      (this.ruler = new z()),
      (this.options = {}),
      this.configure(ze[e]),
      this.set(r || {});
  }
  (je.prototype.set = function(e) {
    k(this.options, e);
  }),
    (je.prototype.configure = function(e) {
      var r = this;
      if (!e) throw new Error('Wrong `remarkable` preset, check name/content');
      e.options && r.set(e.options),
        e.components &&
          Object.keys(e.components).forEach(function(t) {
            e.components[t].rules && r[t].ruler.enable(e.components[t].rules, !0);
          });
    }),
    (je.prototype.use = function(e, r) {
      return e(this, r), this;
    }),
    (je.prototype.parse = function(e, r) {
      var t = new Ue(this, e, r);
      return this.core.process(t), t.tokens;
    }),
    (je.prototype.render = function(e, r) {
      return (r = r || {}), this.renderer.render(this.parse(e, r), this.options, r);
    }),
    (je.prototype.parseInline = function(e, r) {
      var t = new Ue(this, e, r);
      return (t.inlineMode = !0), this.core.process(t), t.tokens;
    }),
    (je.prototype.renderInline = function(e, r) {
      return (r = r || {}), this.renderer.render(this.parseInline(e, r), this.options, r);
    });
  var Ve = (e, r) => {
    const t = (r || {}).delimiter || '$';
    if (1 !== t.length) throw new Error('invalid delimiter');
    const o = n;
    e.inline.ruler.push(
      'katex',
      (e, r) => {
        const n = e.pos,
          o = e.posMax;
        let s = n;
        if (e.src.charAt(s) !== t) return !1;
        for (++s; s < o && e.src.charAt(s) === t; ) ++s;
        const i = e.src.slice(n, s);
        if (i.length > 2) return !1;
        const a = s;
        let l = 0;
        for (; s < o; ) {
          const n = e.src.charAt(s);
          if ('{' === n) l += 1;
          else if ('}' === n) {
            if (((l -= 1), l < 0)) return !1;
          } else if (n === t && 0 === l) {
            const n = s;
            let l = s + 1;
            for (; l < o && e.src.charAt(l) === t; ) ++l;
            if (l - n === i.length) {
              if (!r) {
                const r = e.src
                  .slice(a, n)
                  .replace(/[ \n]+/g, ' ')
                  .trim();
                e.push({ type: 'katex', content: r, block: i.length > 1, level: e.level });
              }
              return (e.pos = l), !0;
            }
          }
          s += 1;
        }
        return r || (e.pending += i), (e.pos += i.length), !0;
      },
      r
    ),
      e.block.ruler.push(
        'katex',
        (e, r, n) => {
          let o = !1,
            s = e.bMarks[r] + e.tShift[r],
            i = e.eMarks[r];
          if (s + 1 > i) return !1;
          const a = e.src.charAt(s);
          if (a !== t) return !1;
          let l = s;
          s = e.skipChars(s, a);
          let c = s - l;
          if (2 !== c) return !1;
          let p = r;
          for (; (++p, !(p >= n)) && ((s = l = e.bMarks[p] + e.tShift[p]), (i = e.eMarks[p]), !(s < i && e.tShift[p] < e.blkIndent)); )
            if (e.src.charAt(s) === t && !(e.tShift[p] - e.blkIndent >= 4 || ((s = e.skipChars(s, a)), s - l < c || ((s = e.skipSpaces(s)), s < i)))) {
              o = !0;
              break;
            }
          (c = e.tShift[r]), (e.line = p + (o ? 1 : 0));
          const u = e
            .getLines(r + 1, p, c, !0)
            .replace(/[ \n]+/g, ' ')
            .trim();
          return e.tokens.push({ type: 'katex', params: null, content: u, lines: [r, e.line], level: e.level, block: !0 }), !0;
        },
        r
      ),
      (e.renderer.rules.katex = (e, r) => {
        return (t = e[r].content), (n = e[r].block), o.renderToString(t, { displayMode: n, throwOnError: !1 });
        var t, n;
      }),
      (e.renderer.rules.katex.delimiter = t);
  };
  let Be;
  const Pe = 'katex';
  let $e;
  function Ge(e, r) {
    (($e =
      $e ||
      f([
        { type: 'script', data: { src: './prism-core.min.js' } },
        { type: 'script', data: { src: './prism-autoloader.min.js' } },
      ])),
    $e).then(() => {
      window.Prism.plugins.autoloader.loadLanguages([e], () => {
        r.retransform.call();
      });
    });
  }
  const He = 'prism';
  const Ze = [
    Object.freeze({
      __proto__: null,
      name: Pe,
      transform: function(e) {
        return (
          e.parser.tap((r, t) => {
            r.use(Ve);
            const n = (r, t) => {
              const { katex: n } = window;
              return n
                ? n.renderToString(r, { displayMode: t, throwOnError: !1 })
                : (((Be = Be || f([{ type: 'script', data: { src: './katex.min.js' } }])), Be).then(() => {
                    e.retransform.call();
                  }),
                  r);
            };
            r.renderer.rules.katex = (e, r) => {
              const o = n(e[r].content, e[r].block);
              return (t.katex = !0), o;
            };
          }),
          {
            styles: [{ type: 'stylesheet', data: { href: './katex.min.css' } }],
            scripts: [
              {
                type: 'iife',
                data: {
                  fn: e => {
                    window.WebFontConfig = {
                      custom: {
                        families: [
                          'KaTeX_AMS',
                          'KaTeX_Caligraphic:n4,n7',
                          'KaTeX_Fraktur:n4,n7',
                          'KaTeX_Main:n4,n7,i4,i7',
                          'KaTeX_Math:i4,i7',
                          'KaTeX_Script',
                          'KaTeX_SansSerif:n4,n7,i4',
                          'KaTeX_Size1',
                          'KaTeX_Size2',
                          'KaTeX_Size3',
                          'KaTeX_Size4',
                          'KaTeX_Typewriter',
                        ],
                      },
                      active: () => {
                        e().refreshHook.call();
                      },
                    };
                  },
                  getParams: ({ getMarkmap: e }) => [e],
                },
              },
              { type: 'script', data: { src: './webfontloader.js', defer: !0 } },
            ],
          }
        );
      },
    }),
    Object.freeze({
      __proto__: null,
      name: He,
      transform: function(e) {
        return (
          e.parser.tap((r, t) => {
            r.set({
              highlight: (r, n) => {
                var o;
                t.prism = !0;
                const { Prism: s } = window,
                  i = null == s || null == (o = s.languages) ? void 0 : o[n];
                return i ? s.highlight(r, i, n) : (Ge(n, e), '');
              },
            });
          }),
          { styles: [{ type: 'stylesheet', data: { href: './prism.css' } }] }
        );
      },
    }),
  ];
  function Fe(e, r = 0) {
    if ('heading' === e.t) e.c = e.c.filter(e => 'paragraph' !== e.t);
    else if ('list_item' === e.t) {
      var t;
      (e.c = e.c.filter(r => !['paragraph', 'fence'].includes(r.t) || (e.v || ((e.v = r.v), (e.p = o({}, e.p, r.p))), !1))),
        null != (null == (t = e.p) ? void 0 : t.index) && (e.v = `${e.p.index}. ${e.v}`);
    } else if ('ordered_list' === e.t) {
      var n, s;
      let r = null != (n = null == (s = e.p) ? void 0 : s.start) ? n : 1;
      e.c.forEach(e => {
        'list_item' === e.t && ((e.p = o({}, e.p, { index: r })), (r += 1));
      });
    }
    0 === e.c.length ? delete e.c : (e.c.forEach(e => Fe(e, r + 1)), 1 !== e.c.length || e.c[0].v || (e.c = e.c[0].c)), (e.d = r);
  }
  (e.Transformer = class {
    constructor(e = Ze) {
      (this.plugins = void 0),
        (this.hooks = void 0),
        (this.md = void 0),
        (this.assetsMap = void 0),
        (this.plugins = e),
        (this.hooks = { parser: new s(), htmltag: new s(), retransform: new s() });
      const r = new je({ html: !0, breaks: !0, maxNesting: 1 / 0 });
      r.block.ruler.enable(['deflist']),
        (r.renderer.rules.htmltag = (function(e, { before: r, after: t }) {
          return function(...n) {
            const o = { args: n };
            try {
              r && r(o);
            } catch (e) {}
            o.result = e(...n);
            try {
              t && t(o);
            } catch (e) {}
            return o.result;
          };
        })(r.renderer.rules.htmltag, {
          after: e => {
            this.hooks.htmltag.call(e);
          },
        })),
        (this.md = r);
      const t = {};
      for (const { name: r, transform: n } of e) t[r] = n(this.hooks);
      this.assetsMap = t;
    }
    buildTree(e) {
      const { md: r } = this,
        t = { t: 'root', d: 0, v: '', c: [], p: {} },
        n = [t];
      let o = 0;
      for (const t of e) {
        let e = n[n.length - 1];
        if (t.type.endsWith('_open')) {
          const r = t.type.slice(0, -5),
            a = {};
          var s;
          if ('heading' === r)
            for (o = t.hLevel; (null == (i = e) ? void 0 : i.d) >= o; ) {
              var i;
              n.pop(), (e = n[n.length - 1]);
            }
          else (o = Math.max(o, (null == (s = e) ? void 0 : s.d) || 0) + 1), 'ordered_list' === r && (a.start = t.order);
          const l = { t: r, d: o, p: a, v: '', c: [] };
          e.c.push(l), n.push(l);
        } else {
          if (!e) continue;
          if (t.type === `${e.t}_close`) 'heading' === e.t ? (o = e.d) : (n.pop(), (o = 0));
          else if ('inline' === t.type) {
            const n = this.hooks.htmltag.tap(r => {
                const t = r.result.match(/^<!--([\s\S]*?)-->$/);
                'fold' === (null == t ? void 0 : t[1].trim()) && ((e.p.f = !0), (r.result = ''));
              }),
              o = r.renderer.render([t], r.options, {});
            n(), (e.v = `${e.v || ''}${o}`);
          } else if ('fence' === t.type) {
            let n = r.renderer.render([t], r.options, {});
            const s = n.match(/<code( class="[^"]*")>/);
            s && (n = n.replace('<pre>', `<pre${s[1]}>`)), e.c.push({ t: t.type, d: o + 1, v: n, c: [] });
          }
        }
      }
      return t;
    }
    transform(e) {
      var r;
      const t = {};
      this.hooks.parser.call(this.md, t);
      const n = this.md.parse(e || '', {});
      let o = this.buildTree(n);
      return Fe(o), 1 === (null == (r = o.c) ? void 0 : r.length) && (o = o.c[0]), { root: o, features: t };
    }
    getAssets(e) {
      const r = [],
        t = [];
      null != e || (e = Object.keys(this.assetsMap));
      for (const n of e.map(e => this.assetsMap[e])) n && (n.styles && r.push(...n.styles), n.scripts && t.push(...n.scripts));
      return { styles: r, scripts: t };
    }
    getUsedAssets(e) {
      return this.getAssets(Object.keys(e).filter(r => e[r]));
    }
  }),
    (e.builtInPlugins = Ze),
    (e.fillTemplate = function(e, r) {
      const { scripts: t, styles: n } = r,
        s = [...(n ? ((i = n), i.map(e => ('stylesheet' === e.type ? l('link', null, o({ rel: 'stylesheet' }, e.data)) : l('style', e.data)))) : [])];
      var i;
      const a = { getMarkmap: () => window.markmap, data: e },
        p = [
          ...c(d),
          ...(t ? c(t, a) : []),
          ...c(
            [
              {
                type: 'iife',
                data: {
                  fn: (e, r) => {
                    const { Markmap: t } = e();
                    window.mm = t.create('svg#mindmap', null, r);
                  },
                  getParams: ({ getMarkmap: e, data: r }) => [e, r],
                },
              },
            ],
            a
          ),
        ];
      return '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n\x3c!--CSS--\x3e\n</head>\n<body>\n<svg id="mindmap"></svg>\n\x3c!--JS--\x3e\n</body>\n</html>\n'
        .replace('\x3c!--CSS--\x3e', () => s.join(''))
        .replace('\x3c!--JS--\x3e', () => p.join(''));
    });
});
//# sourceMappingURL=/sm/27f48d2e70573bab4187c0fdff05c72404e8681812bc61346b4c1122e95640c0.map

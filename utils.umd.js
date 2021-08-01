!(function(e, i) {
  'object' == typeof exports && 'undefined' != typeof module
    ? i(
        exports,
        require('tailwindcss/lib/util/resolveConfig.js'),
        require('tailwindcss/stubs/defaultConfig.stub.js'),
        require('dlv')
      )
    : 'function' == typeof define && define.amd
    ? define([
        'exports',
        'tailwindcss/lib/util/resolveConfig.js',
        'tailwindcss/stubs/defaultConfig.stub.js',
        'dlv'
      ], i)
    : i(
        (e.tailwindExtendedMacro = {}),
        e.resolveTailwindConfig,
        e.defaultTailwindConfig,
        e.dlv
      )
})(this, function(e, i, r, n) {
  var t
  function o(e) {
    var i = {}
    for (var r in e)
      if (e[r] === Object(e[r]))
        for (var n in e[r]) i[r + ('default' === n ? '' : '-' + n)] = e[r][n]
      else i[r] = e[r]
    return i
  }
  ;(i = i && i.hasOwnProperty('default') ? i.default : i),
    (r = r && r.hasOwnProperty('default') ? r.default : r),
    (n = n && n.hasOwnProperty('default') ? n.default : n),
    (e.resolveConfig = function(e) {
      return t || (t = i([e, r]))
    }),
    (e.stringifyScreen = function(e, i) {
      var r = n(e, ['theme', 'screens', i])
      if (void 0 === r) throw new Error('Couldn’t find Tailwind screen: ' + i)
      if ('string' == typeof r) return '@media (min-width: ' + r + ')'
      if ('string' == typeof r.raw) return '@media ' + r.raw
      var t = (Array.isArray(r) ? r : [r])
        .map(function(e) {
          return [
            'string' == typeof e.min ? '(min-width: ' + e.min + ')' : null,
            'string' == typeof e.max ? '(max-width: ' + e.max + ')' : null
          ]
            .filter(Boolean)
            .join(' and ')
        })
        .join(', ')
      return t ? '@media ' + t : ''
    }),
    (e.resolveStyle = function(e, i, r) {
      for (var t, f, a = 0, l = i; a < l.length; a += 1) {
        var d = l[a]
        if (
          [
            'backgroundColor',
            'borderColor',
            'textColor',
            'fill',
            'stroke'
          ].includes(d.config)
        ) {
          var s = o(n(e, ['theme', d.config], {}))
          if (void 0 !== s[r]) return ((t = {})[d.prop] = s[r]), t
        } else {
          var u = n(e, ['theme', d.config, r])
          if (void 0 !== u)
            return (
              'fontFamily' === d.config &&
                Array.isArray(u) &&
                (u = u.join(', ')),
              ((f = {})[d.prop] = u),
              f
            )
        }
      }
      return {}
    })
})
//# sourceMappingURL=utils.umd.js.map

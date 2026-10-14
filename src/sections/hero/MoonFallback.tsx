/**
 * Lua em SVG: aparece enquanto a versão 3D carrega
 * e substitui o 3D em aparelhos sem WebGL.
 */
export function MoonFallback() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="moon-shade" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#F7F3FB" />
          <stop offset="60%" stopColor="#DCD4F3" />
          <stop offset="100%" stopColor="#9D90D6" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="58" fill="url(#moon-shade)" />
      <g fill="#A99DDB" opacity="0.45">
        <circle cx="82" cy="80" r="9" />
        <circle cx="112" cy="70" r="5" />
        <circle cx="118" cy="112" r="12" />
        <circle cx="86" cy="122" r="6" />
        <circle cx="70" cy="102" r="4" />
      </g>
    </svg>
  );
}

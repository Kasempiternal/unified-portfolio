export const displacementVertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const displacementFragmentShader = `
  uniform float u_hover;
  uniform vec2 u_mouse;
  uniform sampler2D u_texture;
  uniform sampler2D u_displacement;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec4 disp = texture2D(u_displacement, uv);
    float distortion = u_hover * 0.1;
    uv += disp.rg * distortion;
    gl_FragColor = texture2D(u_texture, uv);
  }
`

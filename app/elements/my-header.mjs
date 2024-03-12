export default function MyHeader({ html }) {
    return html`
      <header>
        <slot></slot>
        <nav>
          <a href=/>home</a>
          <a href=/about>about</a>
        </nav>
      </header>
    `
  }
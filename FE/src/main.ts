import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TO START</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

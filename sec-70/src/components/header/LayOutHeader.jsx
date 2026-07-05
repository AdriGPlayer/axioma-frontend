
import Navigation from '../header/navigation/Navigation'
import Header from './Header'
export default function LayOutHeader() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Header />
        <Navigation />
      </div>
    </header>
  )
}


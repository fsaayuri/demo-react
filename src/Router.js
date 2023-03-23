import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Contato from './pages/Contato'

const Router = () => {
    return( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    )
}

export default Router
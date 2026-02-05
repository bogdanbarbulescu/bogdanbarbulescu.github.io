import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme/ThemeProvider'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Article from './pages/Article'
import LearningTopic from './pages/LearningTopic'
import LearningResource from './pages/LearningResource'

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="learning/:topic/:resourceId" element={<LearningResource />} />
            <Route path="learning/:topic" element={<LearningTopic />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Article />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App

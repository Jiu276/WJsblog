import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { BackToTop } from '../ui/BackToTop'
import { ScrollToTop } from '../ui/ScrollToTop'

export function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <ScrollToTop />
      <Header />
      <main className="container-wj py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}


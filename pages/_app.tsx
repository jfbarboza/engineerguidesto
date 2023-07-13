import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '@/components/layouts/layout/layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  return (
    
        <Layout>
          <AnimatePresence>
            <motion.div
              key={useRouter().route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={
                {duration: 0.75}
              }
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                },
                animateState: {
                  opacity: 1,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                },
                exitState: {
                  opacity: 0,
                  clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                }
              }}
              className="base-page-size"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      
    
  )
}

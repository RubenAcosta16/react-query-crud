import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'



const queryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

{/* aqui se engloba algo con un provide, para que funcione react-query, como el contexto*/}
    <QueryClientProvider client={queryClient}>
      {/* el query client creo que tiene que ver donde se guardan los datos en memoria cache */}
      <App />
      <ReactQueryDevtools/>
      
    </QueryClientProvider>
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./styles/global.js"
import { ThemeProvider } from "styled-components"

import { AuthProvider } from './hooks/auth'
import { FavoritesProvider } from './hooks/favorites'
import { CartProvider } from './hooks/cart'

import theme from "./styles/theme"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>

      <AuthProvider>
        <FavoritesProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </FavoritesProvider>
      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>
)

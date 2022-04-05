import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import NavBar from '../components/NavBar/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Carrousel from '../Carrousel/Carrousel'

function RoutesApp() {

    return (
     <BrowserRouter>
        <NavBar />

        <Routes>

            <Route
                path="/"
                element={<ItemListContainer
            />}
            />
            <Route
                path="/categoria/:categoriaId"
                element={<ItemListContainer
                />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
             path="/cart"
              element={<Cart />} />

            <Route path="/*" element={<Navigate to='/' replace/> } />

        </Routes>
    </BrowserRouter>

    )
}

export default RoutesApp

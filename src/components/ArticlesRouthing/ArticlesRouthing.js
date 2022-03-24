import React from 'react';
import {
    BrowserRouter,
    Route, Routes
} from "react-router-dom";
import Item2 from '../../Items/Item2';
import Item3 from '../../Items/Item3';
import Itme1 from '../../Items/Itme1';



export default function ArticlesRouthing() {
  return (
    <>
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/item1" element={<Itme1 />}>
                    <Route path="/item2" element={<Item2 />} />
                    <Route path="/item3" element={<Item3 />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

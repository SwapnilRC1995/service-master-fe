import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HeaderMain from './component/HeaderMain';
import FooterMain from './component/FooterMain';
import TaskListMain from './component/TaskListMain';
import TaskListContextProvider from './context/TaskListContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import About from './component/About';
import Signup from './component/Signup';
import Signin from './component/Signin';
import BookNow from './component/BookNow';
import SelectProvider from './component/SelectProvider';
import MyBookings from './component/MyBookings';

// Creating the App that calls Header and Tasklist
const App = () => {

    return (

        <>
            <HeaderMain />
            <TaskListContextProvider>
                <div className='container'>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path='/dashboard'
                                element={<Dashboard />} />
                            <Route
                                path='/signup'
                                element={<Signup />} />
                            <Route
                                path='/signin'
                                element={<Signin />} />
                            <Route
                                path='/book-now'
                                element={<BookNow />} />
                            <Route
                                path='/select-provider'
                                element={<SelectProvider />} />
                            <Route
                                path='/my-bookings'
                                element={<MyBookings />} />
                            <Route
                                path='*'
                                element={
                                    <><h1>Ooops! Route not found</h1></>
                                } />
                        </Routes>
                    </BrowserRouter>
                </div>
            </TaskListContextProvider>
            <FooterMain />
        </>
    )
}

export default App;

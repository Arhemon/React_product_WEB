import React from 'react';

import './App.css';
import Header from './Component/Header/Header';
import ButtonPrimary from './Component/Button_Primary/ButtonPrimary';
import ButtonTabs from './Component/ButtonTabs/ButtonTabs';
import TitleInput from './Component/TitleInput/TitleInput';
import AstronautTitle from './Component/AstronautTitle/AstronautTitle'
import AstranautPost from './pages/AstranautPost/AstranautPost'
import { dataSet } from './Component/AstronautTitle/data';
import SignTemplate from './Component/SignTemplate/SignTemplate';
import BodySign from './Component/BodySign/bodySign';
import ConfirmRegistration from './Component/ConfirmRegistration/ConfirmRegistration';
import RegistrationConfirmTemplate from './pages/RegistrationConfirm/RegistrationConfirmTemplate';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignInTemplate';
import SignInTemplate from './pages/SignIn/SignInTemplate';
import SuccessTemplate from './pages/SuccessTemplate/SuccessTemplate';
import SelectPost from './pages/SelectPost/SelectPost';
import PostTemplate from './Component/PostTemplate/PostTemplate';
import SignInTable from '..//src/Component/SignInTable/SignInTable';
import AstranautPostContent from './Component/AstranautPostContent/AstranautPostContent';
import BlogPost from './pages/BlogPost/BlogPost';
import SearchResult from './Component/SearchResult/SearchResult';
import SearchBlog from './pages/SearchBlog/SearchBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Component/Menu/Menu';
import { connect, useDispatch } from 'react-redux';
import { clickSignIn } from './Slice/actionRedux';





export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPost />}></Route>
          <Route path="/:id" element={<SelectPost />}></Route>

          <Route path="/registration" element={<SignIn />}></Route>
          <Route path="/search" element={<SearchBlog />}></Route>
          <Route path="/Menu" element={<Menu></Menu>} />
          <Route path="/signin" element={<SignInTemplate></SignInTemplate>} />
          <Route path="/Home" element={<BlogPost></BlogPost>} />
          {/* <Route path="/selectpost" element={<SelectPost></SelectPost>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

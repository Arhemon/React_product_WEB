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





export default function App() {
  const openMenu = function (): void {
    alert("hi")
  }

  const alertTwo = function (): void {
    alert("bye")
  }



  return (
    <>

      {/* <Header clickHeaderFunc={openMenu} text="Artem Malkin" />
      <ButtonPrimary typeButton="primary_btn " text="Primary" isDisabled={false} clickFunction={alertTwo} />
      <ButtonPrimary typeButton="primary_btn_disable" text="Primary" isDisabled={true} clickFunction={alertTwo} />
      <ButtonPrimary typeButton="secondary_btn" text="Secondary" isDisabled={false} clickFunction={alertTwo} />
      <ButtonPrimary typeButton="secondary_btn_disable" text="Secondary" isDisabled={true} clickFunction={alertTwo} />
      <ButtonPrimary typeButton="secondary_2_btn" text="Secondary 2" isDisabled={false} clickFunction={alertTwo} />
      <ButtonPrimary typeButton="secondary_2_btn_disable" text="Secondary 2" isDisabled={true} clickFunction={alertTwo} />


      <SignIn text="Sign Me"></SignIn>

      <ButtonTabs typeButton="tabs_button" text="All" textsecond="My favorites" textthird="Popular" isDisabled={true} clickFunction={alertTwo}></ButtonTabs>
      <ButtonTabs typeButton="tabs_button_disable" text="All" textsecond="My favorites" textthird="Popular" isDisabled={true} clickFunction={alertTwo}></ButtonTabs>
      <TitleInput></TitleInput>
      <AstranautPost /> */}

      {/* <SignTemplate Title='Sign Up' ></SignTemplate> */}
      {/* <RegistrationConfirmTemplate ></RegistrationConfirmTemplate> */}
      {/* <SignUp ></SignUp> */}
      {/* <SignInTemplate></SignInTemplate> */}
      {/* <SuccessTemplate></SuccessTemplate> */}

      {/* <SelectPost></SelectPost> */}
      {/* <PostTemplate>
        <SignInTable />
      </PostTemplate> */}

      {/* <AstranautPostContent countPost='Post14288'></AstranautPostContent>*/}

      <SelectPost></SelectPost>
      {/* <BlogPost></BlogPost> */}
    </>
  )
}
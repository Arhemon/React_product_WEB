import React from 'react';

import './App.css';
import Header from './Component/Header/Header';
import ButtonPrimary from './Component/Button_Primary/ButtonPrimary';
import SignIn from './Component/SignMe/SignIn';
import ButtonTabs from './Component/ButtonTabs/ButtonTabs';
import TitleInput from './Component/TitleInput/TitleInput';
import AstronautTitle from './Component/AstronautTitle/AstronautTitle'
import AstranautPost from './pages/AstranautPost/AstranautPost'
import { dataSet } from './Component/AstronautTitle/data';
import SignTemplate from './Component/SignTemplate/SignTemplate';
import BodySign from './Component/BodySign/bodySign';




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

      <SignTemplate Title='Sign Up' ></SignTemplate>

    </>
  )
}
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Auth: React.FC = () => {
  const [isLogin, setLogin] = useState(true);
  const handleClick = (action: boolean) => {
    console.log("🚀 ~ file: Auth.tsx ~ line 15 ~ handleClick ~ action", action);
    setLogin(action);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isLogin ? "SignIn" : "SignUp"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {isLogin && <SignIn handleClick={handleClick} />}
        {!isLogin && <SignUp handleClick={handleClick} />}
      </IonContent>
    </IonPage>
  );
};

export default Auth;

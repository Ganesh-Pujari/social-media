import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

interface Props {
  handleClick: any;
}

const SignIn: React.FC<Props> = ({ handleClick }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = () => {
    console.log(email, password);
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              type="text"
              value={email}
              onIonChange={(e: any) => setEmail(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              minlength={6}
              maxlength={12}
              type="password"
              value={password}
              onIonChange={(e: any) => setPassword(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-padding">
          <IonText>
            Don't have an account ?{" "}
            <a onClick={() => handleClick(false)}> SignUp</a>
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton size="default" expand="block" onClick={onLogin}>
            Login
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SignIn;

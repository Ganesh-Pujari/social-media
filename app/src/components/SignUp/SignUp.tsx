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
import userService from "../../service/user.service";
interface Props {
  handleClick: any;
}

const SignUp: React.FC<Props> = ({ handleClick }) => {
  const [value, setValues] = useState({
    name: null,
    phoneNumber: null,
    email: null,
    password: null,
    // confirmPassword: "",
  });

  const onSignUp = async () => {
    // console.log(value);
    // delete value.confirmPassword;
    const response = await userService.post(value);
    console.log(
      "🚀 ~ file: SignUp.tsx ~ line 34 ~ onSignUp ~ response",
      response
    );
  };

  const handleChange = (e: any) => {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              name="name"
              type="text"
              value={value.name}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Phone Number</IonLabel>
            <IonInput
              name="phoneNumber"
              type="number"
              value={value.phoneNumber}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              type="text"
              value={value.email}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              name="password"
              minlength={6}
              maxlength={12}
              type="password"
              value={value.password}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput
              name="confirmPassword"
              minlength={6}
              maxlength={12}
              type="password"
              //   value={value.confirmPassword}
              //   onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-padding">
          <IonText>
            Already have an account ?{" "}
            <a onClick={() => handleClick(true)}> SignIn</a>
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton size="default" expand="block" onClick={onSignUp}>
            SignUp
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SignUp;

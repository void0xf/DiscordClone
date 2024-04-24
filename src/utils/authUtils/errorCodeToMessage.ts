export function errorCodeToMessage(errorCode: string) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Dane logowanie lub hasło są nieprawidłowe";
    case "auth/email-already-in-use":
      return "Adres e-mail jest już zarejestrowany";
    case "auth/name-in-use":
      return "Ta nazwa użytkownika jest niedostępna.";
    case "auth/invalid-credential":
      return "Dane logowanie lub hasło są nieprawidłowe";
    case "required":
      return "Wymagane";
    default:
      return "Nieznany błąd";
  }
}

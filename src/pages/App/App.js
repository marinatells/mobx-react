import Contacts from '../../components/Contacts';
import { ContactsWrapper } from '../../context/Contacts';

import './App.css';

function App() {
  return (
    <ContactsWrapper>
      <h1>Контекст</h1>
      <Contacts />
    </ContactsWrapper>
  );
}

export default App;

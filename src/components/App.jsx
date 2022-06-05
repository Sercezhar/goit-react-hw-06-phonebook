import { Container } from './Container';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Notification } from './Notification';
import { Filter } from './Filter';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme={'colored'}
      />
      <Section tag={'h1'} title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section tag={'h2'} title={'Contacts'}>
        {contacts.length === 0 ? (
          <Notification message={'*No contacts added*'} />
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
    </Container>
  );
}

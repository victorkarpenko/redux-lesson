import React from "react";
import s from "./Contacts.module.css";
import ContactsForm from "../ContactsForm/ContactsForm";

const Contacts = () => {
  return (
    <section className={s.contacts}>
      <h2 className={s.title}>Contacts</h2>
      <div className={s.wrapper}>
        <div className={s.contactsForm}>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
}

export default Contacts;

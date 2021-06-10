import Header from './components/Header'
import { useState } from 'react'
import initialEmails from './data/emails'
import './App.css'


function App() {
  // Use initialEmails for state
  let [emails, updateEmails] = useState(initialEmails)

  // UNREAD EMAILS COUNTER
  let inboxUnreadCounter = emails.filter(email => !email.read).length
  let inboxStarredCounter = emails.filter(email => email.starred).length
  console.log(inboxUnreadCounter)

  function  toggleRead(toggledEmail){
    let newEmails = [...emails]
    for (const email of newEmails)
      if (email.id === toggledEmail.id)
        email.read = !email.read
    updateEmails(newEmails)
  }

  function  toggleStarred(toggledEmail){
    let newEmails = [...emails]
    for (const email of newEmails)
      if (email.id === toggledEmail.id)
        email.starred = !email.starred
    updateEmails(newEmails)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li 
            className="item active"
            //onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{inboxUnreadCounter}</span>
          </li>
          <li
            className="item"
            //onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{inboxStarredCounter}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              //onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(function (email){
            return <li key={email.id} className = {email.read ? "email read" : "email unread"} >
              <input type="checkbox" checked={email.read} 
                onChange={() => toggleRead(email)}></input>
              <input type="checkbox" className="star-checkbox" checked={email.starred}
                onChange={() => toggleStarred(email)}></input> 
              <span>{email.sender}</span>
              <span>{email.title}</span> 
            </li>
          })}
        </ul></main>
    </div>
  )
}

export default App

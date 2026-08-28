const { SiteHeader, SiteFooter, Hero, Button, ChatHeader, MessageBubble, MessageComposer, RecentChatItem, UserCard, InputWithButton, StatusDot, Panel, SectionHead } = window.HarithKavishDesignSystem_ec4107;

const SEED = {
  'aisha@example.com': [
    { from: 'them', text: 'Did the theme migration land?', at: '09:38' },
    { from: 'me', text: 'Yes — Converse reads the shared tokens now.', at: '09:41' },
    { from: 'them', text: 'Good. No more pastel glass.', at: '09:42' }
  ],
  'dev@example.com': [
    { from: 'me', text: 'Messages are still local-only, per the README.', at: 'Mon' }
  ]
};

function SignInScreen({ onSignIn }) {
  return (
    <>
      <Hero eyebrow="Secure P2P chat" title="Converse." lead="Chat with anyone whose email you already know. Messages are stored in your browser, per account — there is no backend, no directory, and no cross-device sync."
            actions={[<Button key="in" variant="primary" onClick={onSignIn}>Sign in with Google</Button>,
                      <Button key="home" variant="secondary" href="#">harithkavish.com</Button>]} />
      <section className="section">
        <SectionHead title="What it does" lead="The limitations are the product: nothing leaves the browser." />
        <div className="panel-grid">
          <Panel title="Know the email" body="There is no user search or discovery. You start a conversation by typing an address you already have." />
          <Panel title="Local storage" body="Conversations are kept in the browser under the signed-in account. Clearing site data clears the history." />
          <Panel title="One account layer" body="Sign-in is the same Google identity the rest of the ecosystem uses, surfaced through the shared header." />
        </div>
      </section>
    </>
  );
}

function ChatScreen({ user, onSignOut }) {
  const [threads, setThreads] = React.useState(SEED);
  const [peer, setPeer] = React.useState('aisha@example.com');
  const [draft, setDraft] = React.useState('');
  const [newPeer, setNewPeer] = React.useState('');
  const [mobileChat, setMobileChat] = React.useState(false);
  const messages = threads[peer] || [];

  const send = (text) => {
    if (!text.trim() || !peer) return;
    const at = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setThreads((t) => ({ ...t, [peer]: [...(t[peer] || []), { from: 'me', text, at }] }));
    setDraft('');
  };
  const start = (email) => {
    const value = email.trim();
    if (!value) return;
    setThreads((t) => (t[value] ? t : { ...t, [value]: [] }));
    setPeer(value);
    setNewPeer('');
    setMobileChat(true);
  };

  return (
    <div className={`chat-layout${mobileChat ? ' show-chat' : ''}`} style={{ height: 'calc(100vh - 16rem)', minHeight: '30rem' }}>
      <section className="chat-panel chat-panel--list">
        <UserCard name={user.name} email={user.email} />
        <InputWithButton type="email" value={newPeer} onChange={setNewPeer} onSubmit={start} placeholder="Enter peer email ID" />
        <p className="chat-section-header">Recent chats</p>
        <div className="recent-chats">
          {Object.keys(threads).length === 0
            ? <p className="recent-chats__empty">No recent chats</p>
            : Object.keys(threads).map((email) => (
                <RecentChatItem key={email} email={email} name={email.split('@')[0]} active={email === peer}
                                onClick={() => { setPeer(email); setMobileChat(true); }} />
              ))}
        </div>
        <Button variant="secondary" onClick={onSignOut}>Sign out</Button>
      </section>
      <section className="chat-panel chat-panel--conversation">
        <ChatHeader peer={peer || 'No peer selected'} onBack={() => setMobileChat(false)}
                    status={<StatusDot state="online" label="Local only" />} />
        <div className="messages">
          {messages.length === 0
            ? <p className="messages__empty">No messages yet. Say something.</p>
            : messages.map((m, i) => <MessageBubble key={i} from={m.from} timestamp={m.at}>{m.text}</MessageBubble>)}
        </div>
        <MessageComposer value={draft} onChange={setDraft} onSend={send} disabled={!peer} />
      </section>
    </div>
  );
}

function App() {
  const [user, setUser] = React.useState(null);
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  return (
    <div className="site-shell">
      <SiteHeader brand={{ name: 'Converse', descriptor: 'Secure P2P chat', href: '#' }}
                  logoSrc="../../logo.png"
                  navigation={[{ label: 'Home', href: '#' }]}
                  theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main className="site-main">
        {user
          ? <ChatScreen user={user} onSignOut={() => setUser(null)} />
          : <SignInScreen onSignIn={() => setUser({ name: 'Harith Kavish', email: 'hello@harithkavish.com' })} />}
      </main>
      <SiteFooter links={[{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }]} />
    </div>
  );
}

Object.assign(window, { ConverseApp: App });

The send row: a pill text field and the primary button, both pinned to the bottom of the conversation panel.

```jsx
<MessageComposer value={draft} onChange={setDraft} onSend={send} disabled={!peer} />
```

The button says "Send" — the system labels actions in words, not glyphs, wherever there is room.

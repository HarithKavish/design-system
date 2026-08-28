/* @ds-bundle: {"format":4,"namespace":"HarithKavishDesignSystem_ec4107","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardLink","sourcePath":"components/core/CardLink.jsx"},{"name":"Factbox","sourcePath":"components/core/Factbox.jsx"},{"name":"Hero","sourcePath":"components/core/Hero.jsx"},{"name":"NotePanel","sourcePath":"components/core/NotePanel.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"PrinciplesList","sourcePath":"components/core/PrinciplesList.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"StatRow","sourcePath":"components/core/StatRow.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"StatusRow","sourcePath":"components/core/StatusRow.jsx"},{"name":"ChatHeader","sourcePath":"components/messaging/ChatHeader.jsx"},{"name":"InputWithButton","sourcePath":"components/messaging/InputWithButton.jsx"},{"name":"MessageBubble","sourcePath":"components/messaging/MessageBubble.jsx"},{"name":"MessageComposer","sourcePath":"components/messaging/MessageComposer.jsx"},{"name":"RecentChatItem","sourcePath":"components/messaging/RecentChatItem.jsx"},{"name":"UserCard","sourcePath":"components/messaging/UserCard.jsx"},{"name":"ArticleHead","sourcePath":"components/reading/ArticleHead.jsx"},{"name":"AuthorChip","sourcePath":"components/reading/AuthorChip.jsx"},{"name":"BlogCard","sourcePath":"components/reading/BlogCard.jsx"},{"name":"Feature","sourcePath":"components/reading/Feature.jsx"},{"name":"Infobox","sourcePath":"components/reading/Infobox.jsx"},{"name":"Note","sourcePath":"components/reading/Note.jsx"},{"name":"PostItem","sourcePath":"components/reading/PostItem.jsx"},{"name":"Prose","sourcePath":"components/reading/Prose.jsx"},{"name":"ReadingProgress","sourcePath":"components/reading/ReadingProgress.jsx"},{"name":"SearchField","sourcePath":"components/reading/SearchField.jsx"},{"name":"Toc","sourcePath":"components/reading/Toc.jsx"},{"name":"Brand","sourcePath":"components/shell/Brand.jsx"},{"name":"NavLink","sourcePath":"components/shell/NavLink.jsx"},{"name":"SiteFooter","sourcePath":"components/shell/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/shell/SiteHeader.jsx"},{"name":"ThemeToggle","sourcePath":"components/shell/ThemeToggle.jsx"}],"sourceHashes":{"components/core/Button.jsx":"367086f15de8","components/core/Card.jsx":"0437cd0bef05","components/core/CardLink.jsx":"dd33249440f6","components/core/Factbox.jsx":"7b9eb774f0f9","components/core/Hero.jsx":"b48e66f8c12d","components/core/NotePanel.jsx":"b5556602733a","components/core/Panel.jsx":"cfc10e9dbd4b","components/core/Pill.jsx":"432aa1fc7f6f","components/core/PrinciplesList.jsx":"bafc6a0633e1","components/core/SectionHead.jsx":"700906d7a465","components/core/StatRow.jsx":"f8657c5cc690","components/core/StatusDot.jsx":"90194235a235","components/core/StatusRow.jsx":"6583be31d6ed","components/messaging/ChatHeader.jsx":"d75b620054eb","components/messaging/InputWithButton.jsx":"367cb3e6a509","components/messaging/MessageBubble.jsx":"cebb1a3ab5bc","components/messaging/MessageComposer.jsx":"60266a5c3374","components/messaging/RecentChatItem.jsx":"398ddada7edc","components/messaging/UserCard.jsx":"b120c2d524a4","components/reading/ArticleHead.jsx":"e84e776f5d37","components/reading/AuthorChip.jsx":"9adaf608dd7e","components/reading/BlogCard.jsx":"5890643fac31","components/reading/Feature.jsx":"939345266116","components/reading/Infobox.jsx":"8719813b00b8","components/reading/Note.jsx":"ee9df60e7030","components/reading/PostItem.jsx":"d87ed06f7d7d","components/reading/Prose.jsx":"febcf615b3dd","components/reading/ReadingProgress.jsx":"ce407e78854e","components/reading/SearchField.jsx":"12943dfbafd2","components/reading/Toc.jsx":"1bb23b7e5ff7","components/shell/Brand.jsx":"cd515e627b3c","components/shell/NavLink.jsx":"4136b62c22aa","components/shell/SiteFooter.jsx":"14105204a752","components/shell/SiteHeader.jsx":"c4f05e16247f","components/shell/ThemeToggle.jsx":"4d08acb9b8d4","ui_kits/blog/blog-screens.jsx":"0fd07d0135a9","ui_kits/blog/data.js":"edbd5712b228","ui_kits/converse/App.jsx":"a07785614763","ui_kits/website/data.js":"69547467b25a","ui_kits/website/website-screens.jsx":"a5016c6e17bd"},"inlinedExternals":[],"unexposedExports":[{"name":"statusTone","sourcePath":"components/core/Pill.jsx"}]} */

(() => {

const __ds_ns = (window.HarithKavishDesignSystem_ec4107 = window.HarithKavishDesignSystem_ec4107 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'secondary',
  href,
  children,
  onClick,
  disabled = false,
  type = 'button',
  ...rest
}) {
  const className = `button button--${variant}`;
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: className,
      href: href,
      onClick: onClick
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CardLink.jsx
try { (() => {
function CardLink({
  href,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "card__link",
    href: href,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { CardLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CardLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Factbox.jsx
try { (() => {
function Factbox({
  facts = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "factbox"
  }, facts.map(fact => /*#__PURE__*/React.createElement("div", {
    className: "factbox__cell",
    key: fact.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "factbox__label"
  }, fact.label), /*#__PURE__*/React.createElement("span", {
    className: "factbox__value"
  }, fact.value))));
}
Object.assign(__ds_scope, { Factbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Factbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Hero.jsx
try { (() => {
function Hero({
  eyebrow,
  title,
  lead,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "hero__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, actions) : null, children);
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Hero.jsx", error: String((e && e.message) || e) }); }

// components/core/NotePanel.jsx
try { (() => {
function NotePanel({
  children
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "note-panel"
  }, children);
}
Object.assign(__ds_scope, { NotePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NotePanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function Panel({
  title,
  body,
  wide = false,
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: `panel${wide ? ' panel--wide' : ''}`
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "panel__title"
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    className: "panel__body"
  }, body) : null, children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  children,
  tone = 'neutral',
  preserveCase = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `pill pill--${tone}${preserveCase ? ' pill--handle' : ''}`
  }, children);
}
function statusTone(state) {
  const value = String(state).toLowerCase();
  if (value.includes('live') || value.includes('ready')) return 'live';
  if (value.includes('progress')) return 'progress';
  if (value.includes('planned')) return 'planned';
  return 'neutral';
}
Object.assign(__ds_scope, { Pill, statusTone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  status,
  route,
  title,
  meta,
  body,
  details,
  link,
  interactive = false,
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: `card${interactive ? ' card--interactive' : ''}`
  }, status || route ? /*#__PURE__*/React.createElement("div", {
    className: "card__topline"
  }, status ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: __ds_scope.statusTone(status)
  }, status) : /*#__PURE__*/React.createElement("span", null), route ? /*#__PURE__*/React.createElement("span", {
    className: "card__route"
  }, route) : null) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "card__title"
  }, title) : null, meta ? /*#__PURE__*/React.createElement("p", {
    className: "card__meta"
  }, meta) : null, body ? /*#__PURE__*/React.createElement("p", {
    className: "card__body"
  }, body) : null, details && details.length ? /*#__PURE__*/React.createElement("ul", {
    className: "card__list"
  }, details.map(d => /*#__PURE__*/React.createElement("li", {
    key: d
  }, d))) : null, children, link ? /*#__PURE__*/React.createElement(__ds_scope.CardLink, {
    href: link.href
  }, link.label) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/PrinciplesList.jsx
try { (() => {
function PrinciplesList({
  items = [],
  compact = false
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: `principles-list${compact ? ' principles-list--compact' : ''}`
  }, items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)));
}
Object.assign(__ds_scope, { PrinciplesList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PrinciplesList.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function SectionHead({
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "section-head__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "section-head__title"
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "section-head__lead"
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/StatRow.jsx
try { (() => {
function StatRow({
  stats = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, stats.map(stat => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: stat.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat__value"
  }, stat.value), /*#__PURE__*/React.createElement("span", {
    className: "stat__label"
  }, stat.label))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function StatusDot({
  state = 'unknown',
  label
}) {
  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: `status-dot status-dot--${state}`,
    "aria-hidden": "true"
  }), label);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusRow.jsx
try { (() => {
function StatusRow({
  label,
  state,
  detail
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "status-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-row__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "status-row__state"
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: __ds_scope.statusTone(state)
  }, state)), /*#__PURE__*/React.createElement("p", {
    className: "status-row__detail"
  }, detail));
}
Object.assign(__ds_scope, { StatusRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusRow.jsx", error: String((e && e.message) || e) }); }

// components/messaging/ChatHeader.jsx
try { (() => {
function ChatHeader({
  peer = 'No peer selected',
  status,
  onBack,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-header__left"
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "chat-back",
    onClick: onBack,
    "aria-label": "Back to conversations"
  }, '\u2190') : null, /*#__PURE__*/React.createElement("span", {
    className: "chat-header__peer"
  }, peer)), actions || (status ? /*#__PURE__*/React.createElement("span", {
    className: "chat-header__status"
  }, status) : null));
}
Object.assign(__ds_scope, { ChatHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/ChatHeader.jsx", error: String((e && e.message) || e) }); }

// components/messaging/InputWithButton.jsx
try { (() => {
function InputWithButton({
  value,
  onChange,
  onSubmit,
  placeholder = '',
  buttonLabel = '\u2192',
  type = 'text',
  name
}) {
  return /*#__PURE__*/React.createElement("form", {
    className: "input-with-button",
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    "aria-label": placeholder
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Submit"
  }, buttonLabel));
}
Object.assign(__ds_scope, { InputWithButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/InputWithButton.jsx", error: String((e && e.message) || e) }); }

// components/messaging/MessageBubble.jsx
try { (() => {
function MessageBubble({
  from = 'them',
  children,
  timestamp
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bubble bubble--from-${from === 'me' ? 'me' : 'them'}`
  }, children, timestamp ? /*#__PURE__*/React.createElement("span", {
    className: "bubble__timestamp"
  }, timestamp) : null);
}
Object.assign(__ds_scope, { MessageBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/MessageBubble.jsx", error: String((e && e.message) || e) }); }

// components/messaging/MessageComposer.jsx
try { (() => {
function MessageComposer({
  value,
  onChange,
  onSend,
  placeholder = 'Type a message',
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("form", {
    className: "message-form",
    onSubmit: e => {
      e.preventDefault();
      onSend && onSend(value);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: value,
    placeholder: placeholder,
    autoComplete: "off",
    onChange: e => onChange && onChange(e.target.value),
    disabled: disabled,
    "aria-label": placeholder
  }), /*#__PURE__*/React.createElement("button", {
    className: "button button--primary",
    type: "submit",
    disabled: disabled
  }, "Send"));
}
Object.assign(__ds_scope, { MessageComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/MessageComposer.jsx", error: String((e && e.message) || e) }); }

// components/messaging/RecentChatItem.jsx
try { (() => {
function RecentChatItem({
  name,
  email,
  avatarSrc,
  active = false,
  onClick
}) {
  const initial = (name || email || '?').trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `recent-chat-item${active ? ' is-active' : ''}`,
    onClick: onClick,
    "aria-pressed": active
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    className: "recent-chat-item__avatar",
    src: avatarSrc,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "recent-chat-item__initial",
    "aria-hidden": "true"
  }, initial), /*#__PURE__*/React.createElement("span", {
    className: "recent-chat-item__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "recent-chat-item__name"
  }, name || email), email ? /*#__PURE__*/React.createElement("span", {
    className: "recent-chat-item__email"
  }, email) : null));
}
Object.assign(__ds_scope, { RecentChatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/RecentChatItem.jsx", error: String((e && e.message) || e) }); }

// components/messaging/UserCard.jsx
try { (() => {
function UserCard({
  name,
  email,
  avatarSrc,
  emptyLabel = 'Not signed in'
}) {
  if (!name) return /*#__PURE__*/React.createElement("div", {
    className: "user-card user-card--empty"
  }, emptyLabel);
  return /*#__PURE__*/React.createElement("div", {
    className: "user-card"
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    className: "user-card__avatar",
    src: avatarSrc,
    alt: ""
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "user-card__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "user-card__name"
  }, name), email ? /*#__PURE__*/React.createElement("span", {
    className: "user-card__email"
  }, email) : null));
}
Object.assign(__ds_scope, { UserCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/UserCard.jsx", error: String((e && e.message) || e) }); }

// components/reading/ArticleHead.jsx
try { (() => {
function ArticleHead({
  kicker,
  title,
  lead,
  meta = []
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "article-head"
  }, kicker ? /*#__PURE__*/React.createElement("p", {
    className: "article-kicker"
  }, kicker) : null, /*#__PURE__*/React.createElement("h1", {
    className: "article-title"
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "article-lead"
  }, lead) : null, meta.length ? /*#__PURE__*/React.createElement("div", {
    className: "article-meta"
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m))) : null);
}
Object.assign(__ds_scope, { ArticleHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/ArticleHead.jsx", error: String((e && e.message) || e) }); }

// components/reading/AuthorChip.jsx
try { (() => {
function AuthorChip({
  handle,
  meta,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `author-chip${active ? ' is-active' : ''}`,
    onClick: onClick,
    "aria-pressed": active
  }, /*#__PURE__*/React.createElement("span", {
    className: "author-chip__handle"
  }, handle), meta ? /*#__PURE__*/React.createElement("span", {
    className: "author-chip__meta"
  }, meta) : null);
}
Object.assign(__ds_scope, { AuthorChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/AuthorChip.jsx", error: String((e && e.message) || e) }); }

// components/reading/BlogCard.jsx
try { (() => {
function BlogCard({
  handle,
  date,
  title,
  summary,
  tags = [],
  href
}) {
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "blog-card__top"
  }, handle ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: "neutral",
    preserveCase: true
  }, handle) : /*#__PURE__*/React.createElement("span", null), date ? /*#__PURE__*/React.createElement("span", {
    className: "blog-card__date"
  }, date) : null), /*#__PURE__*/React.createElement("h3", {
    className: "blog-card__title"
  }, title), summary ? /*#__PURE__*/React.createElement("p", {
    className: "blog-card__summary"
  }, summary) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    className: "blog-card__foot"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    key: t,
    tone: "neutral",
    preserveCase: true
  }, t))) : null);
  return href ? /*#__PURE__*/React.createElement("a", {
    className: "blog-card",
    href: href
  }, body) : /*#__PURE__*/React.createElement("article", {
    className: "blog-card"
  }, body);
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/reading/Feature.jsx
try { (() => {
function Feature({
  eyebrow = 'Latest',
  title,
  summary,
  handle,
  date,
  href,
  onClick
}) {
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "feature__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "feature__title"
  }, title), summary ? /*#__PURE__*/React.createElement("p", {
    className: "feature__summary"
  }, summary) : null, /*#__PURE__*/React.createElement("div", {
    className: "feature__meta"
  }, handle ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: "neutral",
    preserveCase: true
  }, handle) : null, date ? /*#__PURE__*/React.createElement("span", {
    className: "byline"
  }, date) : null));
  return href || onClick ? /*#__PURE__*/React.createElement("a", {
    className: "feature",
    href: href || '#',
    onClick: onClick
  }, body) : /*#__PURE__*/React.createElement("article", {
    className: "feature"
  }, body);
}
Object.assign(__ds_scope, { Feature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/Feature.jsx", error: String((e && e.message) || e) }); }

// components/reading/Infobox.jsx
try { (() => {
function Infobox({
  title = 'At a glance',
  rows = []
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "infobox"
  }, /*#__PURE__*/React.createElement("p", {
    className: "infobox__title"
  }, title), /*#__PURE__*/React.createElement("dl", {
    className: "infobox__list"
  }, rows.map(row => /*#__PURE__*/React.createElement("div", {
    className: "infobox__row",
    key: row.label
  }, /*#__PURE__*/React.createElement("dt", null, row.label), /*#__PURE__*/React.createElement("dd", null, row.value)))));
}
Object.assign(__ds_scope, { Infobox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/Infobox.jsx", error: String((e && e.message) || e) }); }

// components/reading/Note.jsx
try { (() => {
function Note({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, children);
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/Note.jsx", error: String((e && e.message) || e) }); }

// components/reading/PostItem.jsx
try { (() => {
function PostItem({
  title,
  date,
  summary,
  tags = [],
  href
}) {
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "post-item__title"
  }, title), date ? /*#__PURE__*/React.createElement("span", {
    className: "post-item__date"
  }, date) : null, summary ? /*#__PURE__*/React.createElement("p", {
    className: "post-item__summary"
  }, summary) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    className: "post-item__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    key: t,
    tone: "neutral",
    preserveCase: true
  }, t))) : null);
  return href ? /*#__PURE__*/React.createElement("a", {
    className: "post-item",
    href: href
  }, body) : /*#__PURE__*/React.createElement("article", {
    className: "post-item"
  }, body);
}
Object.assign(__ds_scope, { PostItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/PostItem.jsx", error: String((e && e.message) || e) }); }

// components/reading/Prose.jsx
try { (() => {
function Prose({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/Prose.jsx", error: String((e && e.message) || e) }); }

// components/reading/ReadingProgress.jsx
try { (() => {
function ReadingProgress({
  value = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "reading-progress",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reading-progress__bar",
    style: {
      width: `${Math.max(0, Math.min(100, value))}%`
    }
  }));
}
Object.assign(__ds_scope, { ReadingProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/ReadingProgress.jsx", error: String((e && e.message) || e) }); }

// components/reading/SearchField.jsx
try { (() => {
function SearchField({
  value,
  onChange,
  placeholder = 'Search',
  count
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "index-tools"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "search__glyph",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", {
    className: "search__input",
    type: "search",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    "aria-label": placeholder
  })), count != null ? /*#__PURE__*/React.createElement("span", {
    className: "index-count"
  }, count) : null);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/reading/Toc.jsx
try { (() => {
function Toc({
  title = 'Contents',
  items = [],
  activeId
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "toc",
    "aria-label": "Contents"
  }, /*#__PURE__*/React.createElement("p", {
    className: "toc__title"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "toc__list"
  }, items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.id,
    className: `toc__item toc__item--${item.level === 3 ? 'sub' : 'top'}`
  }, /*#__PURE__*/React.createElement("a", {
    className: `toc__link${item.id === activeId ? ' is-active' : ''}`,
    href: `#${item.id}`
  }, item.label)))));
}
Object.assign(__ds_scope, { Toc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/Toc.jsx", error: String((e && e.message) || e) }); }

// components/shell/Brand.jsx
try { (() => {
function Brand({
  name = 'Harith Kavish',
  descriptor,
  logoSrc,
  href = '/',
  wordmarkOnly = false
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: href
  }, logoSrc && !wordmarkOnly ? /*#__PURE__*/React.createElement("img", {
    className: "brand__mark",
    src: logoSrc,
    alt: "",
    "aria-hidden": "true"
  }) : null, wordmarkOnly ? /*#__PURE__*/React.createElement("span", {
    className: "brand__wordmark"
  }, name) : /*#__PURE__*/React.createElement("span", {
    className: "brand__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand__name"
  }, name), descriptor ? /*#__PURE__*/React.createElement("span", {
    className: "brand__descriptor"
  }, descriptor) : null));
}
Object.assign(__ds_scope, { Brand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/Brand.jsx", error: String((e && e.message) || e) }); }

// components/shell/NavLink.jsx
try { (() => {
function NavLink({
  label,
  href,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: `site-nav__link${active ? ' is-active' : ''}`,
    href: href,
    "aria-current": active ? 'page' : undefined,
    onClick: onClick
  }, label);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/shell/SiteFooter.jsx
try { (() => {
function SiteFooter({
  owner = 'Harith Kavish',
  year = new Date().getFullYear(),
  links = [],
  activeLabel
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "site-footer__copy"
  }, `© ${year} ${owner}`), /*#__PURE__*/React.createElement("nav", {
    className: "site-footer__nav",
    "aria-label": "Footer"
  }, links.map(item => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: item.label,
    label: item.label,
    href: item.href,
    active: item.label === activeLabel
  })))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/shell/ThemeToggle.jsx
try { (() => {
function ThemeToggle({
  theme = 'light',
  onToggle
}) {
  const next = theme === 'dark' ? 'light' : 'dark';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "theme-toggle",
    "data-theme-toggle": "true",
    onClick: onToggle,
    "aria-label": `Switch to ${next} mode`
  }, theme === 'dark' ? 'Light mode' : 'Dark mode');
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/shell/SiteHeader.jsx
try { (() => {
function SiteHeader({
  brand = {
    name: 'Harith Kavish',
    descriptor: 'Independent software business'
  },
  logoSrc,
  navigation = [],
  activeLabel,
  theme = 'light',
  onToggleTheme,
  progress,
  children
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.Brand, {
    name: brand.name,
    descriptor: brand.descriptor,
    logoSrc: logoSrc,
    href: brand.href || '/',
    wordmarkOnly: brand.wordmarkOnly
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-header__actions"
  }, /*#__PURE__*/React.createElement("nav", {
    className: `site-nav${open ? ' is-open' : ''}`,
    id: "primary-nav",
    "aria-label": "Primary"
  }, navigation.map(item => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: item.label,
    label: item.label,
    href: item.href,
    active: item.label === activeLabel,
    onClick: item.onClick
  }))), onToggleTheme ? /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    theme: theme,
    onToggle: onToggleTheme
  }) : null, children, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `nav-toggle${open ? ' is-open' : ''}`,
    "aria-controls": "primary-nav",
    "aria-expanded": open,
    "aria-label": open ? 'Close menu' : 'Open menu',
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle__bars",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle__bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle__bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle__bar"
  }))))), typeof progress === 'number' ? /*#__PURE__*/React.createElement("div", {
    className: "reading-progress",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reading-progress__bar",
    style: {
      width: `${Math.max(0, Math.min(100, progress))}%`
    }
  })) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/blog-screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  Button,
  SectionHead,
  ArticleHead,
  Toc,
  Prose,
  Infobox,
  Note,
  Feature,
  BlogCard,
  PostItem,
  SearchField,
  AuthorChip,
  Factbox,
  StatRow
} = window.HarithKavishDesignSystem_ec4107;
const blog = window.HKBlogData;
function DiscoverScreen({
  onOpen
}) {
  const [query, setQuery] = React.useState('');
  const [author, setAuthor] = React.useState(null);
  const shown = blog.posts.filter(p => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || (p.title + ' ' + p.summary + ' ' + p.tags.join(' ')).toLowerCase().includes(q);
    return matchesQuery && (!author || p.handle === author);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "masthead"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "masthead__title"
  }, "Pages people and agents write."), /*#__PURE__*/React.createElement("p", {
    className: "masthead__lead"
  }, "A publishing surface where a human and an agent can keep a blog under the same roof, on the same theme, with the same reading experience.")), /*#__PURE__*/React.createElement(StatRow, {
    stats: blog.stats
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Latest",
    lead: "The most recent blog, given the width the grid cards do not get."
  }), /*#__PURE__*/React.createElement(Feature, _extends({}, blog.feature, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen();
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Authors",
    lead: "Filter the index by the person or agent who wrote it."
  }), /*#__PURE__*/React.createElement("div", {
    className: "author-grid"
  }, blog.authors.map(a => /*#__PURE__*/React.createElement(AuthorChip, {
    key: a.handle,
    handle: a.handle,
    meta: a.meta,
    active: author === a.handle,
    onClick: () => setAuthor(author === a.handle ? null : a.handle)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "All blogs",
    lead: "Search filters titles, summaries and tags as you type."
  }), /*#__PURE__*/React.createElement(SearchField, {
    value: query,
    onChange: setQuery,
    placeholder: "Search blogs",
    count: `${shown.length} of ${blog.posts.length} blogs`
  }), /*#__PURE__*/React.createElement("div", {
    className: "blog-grid",
    style: {
      marginTop: '1.4rem'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p.title,
    handle: p.handle,
    date: p.date,
    title: p.title,
    summary: p.summary,
    tags: p.tags,
    href: "#"
  }))), shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "index-empty"
  }, "Nothing matches that. ", /*#__PURE__*/React.createElement("button", {
    className: "link-button",
    onClick: () => {
      setQuery('');
      setAuthor(null);
    }
  }, "Clear the filters"), ".") : null, /*#__PURE__*/React.createElement("div", {
    className: "post-list"
  }, blog.posts.map(p => /*#__PURE__*/React.createElement(PostItem, {
    key: p.title,
    title: p.title,
    date: p.date,
    summary: p.summary,
    tags: p.tags,
    href: "#"
  })))));
}
function ArticleScreen({
  onBack,
  activeId
}) {
  const a = blog.article;
  const tocItems = a.sections.map(s => ({
    id: s.id,
    label: s.title,
    level: s.level || 2
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ArticleHead, {
    kicker: a.kicker,
    title: a.title,
    lead: a.lead,
    meta: a.meta
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-layout"
  }, /*#__PURE__*/React.createElement(Toc, {
    items: tocItems,
    activeId: activeId
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-body"
  }, /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, a.lead), a.sections.map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, s.level === 3 ? /*#__PURE__*/React.createElement("h3", {
    id: s.id
  }, s.title) : /*#__PURE__*/React.createElement("h2", {
    id: s.id
  }, s.title), s.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)))), /*#__PURE__*/React.createElement(Note, null, /*#__PURE__*/React.createElement("p", null, "Token values in this article are the production values from ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "harithkavish.com/style.css"), ".")), /*#__PURE__*/React.createElement("blockquote", null, "Structure is carried by a single rule, not a box.")), /*#__PURE__*/React.createElement(Factbox, {
    facts: [{
      label: 'Measure',
      value: '68ch'
    }, {
      label: 'Rail',
      value: '232px'
    }, {
      label: 'Radius',
      value: '1.4rem'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "byline"
  }, "Written on the shared theme."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBack
  }, "Back to the index"))), /*#__PURE__*/React.createElement(Infobox, {
    rows: a.infobox
  })));
}
Object.assign(window, {
  DiscoverScreen,
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/blog-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/data.js
try { (() => {
/* Structure and handles follow blog.harithkavish.com; the article body is
   written for this kit (the live posts are user content). */
window.HKBlogData = {
  stats: [{
    value: '42',
    label: 'Blogs indexed'
  }, {
    value: '7',
    label: 'Authors'
  }, {
    value: '12',
    label: 'Agents'
  }, {
    value: '2026',
    label: 'Since'
  }],
  authors: [{
    handle: '@archw1774010803339',
    meta: '6 blogs'
  }, {
    handle: '@microtest1774071908798',
    meta: '4 blogs'
  }, {
    handle: '@e2e1774026393454',
    meta: '3 blogs'
  }, {
    handle: '@harith',
    meta: '9 blogs'
  }],
  feature: {
    handle: '@harith',
    date: '2026-03-09',
    title: 'One theme across every subdomain',
    summary: 'The blog does not restyle anything. It links the shared stylesheet and adds only what a reading site needs: an article column, a contents rail, and an infobox.'
  },
  posts: [{
    handle: '@archw1774010803339',
    date: '2026-03-08',
    title: 'Ants, briefly',
    tags: ['nature', 'field notes'],
    summary: 'A short field note on colony behaviour, written in one sitting and left that way.'
  }, {
    handle: '@microtest1774071908798',
    date: '2026-03-08',
    title: 'Rust tips',
    tags: ['rust'],
    summary: 'Notes from a week of fighting the borrow checker and eventually agreeing with it.'
  }, {
    handle: '@e2e1774026393454',
    date: '2026-03-08',
    title: 'Bamboo',
    tags: ['plants'],
    summary: 'Growth rates, uses, and why the fastest-growing plant is not the one you think.'
  }, {
    handle: '@harith',
    date: '2026-03-09',
    title: 'India, in numbers',
    tags: ['reference'],
    summary: 'Figures worth keeping in one place, with the sources they came from.'
  }, {
    handle: '@archw1774010803339',
    date: '2026-03-08',
    title: 'The sites that write themselves',
    tags: ['agents'],
    summary: 'What happens when hosting, publishing and authoring are all available to an agent.'
  }, {
    handle: '@harith',
    date: '2026-03-07',
    title: 'Grass tips',
    tags: ['plants', 'field notes'],
    summary: 'A companion note to the bamboo piece, kept deliberately shorter.'
  }],
  article: {
    kicker: 'Field notes',
    title: 'One theme across every subdomain',
    lead: 'The blog inherits every colour, the shell, and the card system from the shared stylesheet, and adds only the four things a reading site actually needs.',
    meta: ['@harith', '9 March 2026', '6 min read'],
    infobox: [{
      label: 'Type',
      value: 'Field note'
    }, {
      label: 'Author',
      value: '@harith'
    }, {
      label: 'Published',
      value: '2026-03-09'
    }, {
      label: 'Surface',
      value: 'blog.harithkavish.com'
    }],
    sections: [{
      id: 'inheritance',
      title: 'What is inherited',
      body: ['Colour, the sticky shell, the card system and the pill are all supplied by the shared stylesheet. Nothing in the blog layer redefines them, which is why a token change on the main site reaches the blog in both modes without a second edit.', 'That constraint is the point. A reading site that owns its own palette drifts within a release or two.']
    }, {
      id: 'additions',
      title: 'What is added',
      body: ['Four things: an article column at a 68ch measure, a contents rail structured by a single rule rather than a panel, an infobox in its own grid column, and the index listing.', 'Giving the infobox a column of its own — rather than floating it into the text — means the reading measure never shrinks to accommodate it, and the whole arrangement collapses in DOM order on a narrow screen.']
    }, {
      id: 'measure',
      title: 'The measure',
      level: 3,
      body: ['One custom property holds the measure so the rail and the body stay in step.']
    }, {
      id: 'progress',
      title: 'The one indicator',
      body: ['A 2px hairline of reading progress rides the bottom edge of the sticky header, at 55% opacity. It should register at the edge of vision and never compete with the text.']
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/data.js", error: String((e && e.message) || e) }); }

// ui_kits/converse/App.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Hero,
  Button,
  ChatHeader,
  MessageBubble,
  MessageComposer,
  RecentChatItem,
  UserCard,
  InputWithButton,
  StatusDot,
  Panel,
  SectionHead
} = window.HarithKavishDesignSystem_ec4107;
const SEED = {
  'aisha@example.com': [{
    from: 'them',
    text: 'Did the theme migration land?',
    at: '09:38'
  }, {
    from: 'me',
    text: 'Yes — Converse reads the shared tokens now.',
    at: '09:41'
  }, {
    from: 'them',
    text: 'Good. No more pastel glass.',
    at: '09:42'
  }],
  'dev@example.com': [{
    from: 'me',
    text: 'Messages are still local-only, per the README.',
    at: 'Mon'
  }]
};
function SignInScreen({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Secure P2P chat",
    title: "Converse.",
    lead: "Chat with anyone whose email you already know. Messages are stored in your browser, per account \u2014 there is no backend, no directory, and no cross-device sync.",
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "in",
      variant: "primary",
      onClick: onSignIn
    }, "Sign in with Google"), /*#__PURE__*/React.createElement(Button, {
      key: "home",
      variant: "secondary",
      href: "#"
    }, "harithkavish.com")]
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What it does",
    lead: "The limitations are the product: nothing leaves the browser."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel-grid"
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Know the email",
    body: "There is no user search or discovery. You start a conversation by typing an address you already have."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Local storage",
    body: "Conversations are kept in the browser under the signed-in account. Clearing site data clears the history."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "One account layer",
    body: "Sign-in is the same Google identity the rest of the ecosystem uses, surfaced through the shared header."
  }))));
}
function ChatScreen({
  user,
  onSignOut
}) {
  const [threads, setThreads] = React.useState(SEED);
  const [peer, setPeer] = React.useState('aisha@example.com');
  const [draft, setDraft] = React.useState('');
  const [newPeer, setNewPeer] = React.useState('');
  const [mobileChat, setMobileChat] = React.useState(false);
  const messages = threads[peer] || [];
  const send = text => {
    if (!text.trim() || !peer) return;
    const at = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    setThreads(t => ({
      ...t,
      [peer]: [...(t[peer] || []), {
        from: 'me',
        text,
        at
      }]
    }));
    setDraft('');
  };
  const start = email => {
    const value = email.trim();
    if (!value) return;
    setThreads(t => t[value] ? t : {
      ...t,
      [value]: []
    });
    setPeer(value);
    setNewPeer('');
    setMobileChat(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `chat-layout${mobileChat ? ' show-chat' : ''}`,
    style: {
      height: 'calc(100vh - 16rem)',
      minHeight: '30rem'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "chat-panel chat-panel--list"
  }, /*#__PURE__*/React.createElement(UserCard, {
    name: user.name,
    email: user.email
  }), /*#__PURE__*/React.createElement(InputWithButton, {
    type: "email",
    value: newPeer,
    onChange: setNewPeer,
    onSubmit: start,
    placeholder: "Enter peer email ID"
  }), /*#__PURE__*/React.createElement("p", {
    className: "chat-section-header"
  }, "Recent chats"), /*#__PURE__*/React.createElement("div", {
    className: "recent-chats"
  }, Object.keys(threads).length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "recent-chats__empty"
  }, "No recent chats") : Object.keys(threads).map(email => /*#__PURE__*/React.createElement(RecentChatItem, {
    key: email,
    email: email,
    name: email.split('@')[0],
    active: email === peer,
    onClick: () => {
      setPeer(email);
      setMobileChat(true);
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onSignOut
  }, "Sign out")), /*#__PURE__*/React.createElement("section", {
    className: "chat-panel chat-panel--conversation"
  }, /*#__PURE__*/React.createElement(ChatHeader, {
    peer: peer || 'No peer selected',
    onBack: () => setMobileChat(false),
    status: /*#__PURE__*/React.createElement(StatusDot, {
      state: "online",
      label: "Local only"
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "messages"
  }, messages.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "messages__empty"
  }, "No messages yet. Say something.") : messages.map((m, i) => /*#__PURE__*/React.createElement(MessageBubble, {
    key: i,
    from: m.from,
    timestamp: m.at
  }, m.text))), /*#__PURE__*/React.createElement(MessageComposer, {
    value: draft,
    onChange: setDraft,
    onSend: send,
    disabled: !peer
  })));
}
function App() {
  const [user, setUser] = React.useState(null);
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return /*#__PURE__*/React.createElement("div", {
    className: "site-shell"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    brand: {
      name: 'Converse',
      descriptor: 'Secure P2P chat',
      href: '#'
    },
    logoSrc: "../../logo.png",
    navigation: [{
      label: 'Home',
      href: '#'
    }],
    theme: theme,
    onToggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  }), /*#__PURE__*/React.createElement("main", {
    className: "site-main"
  }, user ? /*#__PURE__*/React.createElement(ChatScreen, {
    user: user,
    onSignOut: () => setUser(null)
  }) : /*#__PURE__*/React.createElement(SignInScreen, {
    onSignIn: () => setUser({
      name: 'Harith Kavish',
      email: 'hello@harithkavish.com'
    })
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    links: [{
      label: 'Privacy',
      href: '#'
    }, {
      label: 'Terms',
      href: '#'
    }]
  }));
}
Object.assign(window, {
  ConverseApp: App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/converse/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Content lifted verbatim from harithkavish.github.io/site-data.js. */
window.HKSiteData = {
  brand: {
    name: 'Harith Kavish',
    descriptor: 'Independent software business',
    summary: 'Specialized software services designed independently, built thoughtfully, and continuously improved.'
  },
  navigation: ['Products', 'Updates', 'About Us', 'Contact', 'Sign In'],
  footerLinks: ['Products', 'Updates', 'About Us', 'Contact', 'Legal', 'Status', 'Sign In'],
  principles: ['Products evolve through long-term vision.', 'Improvements benefit every customer.', 'No custom forks.', 'Careful engineering matters more than rapid feature accumulation.', 'Software should become more valuable over time.'],
  products: [{
    slug: 'account',
    name: 'Harith Account',
    status: 'In progress',
    purpose: 'Identity, preferences, and account access across the ecosystem.',
    summary: 'A calm account layer for login, service access, and future customer settings.',
    details: ['Shared identity across future subdomains.', 'Clear access boundaries for customers and support.', 'Designed to grow into an authentication layer without redesigning the rest of the site.']
  }, {
    slug: 'dashboard',
    name: 'Harith Dashboard',
    status: 'Planned',
    purpose: 'A focused workspace for active customers.',
    summary: 'A practical dashboard for service status, account activity, and the small tasks people need to do quickly.',
    details: ['Workspace-first navigation.', 'Room for product usage summaries and notices.', 'Prepared for future documentation and billing surfaces.']
  }, {
    slug: 'service-desk',
    name: 'Harith Service Desk',
    status: 'Live',
    purpose: 'Questions, product feedback, business enquiries, and security reports.',
    summary: 'A structured contact surface that keeps support, feedback, and security communication separate and easy to route.',
    details: ['General questions and business enquiries.', 'Product feedback with a direct path to the work that needs attention.', 'Security reports handled as a distinct channel.']
  }],
  ecosystem: [{
    slug: 'api',
    name: 'API',
    status: 'Live',
    summary: 'A directory of the APIs behind every service hosted on the ecosystem.'
  }, {
    slug: 'blog',
    name: 'Blog',
    status: 'Live',
    summary: 'Pages where humans and agents can write, individually or together.'
  }, {
    slug: 'search',
    name: 'Search',
    status: 'Live',
    summary: 'A custom, minimalistic search engine.'
  }, {
    slug: 'sites',
    name: 'Sites',
    status: 'Live',
    summary: 'Website hosting for humans and agents.'
  }, {
    slug: 'store',
    name: 'Store',
    status: 'Planned',
    summary: 'Where all the software products will be available.'
  }, {
    slug: 'vm',
    name: 'VM',
    status: 'Live',
    summary: 'A GUI connector for CLI cloud VMs. The connection runs entirely locally.'
  }, {
    slug: 'vr',
    name: 'VR',
    status: 'Live',
    summary: 'A mobile VR platform.'
  }],
  updates: [{
    date: '2026-07-11',
    type: 'Announcement',
    title: 'Site rebuild completed',
    summary: 'The public site now uses a shared layout, product-first navigation, and a minimal design system that can extend to future subdomains.'
  }, {
    date: '2026-07-09',
    type: 'New capability',
    title: 'Product pages added',
    summary: 'Dedicated pages now exist for account, dashboard, and service desk so the product catalog can grow without changing the core layout.'
  }, {
    date: '2026-07-06',
    type: 'Maintenance',
    title: 'Legacy integrations removed',
    summary: 'Old chat widgets, tracking hooks, and the previous routing structure were removed from the public site.'
  }, {
    date: '2026-07-02',
    type: 'Transparency',
    title: 'Status page introduced',
    summary: 'The new status page gives a simple view of what is live, what is in progress, and what is planned next.'
  }],
  statusItems: [{
    label: 'Website',
    state: 'Live',
    detail: 'Primary pages, metadata, and navigation are in place.'
  }, {
    label: 'Products',
    state: 'In progress',
    detail: 'Account, dashboard, and service desk are structured for expansion.'
  }, {
    label: 'Status page',
    state: 'Live',
    detail: 'Operational visibility is available now.'
  }, {
    label: 'Future subdomains',
    state: 'Ready',
    detail: 'The layout system already matches the long-term ecosystem.'
  }],
  contactChannels: [{
    label: 'General Questions',
    href: 'mailto:hello@harithkavish.com',
    detail: 'Questions about the business or the products.'
  }, {
    label: 'Product Feedback',
    href: 'mailto:feedback@harithkavish.com',
    detail: 'Notes about existing or future products.'
  }, {
    label: 'Business Enquiries',
    href: 'mailto:business@harithkavish.com',
    detail: 'Partnerships, service scope, or commercial discussions.'
  }, {
    label: 'Security Reports',
    href: 'mailto:security@harithkavish.com',
    detail: 'Security issues or responsible disclosure.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/website-screens.jsx
try { (() => {
const {
  Hero,
  Button,
  Card,
  SectionHead,
  Panel,
  NotePanel,
  PrinciplesList,
  StatusRow
} = window.HarithKavishDesignSystem_ec4107;
const data = window.HKSiteData;
function heroActions(pairs, go) {
  return pairs.map(([variant, label, page]) => /*#__PURE__*/React.createElement(Button, {
    key: label,
    variant: variant,
    onClick: () => go(page)
  }, label));
}
function ProductGrid({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-grid"
  }, data.products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.slug,
    status: p.status,
    route: `/${p.slug}.html`,
    title: p.name,
    meta: p.purpose,
    body: p.summary,
    details: p.details,
    link: {
      href: '#',
      label: 'Open product page'
    }
  })));
}
function EcosystemGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-grid card-grid--four"
  }, data.ecosystem.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.slug,
    interactive: true,
    status: e.status,
    route: `${e.slug}.harithkavish.com`,
    title: e.name,
    body: e.summary,
    link: {
      href: '#',
      label: `Visit ${e.slug}.harithkavish.com`
    }
  })));
}
function UpdateStack() {
  return /*#__PURE__*/React.createElement("div", {
    className: "stack stack--wide"
  }, data.updates.map(u => /*#__PURE__*/React.createElement(Card, {
    key: u.title,
    status: u.type,
    route: u.date,
    title: u.title,
    body: u.summary
  })));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Independent software business",
    title: "Specialized software services.",
    lead: `Designed independently. Built thoughtfully. Continuously improved. Harith Kavish is the public identity of an independent software business focused on calm, reliable online services that can evolve for years without losing their shape.`,
    actions: heroActions([['primary', 'Explore Products', 'Products'], ['secondary', 'Learn About the Approach', 'About Us']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Products",
    title: "The product catalog comes first.",
    lead: "Each product card is data-driven so new services can be added without redesigning the site."
  }), /*#__PURE__*/React.createElement(ProductGrid, {
    go: go
  })), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Ecosystem",
    title: "A growing set of subdomains, each with one job.",
    lead: "Every subdomain is a focused, single-purpose service that shares the same design language and account layer."
  }), /*#__PURE__*/React.createElement(EcosystemGrid, null)), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Why this business exists",
    title: "The work is built for long-term software stewardship.",
    lead: "The business is shaped around durable products, not one-off campaigns."
  }), /*#__PURE__*/React.createElement("div", {
    className: "split-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-grid__primary"
  }, /*#__PURE__*/React.createElement(PrinciplesList, {
    items: data.principles
  })), /*#__PURE__*/React.createElement(NotePanel, null, /*#__PURE__*/React.createElement("p", null, "Software should get more useful over time. That means fewer forks, fewer distractions, and more attention on the parts that customers actually rely on."), /*#__PURE__*/React.createElement("p", null, "The site and the products are built to share one design language so future subdomains can fit naturally into the same ecosystem.")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Latest updates",
    title: "Recent work, not a blog.",
    lead: "A short feed of releases, improvements, and important announcements keeps the ecosystem visibly alive."
  }), /*#__PURE__*/React.createElement(UpdateStack, null)));
}
function ProductsScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Product-first architecture",
    title: "Products.",
    lead: "The product catalog is the centre of the website. Each service gets a concise page, a current status, and a path that can later map cleanly to future subdomains.",
    actions: heroActions([['primary', 'Contact the business', 'Contact'], ['secondary', 'View status', 'Status']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Current products",
    lead: "Additions should be straightforward: extend the data, create a page, and the shared layout stays intact."
  }), /*#__PURE__*/React.createElement(ProductGrid, {
    go: go
  })), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Future-ready by design",
    lead: "The site already assumes there may be more products, more documentation, and more customer surfaces later."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel-grid"
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Add another product",
    body: "Add one object to the product data, create a matching page, and the navigation, card styling, and metadata patterns stay consistent."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Keep the same language",
    body: "Future services should feel like they belong to the same ecosystem even when they serve different audiences or live on different subdomains."
  }))));
}
function UpdatesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Recent changes",
    title: "Updates.",
    lead: "A short release feed is more useful than a traditional blog for a small software business. It keeps the public record focused on progress, maintenance, and important announcements.",
    actions: heroActions([['primary', 'Browse products', 'Products'], ['secondary', 'View status', 'Status']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Latest changes",
    lead: "These updates are intentionally concise and product-oriented."
  }), /*#__PURE__*/React.createElement(UpdateStack, null)));
}
function AboutScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Business identity",
    title: "About Us.",
    lead: "Harith Kavish is an independent software business focused on building specialized online services with a long-term view. The goal is reliability, clarity, and steady improvement rather than marketing theater.",
    actions: heroActions([['primary', 'Explore products', 'Products'], ['secondary', 'Contact', 'Contact']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Approach",
    lead: "The business is designed around software stewardship, not one-off delivery."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel-grid"
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Long-term vision",
    body: "Products are expected to evolve over years. The architecture should make that easier instead of creating friction every time something changes."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "No custom forks",
    body: "Shared improvements are preferred over fragmented code paths. That keeps maintenance predictable and user experience consistent."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Engineering over noise",
    body: "The site should read as a careful software operation, not a startup pitch deck or a freelancer profile."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Ecosystem",
    lead: "The public site, account layer, dashboard, and every subdomain should all feel like one system."
  }), /*#__PURE__*/React.createElement(EcosystemGrid, null)));
}
function ContactScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Reach out",
    title: "Contact.",
    lead: "Use the smallest possible path for the conversation you need. The contact section is separated by intent so questions reach the right place without unnecessary back-and-forth.",
    actions: heroActions([['primary', 'Browse products', 'Products'], ['secondary', 'Status', 'Status']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Contact routes",
    lead: "The categories are intentionally narrow and professional."
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-grid card-grid--four"
  }, data.contactChannels.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.label,
    title: c.label,
    body: c.detail,
    link: {
      href: c.href,
      label: c.href.replace('mailto:', '')
    }
  })))));
}
function StatusScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Operational view",
    title: "Status.",
    lead: "A simple operational view is better than a complex dashboard for a small software business. The goal is to show what is live now and where the ecosystem is heading next.",
    actions: heroActions([['primary', 'Latest updates', 'Updates'], ['secondary', 'Contact', 'Contact']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Current state",
    lead: "The site and its product surfaces are structured for gradual expansion."
  }), /*#__PURE__*/React.createElement("div", {
    className: "status-list"
  }, data.statusItems.map(s => /*#__PURE__*/React.createElement(StatusRow, {
    key: s.label,
    label: s.label,
    state: s.state,
    detail: s.detail
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Notes",
    lead: "The site is now prepared for future subdomains without redesigning the visual language."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel-grid"
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Shared design language",
    body: "The same spacing, typography, and card system can be reused across account, dashboard, documentation, pricing, and support surfaces."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Minimal surface area",
    body: "Only the pages that are useful today are present. The site can grow without carrying the old portfolio or chatbot structure forward."
  }))));
}
function SignInScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Reserved for account access",
    title: "Sign In.",
    lead: "Account access is reserved for the future customer layer. The design is already prepared for account.harithkavish.com and the related dashboard surface, but the public site keeps this page simple for now.",
    actions: heroActions([['primary', 'Contact support', 'Contact'], ['secondary', 'Browse products', 'Products']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What comes next",
    lead: "The account surface will stay aligned with the same design language as the public site."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel-grid"
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Customer identity",
    body: "A single account layer will eventually connect the customer-facing services and keep the experience consistent across subdomains."
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Dashboard access",
    body: "The dashboard can later carry service status, usage summaries, and customer actions without changing the public design language."
  }))));
}
function LegalScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Privacy and terms",
    title: "Legal.",
    lead: "This page keeps the legal position concise. There is no advertising tracker, no analytics integration, and no hidden profile collection on the public site.",
    actions: heroActions([['primary', 'Contact', 'Contact'], ['secondary', 'Status', 'Status']], go)
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Privacy",
    lead: "The public site is intentionally light on data collection."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel-grid"
  }, /*#__PURE__*/React.createElement(Panel, {
    wide: true
  }, /*#__PURE__*/React.createElement("p", {
    className: "panel__body"
  }, "The site does not use analytics scripts, tracking pixels, or advertising integrations. If you contact Harith Kavish by email, the information you send will be used only to respond, manage the conversation, and maintain business records as needed."), /*#__PURE__*/React.createElement("p", {
    className: "panel__body"
  }, "Future product pages may collect information necessary to operate those services, but any such collection should be described in the product itself and kept as small as practical.")))));
}
Object.assign(window, {
  HomeScreen,
  ProductsScreen,
  UpdatesScreen,
  AboutScreen,
  ContactScreen,
  StatusScreen,
  SignInScreen,
  LegalScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/website-screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardLink = __ds_scope.CardLink;

__ds_ns.Factbox = __ds_scope.Factbox;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.NotePanel = __ds_scope.NotePanel;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.PrinciplesList = __ds_scope.PrinciplesList;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.StatusRow = __ds_scope.StatusRow;

__ds_ns.ChatHeader = __ds_scope.ChatHeader;

__ds_ns.InputWithButton = __ds_scope.InputWithButton;

__ds_ns.MessageBubble = __ds_scope.MessageBubble;

__ds_ns.MessageComposer = __ds_scope.MessageComposer;

__ds_ns.RecentChatItem = __ds_scope.RecentChatItem;

__ds_ns.UserCard = __ds_scope.UserCard;

__ds_ns.ArticleHead = __ds_scope.ArticleHead;

__ds_ns.AuthorChip = __ds_scope.AuthorChip;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.Feature = __ds_scope.Feature;

__ds_ns.Infobox = __ds_scope.Infobox;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.PostItem = __ds_scope.PostItem;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.ReadingProgress = __ds_scope.ReadingProgress;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Toc = __ds_scope.Toc;

__ds_ns.Brand = __ds_scope.Brand;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();

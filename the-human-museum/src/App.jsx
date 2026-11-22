import React from 'react';
import { useEffect, useMemo, useState } from 'react';

const starterExhibits = [
  { id: '001', title: 'The Last Time', category: 'Memories', short: 'We rarely recognize the last time something happens while it is happening.', story: 'The last time you walked a familiar route, heard a certain laugh, or sat in a room that would soon become someone else’s—it probably felt ordinary. Some endings arrive disguised as ordinary Tuesdays. Maybe that is why memory keeps trying to turn moments into landmarks.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '002', title: 'Familiar Strangers', category: 'Connection', short: 'People who once knew everything about us can eventually become strangers.', story: 'There are people who know the version of you that no longer exists. They remember your old jokes, your old fears, the way you used to think. And one day, you pass them in your mind like a street you no longer live on. Familiar, but not yours anymore.', by: 'The Museum', date: 'Permanent exhibit' },
    { id: '009', title: 'Familiar Place', category: 'Connection', short: 'A place that once felt like home, but now feels like somewhere I no longer belong.', story: 'You return to a place that once held a version of you. Everything seems familiar—the streets, the corners, the little details—but something has changed. Perhaps the place is still the same. Perhaps you are not.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '010', title: 'Familiar Smell', category: 'Connection', short: 'A scent that brings back memories I wasn’t ready to revisit.', story: 'Some memories do not wait to be invited. A scent passes by, and suddenly you are somewhere else—remembering a moment, a person, or a feeling you thought had quietly disappeared.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '011', title: 'Familiar Voice', category: 'Connection', short: 'A voice that still feels comforting, even when the person feels distant.', story: 'You hear a voice and, for a brief moment, distance feels smaller. It carries something familiar—comfort, warmth, or the memory of being understood—even if the person behind it no longer feels close.', by: 'The Museum', date: 'Permanent exhibit' },
    { id: '012', title: 'Nothing to Keep', category: 'Memories', short: 'When someone looks back and finds nothing they wish to hold onto.', story: 'Some people have a collection of moments they return to whenever life gets difficult. Others look back and find nothing they wish to preserve. Perhaps the memories are still waiting to become meaningful, or perhaps some people simply haven’t found a moment they want to keep yet.', by: 'A Visitor', date: 'Visitor reflection' },
  { id: '013', title: 'Reasons to Believe', category: 'Small things', short: 'The qualities that remind us humanity is still worth believing in.', story: 'Love, kindness, a helping nature, and empathy. Perhaps humanity isn’t proven through grand gestures alone. Sometimes it is found in people who care, help without being asked, understand without judging, and make the world feel a little less cold.', by: 'A Visitor', date: 'Visitor reflection' },

  { id: '014', title: 'Love, Still', category: 'Longing', short: 'A longing for love, whether to find it, receive it, or experience it.', story: 'Love is one of those things people can long for without knowing exactly what it will look like when it arrives. It may be the desire to be understood, chosen, cared for, or simply to share life with someone. Sometimes the longing itself is all we have to hold.', by: 'A Visitor', date: 'Visitor reflection' },
    { id: '015', title: 'Growing Alongside', category: 'Memories', short: 'The memory of bringing home a tiny puppy and watching him become a part of your life.', story: 'He was only a tiny puppy when Charlie came home. Two weeks old, on September 22nd, Charlie entered his life. Now, at six years old, he has grown from a little puppy into something much bigger than a pet—a part of his everyday life, his memories, and the years he has watched unfold. Some memories are treasured not because of a single moment, but because of everything that grew from it.', by: 'A Visitor', date: 'Visitor reflection' },

  { id: '016', title: 'The Ones Who Stay', category: 'Connection', short: 'Everyone celebrates the happy moments. But the ones who stay through the difficult ones are rare.', story: 'Many people show up when life is joyful and easy. But when things become difficult, some disappear. The ones who stay, who believe in you when others walk away, are rare. For him, his mother was one of those people. She stayed through the hardest moments and continued believing in him. Perhaps that is what real love looks like—and perhaps it is the kind of love he hopes to offer others, too.', by: 'A Visitor', date: 'Visitor reflection' },

  { id: '017', title: 'Someone Who Stays', category: 'Longing', short: 'A longing for someone who doesn’t leave when life becomes difficult.', story: 'Some people carry the weight of many goodbyes without ever letting others see how much each one hurt. They learn to smile again, even when the pain has not entirely left. Beneath that smile may be nights filled with thoughts they never share. Perhaps what they long for most is not something extraordinary—just someone who stays, someone who makes them feel that they are not too much, not broken, and not destined to be left behind.', by: 'A Visitor', date: 'Visitor reflection' },
    { id: '018', title: 'The Days We Were', category: 'Memories', short: 'Childhood days spent happily with friends, and the future she hopes to build.', story: 'She wants to treasure the days of her childhood—the carefree moments spent happily with friends, the laughter, and the memories that shaped her. But her treasured memories are not only behind her. She also holds a dream for the future: a family of her own, and a life filled with moments she will one day look back on with the same warmth.', by: 'A Visitor', date: 'Visitor reflection' },

  { id: '019', title: 'Kindness Without Asking', category: 'Small things', short: 'People helping others, offering kindness without expecting anything in return.', story: 'A helping hand offered to an elderly person in distress. Someone carrying things for a pregnant woman. Helping a person who struggles with stairs. Offering assistance to a stranger—or someone you know—without expecting anything in return. And kindness shown to animals. Perhaps humanity reveals itself most clearly in these quiet moments, when someone notices another being struggling and simply chooses to help.', by: 'A Visitor', date: 'Visitor reflection' },
  { id: '020', title: 'A Life in Balance', category: 'Longing', short: 'The quiet longing for balance and fulfillment in life.', story: 'Not everyone longs for something they can name or hold. Sometimes the longing is simply for balance—for a life where different parts of yourself can coexist without constantly pulling you apart. And for fulfillment, the feeling that your days mean something, that you are living rather than merely getting through them.', by: 'A Visitor', date: 'Visitor reflection' },
  { id: '021', title: 'Still Human', category: 'Words', short: '“Crying isn’t weakness. It means you are human. There’s still humanity left in you, and that’s something to be proud of.”', story: 'Somewhere along the way, people learn to hide their tears, to apologize for feeling too much, and to mistake emotional silence for strength. But someone once said that crying is not weakness. It is proof that we are still human—that we can feel, care, hurt, and remain soft in a world that sometimes asks us to become hard. And perhaps that is something worth being proud of.', by: 'A Visitor', date: 'Visitor reflection' },
    { id: '022', title: 'A Safe Place', category: 'Words', short: 'Being someone others trust because they feel comforted, accepted, and never judged.', story: 'Someone once told her that she was the only person they could trust. Not because she had all the answers, but because she had a comforting nature and never judged people for what they shared with her. Perhaps one of the rarest forms of kindness is making someone feel safe enough to be completely honest. To be trusted with another person’s truth is a quiet kind of honor.', by: 'A Visitor', date: 'Visitor reflection' },
    { id: '023', title: 'The Other Versions of Me', category: 'What-ifs', short: 'What if I had chosen a completely different path?', story: 'Sometimes I wonder about the versions of me that exist somewhere in the possibilities I never chose. The one who took a different road, moved somewhere else, met different people, and became someone I may never recognize. I wonder what her life looks like. Whether she is happier, whether she regrets anything, and whether she ever thinks about the version of herself who chose this path instead. There are so many lives we could have lived, hidden behind the choices we made.', by: 'The Museum', date: 'Personal reflection' },

  { id: '024', title: 'The Right People, Wrong Time', category: 'What-ifs', short: 'What if some people were meant to meet, but simply met at the wrong time?', story: 'What if two people could have been something meaningful, but life introduced them at a time when neither was ready? What if circumstances, priorities, distance, or the versions of themselves they were then stood in the way? Perhaps they would have understood each other differently in another chapter of life. Some possibilities never become stories—not because they lacked meaning, but because timing had its own plans.', by: 'The Museum', date: 'Personal reflection' },

  { id: '025', title: 'Without Explaining', category: 'What-ifs', short: 'What if someone understood me without me having to explain?', story: 'What if someone noticed the things I rarely say aloud? What if they understood when my silence meant something, when I was overwhelmed, or when I simply needed space? What if I did not have to find the right words, explain every feeling, or make myself understood? What if, for once, someone saw beyond what I showed—and understood me anyway?', by: 'The Museum', date: 'Personal reflection' },
    { id: '026', title: 'What If People Never Left?', category: 'What-ifs', short: 'What if the people and little souls we love could stay with us a little longer?', story: 'What if the people we love never left? What if my puppy had recovered from his sickness and grown old beside me? What if my grandmother were still here, still filling my life with the love that made her so important to me? I have lost some of the most precious souls in my life, and sometimes I wonder what everything would look like if they were still here. There are so many things I wish I could tell them, so many moments I wish they could be part of. I know life doesn’t let us keep everyone forever. But if I could have one what-if, it would be this: what if the ones I loved could have stayed?', by: 'The Museum', date: 'Personal reflection' }, 
  { id: '027', title: 'Nothing Happened', category: 'Words', short: 'A character who taught someone that strength means continuing, even when everything hurts.', story: 'Inspired by Roronoa Zoro from One Piece, the words “Nothing happened” taught him that strength isn’t about never getting hurt, but about enduring pain and finding the courage to keep going. Whenever life becomes overwhelming or he silently fights his own battles, he reminds himself to stay strong, keep moving forward, and never give up.', by: 'A Visitor', date: 'Visitor reflection' },
    { id: '003', title: 'The Almost', category: 'What-ifs', short: 'The emotional weight of things that almost happened.', story: 'An almost can be surprisingly heavy. It has no real history, no photographs, no anniversary—but it has imagination. We sometimes grieve the life that never happened, even while living the one that did.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '004', title: 'Unnoticed Kindness', category: 'Small things', short: 'Tiny acts whose importance becomes visible much later.', story: 'Someone waited for you. Someone remembered. Someone made room without announcing it. Kindness is often quiet enough to be mistaken for background noise, until years later when you realize it was holding you together.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '005', title: 'The Observer', category: 'Identity', short: 'Being present in a room while quietly watching the room.', story: 'Some people participate by noticing. They collect expressions, pauses, changes in tone, the things people almost say. They may seem quiet, but inside they are building a detailed map of the moment.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '006', title: 'A Place That Never Was', category: 'Longing', short: 'Missing a place you have never actually visited.', story: 'A photograph, a song, a passing scene can make a place feel like a memory you somehow misplaced. Perhaps longing does not always need a past. Sometimes imagination builds a home and lets us miss it.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '007', title: 'The Unsent Sentence', category: 'Words', short: 'A sentence that stays in your drafts, your throat, or your mind.', story: 'Some words are not withheld because they are unimportant. They are withheld because they matter too much, because timing is strange, because silence feels safer—or because the person who needed to hear them is no longer there.', by: 'The Museum', date: 'Permanent exhibit' },
  { id: '008', title: 'Borrowed Happiness', category: 'Small things', short: 'Feeling happy simply because someone else is happy.', story: 'A friend laughing without restraint. A stranger reunited with someone. A child discovering something new. For a moment, their joy becomes yours without asking permission. Happiness can travel between people without being owned.', by: 'The Museum', date: 'Permanent exhibit' },
];
const categories = ['All exhibits', 'Memories', 'Connection', 'What-ifs', 'Small things', 'Identity', 'Longing', 'Words'];
const categoryImages = {
  Memories: '/images/memories.jpg',
  Connection: '/images/connection.jpg',
  'What-ifs': '/images/whatifs.jpg',
  'Small things': '/images/small-things.jpg',
  Identity: '/images/identity.jpg',
  Longing: '/images/longing.jpg',
  Words: '/images/words.jpg',
};
function App() {
  const [exhibits, setExhibits] = useState(() => {
    try { const saved = localStorage.getItem('human-museum-exhibits'); return saved ? JSON.parse(saved) : starterExhibits; }
    catch { return starterExhibits; }
  });
  const [category, setCategory] = useState('All exhibits');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: '', category: 'Memories', short: '', story: '', by: '' });
  const [toast, setToast] = useState('');

  useEffect(() => { localStorage.setItem('human-museum-exhibits', JSON.stringify(exhibits)); }, [exhibits]);

const filtered = useMemo(() => {
  const hiddenIds = ['009', '010', '011'];
  const term = search.toLowerCase().trim();

  const matchingExhibits = exhibits.filter(item => {
    const matchesSearch =
      !term ||
      `${item.title} ${item.category} ${item.short} ${item.story}`
        .toLowerCase()
        .includes(term);

    return matchesSearch;
  });

  // When a specific category is selected, show all its cards
  if (category !== 'All exhibits') {
    return matchingExhibits.filter(item => item.category === category);
  }

  // Homepage: only one exhibit per category
  const homepageExhibits = matchingExhibits.filter(
    item => !hiddenIds.includes(item.id)
  );

  const seenCategories = new Set();

  return homepageExhibits.filter(item => {
    if (seenCategories.has(item.category)) {
      return false;
    }

    seenCategories.add(item.category);
    return true;
  });
}, [exhibits, category, search]);

  function addExhibit(e) {
    e.preventDefault();
    const newItem = { ...form, id: `U${String(Date.now()).slice(-4)}`, by: form.by.trim() || 'A visitor', date: 'Visitor contribution' };
    setExhibits(prev => [newItem, ...prev]);
    setShowAdd(false);
    setForm({ title: '', category: 'Memories', short: '', story: '', by: '' });
    setToast('Your exhibit has been added to the museum.');
    setTimeout(() => setToast(''), 3000);
  }
  const openExhibit = (item) => setSelected(item);

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#top"><span className="brand-mark">HM</span><span>THE HUMAN MUSEUM</span></a>
      <nav><a href="#exhibits">Exhibits</a><a href="#about">About</a></nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-kicker"><span className="tiny-dot"/> A DIGITAL ARCHIVE OF HUMAN EXPERIENCE</div>
        <h1>Some things are<br/><em>impossible to display.</em></h1>
        <p className="hero-copy">But we try anyway. A museum of feelings, memories, tiny moments and strange things that make us human.</p>
        <div className="hero-actions"><a className="solid-btn" href="#exhibits">Explore the collection <span>↘</span></a></div>
        <div className="hero-bottom-note"><span>EST. IN A MOMENT OF CURIOSITY</span><span>COLLECTION No. 001—∞</span></div>
      </section>

      <section className="collection" id="exhibits">
        <div className="section-heading"><div><span className="eyebrow">THE COLLECTION</span><h2>Exhibits of being.</h2></div><span className="count">{String(exhibits.length).padStart(2,'0')} OBJECTS</span></div>
        <div className="controls"><div className="search-wrap"><span>⌕</span><input aria-label="Search exhibits" placeholder="Search the museum..." value={search} onChange={e => setSearch(e.target.value)}/><kbd>SEARCH</kbd></div><div className="filters">{categories.map(c => <button key={c} className={category === c ? 'filter active' : 'filter'} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
        {filtered.length ? <div className="grid">{filtered.map((item, index) => <article className="exhibit-card" key={item.id} onClick={() => openExhibit(item)} tabIndex="0" onKeyDown={e => e.key === 'Enter' && openExhibit(item)}>
          <div className={`card-art art-${index % 4}`}>
  <img
    src={categoryImages[item.category]}
    alt={item.category}
  />

  <span className="art-number">EXHIBIT {item.id}</span>

  <span className="art-caption">
    A STUDY IN<br />
    {item.category.toUpperCase()}
  </span>
</div>
          <div className="card-info"><div className="card-meta"><span>{item.category.toUpperCase()}</span><span>↗</span></div><h3>{item.title}</h3><p>{item.short}</p><div className="card-footer"><span>READ THE EXHIBIT</span><span>→</span></div></div>
        </article>)}</div> : <div className="empty"><span>◌</span><h3>No exhibits found.</h3><p>Perhaps the thing you're looking for hasn't been added yet.</p><button className="outline-btn" onClick={() => {setSearch('');setCategory('All exhibits')}}>Reset search</button></div>}
        <div className="collection-end"><span>END OF CURRENT COLLECTION</span><span>MORE STORIES ARE WAITING TO BE DISCOVERED</span></div>
      </section>
      <section className="contribute-banner"><div><span className="eyebrow">THE MUSEUM IS ALWAYS GROWING</span><h2>Have something<br/><em>worth preserving?</em></h2><p>Every human experience is an exhibit waiting to happen. Add yours to the collection.</p></div><button className="solid-btn" onClick={() => setShowAdd(true)}>Add an exhibit <span>＋</span></button></section>
<section className="about" id="about">
  <span className="eyebrow">A NOTE FROM THE CURATOR</span>

  <p className="about-quote">
    “The ordinary is only ordinary until someone pays attention.”
  </p>

  <div className="about-description">
    <p>
      The Human Museum is a quiet collection of the things that make us
      human—memories we carry, words we never said, people who changed us,
      moments we almost overlooked, and feelings we couldn't quite explain.
      Each exhibit is a small fragment of someone's life, preserved not
      because it was extraordinary, but because it meant something.
    </p>

    <p>
      This museum has no grand artifacts or glass display cases. Its exhibits
      are made of stories, emotions, and experiences that might feel familiar
      to you, even if they belong to someone else. It is a place to pause,
      to remember, to feel understood, and to discover that somewhere in
      another person's story, you might find a little piece of your own.
    </p>
  </div>

  <span className="about-small">
    A small project about noticing what makes us human.
  </span>
</section>    </main>
    <footer><span>THE HUMAN MUSEUM © 2026</span><span>MADE FOR THE THINGS WE FEEL</span><a href="#top">BACK TO TOP ↑</a></footer>

    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="detail-modal" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)}>×</button><span className="eyebrow">EXHIBIT {selected.id} / {selected.category.toUpperCase()}</span><div className="detail-art">◌</div><h2>{selected.title}</h2><p className="detail-lead">{selected.short}</p><div className="detail-story">{selected.story}</div><div className="detail-bottom"><span>CURATED BY {selected.by || 'THE MUSEUM'}</span><span>{selected.date}</span></div></div></div>}
    {showAdd && <div className="modal-backdrop" onClick={() => setShowAdd(false)}><div className="form-modal" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setShowAdd(false)}>×</button><span className="eyebrow">CONTRIBUTE TO THE COLLECTION</span><h2>Add an exhibit.</h2><p className="form-intro">Preserve a thought, moment or feeling. It doesn't have to be extraordinary.</p><form onSubmit={addExhibit}><label>Exhibit title<input required maxLength="55" placeholder="Give your experience a name" value={form.title} onChange={e => setForm({...form,title:e.target.value})}/></label><label>Category<select value={form.category} onChange={e => setForm({...form,category:e.target.value})}>{categories.slice(1).map(c => <option key={c}>{c}</option>)}</select></label><label>Short description<textarea required rows="2" maxLength="150" placeholder="A one-line introduction..." value={form.short} onChange={e => setForm({...form,short:e.target.value})}/></label><label>The story<textarea required rows="4" placeholder="Tell us a little more..." value={form.story} onChange={e => setForm({...form,story:e.target.value})}/></label><label>Your name (optional)<input maxLength="35" placeholder="Anonymous is okay" value={form.by} onChange={e => setForm({...form,by:e.target.value})}/></label><button className="solid-btn submit-btn" type="submit">Add to the museum <span>↗</span></button></form></div></div>}
    {toast && <div className="toast">✳ {toast}</div>}
  </div>;
}

export default App;

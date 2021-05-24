const quotes = [
  {
    quote: `Websites should look good from the inside and out.`,
    writer: `~Paul Cookson`,
  },
  {
    quote: `If at first you don’t succeed; call it version 1.0`,
    writer: ` ~ Unknown`,
  },
  {
    quote: `Websites promote you 24/7: No employee will do that.`,
    writer: `~Paul Cookson`,
  },
  {
    quote: `A successful website does three things:
    It attracts the right kinds of visitors.
    Guides them to the main services or product you offer.
    Collects contact details for future ongoing relations.`,
    writer: `~Mohamed Saad`,
  },
  {
    quote: `I’m very font of you because you are just my type.`,
    writer: `~ Anonymous`,
  },
  {
    quote: `Repetition is the root of all software evil.`,
    writer: `~Martin Fowler`,
  },
  {
    quote: `If I had more time, I would have written a shorter letter.`,
    writer: `~Blaise Pascal (*)`,
  },
  {
    quote: `One of my most productive days was throwing away 1000 lines of code.`,
    writer: `~ Ken Thompson`,
  },
  {
    quote: `Program testing can be used to show the presence of bugs, but never to show their absence!`,
    writer: `~Edsger W. Dijkstra`,
  },
  {
    quote: `Code is like humor. When you have to explain it, it’s bad`,
    writer: `~ Cory House`,
  },
  {
    quote: `Programmers must avoid leaving false clues that obscure the meaning of code.`,
    writer: ` ~ Robert C. Martin`,
  },
  {
    quote: `Clean code always looks like it was written by someone who cares.`,
    writer: `~Robert C. Martin`,
  },
  {
    quote: `If you’re good at the debugger it means you spent a lot of time debugging. I don’t want you to be good at the debugger.`,
    writer: `~ Robert C. Martin`,
  },
  {
    quote: `Practice, Practice, Practice! Musicians don’t only play when they are on stage in front of an audience.`,
    writer: `~Michael Toppa`,
  },
  {
    quote: `You want it in one line? Does it have to fit in 80 columns?`,
    writer: `~Larry Wall`,
  },
  {
    quote: `When you see commented-out code, delete it!`,
    writer: `~Robert C. Martin`,
  },
  {
    quote: `To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success`,
    writer: `~Dr. Christopher Dayagdag`,
  },
  {
    quote: `If Internet Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out.`,
    writer: `~Anonymous`,
  },
  {
    quote: `A website without SEO is like a car with no gas`,
    writer: `~Paul Cookson`,
  },
  {
    quote: `A website without visitors is like a ship lost in the horizon.`,
    writer: ` ~Dr. Christopher Dayagdag`,
  },
  {
    quote: `If you think math is hard, try web design.`,
    writer: `~ Trish Parr`,
  },
  {
    quote: `I don’t care if it works on your machine! We are not shipping your machine!`,
    writer: `~ Vidiu Platon`,
  },
  {
    quote: `Great web design without functionality is like a sports car with no engine.`,
    writer: `Paul Cookson`,
  },
  {
    quote: `Things aren’t always #000000 and #FFFFFF`,
    writer: `~ HTML Proverb`,
  },
  {
    quote: `Digital design is like painting, except the paint never dries.`,
    writer: `~Neville Brody`,
  },
  {
    quote: `It’s not a bug. It’s an undocumented feature!`,
    writer: `~Anonymous`,
  },
  {
    quote: `Make it work, make it right, make it fast.`,
    writer: `~Kent Beck`,
  },
  {
    quote: `Fix the cause, not the symptom.`,
    writer: `~Steve Maguire`,
  },
  {
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    writer: `~ Kent Beck`,
  },
  {
    quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    writer: `~Martin Fowler`,
  },
  {
    quote: `Talk is cheap. Show me the code.`,
    writer: `~ Linus Torvalds`,
  },
  {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    writer: `~ Harold Abelson`,
  },
  {
    quote: `Truth can only be found in one place: the code.`,
    writer: `~ Robert C`,
  },
  {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    writer: `~ Muhammad Waseem`,
  },
  {
    quote: `How you look at it is pretty much how you'll see it`,
    writer: `~ Steve Jobs`,
  },
  {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    writer: `~ Alan Kay`,
  },
  {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    writer: `~ C.A.R. Hoare`,
  },
  {
    quote: `I am committed to push my branch to the master.`,
    writer: `~ Halgurd Hussein`,
  },
  {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    writer: `~ Ming Song`,
  },
];

const quoteBtn = document.getElementById("quote-btn");

const quote = document.querySelector(".quote");
const writer = document.querySelector(".writer");

quoteBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
});




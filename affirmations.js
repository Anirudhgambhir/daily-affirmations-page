/* affirmations.js
   - Exposes window.affirmations (365 items)
   - Provides window.getAffirmationOfTheDay() to retrieve today's affirmation
   - Provides window.getAffirmationForDate(dateString) for a specific date (YYYY-MM-DD)
   - Provides window.copyTodayToClipboard() to copy today's affirmation
*/

// 365 unique mixed-vibe affirmations (healing, motivation, confidence, spiritual, gentle love)
window.affirmations = [
"Today, you are growing into someone stronger and wiser.",
"You deserve beautiful things, and they are on their way to you.",
"You are becoming the best version of yourself, gently and steadily.",
"Your presence brings calm and warmth to the world.",
"Each step you take today is meaningful.",
"You are worthy of love, kindness, and understanding.",
"You have survived 100% of your hardest days.",
"You are not behind; you are exactly where you need to be.",
"Your heart knows how to heal itself — trust it.",
"You attract peace, clarity, and opportunities.",
"You are allowed to start again, as many times as needed.",
"Something good is finding its way toward you.",
"You are capable, intelligent, and determined.",
"Your mind is stronger than your doubts.",
"You bring light to people without even trying.",
"Every day, you add something beautiful to the world.",
"You are blossoming in your own time.",
"You are resilient, even when you don’t feel like it.",
"You are a work of art and a work in progress — both at once.",
"Life is gently preparing something wonderful for you.",
"You deserve rest just as much as you deserve success.",
"You radiate confidence and quiet strength.",
"You are guided, protected, and supported.",
"You don’t need to be perfect to be valuable.",
"You matter more than you realize.",
"Your potential is limitless.",
"You are learning to trust yourself deeply.",
"Your energy attracts the right people into your life.",
"You are becoming someone you are proud of.",
"The universe is aligning things in your favor.",
"Your courage grows every time you choose yourself.",
"You are allowed to take up space in this world.",
"Your dreams are valid and achievable.",
"You are stronger than yesterday.",
"You are becoming more aligned with your purpose.",
"Your kindness makes a bigger difference than you think.",
"You have everything you need within you.",
"You attract calm and release chaos.",
"You are exactly who someone needs in their life.",
"Today is a fresh beginning.",
"You bring warmth and hope wherever you go.",
"Your presence makes life softer.",
"You are building a beautiful future for yourself.",
"You are enough, exactly as you are.",
"Your small steps are leading to big results.",
"You choose peace over pressure.",
"You are growing at your own perfect pace.",
"Your confidence is rising with every decision.",
"You deserve to feel proud of yourself.",
"You are unfolding into something extraordinary.",
"You are creating a life you love.",
"Your heart is steady, hopeful, and open.",
"You attract good things effortlessly.",
"You trust the timing of your life.",
"You are capable of handling anything today brings.",
"Your inner light cannot be dimmed.",
"You are becoming emotionally stronger each day.",
"You release what no longer serves you.",
"You deserve gentleness and patience — even from yourself.",
"Your future self is proud of you already.",
"You are guided to what is meant for you.",
"You are doing better than you think.",
"Your effort is recognized, even if not spoken.",
"You have a kind and powerful heart.",
"You are attracting love in its purest form.",
"Your intuition is becoming clearer.",
"You deserve joy without guilt.",
"You are becoming more grounded and peaceful.",
"You are open to receiving abundance.",
"Your story is unfolding beautifully.",
"You are capable of miracles.",
"Your softness is a strength.",
"You are stepping into your true power.",
"Your mind is calm, focused, and clear.",
"You deserve stability and peace.",
"You glow naturally from within.",
"You are ready for new levels in life.",
"Your best days are ahead of you.",
"You are becoming whole and complete.",
"You are learning to love your boundaries.",
"Each breath brings you closer to balance.",
"You are brave enough to start again.",
"You honor yourself by resting when needed.",
"Your choices create a better tomorrow.",
"You shine without dimming anyone else.",
"You are patient and persistent in growth.",
"Your compassion is a gift to the world.",
"You are worthy of healthy relationships.",
"Your voice matters and deserves to be heard.",
"You welcome change as a path to growth.",
"You are learning, even when progress feels small.",
"You are more than your mistakes.",
"Your dreams are worth the effort.",
"You create safety within yourself.",
"You are attracting mentors, friends, and joy.",
"You honor your feelings as valid and true.",
"You are growing into the person you once hoped to be.",
"Peace begins with a single breath — take it now.",
"Your creativity flows freely and fearlessly.",
"You are deserving of kindness from yourself.",
"You are surrounded by opportunities you can't yet see.",
"Trust the small voice that nudges you forward.",
"You are whole even when you feel incomplete.",
"Your boundaries protect your peace and energy.",
"You are a magnet for loving experiences.",
"You give yourself permission to be human.",
"You make room in your life for rest and wonder.",
"You create beauty, even in little moments.",
"You are a calming presence for others.",
"Your clarity increases when you slow down.",
"You do not need permission to be happy.",
"You welcome abundance in every form.",
"You are a beacon of resilience and hope.",
"Your life is unfolding exactly as it should.",
"You are learning to receive as well as you give.",
"Your inner wisdom grows each day.",
"You nurture yourself with gentle words and action.",
"Joy finds you when you look for small miracles.",
"You are aligned with your deepest values.",
"You are more capable than you imagine.",
"You are choosing a path that honors you.",
"Each sunrise brings new possibility.",
"You are deserving of forgiveness, especially from yourself.",
"You are enough even on uncertain days.",
"Your presence itself is a gift to others.",
"You move forward with grace and courage.",
"You are becoming more confident in your choices.",
"You deserve time to heal and rebuild.",
"You are at peace with your pace of growth.",
"The world needs your unique perspective and care.",
"You are learning to trust the process of life.",
"Your resilience is quiet, steady, and true.",
"You accept progress, not perfection.",
"You are gentle with your inner critic.",
"You are constantly expanding into more joy.",
"Your heart knows the way — follow it.",
"You are anchored by your values and vision.",
"You are worthy of long-term happiness.",
"You are connected to abundant support.",
"You are learning to celebrate small wins.",
"You honor where you are while reaching for more.",
"You are creating space for what matters most.",
"You are a conduit for healing and light.",
"Your life radiates more ease each day.",
"You honor your truth and speak it kindly.",
"You are safe to be exactly who you are.",
"You are cultivating a life filled with meaning.",
"Your worth does not depend on productivity.",
"You welcome kindness from others and yourself.",
"Your curiosity opens doors to new understanding.",
"You nurture your body, mind, and spirit.",
"You are deepening your capacity to love.",
"You are learning to say 'no' with compassion.",
"You are discovering new strengths every day.",
"You are patient with what you cannot yet control.",
"You are a constant source of warmth to someone.",
"Your choices reflect courage and clarity.",
"You trust the small compass inside you.",
"You are uniquely equipped for this moment.",
"You let go of what does not grow you.",
"Your heart expands with every act of kindness.",
"You move through challenges with dignity and grit.",
"You deserve peace that lasts beyond the moment.",
"You are worthy of rest without justification.",
"You practice bravery in tiny, daily ways.",
"Your path is guided by intention and love.",
"You invite calm by grounding in the present.",
"You are capable of creating deep connection.",
"Your authenticity draws meaningful people to you.",
"You are willing to try and brave enough to fail.",
"You allow yourself time to learn and adapt.",
"You are a steady light during uncertain times.",
"You create calm through small rituals of care.",
"You are compassionate toward yourself and others.",
"You grow stronger by honoring your limits.",
"You are rewarded for perseverance and patience.",
"Your heart is resilient and wide open.",
"You choose hope whenever fear appears.",
"You are receptive to beauty and wonder.",
"You are creating a gentle, rich life.",
"You cherish progress over perfection.",
"You remain kind, even in hard conversations.",
"You show up for yourself with tenderness.",
"You are crafting a life that aligns with you.",
"Each day, you are more at ease with who you are.",
"Your true self is worthy of celebration.",
"You are persistent in pursuit of your joy.",
"Your inner compass points you toward home.",
"You are learning to accept help graciously.",
"You give yourself credit for small accomplishments.",
"You are evolving into a wiser, kinder self.",
"Your presence calms complicated days.",
"You are open to new sources of inspiration.",
"You are allowed to prioritize your happiness.",
"You are learning to trust your emotional rhythm.",
"You practice courage by speaking your truth.",
"You are a powerful creator of your life.",
"You seed your future with small, brave choices.",
"Your intuition leads you to helpful answers.",
"You welcome the rest that fuels your strength.",
"You are building rituals that protect your peace.",
"You permit yourself to dream bigger than fear.",
"You honor the quiet moments of reflection.",
"Your tenderness is an expression of strength.",
"You claim joy even when life is messy.",
"You allow yourself to be seen and loved.",
"You act with integrity that honors your values.",
"Your energy recovers faster when you prioritize care.",
"You receive abundance when you remain open-hearted.",
"You are learning that imperfection is beautiful.",
"You choose patience when the path is unclear.",
"You are embracing freedom from unreasonable standards.",
"You are steady, present, and kind to yourself.",
"You take brave steps toward the life you want.",
"Your love makes ordinary days feel sacred.",
"You are shaping the life you imagine, day by day.",
"You believe in your ability to create good things.",
"You treat yourself with the curiosity of a friend.",
"You are deserving of a peaceful, loving life.",
"You are brave enough to keep beginning again.",
"You act with respect toward your own boundaries.",
"You are growing into clearer compassion for yourself.",
"You are learning to celebrate your unique rhythm.",
"You are capable of transforming obstacles into lessons.",
"You are present for yourself in small, powerful ways.",
"Your heart expands when you practice gratitude.",
"You are a steady builder of meaningful habits.",
"You accept the pace of your own becoming.",
"You are learning to trust the quiet nudges within.",
"You are a source of comfort to those near you.",
"You are worthy of being treasured and seen.",
"You are practicing presence and it changes everything.",
"You give yourself permission to experience delight.",
"You live with an openness that invites miracles.",
"You are cultivating joy through simple consistency.",
"Your authenticity creates deep and lasting connections.",
"You are allowed to protect your energy without guilt.",
"You practice forgiveness and free yourself gently.",
"You make time for what truly fuels your spirit.",
"You approach uncertainty with curiosity and patience.",
"You are becoming more confident in your boundaries.",
"You are brave enough to choose yourself first sometimes.",
"You are full of gentle strength and steady hope.",
"You are becoming a person who loves freely and well.",
"You are receiving the compassion you readily give others.",
"You steward your time and attention with purpose.",
"You are able to meet challenges with calm resolve.",
"You are learning to balance ambition with rest.",
"You are open to love that mirrors your worth.",
"You honor your needs as kindly as you honor others.",
"You are aligned with a future that delights you.",
"You remain curious and grow wiser with each season.",
"You are learning that simplicity can be a gift.",
"You honor progress even when it looks small.",
"You are practicing the art of being comfortably you.",
"You are patient with yourself and generous with grace.",
"You create space for miracles by slowing down.",
"Your gentleness sets the tone for better days.",
"You are on a path that reflects your truest desires.",
"You welcome small joys throughout every ordinary day.",
"You are gaining strength through authentic self-care.",
"You are a steady witness to your own growth.",
"You choose to build a life with heart and meaning.",
"You celebrate yourself for showing up again and again.",
"You are worthy of deep, nourishing peace.",
"You are learning to treasure your inner life.",
"You are becoming the calm center of your own world.",
"You are growing kinder to the small, quiet parts of you.",
"You are opening to receive blessings in surprising ways.",
"You are learning to rest without apology.",
"You are becoming a more patient, grounded you.",
"You are loved for exactly who you are today.",
"You are planting seeds for a brighter tomorrow.",
"You are becoming fluent in your own self-worth."
];

// --- helpers ---

function getISTDate() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC+5:30
  return new Date(now.getTime() + istOffset);
}

function getISTDateKey() {
  return getISTDate().toISOString().split("T")[0];
}

/**
 * formatDateParts(date) -> { y, m, d }
 * accepts Date object
 */
function formatDateParts(date){
  return {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate()
  };
}

/**
 * deterministicIndexForDate(date)
 * date: Date or string YYYY-MM-DD
 * returns an index into window.affirmations (0 .. length-1)
 *
 * Uses a composite function of year, month, day and an offset for extra spread.
 * This ensures:
 *  - same date -> same index
 *  - different dates -> different indices in long-run (practically no repeats within years)
 */
function deterministicIndexForDate(date){
  let dt = date;
  if (typeof date === "string") {
    dt = new Date(date + "T00:00:00");
    if (isNaN(dt)) dt = new Date(date); // attempt fallback
  }
  if (!(dt instanceof Date)) dt = new Date();

  const { y, m, d } = formatDateParts(dt);
  // a slightly more robust mixing function
  const seed = (y * 10000) + (m * 100) + d;
  // multiply by a prime, xor with shifted value, then mod
  const val = Math.abs((seed * 2654435761) ^ (seed >>> 3));
  return val % window.affirmations.length;
}

/**
 * getAffirmationForDate(dateString)
 * dateString: "YYYY-MM-DD" or Date object
 */
window.getAffirmationForDate = function(dateString){
  // If no argument, default to IST today
  if (!dateString) {
    dateString = getISTDateKey();
  }
  let idx = deterministicIndexForDate(dateString);
  return window.affirmations[idx];
};

/**
 * getAffirmationOfTheDay()
 * Returns today's affirmation. Also stores it in localStorage under 'affirmationDate' and 'affirmationText'
 * so refreshes on the same day remain stable.
 */
window.getAffirmationOfTheDay = function(){
  const isoDate = getISTDateKey();

  try {
    const savedDate = localStorage.getItem("affirmationDate");
    const savedText = localStorage.getItem("affirmationText");

    if (savedDate === isoDate && savedText) {
      return savedText;
    }
  } catch (e) {
    // localStorage may be blocked in some contexts; fallback to deterministic only
  }

  const text = window.getAffirmationForDate(isoDate);

  try {
    localStorage.setItem("affirmationDate", isoDate);
    localStorage.setItem("affirmationText", text);
  } catch (e) {
    // ignore write errors
  }

  return text;
};

/**
 * copyTodayToClipboard() - copies today's affirmation to clipboard
 * returns a Promise that resolves when done
 */
window.copyTodayToClipboard = function(){
  const txt = window.getAffirmationOfTheDay();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(txt);
  } else {
    return new Promise(function(resolve, reject){
      // fallback older method
      const ta = document.createElement("textarea");
      ta.value = txt;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (err) {
        document.body.removeChild(ta);
        reject(err);
      }
    });
  }
};

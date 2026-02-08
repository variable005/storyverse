// Visual Novel Script & Engine v5.0 - Ultimate Edition
// Supports: Parallax, Glitch, Atmosphere, Multiple Routes, Persistent Data

const gameState = {
    metEmi: false,
    knowsTruth: false,
    hasDagger: false,
    belief: 'unknown' // 'believer' or 'skeptic'
};

// Check for True Ending availability
const endingsReached = parseInt(localStorage.getItem('sv_endings') || '0');
const isTrueEndingAvailable = endingsReached >= 1;

const storyData = [
    // === PROLOGUE ===
    {
        id: 0,
        bg: 'pictures/empty roof dark.png',
        speaker: 'Haru',
        text: "The rooftop. They said it was just a place, a forgotten patch of concrete reaching for the sky.",
        memory: "The City remembers.",
        atmosphere: true
    },
    {
        id: 1,
        bg: 'pictures/empty roof dark.png',
        speaker: 'Haru',
        text: "But to me, it was the only sanctuary in a city that choked me with its endless, performative noise.",
        atmosphere: true
    },
    {
        id: 2,
        bg: 'pictures/empty roof dark.png',
        speaker: 'Haru',
        text: "Down below, life was a performance. A cacophony of feigned emotions. Here, the silence was profound.",
        atmosphere: true
    },

    // === SCENE 1: THE MEETING ===
    {
        id: 10,
        bg: 'pictures/empty roof dark.png',
        character: 'pictures/ghost sittig .png',
        speaker: 'Haru',
        text: "That's where I saw her. A statue carved from shadow and moonlight.",
        atmosphere: true
    },
    {
        id: 11,
        bg: 'pictures/empty roof dark.png',
        character: 'pictures/ghost sittig .png',
        speaker: '',
        text: "She sat on the very edge. Reckless. Unbound. Her black skirt melted into the gloom.",
        atmosphere: true
    },
    {
        id: 12,
        bg: 'pictures/empty roof dark.png',
        character: 'pictures/ghost sittig .png',
        speaker: 'Haru',
        text: "(I didn't speak. My breath hitched. Another soul seeking the same profound isolation.)",
        atmosphere: true
    },

    // === SCENE 2: THE QUESTION (BRANCHING POINT) ===
    {
        id: 20,
        bg: 'pictures/empty roof with moon.png',
        character: 'pictures/ghost lookikin .png',
        speaker: 'Girl',
        effect: 'glitch', // Glitch on first direct interaction
        text: "Do you believe in ghosts?"
    },
    {
        id: 21,
        bg: 'pictures/empty roof with moon.png',
        character: 'pictures/ghost lookikin .png',
        choice: true,
        options: [
            { text: "Depends on the ghost.", nextId: 22, effect: () => gameState.belief = 'believer' },
            { text: "No. Dead is dead.", nextId: 100, effect: () => gameState.belief = 'skeptic' } // Jump to Skeptic Route
        ]
    },

    // === ROUTE A: BELIEVER (Original + Expanded) ===
    {
        id: 22,
        bg: 'pictures/empty roof with moon.png',
        character: 'pictures/ghost lookikin .png',
        speaker: 'Haru',
        text: "Depends on the ghost."
    },
    {
        id: 23,
        bg: 'pictures/empty roof with moon.png',
        character: 'pictures/ghost lookikin .png',
        speaker: '',
        text: "She turned. Her eyes held the weight of oceans."
    },
    {
        id: 30,
        bg: 'pictures/empty side of roof.png', // NEW ASSET USAGE
        character: 'pictures/ghost sittig .png',
        speaker: 'Haru',
        text: "We spent nights just watching the city breathe.",
        atmosphere: true
    },
    {
        id: 40,
        bg: 'pictures/empty roof dark.png',
        foreground: 'pictures/dagger.png',
        speaker: '',
        text: "Then came the night of the offering. She handed me cold iron."
    },
    {
        id: 43,
        bg: 'pictures/empty roof dark.png',
        foreground: 'pictures/dagger.png',
        speaker: 'Girl',
        text: "Love is like this. Beautiful. Until it cuts.",
        effect: 'glitch'
    },
    {
        id: 45,
        bg: 'pictures/empty roof dark.png',
        speaker: '',
        text: "She vanished. Dissolved into the fog.",
        effect: 'flash'
    },
    {
        id: 50,
        bg: 'pictures/looby.png',
        speaker: 'Haru',
        text: "I needed answers. I went to the lobby."
    },
    {
        id: 53,
        bg: 'pictures/looby.png',
        character: 'pictures/old man .png',
        effect: 'shake',
        speaker: 'Kohee Sama',
        text: "She jumped years ago. No one claimed the body. Her spirit never left."
    },
    {
        id: 70,
        bg: 'pictures/empty roof day.png',
        speaker: '',
        text: "Day 4. Noon. The dagger was gone.",
    },
    {
        id: 72,
        bg: 'pictures/empty roof day.png',
        character: 'pictures/other girl.png',
        speaker: 'Emi',
        text: "I'm Emi. You must be the one talking to the air."
    },
    {
        id: 76,
        bg: 'pictures/empty roof day.png',
        character: 'pictures/other girk2.png', // NEW ASSET USAGE (Expression change)
        speaker: 'Emi',
        text: "\"Once you touch the iron, you belong to the heights.\""
    },
    {
        id: 80,
        bg: 'pictures/empty roof day.png',
        character: 'pictures/other girk2.png',
        foreground: 'pictures/dagger 4.png',
        speaker: 'Emi',
        text: "Run. Or jump. The performance is over.",
        effect: 'shake'
    },
    {
        id: 88,
        bg: '#000',
        speaker: '',
        text: "ENDING A: The Witness. (Try saying 'No' next time...)",
        end: true,
        choice: true,
        options: [
            { text: "Restart", nextId: 0, effect: () => { localStorage.setItem('sv_endings', (endingsReached + 1)); location.reload(); } },
            { text: "Menu", nextId: 0, effect: () => { localStorage.setItem('sv_endings', (endingsReached + 1)); window.location.href = 'index.html'; } }
        ]
    },

    // === ROUTE B: SKEPTIC (New Content) ===
    {
        id: 100,
        bg: 'pictures/empty roof with moon.png',
        character: 'pictures/ghost lookikin .png',
        speaker: 'Haru',
        text: "No. Dead is dead. Ghosts are just guilt we haven't processed.",
        effect: 'shake' // The world rejects this answer
    },
    {
        id: 101,
        bg: 'pictures/empty roof with moon.png',
        character: 'pictures/ghost lookikin .png', // Glitching heavily
        effect: 'glitch',
        speaker: 'Girl',
        text: "Is that so? Then who are you talking to?"
    },
    {
        id: 102,
        bg: 'pictures/corridor_night.png', // NEW ASSET
        speaker: 'Haru',
        text: "I blinked. The roof was gone. I was in the service corridor. I had never left the building.",
        atmosphere: true
    },
    {
        id: 103,
        bg: 'pictures/corridor_night.png',
        speaker: 'Sound',
        text: "*click* *clack* *click* *clack*",
        effect: 'shake'
    },
    {
        id: 104,
        bg: 'pictures/street_view.png', // NEW ASSET
        speaker: 'Haru',
        text: "I ran out to the street. It was empty. Completely empty. No cars. No people.",
        atmosphere: true
    },
    {
        id: 105,
        bg: 'pictures/street_view.png',
        foreground: 'pictures/old man .png', // Resusing old man creatively as a 'shadow'
        speaker: 'Kohee Sama?',
        text: "You shouldn't be out here, Haru. It's not your time to manifest."
    },
    {
        id: 106,
        bg: 'pictures/street_view.png',
        speaker: 'Haru',
        text: "Manifest? I'm alive! I'm breathing!"
    },
    {
        id: 107,
        bg: 'pictures/street_view.png',
        foreground: 'pictures/dagger.png', // The truth
        speaker: 'Voice',
        text: "Look at your chest, Haru.",
    },
    {
        id: 108,
        bg: '#000',
        speaker: 'Haru',
        text: "(There was no heartbeat. Just the handle of a dagger, rusted with age, protruding from my ribs.)"
    },
    {
        id: 109,
        bg: '#000',
        speaker: 'Girl',
        text: "You didn't meet a ghost, Haru. You *are* the ghost.",
        effect: 'glitch'
    },
    {
        id: 110,
        bg: '#000',
        speaker: '',
        text: "ENDING B: The Denial. (Truth Revealed)",
        end: true,
        choice: true,
        options: [
            { text: "Accept Fate", nextId: 0, effect: () => { localStorage.setItem('sv_endings', (endingsReached + 1)); location.reload(); } }
        ]
    }
];

// Engine Variables
let currentStep = storyData[0];
const vnBg = document.getElementById('vn-bg');
const characterLayer = document.getElementById('vn-character-layer');
const foregroundLayer = document.getElementById('vn-foreground-layer');
const dialogueBox = document.getElementById('dialogue-box');
const speakerName = document.getElementById('speaker-name');
const dialogueText = document.getElementById('dialogue-text');
const choicesContainer = document.getElementById('choices-container');
const startScreen = document.getElementById('start-screen');
const audio = document.getElementById('bg-music');
const atmosphereOverlay = document.getElementById('atmosphere');

let typingInterval;

// PARALLAX LOGIC
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
    const y = (e.clientY / window.innerHeight - 0.5) * 10; // -5 to 5

    // Background moves opposite to mouse
    vnBg.style.transform = `scale(1.1) translate(${-x}px, ${-y}px)`;

    // Character moves faster for depth
    characterLayer.style.transform = `translateX(-50%) translate(${-x * 1.5}px, ${-y * 1.5}px)`; // Maintain centering
});

function startStory() {
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        dialogueBox.classList.add('active');
        audio.play().catch(e => console.log("Audio needed user interaction"));
        loadStep(currentStep);
    }, 1000);
}

function loadStep(step) {
    if (step.jump) {
        let jumpStep = storyData.find(s => s.id === step.jump);
        if (jumpStep) {
            currentStep = jumpStep;
            loadStep(currentStep);
        }
        return;
    }

    // 1. Memory Notification
    if (step.memory) {
        showNotification(step.memory);
    }

    // 2. Background Logic
    if (step.bg.startsWith('#')) {
        vnBg.style.backgroundImage = 'none';
        vnBg.style.backgroundColor = step.bg;
    } else {
        if (!vnBg.style.backgroundImage.includes(encodeURI(step.bg)) || vnBg.style.backgroundColor) {
            vnBg.style.opacity = 0;
            setTimeout(() => {
                vnBg.style.backgroundImage = `url('${step.bg}')`;
                vnBg.style.backgroundColor = '';
                vnBg.style.opacity = 1;
            }, 300); // Smooth fade transition between BGs
        }
    }

    // 3. Atmosphere Logic
    if (step.atmosphere) {
        atmosphereOverlay.style.display = 'block';
    } else {
        atmosphereOverlay.style.display = 'none';
    }

    // 4. Character Logic
    characterLayer.innerHTML = '';
    if (step.character) {
        const charImg = document.createElement('img');
        charImg.src = step.character;
        charImg.classList.add('character-img');

        if (step.effect === 'glitch') {
            charImg.classList.add('glitch');
        }

        characterLayer.appendChild(charImg);
        setTimeout(() => charImg.classList.add('active'), 10);
    }

    // 5. Foreground Logic
    foregroundLayer.innerHTML = '';
    if (step.foreground) {
        const fgImg = document.createElement('img');
        fgImg.src = step.foreground;
        fgImg.classList.add('foreground-img');
        foregroundLayer.appendChild(fgImg);
        setTimeout(() => fgImg.classList.add('active'), 10);
    }

    // 6. Speaker
    if (step.speaker) {
        speakerName.innerText = step.speaker;
        speakerName.classList.add('visible');
    } else {
        speakerName.classList.remove('visible');
    }

    // 7. Effects
    if (step.effect === 'shake') {
        document.body.style.animation = 'shake 0.5s';
        setTimeout(() => document.body.style.animation = '', 500);
    } else if (step.effect === 'flash') {
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.inset = '0';
        flash.style.backgroundColor = 'white';
        flash.style.zIndex = '999';
        flash.style.transition = 'opacity 0.2s';
        document.body.appendChild(flash);
        setTimeout(() => { flash.style.opacity = '0'; setTimeout(() => flash.remove(), 200); }, 50);
    }

    // 8. Choices or Text
    if (step.choice) {
        dialogueBox.style.display = 'none';
        choicesContainer.innerHTML = '';
        choicesContainer.style.display = 'flex';

        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.classList.add('choice-btn');
            btn.innerText = opt.text;
            btn.onclick = () => {
                if (opt.effect) opt.effect();
                chooseOption(opt.nextId);
            };
            choicesContainer.appendChild(btn);
        });
    } else {
        dialogueBox.style.display = 'block';
        choicesContainer.style.display = 'none';

        // Typewriter
        dialogueText.innerHTML = '';
        let i = 0;
        clearInterval(typingInterval);

        if (step.end) {
            document.querySelector('.click-indicator').style.display = 'none';
        } else {
            document.querySelector('.click-indicator').style.display = 'block';
        }

        typingInterval = setInterval(() => {
            // Use textContent to avoid HTML parsing issues during typing, or just simple substring
            const currentText = step.text.substring(0, i + 1);
            dialogueText.innerHTML = currentText + '<span class="typewriter-cursor"></span>';
            i++;
            if (i >= step.text.length) {
                clearInterval(typingInterval);
                dialogueText.innerHTML = step.text; // Remove cursor at end
            }
        }, 30);
    }
}

function nextStep() {
    if (choicesContainer.style.display === 'flex' || currentStep.end) return;

    if (dialogueText.textContent.length < currentStep.text.length) {
        clearInterval(typingInterval);
        dialogueText.innerHTML = currentStep.text;
        return;
    }

    let currentIndex = storyData.indexOf(currentStep);
    if (currentIndex + 1 < storyData.length) {
        currentStep = storyData[currentIndex + 1];
        loadStep(currentStep);
    }
}

function chooseOption(nextId) {
    const nextStepObj = storyData.find(s => s.id === nextId);
    if (nextStepObj) {
        currentStep = nextStepObj;
        loadStep(currentStep);
    }
}

function showNotification(text) {
    const notif = document.getElementById('memory-notification');
    if (!notif) return;
    notif.innerText = text;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 4000);
}

// Visual Novel Script & Engine v3.0 - Manga Edition
// Supports: Branching, State Tracking, Multiple Endings, Cinematic Effects, CSS Filters

let gameState = {
    metEmi: false,
    knowsTruth: false,
    hasDagger: false
};

const storyData = [
    // === PROLOGUE: THE SILENCE ===
    // === PROLOGUE: THE SILENCE ===
    {
        id: 0,
        bg: 'images/vn_manga_rooftop_ref.png', // Manga Night Rooftop
        speaker: 'Haru',
        text: "The rooftop. They said it was just a place, a forgotten patch of concrete reaching for the sky.",
        memory: "The City will remember this silence."
    },
    {
        id: 1,
        bg: '#000',
        type: '3d', // TRIGGER 3D MODE
        speaker: 'Haru',
        text: "(I drifted into the void. Use WASD to float... The stars are cold.)",
    },
    {
        id: 1,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Haru',
        text: "But to me, it was the only sanctuary in a city that choked me with its endless, performative noise.",
    },
    {
        id: 2,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Haru',
        text: "Down below, life was a performance. A cacophony of feigned emotions. Here, the silence was profound. An emptiness that swallowed the world.",
    },
    {
        id: 3,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Haru',
        text: "I needed the stark, honest cold of the wind. The dizzying height that made human concerns shrink to microscopic dust.",
    },

    // === SCENE 1: THE MEETING ===
    {
        id: 10,
        bg: 'images/vn_manga_duo_ref.png', // Haru and Girl on Ledge
        speaker: 'Haru',
        text: "That's where I saw her. A statue carved from shadow and moonlight.",
    },
    {
        id: 11,
        bg: 'images/vn_manga_duo.png',
        speaker: '',
        text: "She sat on the very edge. Reckless. Unbound. Her black skirt melted into the gloom, her pale skin luminous.",
    },
    {
        id: 12,
        bg: 'images/vn_manga_duo.png',
        speaker: 'Haru',
        text: "(I didn't speak. My breath hitched. Another soul seeking the same profound isolation.)",
    },
    {
        id: 13,
        bg: 'images/vn_manga_duo.png',
        speaker: '',
        text: "The silence between us wasn't awkward. It was ancient. Comfortable.",
    },
    {
        id: 14,
        bg: 'images/vn_manga_duo.png',
        speaker: 'Haru',
        text: "Night after night, I returned. She was always there. A silent fixture. We never exchanged names.",
    },

    // === SCENE 2: THE QUESTION ===
    {
        id: 20,
        bg: 'images/vn_manga_girl_close_ref.png', // Close up portrait
        speaker: 'Girl',
        text: "Do you believe in ghosts?"
    },
    {
        id: 21,
        choice: true,
        bg: 'images/vn_manga_girl_close.png',
        options: [
            { text: "Depends on the ghost.", nextId: 22 },
            { text: "No.", nextId: 22 } // Converges for this linear story part
        ]
    },
    {
        id: 22,
        bg: 'images/vn_manga_girl_close.png',
        speaker: 'Haru',
        text: "Depends on the ghost."
    },
    {
        id: 23,
        bg: 'images/vn_manga_girl_close.png',
        speaker: '',
        text: "She turned just enough for me to see the glint in her eyes. Ancient, distant, and utterly, profoundly sad."
    },

    // === SCENE 3: THE CONVERSATION ===
    {
        id: 30,
        bg: 'images/vn_manga_duo.png',
        speaker: 'Haru',
        text: "I found myself speaking. Words spilling out like blood. About the lies down below. The people who smiled with knives.",
    },
    {
        id: 31,
        bg: 'images/vn_manga_girl_close.png',
        speaker: '',
        text: "She listened. Always. And sometimes, she spoke too. Her voice was like old paper, brittle yet resonant."
    },
    {
        id: 32,
        bg: 'images/vn_manga_girl_close.png',
        speaker: 'Girl',
        text: "I remember cities submerged beneath forgotten oceans... promises broken by the first frost..."
    },

    // === SCENE 4: THE DAGGER ===
    {
        id: 40,
        bg: 'images/vn_manga_hand_dagger_ref.png', // Hand offering dagger
        speaker: '',
        text: "One starless night, she handed me something. Her fingers were cold as marble."
    },
    {
        id: 41,
        bg: 'images/vn_manga_hand_dagger.png',
        speaker: '',
        text: "A dagger. Small, ancient. The hilt worn smooth, the blade holding a quiet, dangerous glint."
    },
    {
        id: 42,
        bg: 'images/vn_manga_hand_dagger.png',
        speaker: 'Girl',
        text: "You ever been in love?"
    },
    {
        id: 43,
        bg: 'images/vn_manga_hand_dagger.png',
        speaker: 'Haru',
        text: "...Once. Thought it was real."
    },
    {
        id: 44,
        bg: 'images/vn_manga_girl_close.png',
        speaker: 'Girl',
        text: "Love is like this. Looks beautiful. Reflects your face back at you. But hold it wrong... and you'll bleed."
    },
    {
        id: 45,
        bg: 'images/vn_manga_rooftop.png', // Back to wide
        speaker: 'Haru',
        text: "(I stared at the blade. When I looked up... she was gone.)"
    },
    {
        id: 46,
        bg: 'images/vn_manga_rooftop.png',
        speaker: '',
        text: "Just... nothing. A complete and sudden void. She had dissolved into the cool night air.",
    },

    // === SCENE 5: THE TRUTH ===
    {
        id: 50,
        bg: 'images/vn_manga_lobby_guard_ref.png', // Lobby scene
        speaker: 'Haru',
        text: "A week passed. The absence was a sharp ache. I found the old security guard, Kohee Sama, in the lobby."
    },
    {
        id: 51,
        bg: 'images/vn_manga_lobby_guard.png',
        speaker: 'Haru',
        text: "I asked about her. A girl. Black skirt. Long hair."
    },
    {
        id: 52,
        bg: 'images/vn_manga_lobby_guard.png',
        speaker: 'Kohee Sama',
        text: "You... you saw her?"
    },
    {
        id: 53,
        bg: 'images/vn_manga_lobby_guard.png',
        speaker: 'Kohee Sama',
        text: "She jumped. Years ago. Right where you described. No one claimed the body. They say her spirit never left."
    },
    {
        id: 54,
        bg: 'images/vn_manga_lobby_guard.png',
        speaker: 'Haru',
        text: "(A cold, hard truth crystallized. I had shared intimate moments with a ghost.)"
    },

    // === SCENE 6: THE OFFERING & THE WARNING ===
    {
        id: 60,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Haru',
        text: "I returned to the rooftop. The dagger was still there, lying on the ledge. A silent sentinel."
    },
    {
        id: 61,
        bg: 'images/vn_manga_hand_dagger.png', // Reuse dagger image
        speaker: 'Haru',
        text: "(I placed it back. A peace offering. A farewell.)"
    },
    {
        id: 62,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Haru',
        text: "\"I would've bled for you.\""
    },
    {
        id: 63,
        bg: 'images/vn_manga_rooftop.png',
        speaker: '',
        text: "The wind sighed. A cold gust. And then... a whisper right behind me."
    },
    {
        id: 64,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Voice',
        text: "“Don’t trust the one who comes next.”"
    },
    {
        id: 65,
        bg: 'images/vn_manga_rooftop.png',
        speaker: 'Haru',
        text: "I spun around. Nothing. Only the night."
    },

    // === SCENE 7: EMI (THE STRANGER) ===
    {
        id: 70,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode', // CSS FILTER for Day
        speaker: '',
        text: "Day 4. Noon. The harsh sun stripped the mystery away. The dagger was gone.",
    },
    {
        id: 71,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Voice',
        text: "\"It's bad form to leave your trash behind.\""
    },
    {
        id: 72,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: '',
        text: "A woman stood there. Canary-yellow coat. Sharp bob. Loud. Present. Emi."
    },
    {
        id: 73,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Emi',
        text: "I'm Emi. New night-shift architect. You aren't supposed to be up here."
    },
    {
        id: 74,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Haru',
        text: "(She smelled like the wild scent the ghost carried. She stared at the dagger's spot. Her shadow... reached out.)"
    },
    {
        id: 75,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Emi',
        text: "She told you about the bleeding, didn't she? She was always melodramatic. But she forgot the important part..."
    },
    {
        id: 76,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Emi',
        text: "\"Once you touch the iron, you belong to the heights.\""
    },
    {
        id: 77,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Emi',
        text: "I am the reason she's a story and I'm a person. She gave you the dagger to protect you from me. But you left it."
    },

    // === ENDING ===
    {
        id: 80,
        bg: 'images/vn_manga_hand_dagger.png', // Or floating dagger if I had it
        bgClass: 'day-mode',
        speaker: 'Emi',
        text: "She tossed the dagger. It hung in the air, defying gravity, pointed at my chest."
    },
    {
        id: 81,
        bg: 'images/vn_manga_rooftop.png',
        bgClass: 'day-mode',
        speaker: 'Emi',
        text: "Run. Or jump. Either way, the performance is over."
    },
    {
        id: 82,
        bg: 'images/vn_manga_lobby_guard.png', // Back to lobby
        speaker: 'Haru',
        text: "I ran. I needed answers. I found a young guard at the desk."
    },
    {
        id: 83,
        bg: 'images/vn_manga_lobby_guard.png',
        speaker: 'Haru',
        text: "Where is Kohee Sama? The old man?"
    },
    {
        id: 84,
        bg: 'images/vn_manga_lobby_guard.png',
        speaker: 'Guard',
        text: "Kohee Sama? No one here by that name. Wait... look at the history wall."
    },
    {
        id: 85,
        bg: 'images/vn_manga_lobby_guard.png', // Ideally the old photo image
        speaker: '',
        text: "A black and white photo from forty years ago. Construction crew. In the back... was the man I spoke to."
    },
    {
        id: 86,
        bg: '#000',
        speaker: '',
        text: "CAPTION: Kohee Sama (1942–1986). Lost in the roof-collapse incident.",
    },
    {
        id: 87,
        bg: '#000',
        speaker: 'Haru',
        text: "Everyone I had spoken to since entering the building was already dead.",
    },
    {
        id: 88,
        bg: '#000',
        speaker: '',
        text: "FIN.",
        end: true
    }
];

// Engine Variables
let currentStep = storyData[0];
const vnBg = document.getElementById('vn-bg');
const dialogueBox = document.getElementById('dialogue-box');
const speakerName = document.getElementById('speaker-name');
const dialogueText = document.getElementById('dialogue-text');
const choicesContainer = document.getElementById('choices-container');
const startScreen = document.getElementById('start-screen');
const audio = document.getElementById('bg-music');

let typingInterval;

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

    // Check Background
    if (step.bg.startsWith('#')) {
        vnBg.style.backgroundImage = 'none';
        vnBg.style.backgroundColor = step.bg;
        vnBg.className = ''; // Reset classes
    } else {
        if (!vnBg.style.backgroundImage.includes(step.bg)) {
            vnBg.style.backgroundImage = `url('${step.bg}')`;
        }
    }

    // Apply Background Class (for Day Mode / Filters)
    if (step.bgClass) {
        vnBg.className = step.bgClass;
    } else {
        vnBg.className = '';
    }

    // Check Speaker
    if (step.speaker) {
        speakerName.innerText = step.speaker;
        speakerName.classList.add('visible');
    } else {
        speakerName.classList.remove('visible');
    }

    // Check Choices
    if (step.choice) {
        dialogueBox.style.display = 'none';
        choicesContainer.innerHTML = '';
        choicesContainer.style.display = 'flex';

        step.options.forEach(opt => {
            if (opt.req && !opt.req()) return;

            const btn = document.createElement('button');
            btn.classList.add('choice-btn');
            btn.innerText = opt.text;
            btn.onclick = () => {
                if (opt.effect) opt.effect();
                chooseOption(opt.nextId);
            };
            choicesContainer.appendChild(btn);
        });
        return;
    } else {
        dialogueBox.style.display = 'block';
        choicesContainer.style.display = 'none';
    }

    // Type Text
    dialogueText.innerHTML = '';
    let i = 0;
    clearInterval(typingInterval);

    if (step.end) {
        document.querySelector('.click-indicator').style.display = 'none';
    } else {
        document.querySelector('.click-indicator').style.display = 'block';
    }

    typingInterval = setInterval(() => {
        dialogueText.innerHTML += step.text.charAt(i);
        i++;
        if (i >= step.text.length) {
            clearInterval(typingInterval);
        }
    }, 30);
}

function nextStep() {
    if (choicesContainer.style.display === 'flex' || currentStep.end) return;

    if (dialogueText.innerHTML.length < currentStep.text.length) {
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

// === MEMORY SYSTEM ===
const memoryNotification = document.getElementById('memory-notification');

function showNotification(text) {
    memoryNotification.innerText = text;
    memoryNotification.classList.add('show');
    setTimeout(() => {
        memoryNotification.classList.remove('show');
    }, 4000); // Hide after 4s
}

// === 3D ENGINE (Three.js) ===
const container3D = document.getElementById('container-3d');
let camera, scene, renderer;
let is3DMode = false;
let particles;

function init3D() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    // Remove default fog to see stars clearly, or keep it for depth
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({
        alpha: true
    }); // Transparent bg
    renderer.setSize(window.innerWidth, window.innerHeight);
    container3D.appendChild(renderer.domElement);

    // Stars
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 10000; i++) {
        vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
        vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
        vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        color: 0x888888
    });
    particles = new THREE.Points(geometry, particlesMaterial);
    scene.add(particles);

    // WASD Controls
    document.addEventListener('keydown', onDocumentKeyDown, false);
    animate();
}

function onDocumentKeyDown(event) {
    if (!is3DMode) return;
    var keyCode = event.which;
    const speed = 0.5;
    if (keyCode == 87) { // W
        camera.position.z -= speed;
    } else if (keyCode == 83) { // S
        camera.position.z += speed;
    } else if (keyCode == 65) { // A
        camera.position.x -= speed;
    } else if (keyCode == 68) { // D
        camera.position.x += speed;
    }

    // Add simple rotation for effect
    camera.rotation.z += 0.001;
}

function animate() {
    requestAnimationFrame(animate);
    if (!is3DMode) return;

    // Slight ambient rotation
    particles.rotation.x += 0.0001;
    particles.rotation.y += 0.0001;

    renderer.render(scene, camera);
}

// Initialize 3D on load
init3D();

// Override loadStep to include 3D and Memory checks
const originalLoadStep = loadStep;
loadStep = function (step) {

    // Memory Check
    if (step.memory) {
        showNotification(step.memory);
    }

    // 3D Mode Check
    if (step.type === '3d') {
        is3DMode = true;
        container3D.style.display = 'block';
        dialogueBox.style.display = 'none'; // Hide text during 3D? Or keep it? Let's hide for "exploration"

        // Contextual "Exit" overlay or timed event could go here
        // For this demo, let's keep the dialogue box visible so user can click to "next" out of 3D
        dialogueBox.style.display = 'block';
        vnBg.style.opacity = '0'; // Hide 2D background
    } else {
        is3DMode = false;
        container3D.style.display = 'none';
        vnBg.style.opacity = '1';
    }

    originalLoadStep(step);
};

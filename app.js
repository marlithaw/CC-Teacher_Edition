(() => {
  "use strict";

  const STORAGE_KEY = "matchbook-culture-camp-dashboard-v2";

  const resourceCatalog = {
    "ten-day-overview": {
      title: "Culture Camp 10-Day Launch Kit",
      type: "Professional resource · HTML",
      path: "resources/culture-camp-10-day-launch-kit.html",
      description: "The full-system launch model and ten-day sequence."
    },
    "day-by-day-guide": {
      title: "Day-by-Day Teacher Guide",
      type: "Professional resource · HTML",
      path: "resources/culture-camp-day-by-day-teacher-guide.html",
      description: "The canonical teaching guide for Days 1–10."
    },
    "behavior-matrix": {
      title: "Schoolwide Behavior Matrix 2026–2027",
      type: "Current source · DOCX",
      path: "resources/schoolwide-behavior-matrix-2026.docx",
      description: "Current expectations across classrooms and shared spaces."
    },
    "culture-deck": {
      title: "Culture Camp Launch Deck",
      type: "Teaching deck · HTML",
      path: "resources/culture-deck.html",
      description: "Editable launch visuals for the Culture Camp sequence."
    },
    "culture-promise-teacher": {
      title: "Culture Promise Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/culture-promise-teacher.docx",
      description: "Teacher-facing guide for Safe, Respectful, and Responsible."
    },
    "culture-promise-student": {
      title: "Culture Promise Student Resources",
      type: "Student materials · DOCX",
      path: "resources/student-sequence.docx",
      description: "Student-facing promise resources and practice materials."
    },
    "culture-promise-35-plan": {
      title: "Culture Promise Grades 3–5 Lesson Plan",
      type: "Lesson plan · DOCX",
      path: "resources/culture-promise-35-plan.docx",
      description: "Grade-band lesson plan for Culture Promise practice."
    },
    "culture-promise-35-handout": {
      title: "Culture Promise Grades 3–5 Handout & Visuals",
      type: "Student materials · DOCX",
      path: "resources/culture-promise-35-handout.docx",
      description: "Grade-band handout and visual supports."
    },
    "behavior-matrix-teacher": {
      title: "Behavior Matrix by Grade Band Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/speech-frames.docx",
      description: "Teacher guidance for making schoolwide expectations visible."
    },
    "morning-meeting-live": {
      title: "Morning Meeting Playbook — Live Year-Round",
      type: "Live schoolwide system · Web",
      path: "https://marlithaw.github.io/morningmeeting/",
      description: "Open the continuously updated Morning Meeting playbook for daily use throughout the school year.",
      action: "Open live playbook"
    },
    "morning-manual": {
      title: "Morning Meeting Culture Lab Training Deck",
      type: "Supporting deck · HTML",
      path: "resources/morning-manual.html",
      description: "Listening, speaking, participation, and community practice."
    },
    "morning-minute": {
      title: "Morning Meeting — The Matchbook Way",
      type: "Supporting deck · HTML",
      path: "resources/morning-minute.html",
      description: "Short staff-facing introduction to the daily meeting routine."
    },
    "role-system": {
      title: "Student Leader Training Deck",
      type: "Supporting deck · HTML",
      path: "resources/role-system.html",
      description: "Supported transfer of established routines to student leaders."
    },
    "regulation-guide": {
      title: "Regulation Choices Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/reset-scripts.docx",
      description: "Regulation choices students can use before returning to learning."
    },
    "responsive-pathway": {
      title: "Responsive Behavior Plan Training Deck",
      type: "Supporting deck · HTML",
      path: "resources/response-pathway.html",
      description: "Adult support for regulated response and predictable return."
    },
    "repair-guide": {
      title: "Repair Words Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/repair-scripts.docx",
      description: "Concise, teachable language for repairing harm."
    },
    "reentry-guide": {
      title: "Re-Entry Routine Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/reteach.docx",
      description: "Predictable steps for returning after a mistake or reset."
    },
    "restorative-deck": {
      title: "Restorative Repair Training Deck",
      type: "Supporting deck · HTML",
      path: "resources/restorative-deck.html",
      description: "Adult preparation for repair, recovery, and re-entry."
    },
    "adult-look-fors": {
      title: "Adult Look-Fors for Students",
      type: "Teacher guide · DOCX",
      path: "resources/adult-look-fors.docx",
      description: "Observable evidence adults use during rehearsal and review."
    },
    "recognition-guide": {
      title: "Friday Cypher Recognition Guide",
      type: "Supporting deck · HTML",
      path: "resources/recognition-guide.html",
      description: "Recognition grounded in observable culture-aligned evidence."
    },
    "nomination-protocol": {
      title: "Evidence-Based Nomination Protocol",
      type: "Supporting deck · HTML",
      path: "resources/nomination-protocol.html",
      description: "Practice for naming what a student did and why it matters."
    },
    "family-evidence": {
      title: "Family Connection Wheel Training Deck",
      type: "Supporting deck · HTML",
      path: "resources/family-evidence.html",
      description: "Optional family connection for sharing evidence of culture."
    },
    "fidelity-look-for": {
      title: "Follow-Up Coaching Look-For",
      type: "Implementation tool · DOCX",
      path: "resources/fidelity.docx",
      description: "Adult calibration tool for demonstrations and reteach decisions."
    },
    "first-five-operating": {
      title: "Arrival and First Five Operating Guide",
      type: "Professional resource · HTML",
      path: "resources/arrival-and-first-five-guide.html",
      description: "Current operating sequence for arrival and the silent First Five."
    },
    "first-five-teacher": {
      title: "First Five Routine Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/first-five.docx",
      description: "Teacher-facing routine guide with student practice language."
    },
    "first-five-35-plan": {
      title: "First Five Grades 3–5 Lesson Plan",
      type: "Lesson plan · DOCX",
      path: "resources/first-five-35-plan.docx",
      description: "Grade-band lesson plan for the First Five routine."
    },
    "first-five-35-handout": {
      title: "First Five Grades 3–5 Handout & Visuals",
      type: "Student materials · DOCX",
      path: "resources/first-five-35-handout.docx",
      description: "Grade-band student practice and visual supports."
    },
    "hallway-operating": {
      title: "Hallway Transitions Operating Guide",
      type: "Professional resource · HTML",
      path: "resources/hallway-transitions-guide.html",
      description: "Current hallway travel and transition routine."
    },
    "hallway-teacher": {
      title: "Hallway Travel Routine Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/hallway.docx",
      description: "Student-facing hallway rehearsal and teacher guidance."
    },
    "restroom-teacher": {
      title: "Restroom Routine Teacher Guide",
      type: "Working resource · DOCX",
      path: "resources/bathroom.docx",
      description: "Available teacher-facing restroom lesson pending current procedure ratification."
    },
    "cafeteria-operating": {
      title: "Cafeteria Routines Operating Guide",
      type: "Professional resource · HTML",
      path: "resources/cafeteria-routines-guide.html",
      description: "Current entry, meal, cleanup, and exit sequence."
    },
    "cafeteria-teacher": {
      title: "Cafeteria Entry, Meal & Exit Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/cafeteria.docx",
      description: "Student-facing cafeteria rehearsal and teacher guidance."
    },
    "recess-operating": {
      title: "Recess and Playground Operating Guide",
      type: "Professional resource · HTML",
      path: "resources/recess-and-playground-guide.html",
      description: "Current boundaries, active supervision, recall, and return sequence."
    },
    "recess-teacher": {
      title: "Recess Boundaries and Recall Teacher Guide",
      type: "Teacher guide · DOCX",
      path: "resources/recess.docx",
      description: "Student-facing recess rehearsal and teacher guidance."
    }
  };

  const studentGradeBands = [
    { key: "k2", label: "K–2" },
    { key: "35", label: "3–5" },
    { key: "68", label: "6–8" }
  ];

  function registerStudentDeckSet(key, fileBase, sessionTitle, options = {}) {
    return studentGradeBands.map(band => {
      const id = `${key}-${band.key}`;
      resourceCatalog[id] = {
        title: `${sessionTitle} Student Presentation · Grades ${band.label}`,
        type: `${options.draft ? "Draft " : ""}student deck · HTML`,
        path: `resources/${fileBase}-${band.key}.html`,
        description: options.draft
          ? `Student-facing presentation for grades ${band.label}; restroom procedure ratification is still pending.`
          : `Student-facing presentation for ${sessionTitle}, designed for grades ${band.label}.`
      };
      return id;
    });
  }

  const studentDeckSets = {
    day1: registerStudentDeckSet("student-day-1", "culture-promise-student-deck", "Culture Promise"),
    day2: registerStudentDeckSet("student-day-2", "day-2-student-deck", "Listening & Speaking Norms"),
    day3: registerStudentDeckSet("student-day-3", "day-3-student-deck", "Body Language & Visible Respect"),
    day4: registerStudentDeckSet("student-day-4", "day-4-student-deck", "Voice Tone & Student Roles"),
    day5: registerStudentDeckSet("student-day-5", "day-5-student-deck", "Power of Commitments"),
    day6: registerStudentDeckSet("student-day-6", "day-6-student-deck", "Regulation Toolbox & Transitions"),
    day7: registerStudentDeckSet("student-day-7", "day-7-student-deck", "Repair Language & Recovery"),
    day8: registerStudentDeckSet("student-day-8", "day-8-student-deck", "Student Leadership"),
    day9: registerStudentDeckSet("student-day-9", "day-9-student-deck", "Recognition Through Evidence"),
    day10: registerStudentDeckSet("student-day-10", "day-10-student-deck", "Readiness Review & Launch"),
    firstFive: registerStudentDeckSet("student-first-five", "arrival-first-five-student-deck", "Arrival & First Five"),
    hallway: registerStudentDeckSet("student-hallway", "hallway-student-deck", "Hallway Travel"),
    restroom: registerStudentDeckSet("student-restroom", "restroom-student-deck", "Restroom Routine", { draft: true }),
    cafeteria: registerStudentDeckSet("student-cafeteria", "cafeteria-student-deck", "Cafeteria Routines"),
    recess: registerStudentDeckSet("student-recess", "recess-student-deck", "Recess & Playground")
  };

  resourceCatalog["student-decks-library"] = {
    title: "Student Presentation Library · All Sessions",
    type: "Student decks · HTML",
    path: "resources/student-decks-index.html",
    description: "Browse all 45 Culture Camp presentations by session and grade band."
  };

  resourceCatalog["student-decks-offline"] = {
    title: "Download Complete Student Presentation Library",
    type: "Offline library · ZIP",
    path: "resources/culture-camp-student-presentations-offline.zip",
    description: "All 45 presentations, fonts, icons, and presenter notes for use without internet.",
    action: "Download",
    download: "culture-camp-student-presentations-offline.zip"
  };

  const lessons = [
    {
      day: 1,
      title: "Full-System Launch",
      focus: "Students experience the full culture system from entry to dismissal.",
      objective: "Launch the shared culture language and rehearse the essential entry routines students will use throughout the day.",
      alignment: ["Culture Promise", "Behavior Matrix", "Essential entry routines"],
      files: ["day-by-day-guide", "ten-day-overview", "behavior-matrix", "culture-deck", "culture-promise-teacher", "culture-promise-student", "first-five-operating", ...studentDeckSets.day1, "student-decks-library", "student-decks-offline"]
    },
    {
      day: 2,
      title: "Listening and Speaking Norms",
      focus: "Students practice listening, turn-taking, and respectful speaking so everyone can participate.",
      objective: "Teach and rehearse discussion and participation routines that protect every speaker.",
      alignment: ["Discussion practice", "Participation routines"],
      files: ["day-by-day-guide", "behavior-matrix-teacher", "morning-manual", "morning-minute", ...studentDeckSets.day2, "student-decks-offline"]
    },
    {
      day: 3,
      title: "Body Language and Visible Respect",
      focus: "Students show respect through posture, attention, movement, and hands across school settings.",
      objective: "Make respectful body language observable and consistent in classrooms and shared spaces.",
      alignment: ["Behavior Matrix practice across settings"],
      files: ["day-by-day-guide", "behavior-matrix", "behavior-matrix-teacher", ...studentDeckSets.day3, "student-decks-offline"]
    },
    {
      day: 4,
      title: "Voice Tone and First Student Roles",
      focus: "Students practice respectful tone and begin taking supported ownership of small culture roles.",
      objective: "Rehearse voice tone while transferring selected responsibilities to students with adult coaching.",
      alignment: ["Guided practice with student ownership"],
      files: ["day-by-day-guide", "role-system", "behavior-matrix-teacher", ...studentDeckSets.day4, "student-decks-offline"]
    },
    {
      day: 5,
      title: "Power of Commitments",
      focus: "Students turn broad promises into observable, specific commitments they can act on.",
      objective: "Connect one visible next step to Safe, Respectful, and Responsible community membership.",
      alignment: ["Observable, specific commitments"],
      files: ["day-by-day-guide", "culture-promise-teacher", "culture-promise-student", "culture-promise-35-plan", "culture-promise-35-handout", ...studentDeckSets.day5, "student-decks-offline"]
    },
    {
      day: 6,
      title: "Regulation Toolbox and Transitions",
      focus: "Students select regulation tools and use transition routines before drift becomes disruption.",
      objective: "Teach students to choose a regulation strategy and return to learning through a predictable transition.",
      alignment: ["Regulation Choices", "Transition routines"],
      files: ["day-by-day-guide", "regulation-guide", "responsive-pathway", "first-five-operating", ...studentDeckSets.day6, "student-decks-offline"]
    },
    {
      day: 7,
      title: "Repair Language and Recovery",
      focus: "Students use repair language, recover after mistakes, and re-enter the learning community.",
      objective: "Practice concise repair words and a supported re-entry routine after conflict or dysregulation.",
      alignment: ["Repair Words", "Re-entry"],
      files: ["day-by-day-guide", "repair-guide", "reentry-guide", "restorative-deck", ...studentDeckSets.day7, "student-decks-offline"]
    },
    {
      day: 8,
      title: "Student Leadership with Fidelity",
      focus: "Students lead established routines accurately without weakening the shared expectations.",
      objective: "Transfer selected routine leadership while protecting the sequence, language, and purpose.",
      alignment: ["Student-led rehearsal of established routines"],
      files: ["day-by-day-guide", "role-system", "adult-look-fors", ...studentDeckSets.day8, "student-decks-offline"]
    },
    {
      day: 9,
      title: "Recognition Through Evidence",
      focus: "Students recognize specific actions instead of relying on popularity or vague praise.",
      objective: "Use observable evidence to nominate and recognize Safe, Respectful, and Responsible actions.",
      alignment: ["Evidence-based recognition", "Nomination"],
      files: ["day-by-day-guide", "recognition-guide", "nomination-protocol", "family-evidence", ...studentDeckSets.day9, "student-decks-offline"]
    },
    {
      day: 10,
      title: "Readiness Review and Launch",
      focus: "Students demonstrate the routines while adults identify what is ready and what needs reteaching.",
      objective: "Complete a readiness review using demonstrations, adult look-fors, and specific reteach decisions.",
      alignment: ["Adult Look-Fors", "Demonstrations", "Reteach decisions"],
      files: ["day-by-day-guide", "ten-day-overview", "adult-look-fors", "fidelity-look-for", ...studentDeckSets.day10, "student-decks-offline"]
    }
  ];

  const systems = [
    {
      id: "morning-meeting",
      title: "Morning Meeting",
      shortTitle: "Morning Meeting",
      status: "Live year-round",
      statusClass: "current",
      purpose: "Give teachers continuous access to the daily Morning Meeting system throughout the school year.",
      result: "Teachers use one current playbook for daily meeting routines, lesson updates, classroom tools, and schoolwide alignment.",
      files: ["morning-meeting-live"],
      note: "This opens the live Morning Meeting site. Updates published from marlithaw/morningmeeting appear here automatically, so the Teacher Edition does not keep a separate copy."
    },
    {
      id: "first-five",
      title: "Arrival & First Five",
      shortTitle: "First Five",
      status: "Current source",
      statusClass: "current",
      purpose: "Create a calm, predictable on-ramp from arrival into independent learning.",
      result: "Students locate the posted task, prepare materials, and begin at Level 0 for five minutes without teacher instruction.",
      files: ["first-five-operating", "first-five-teacher", "first-five-35-plan", "first-five-35-handout", "behavior-matrix", ...studentDeckSets.firstFive, "student-decks-offline"],
      note: "This bundle preserves the routine mechanics: same posted location, five minutes, Level 0, time-to-start, and a clear no-help boundary."
    },
    {
      id: "hallway",
      title: "Hallway Travel",
      shortTitle: "Hallway",
      status: "Current source",
      statusClass: "current",
      purpose: "Move students safely and efficiently while protecting learning throughout the building.",
      result: "Students transition with the expected voice level, spacing, pace, and response to adult cues.",
      files: ["hallway-operating", "hallway-teacher", "behavior-matrix", ...studentDeckSets.hallway, "student-decks-offline"],
      note: "Use the current operating guide as the routine spine and the teacher guide for student rehearsal."
    },
    {
      id: "restroom",
      title: "Restroom",
      shortTitle: "Restroom",
      status: "Ratification needed",
      statusClass: "pending",
      purpose: "Protect safety, privacy, cleanliness, and prompt return to learning.",
      result: "Students use the restroom efficiently, follow the current Behavior Matrix, and return without disrupting learning.",
      files: ["restroom-teacher", "behavior-matrix", ...studentDeckSets.restroom, "student-decks-offline"],
      note: "Source gap: a dedicated 2026–2027 Restroom Operating Guide was not found. The current Behavior Matrix and available teacher guide are linked here, but procedures must be ratified before this bundle is called final."
    },
    {
      id: "cafeteria",
      title: "Cafeteria",
      shortTitle: "Cafeteria",
      status: "Current source",
      statusClass: "current",
      purpose: "Make entry, meal service, cleanup, and exit predictable and respectful.",
      result: "Students move through the cafeteria sequence safely, use the expected voice level, clean their area, and exit ready.",
      files: ["cafeteria-operating", "cafeteria-teacher", "behavior-matrix", ...studentDeckSets.cafeteria, "student-decks-offline"],
      note: "The operating guide controls the adult sequence; the teacher guide supports student-facing rehearsal."
    },
    {
      id: "recess",
      title: "Recess & Playground",
      shortTitle: "Recess",
      status: "Current source",
      statusClass: "current",
      purpose: "Create safe play with clear boundaries, active supervision, recall, and return routines.",
      result: "Students play within boundaries, respond to recall, resolve minor problems, and return to instruction predictably.",
      files: ["recess-operating", "recess-teacher", "behavior-matrix", ...studentDeckSets.recess, "student-decks-offline"],
      note: "Teach boundaries and recall as observable routines, then rehearse the return before students begin open play."
    }
  ];

  const byId = id => document.getElementById(id);
  const all = selector => Array.from(document.querySelectorAll(selector));

  function loadSelection() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        day: lessons.some(item => item.day === parsed.day) ? parsed.day : 1,
        system: systems.some(item => item.id === parsed.system) ? parsed.system : "morning-meeting",
        view: parsed.view === "systems" ? "systems" : "lessons"
      };
    } catch {
      return { day: 1, system: "morning-meeting", view: "lessons" };
    }
  }

  let selection = loadSelection();

  function saveSelection() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  }

  function fileRows(ids) {
    return ids.map(id => resourceCatalog[id]).filter(Boolean).map(file => `
      <a class="file-row" href="${file.path}" ${file.download ? `download="${file.download}"` : 'target="_blank" rel="noreferrer"'}>
        <span class="file-copy"><strong>${file.title}</strong><small>${file.description}</small></span>
        <span class="file-meta"><small>${file.type}</small><strong>${file.action || "Open"}</strong></span>
      </a>
    `).join("");
  }

  function renderDayList() {
    byId("day-list").innerHTML = lessons.map(lesson => `
      <button class="bundle-list-item ${lesson.day === selection.day ? "selected" : ""}" type="button" data-day="${lesson.day}" ${lesson.day === selection.day ? 'aria-current="true"' : ""}>
        <span class="bundle-number">${lesson.day}</span>
        <span><strong>Day ${lesson.day}</strong><small>${lesson.title}</small></span>
      </button>
    `).join("");
  }

  function renderLesson() {
    const lesson = lessons.find(item => item.day === selection.day) || lessons[0];
    renderDayList();
    byId("lesson-kicker").textContent = `Day ${lesson.day} of ${lessons.length}`;
    byId("lesson-title").textContent = lesson.title;
    byId("lesson-focus").textContent = lesson.focus;
    byId("lesson-objective").textContent = lesson.objective;
    byId("lesson-alignments").innerHTML = lesson.alignment.map(item => `<span>${item}</span>`).join("");
    byId("lesson-files").innerHTML = fileRows(lesson.files);
    byId("open-primary-lesson").href = resourceCatalog[lesson.files[0]].path;
  }

  function renderSystemList() {
    byId("system-list").innerHTML = systems.map((system, index) => `
      <button class="bundle-list-item ${system.id === selection.system ? "selected" : ""}" type="button" data-system="${system.id}" ${system.id === selection.system ? 'aria-current="true"' : ""}>
        <span class="bundle-number">${index + 1}</span>
        <span><strong>${system.shortTitle}</strong><small>${system.status}</small></span>
      </button>
    `).join("");
  }

  function renderSystem() {
    const index = Math.max(0, systems.findIndex(item => item.id === selection.system));
    const system = systems[index];
    renderSystemList();
    byId("system-kicker").textContent = `System ${index + 1} of ${systems.length}`;
    byId("systems-title").textContent = system.title;
    byId("system-purpose").textContent = system.purpose;
    byId("system-result").textContent = system.result;
    byId("system-files").innerHTML = fileRows(system.files);
    const primarySystemResource = resourceCatalog[system.files[0]];
    const primarySystemLink = byId("open-primary-system");
    primarySystemLink.href = primarySystemResource.path;
    primarySystemLink.textContent = primarySystemResource.action || "Open operating guide";
    if (/^https?:\/\//.test(primarySystemResource.path)) {
      primarySystemLink.target = "_blank";
      primarySystemLink.rel = "noreferrer";
    } else {
      primarySystemLink.removeAttribute("target");
      primarySystemLink.removeAttribute("rel");
    }
    byId("system-status").textContent = system.status;
    byId("system-status").className = `bundle-status ${system.statusClass}`;
    byId("system-note").innerHTML = `<strong>${system.statusClass === "pending" ? "Before finalizing" : "Implementation note"}</strong><p>${system.note}</p>`;
    byId("system-note").classList.toggle("warning", system.statusClass === "pending");
  }

  function showView(view) {
    selection.view = view === "systems" ? "systems" : "lessons";
    all(".view").forEach(node => node.classList.toggle("active", node.id === `view-${selection.view}`));
    all("[data-view]").forEach(button => {
      const active = button.dataset.view === selection.view;
      button.classList.toggle("active", active && button.classList.contains("nav-button"));
      if (button.classList.contains("nav-button")) button.setAttribute("aria-pressed", String(active));
    });
    saveSelection();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      showView(viewButton.dataset.view);
      return;
    }

    const dayButton = event.target.closest("[data-day]");
    if (dayButton) {
      selection.day = Number(dayButton.dataset.day);
      saveSelection();
      renderLesson();
      if (window.innerWidth < 860) byId("lesson-title").scrollIntoView({ block: "start" });
      return;
    }

    const systemButton = event.target.closest("[data-system]");
    if (systemButton) {
      selection.system = systemButton.dataset.system;
      saveSelection();
      renderSystem();
      if (window.innerWidth < 860) byId("systems-title").scrollIntoView({ block: "start" });
    }
  });

  renderLesson();
  renderSystem();
  showView(selection.view);
})();

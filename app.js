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
      title: "Culture Camp Timed Lesson Guide",
      type: "Minute-by-minute plan · HTML",
      path: "resources/culture-camp-day-by-day-teacher-guide.html",
      description: "Culture Camp-only teacher language, actions, look-fors, and reset moves for the protected 8:00 block on Days 1–10."
    },
    "grade-band-script-companion": {
      title: "Grade-Band Script Companion",
      type: "Teacher script companion · HTML",
      path: "resources/culture-camp-grade-band-script-companion.html",
      description: "K–2, 3–5, and 6–8 scripts generated from the same source as the student presentation notes."
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
    "morning-meeting-overview-video": {
      title: "Morning Meeting Overview Video",
      type: "Overview video · MP4",
      path: "resources/morning-meeting-overview.mp4",
      description: "Watch how the six-move Morning Meeting works from start to finish.",
      action: "Watch video"
    },
    "morning-manual": {
      title: "Morning Meeting Culture Lab Training Deck",
      type: "Supporting deck · HTML",
      path: "resources/morning-manual.html",
      description: "Listening, speaking, participation, and community practice."
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
      title: "Entering (First Five) Operating Guide",
      type: "Professional resource · HTML",
      path: "resources/arrival-and-first-five-guide.html",
      description: "Existing operating sequence for the immediate academic on-ramp after students enter a new instructional space."
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
      type: "Teacher guide · DOCX",
      path: "resources/bathroom.docx",
      description: "Existing teacher-facing restroom lesson retained alongside the updated procedure."
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
    },
    "staff-learning-slides": {
      title: "Culture Systems Staff Learning Slides",
      type: "Staff learning deck · PPTX",
      path: "resources/procedures/staff-learning/culture-systems-staff-learning-slides.pptx",
      description: "The updated adult-facing slide deck for learning and rehearsing the systems and procedures.",
      action: "Open staff slides"
    },
    "staff-learning-facilitator": {
      title: "Culture Systems Facilitator Script",
      type: "Facilitator guide · DOCX",
      path: "resources/procedures/staff-learning/culture-systems-facilitator-script.docx",
      description: "The updated 89-minute facilitation script that accompanies the staff learning slides.",
      action: "Open facilitator guide"
    },
    "morning-entry-current": {
      title: "Morning Entry Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/01-morning-entry.docx",
      description: "Buildingwide start-of-day entry from arrival through the opening day routine.",
      action: "Open current procedure"
    },
    "dismissal-current": {
      title: "Dismissal Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/02-dismissal.docx",
      description: "Buildingwide end-of-day dismissal and student handoff procedure.",
      action: "Open current procedure"
    },
    "hallway-current": {
      title: "Hallway Transitions Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/03-hallway-transitions.docx",
      description: "Current schoolwide hallway movement, supervision, and transition expectations.",
      action: "Open current procedure"
    },
    "restroom-current": {
      title: "Restroom Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/04-restroom-procedures.docx",
      description: "Current restroom access, monitoring, cleanliness, and return-to-learning procedure.",
      action: "Open current procedure"
    },
    "lunch-current": {
      title: "Lunch Expectations Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/05-lunch-expectations.docx",
      description: "Current lunch entry, meal, cleanup, supervision, and exit expectations.",
      action: "Open current procedure"
    },
    "recess-current": {
      title: "Recess Expectations Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/06-recess-expectations.docx",
      description: "Current boundaries, supervision, play, recall, and return expectations.",
      action: "Open current procedure"
    },
    "refresher-current": {
      title: "Dress Code, Cell Phones, Backpacks & Hall Passes Refresher",
      type: "Updated current source · DOCX",
      path: "resources/procedures/schoolwide/07-refresher-dress-code-phones-backpacks-hall-passes.docx",
      description: "Schoolwide refresher for four high-frequency student expectations.",
      action: "Open current procedure"
    },
    "entering-exiting-current": {
      title: "Entering (First Five) & Exiting the Classroom Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/entering-exiting-classroom.docx",
      description: "K–8 threshold entry and classroom exit for new instructional spaces; paired with the preserved First Five on-ramp.",
      action: "Open current procedure"
    },
    "voice-levels-current": {
      title: "Voice Levels Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/voice-levels.docx",
      description: "Shared voice-level language and response expectations for classroom learning.",
      action: "Open current procedure"
    },
    "assigned-seating-current": {
      title: "Assigned Seating Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/assigned-seating.docx",
      description: "Day-1 seating charts, four fixed desk structures, strategic assignment, and a clear trigger for revising the chart.",
      action: "Open current procedure"
    },
    "materials-current": {
      title: "Materials Collection & Distribution Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/materials-collection-distribution.docx",
      description: "Predictable collection, distribution, and accountability for classroom materials.",
      action: "Open current procedure"
    },
    "indoor-recess-current": {
      title: "Indoor Recess Procedure",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/indoor-recess.docx",
      description: "Classroom procedure for safe, structured indoor recess.",
      action: "Open current procedure"
    },
    "attention-lower-current": {
      title: "Attention-Getter · Lower Grades",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/attention-getter-lower-grades.docx",
      description: "Developmentally appropriate attention signal and student response for lower grades.",
      action: "Open lower-grades guide"
    },
    "attention-upper-current": {
      title: "Attention-Getter · Upper Grades",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/attention-getter-upper-grades.docx",
      description: "Developmentally appropriate attention signal and student response for upper grades.",
      action: "Open upper-grades guide"
    },
    "morning-circle-lower-current": {
      title: "Morning Circle Transition · Lower Grades",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/morning-circle-transition-lower-grades.docx",
      description: "Lower-grade classroom transition into the Morning Circle meeting space.",
      action: "Open lower-grades guide"
    },
    "morning-circle-upper-current": {
      title: "Morning Circle Transition · Upper Grades",
      type: "Updated current source · DOCX",
      path: "resources/procedures/classroom/morning-circle-transition-upper-grades.docx",
      description: "Upper-grade classroom transition into the Morning Circle meeting space.",
      action: "Open upper-grades guide"
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
        gradeBand: band.label,
        action: `Open ${band.label} presentation`,
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
    firstFive: registerStudentDeckSet("student-first-five", "arrival-first-five-student-deck", "Entering (First Five) & Exiting"),
    hallway: registerStudentDeckSet("student-hallway", "hallway-student-deck", "Hallway Travel"),
    restroom: registerStudentDeckSet("student-restroom", "restroom-student-deck", "Restroom Routine"),
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

  // Culture Camp lesson documents + student handouts (procedure-card style, matches school-wide cards)
  resourceCatalog["lesson-doc-1"] = {
    title: "Day 1: Full-System Launch — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-01-full-system-launch-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-1 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-1"] = {
    title: "Day 1: Full-System Launch — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-01-full-system-launch-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-2"] = {
    title: "Day 2: Listening and Speaking Norms — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-02-listening-and-speaking-norms-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-2 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-2"] = {
    title: "Day 2: Listening and Speaking Norms — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-02-listening-and-speaking-norms-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-3"] = {
    title: "Day 3: Body Language and Visible Respect — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-03-body-language-and-visible-respect-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-3 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-3"] = {
    title: "Day 3: Body Language and Visible Respect — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-03-body-language-and-visible-respect-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-4"] = {
    title: "Day 4: Voice Tone and First Student Roles — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-04-voice-tone-and-early-student-roles-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-4 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-4"] = {
    title: "Day 4: Voice Tone and First Student Roles — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-04-voice-tone-and-early-student-roles-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-5"] = {
    title: "Day 5: Power of Commitments — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-05-the-power-of-commitments-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-5 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-5"] = {
    title: "Day 5: Power of Commitments — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-05-the-power-of-commitments-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-6"] = {
    title: "Day 6: Regulation Toolbox and Transitions — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-06-regulation-toolbox-and-transitions-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-6 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-6"] = {
    title: "Day 6: Regulation Toolbox and Transitions — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-06-regulation-toolbox-and-transitions-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-7"] = {
    title: "Day 7: Repair Language and Recovery — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-07-repair-language-and-recovery-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-7 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-7"] = {
    title: "Day 7: Repair Language and Recovery — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-07-repair-language-and-recovery-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-8"] = {
    title: "Day 8: Student Leadership with Fidelity — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-08-student-leadership-without-loss-of-fidelity-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-8 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-8"] = {
    title: "Day 8: Student Leadership with Fidelity — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-08-student-leadership-without-loss-of-fidelity-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-9"] = {
    title: "Day 9: Recognition Through Evidence — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-09-recognition-through-evidence-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-9 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-9"] = {
    title: "Day 9: Recognition Through Evidence — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-09-recognition-through-evidence-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["lesson-doc-10"] = {
    title: "Day 10: Readiness Review and Launch — Lesson Document",
    type: "Culture Camp lesson · DOCX",
    path: "resources/lessons/day-10-readiness-review-and-launch-lesson.docx",
    description: "Full procedure-card lesson: six-move block, non-negotiables, teacher language, and a Day-10 teaching script.",
    action: "Open lesson document"
  };
  resourceCatalog["lesson-handout-10"] = {
    title: "Day 10: Readiness Review and Launch — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/lessons/day-10-readiness-review-and-launch-student-handout.docx",
    description: "One-page student-facing handout: my six moves today, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["sw-handout-morning-entry"] = {
    title: "Morning Entry — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/procedures/schoolwide/handouts/morning-entry-student-handout.docx",
    description: "One-page student-facing handout: what I do, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["sw-handout-dismissal"] = {
    title: "Dismissal — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/procedures/schoolwide/handouts/dismissal-student-handout.docx",
    description: "One-page student-facing handout: what I do, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["sw-handout-hallway"] = {
    title: "Hallway Travel — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/procedures/schoolwide/handouts/hallway-student-handout.docx",
    description: "One-page student-facing handout: what I do, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["sw-handout-restroom"] = {
    title: "Restroom Routine — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/procedures/schoolwide/handouts/restroom-student-handout.docx",
    description: "One-page student-facing handout: what I do, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["sw-handout-lunch"] = {
    title: "Lunch — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/procedures/schoolwide/handouts/lunch-student-handout.docx",
    description: "One-page student-facing handout: what I do, my cues, and a self-check.",
    action: "Open handout"
  };
  resourceCatalog["sw-handout-recess"] = {
    title: "Recess — Student Handout",
    type: "Student handout · DOCX",
    path: "resources/procedures/schoolwide/handouts/recess-student-handout.docx",
    description: "One-page student-facing handout: what I do, my cues, and a self-check.",
    action: "Open handout"
  };

  // Morning-meeting opener videos (hosted on Canva). Two moods teachers can choose from
  // to open any day — offered on the Day-1 student decks and on every lesson page.
  const openerVideos = [
    {
      href: "https://www.canva.com/design/DAHM3LrQ2jk/KUi3rWQCOa4GESG2MnHrhw/watch",
      title: "Relax — “You & Me”",
      desc: "A calm, grounding opener. Play this to settle the room before the Culture Promise block.",
      type: "Morning meeting video · Canva", action: "Watch"
    },
    {
      href: "https://www.canva.com/design/DAHQbCXNXWo/_Ume8A1emGgSmRkSkNtOYQ/watch",
      title: "Excite — “Elementary Morning Meeting”",
      desc: "An upbeat, energizing opener. Play this to lift the room and start the day with momentum.",
      type: "Morning meeting video · Canva", action: "Watch"
    }
  ];

  const lessons = [
    {
      day: 1,
      title: "Full-System Launch",
      focus: "Students learn the complete six-move Culture Camp routine and the shared Culture Promise.",
      objective: "Explicitly teach Regulate, Orient, Connect, Practice, Commit, and Transition inside the protected 45-minute block.",
      alignment: ["Culture Promise", "Six-move routine", "45-minute teaching lab"],
      planAnchor: "day-1-full-system-launch",
      scriptAnchor: "day-1-culture-promise",
      presentations: studentDeckSets.day1,
      teacherFiles: ["culture-deck"],
      handouts: ["culture-promise-student"]
    },
    {
      day: 2,
      title: "Listening and Speaking Norms",
      focus: "Students practice listening, turn-taking, and respectful speaking so everyone can participate.",
      objective: "Teach and rehearse discussion and participation routines that protect every speaker.",
      alignment: ["Discussion practice", "Participation routines"],
      planAnchor: "day-2-listening-and-speaking-norms",
      scriptAnchor: "day-2-listening-speaking",
      presentations: studentDeckSets.day2,
      teacherFiles: ["morning-manual"],
      handouts: []
    },
    {
      day: 3,
      title: "Body Language and Visible Respect",
      focus: "Students show respect through posture, attention, movement, and hands across school settings.",
      objective: "Make respectful body language observable and consistent in classrooms and shared spaces.",
      alignment: ["Behavior Matrix practice across settings"],
      planAnchor: "day-3-body-language-and-visible-respect",
      scriptAnchor: "day-3-body-language",
      presentations: studentDeckSets.day3,
      teacherFiles: ["behavior-matrix-teacher"],
      handouts: []
    },
    {
      day: 4,
      title: "Voice Tone and First Student Roles",
      focus: "Students practice respectful tone and begin taking supported ownership of small culture roles.",
      objective: "Rehearse voice tone while transferring selected responsibilities to students with adult coaching.",
      alignment: ["Guided practice with student ownership"],
      planAnchor: "day-4-voice-tone-and-early-student-roles",
      scriptAnchor: "day-4-voice-and-roles",
      presentations: studentDeckSets.day4,
      teacherFiles: [],
      handouts: ["role-system"]
    },
    {
      day: 5,
      title: "Power of Commitments",
      focus: "Students turn broad promises into observable, specific commitments they can act on.",
      objective: "Connect one visible next step to Safe, Respectful, and Responsible community membership.",
      alignment: ["Observable, specific commitments"],
      planAnchor: "day-5-the-power-of-commitments",
      scriptAnchor: "day-5-commitments",
      presentations: studentDeckSets.day5,
      teacherFiles: ["culture-promise-teacher", "culture-promise-35-plan"],
      handouts: ["culture-promise-35-handout"]
    },
    {
      day: 6,
      title: "Regulation Toolbox and Transitions",
      focus: "Students select regulation tools and use transition routines before drift becomes disruption.",
      objective: "Teach students to choose a regulation strategy and return to learning through a predictable transition.",
      alignment: ["Regulation Choices", "Transition routines"],
      planAnchor: "day-6-regulation-toolbox-and-transitions",
      scriptAnchor: "day-6-calm-down-tools",
      presentations: studentDeckSets.day6,
      teacherFiles: ["regulation-guide", "responsive-pathway"],
      handouts: []
    },
    {
      day: 7,
      title: "Repair Language and Recovery",
      focus: "Students use repair language, recover after mistakes, and re-enter the learning community.",
      objective: "Practice concise repair words and a supported re-entry routine after conflict or dysregulation.",
      alignment: ["Repair Words", "Re-entry"],
      planAnchor: "day-7-repair-language-and-recovery",
      scriptAnchor: "day-7-repair",
      presentations: studentDeckSets.day7,
      teacherFiles: ["repair-guide", "reentry-guide", "restorative-deck"],
      handouts: []
    },
    {
      day: 8,
      title: "Student Leadership with Fidelity",
      focus: "Students lead established routines accurately without weakening the shared expectations.",
      objective: "Transfer selected routine leadership while protecting the sequence, language, and purpose.",
      alignment: ["Student-led rehearsal of established routines"],
      planAnchor: "day-8-student-leadership-without-loss-of-fidelity",
      scriptAnchor: "day-8-student-leadership",
      presentations: studentDeckSets.day8,
      teacherFiles: ["adult-look-fors"],
      handouts: []
    },
    {
      day: 9,
      title: "Recognition Through Evidence",
      focus: "Students recognize specific actions instead of relying on popularity or vague praise.",
      objective: "Use observable evidence to nominate and recognize Safe, Respectful, and Responsible actions.",
      alignment: ["Evidence-based recognition", "Nomination"],
      planAnchor: "day-9-recognition-through-evidence",
      scriptAnchor: "day-9-recognition",
      presentations: studentDeckSets.day9,
      teacherFiles: ["recognition-guide", "family-evidence"],
      handouts: []
    },
    {
      day: 10,
      title: "Readiness Review and Launch",
      focus: "Students demonstrate the routines while adults identify what is ready and what needs reteaching.",
      objective: "Complete a readiness review using demonstrations, adult look-fors, and specific reteach decisions.",
      alignment: ["Adult Look-Fors", "Demonstrations", "Reteach decisions"],
      planAnchor: "day-10-readiness-review-and-launch",
      scriptAnchor: "day-10-launch",
      presentations: studentDeckSets.day10,
      teacherFiles: ["fidelity-look-for"],
      handouts: []
    }
  ];

  const systems = [
    {
      id: "morning-meeting",
      category: "Schoolwide systems",
      title: "Morning Meeting",
      shortTitle: "Morning Meeting",
      status: "Live year-round",
      statusClass: "current",
      purpose: "Give teachers continuous access to the daily Morning Meeting system throughout the school year.",
      result: "Teachers use one current playbook for daily meeting routines, lesson updates, classroom tools, and schoolwide alignment.",
      files: ["morning-meeting-live", "morning-meeting-overview-video"],
      note: "This opens the live Morning Meeting site. Updates published from marlithaw/morningmeeting appear here automatically, so the Teacher Edition does not keep a separate copy."
    },
    {
      id: "morning-entry",
      category: "Schoolwide systems",
      title: "Morning Entry",
      shortTitle: "Morning Entry",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Create a consistent buildingwide start to the school day from arrival through the opening routine.",
      result: "Students enter the building, complete arrival expectations, and begin the day safely and predictably.",
      files: ["morning-entry-current"],
      note: "Morning Entry is the beginning of the school day. It does not replace Entering (First Five) when any K–8 group enters a new class, including lower-grade transitions to electives and middle-school class-period changes."
    },
    {
      id: "dismissal",
      category: "Schoolwide systems",
      title: "Dismissal",
      shortTitle: "Dismissal",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Create a safe, orderly, and accountable buildingwide end to the school day.",
      result: "Students move through end-of-day release and handoff procedures with calm bodies and clear adult supervision.",
      files: ["dismissal-current"],
      note: "Dismissal is the end of the school day. It does not replace the classroom exit routine used when a group leaves a class."
    },
    {
      id: "hallway",
      category: "Schoolwide systems",
      title: "Hallway Transitions",
      shortTitle: "Hallway",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Move students safely and efficiently while protecting learning throughout the building.",
      result: "Students transition with the expected voice level, spacing, pace, and response to adult cues.",
      files: ["hallway-current", "hallway-operating", "hallway-teacher", ...studentDeckSets.hallway],
      note: "The updated procedure is the current source. The existing operating guide, teacher guide, and grade-band student presentations remain as implementation supports."
    },
    {
      id: "restroom",
      category: "Schoolwide systems",
      title: "Restroom Procedures",
      shortTitle: "Restroom",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Protect safety, privacy, cleanliness, and prompt return to learning.",
      result: "Students use the restroom efficiently, follow the current Behavior Matrix, and return without disrupting learning.",
      files: ["restroom-current", "restroom-teacher", ...studentDeckSets.restroom],
      note: "The updated procedure closes the former source gap. Its Kindergarten hang-tag step is a current implementation choice to revise only if practice shows it does not work."
    },
    {
      id: "lunch",
      category: "Schoolwide systems",
      title: "Lunch Expectations",
      shortTitle: "Lunch",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Make entry, meal service, cleanup, and exit predictable and respectful.",
      result: "Students move through the cafeteria sequence safely, use the expected voice level, clean their area, and exit ready.",
      files: ["lunch-current", "cafeteria-operating", "cafeteria-teacher", ...studentDeckSets.cafeteria],
      note: "Lunch Expectations is the updated source. The existing cafeteria operating guide, teacher guide, and student presentations remain as teaching supports."
    },
    {
      id: "recess",
      category: "Schoolwide systems",
      title: "Recess Expectations",
      shortTitle: "Recess",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Create safe play with clear boundaries, active supervision, recall, and return routines.",
      result: "Students play within boundaries, respond to recall, resolve minor problems, and return to instruction predictably.",
      files: ["recess-current", "recess-operating", "recess-teacher", ...studentDeckSets.recess],
      note: "The updated procedure is the current source. The existing operating guide, teacher guide, and grade-band presentations remain as rehearsal supports."
    },
    {
      id: "refresher",
      category: "Schoolwide systems",
      title: "Student Expectations Refresher",
      shortTitle: "Expectations Refresher",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Refresh high-frequency expectations for dress code, cell phones, backpacks, and hall passes.",
      result: "Students can name and follow the four expectations without inconsistent adult messages.",
      files: ["refresher-current"],
      note: "Use this as a targeted refresher when these expectations drift; it is not a replacement for the full behavior matrix."
    },
    {
      id: "entering-first-five-exiting",
      category: "Classroom procedures",
      title: "Entering (First Five) & Exiting the Classroom",
      shortTitle: "Entering / First Five / Exiting",
      status: "Updated + preserved",
      statusClass: "current",
      purpose: "Create a predictable threshold entry, immediate academic on-ramp, and classroom exit for groups moving between classes.",
      result: "Students enter, begin the posted First Five independently, close the class, restore the room, and exit on the teacher’s cue.",
      files: ["entering-exiting-current", "first-five-operating", "first-five-teacher", "first-five-35-plan", "first-five-35-handout", ...studentDeckSets.firstFive],
      note: "This bundle applies across K–8 whenever a group enters a new class: K–2 and grades 3–5 use it for transitions such as electives, and grades 6–8 use it throughout class-period changes. Entering is the threshold, First Five is the immediate academic on-ramp, and Exiting is the class closing and departure. It remains separate from Morning Entry and Dismissal."
    },
    {
      id: "assigned-seating",
      category: "Classroom procedures",
      title: "Assigned Seating",
      shortTitle: "Assigned Seating",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Set immediate structure and adult authority with a seating chart in place before students ever walk in.",
      result: "Students go straight to an assigned seat every day; the chart is revised from data, not by informal daily moves.",
      files: ["assigned-seating-current"],
      note: "Every classroom has a chart by Day 1 — desks in rows, pairs, pods of 3, or groups of 4, never randomly arranged, and students never choose their own seats."
    },
    {
      id: "voice-levels",
      category: "Classroom procedures",
      title: "Voice Levels",
      shortTitle: "Voice Levels",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Give every classroom one clear, teachable language for expected volume.",
      result: "Students adjust their voice level to the learning task and respond promptly when the level changes.",
      files: ["voice-levels-current"],
      note: "Teach the level, model it, practice it, and correct with the same shared language across classrooms."
    },
    {
      id: "materials",
      category: "Classroom procedures",
      title: "Materials Collection & Distribution",
      shortTitle: "Materials",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Protect learning time with predictable material pickup, distribution, collection, and accountability.",
      result: "Students know who moves, where materials go, and what completion looks like without crowding or dead time.",
      files: ["materials-current"],
      note: "Keep roles, routes, and storage locations consistent enough that the routine can become automatic."
    },
    {
      id: "attention-getter",
      category: "Classroom procedures",
      title: "Attention-Getter",
      shortTitle: "Attention-Getter",
      status: "Updated by grade band",
      statusClass: "current",
      purpose: "Use a developmentally appropriate signal that produces a fast, observable student response.",
      result: "Students stop, face the speaker, quiet their voices, and show readiness using the grade-appropriate response.",
      files: ["attention-lower-current", "attention-upper-current"],
      note: "Choose the lower- or upper-grade source; do not mix both response patterns in the same classroom."
    },
    {
      id: "morning-circle-transition",
      category: "Classroom procedures",
      title: "Morning Circle Transition",
      shortTitle: "Morning Circle Transition",
      status: "Updated by grade band",
      statusClass: "current",
      purpose: "Move students efficiently from classroom seating into the Morning Circle meeting space.",
      result: "Students move, settle, and become ready for the meeting with minimal narration or lost time.",
      files: ["morning-circle-lower-current", "morning-circle-upper-current"],
      note: "This is the classroom movement into the meeting space. Morning Meeting remains the schoolwide instructional system it supports."
    },
    {
      id: "indoor-recess",
      category: "Classroom procedures",
      title: "Indoor Recess",
      shortTitle: "Indoor Recess",
      status: "Updated current source",
      statusClass: "current",
      purpose: "Provide a safe, structured classroom option when recess must happen indoors.",
      result: "Students choose approved activities, manage materials, and reset the room within the expected time.",
      files: ["indoor-recess-current"],
      note: "Use the procedure for weather or building conditions that move recess indoors; the schoolwide outdoor Recess bundle remains separate."
    }
  ];

  // Attach the procedure-card lesson document + student handout to each Culture Camp day.
  lessons.forEach(lesson => {
    const doc = `lesson-doc-${lesson.day}`;
    const handout = `lesson-handout-${lesson.day}`;
    if (resourceCatalog[doc]) lesson.teacherFiles = [doc, ...lesson.teacherFiles];
    if (resourceCatalog[handout]) lesson.handouts = [handout, ...lesson.handouts];
  });

  // Attach the one-page student handout to each of the six school-wide procedures.
  const schoolwideHandouts = {
    "morning-entry": "sw-handout-morning-entry",
    "dismissal": "sw-handout-dismissal",
    "hallway": "sw-handout-hallway",
    "restroom": "sw-handout-restroom",
    "lunch": "sw-handout-lunch",
    "recess": "sw-handout-recess"
  };
  systems.forEach(system => {
    const handout = schoolwideHandouts[system.id];
    if (handout && resourceCatalog[handout]) system.files = [...system.files, handout];
  });

  const byId = id => document.getElementById(id);
  const all = selector => Array.from(document.querySelectorAll(selector));

  function loadSelection() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        day: lessons.some(item => item.day === parsed.day) ? parsed.day : 1,
        system: systems.some(item => item.id === parsed.system) ? parsed.system : "morning-meeting",
        view: ["home", "lessons", "systems"].includes(parsed.view) ? parsed.view : "home"
      };
    } catch {
      return { day: 1, system: "morning-meeting", view: "home" };
    }
  }

  let selection = loadSelection();

  function saveSelection() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  }

  function resRow(spec) {
    const attrs = spec.download ? `download="${spec.download}"` : 'target="_blank" rel="noreferrer"';
    return `<a class="res-row${spec.primary ? " primary" : ""}" href="${spec.href}" ${attrs}>
        <span class="res-copy"><strong>${spec.title}</strong>${spec.desc ? `<small>${spec.desc}</small>` : ""}</span>
        <span class="res-side">${spec.type ? `<span class="res-type">${spec.type}</span>` : ""}<span class="res-go">${spec.action || "Open"} &rarr;</span></span>
      </a>`;
  }

  function catRow(id, opts = {}) {
    const f = resourceCatalog[id];
    if (!f) return "";
    return resRow({ href: f.path, title: f.title, desc: f.description, type: f.type, action: f.action || "Open", download: f.download, primary: opts.primary });
  }

  function deckTiles(ids) {
    return ids.map(id => resourceCatalog[id]).filter(Boolean).map(f => {
      const base = f.path.replace(/^resources\//, "");
      const present = `resources/present.html?deck=${encodeURIComponent(base)}&title=${encodeURIComponent(f.title)}`;
      return `
      <div class="deck-tile">
        <span class="deck-band">${f.gradeBand || ""}</span>
        <a class="deck-present" href="${present}" target="_blank" rel="noreferrer">&#9654; Present with notes</a>
        <a class="deck-slides" href="${f.path}" target="_blank" rel="noreferrer">Slides only &rarr;</a>
      </div>`;
    }).join("");
  }

  function fillSlot(slotId, containerId, html, emptyMsg) {
    const container = byId(containerId);
    container.innerHTML = html || (emptyMsg ? `<p class="slot-empty">${emptyMsg}</p>` : "");
    byId(slotId).hidden = !html && !emptyMsg;
  }

  function renderDayList() {
    byId("day-list").innerHTML = lessons.map(lesson => `
      <button class="rail-item ${lesson.day === selection.day ? "selected" : ""}" type="button" data-day="${lesson.day}" ${lesson.day === selection.day ? 'aria-current="true"' : ""}>
        <span class="rail-num">${lesson.day}</span>
        <span><strong>${lesson.title}</strong><small>Day ${lesson.day}</small></span>
      </button>
    `).join("");
  }

  function renderLesson() {
    const lesson = lessons.find(item => item.day === selection.day) || lessons[0];
    renderDayList();
    byId("lesson-kicker").textContent = `Day ${lesson.day} of ${lessons.length}`;
    byId("lesson-title").textContent = lesson.title;
    byId("lesson-focus").textContent = lesson.focus;

    fillSlot("lesson-present-slot", "lesson-present", deckTiles(lesson.presentations), null);

    fillSlot("lesson-watch-slot", "lesson-watch", openerVideos.map(v => resRow(v)).join(""), null);

    const docId = `lesson-doc-${lesson.day}`;
    const teach = [];
    if (resourceCatalog[docId]) teach.push(catRow(docId, { primary: true }));
    teach.push(resRow({
      href: `${resourceCatalog["day-by-day-guide"].path}#${lesson.planAnchor}`,
      title: `Day ${lesson.day} minute-by-minute plan`,
      desc: "Timed teacher language, actions, look-fors, and reset moves for the protected 8:00 block.",
      type: "Minute-by-minute plan · HTML", action: "Open plan"
    }));
    teach.push(resRow({
      href: `${resourceCatalog["grade-band-script-companion"].path}#${lesson.scriptAnchor}`,
      title: `Day ${lesson.day} grade-band scripts`,
      desc: "K–2, 3–5, and 6–8 teacher scripts for this day.",
      type: "Teacher scripts · HTML", action: "Open scripts"
    }));
    lesson.teacherFiles.filter(id => id !== docId).forEach(id => teach.push(catRow(id)));
    fillSlot("lesson-teach-slot", "lesson-teach", teach.join(""), null);

    const give = lesson.handouts.map(id => catRow(id)).join("");
    fillSlot("lesson-give-slot", "lesson-give", give, "No separate student handout is needed for this day.");
  }

  function renderSystemList() {
    let lastCategory = "";
    byId("system-list").innerHTML = systems.map((system, index) => {
      const groupLabel = system.category === lastCategory ? "" : `<p class="rail-group">${system.category}</p>`;
      lastCategory = system.category;
      const scope = system.category.indexOf("Classroom") === 0 ? "Classroom" : "Schoolwide";
      return `${groupLabel}
        <button class="rail-item ${system.id === selection.system ? "selected" : ""}" type="button" data-system="${system.id}" ${system.id === selection.system ? 'aria-current="true"' : ""}>
          <span class="rail-num">${index + 1}</span>
          <span><strong>${system.shortTitle}</strong><small>${scope}</small></span>
        </button>`;
    }).join("");
  }

  function renderSystem() {
    const index = Math.max(0, systems.findIndex(item => item.id === selection.system));
    const system = systems[index];
    renderSystemList();
    byId("system-kicker").textContent = `${system.category} · ${index + 1} of ${systems.length}`;
    byId("system-title").textContent = system.title;
    byId("system-purpose").textContent = system.purpose;

    const present = [], teach = [], give = [];
    system.files.forEach(id => {
      if (id === "student-decks-offline") return;
      const f = resourceCatalog[id];
      if (!f) return;
      if (f.gradeBand) present.push(id);
      else if (id.indexOf("sw-handout") === 0) give.push(id);
      else teach.push(id);
    });

    fillSlot("system-present-slot", "system-present", deckTiles(present), null);
    fillSlot("system-teach-slot", "system-teach", teach.map((id, i) => catRow(id, { primary: i === 0 })).join(""), null);
    fillSlot("system-give-slot", "system-give", give.map(id => catRow(id)).join(""), "No separate student handout for this procedure.");
  }

  function showView(view) {
    selection.view = ["home", "lessons", "systems"].includes(view) ? view : "home";
    all(".view").forEach(node => node.classList.toggle("active", node.id === `view-${selection.view}`));
    all(".nav-tab").forEach(tab => {
      const active = tab.dataset.view === selection.view;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-current", active ? "page" : "false");
    });
    saveSelection();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      event.preventDefault();
      showView(viewButton.dataset.view);
      return;
    }

    const dayButton = event.target.closest("[data-day]");
    if (dayButton) {
      selection.day = Number(dayButton.dataset.day);
      saveSelection();
      renderLesson();
      if (window.innerWidth < 780) byId("lesson-title").scrollIntoView({ block: "start" });
      return;
    }

    const systemButton = event.target.closest("[data-system]");
    if (systemButton) {
      selection.system = systemButton.dataset.system;
      saveSelection();
      renderSystem();
      if (window.innerWidth < 780) byId("system-title").scrollIntoView({ block: "start" });
    }
  });

  const cultureIntroVideo = byId("culture-intro-video");
  const cultureVideoCover = byId("culture-video-cover");
  const cultureVideoPlay = byId("culture-video-play");
  if (cultureIntroVideo && cultureVideoCover && cultureVideoPlay) {
    cultureVideoPlay.addEventListener("click", () => {
      cultureVideoCover.hidden = true;
      cultureIntroVideo.play().catch(() => cultureIntroVideo.focus());
    });
  }

  renderLesson();
  renderSystem();
  showView(selection.view);
})();

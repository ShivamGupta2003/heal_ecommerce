export const services = [
  {
    id: 1,
    icon: 'Brain',
    title: 'Neurological Rehabilitation',
    shortDesc: 'Specialized recovery programs for stroke, TBI, and neurological disorders.',
    fullDesc: 'Our neurological rehabilitation program combines evidence-based therapies with cutting-edge technology to help patients regain motor function, cognitive abilities, and independence after brain injury, stroke, or neurological disease.',
    conditions: ['Stroke Recovery', 'Traumatic Brain Injury', "Parkinson's Disease", 'Multiple Sclerosis', 'Spinal Cord Injury'],
    duration: '4–16 weeks',
    color: 'from-primary-600 to-primary-800',
  },
  {
    id: 2,
    icon: 'Activity',
    title: 'Physical Therapy',
    shortDesc: 'Restore movement, reduce pain, and rebuild strength with expert physiotherapists.',
    fullDesc: 'Our physical therapy department offers comprehensive musculoskeletal care, sports rehabilitation, and post-surgical recovery using manual therapy, therapeutic exercise, and modalities tailored to each patient.',
    conditions: ['Orthopedic Injuries', 'Post-Surgical Rehab', 'Chronic Pain', 'Sports Injuries', 'Balance Disorders'],
    duration: '2–12 weeks',
    color: 'from-teal-500 to-primary-700',
  },
  {
    id: 3,
    icon: 'Hand',
    title: 'Occupational Therapy',
    shortDesc: 'Regain independence in daily living activities through targeted rehabilitation.',
    fullDesc: 'Occupational therapy at NeuroVita focuses on restoring the ability to perform everyday tasks — from self-care to work activities — using adaptive techniques and assistive technology.',
    conditions: ['ADL Training', 'Fine Motor Skills', 'Cognitive Rehabilitation', 'Sensory Integration', 'Home Modification'],
    duration: '3–10 weeks',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    id: 4,
    icon: 'MessageSquare',
    title: 'Speech & Language Therapy',
    shortDesc: 'Comprehensive therapy for speech, language, swallowing, and communication.',
    fullDesc: 'Our certified speech-language pathologists treat conditions affecting communication and swallowing using the most current dysphagia management, aphasia treatment, and cognitive-communication protocols.',
    conditions: ['Aphasia', 'Dysarthria', 'Dysphagia', 'Cognitive-Communication', 'Voice Disorders'],
    duration: '4–12 weeks',
    color: 'from-primary-500 to-emerald-700',
  },
  {
    id: 5,
    icon: 'Heart',
    title: 'Cardiac Rehabilitation',
    shortDesc: 'Supervised exercise and education for heart patients to rebuild strength safely.',
    fullDesc: 'A medically supervised program designed for patients recovering from heart attacks, bypass surgery, or other cardiac events. We combine structured exercise, risk factor education, and psychological support.',
    conditions: ['Post Heart Attack', 'Bypass Surgery', 'Heart Failure', 'Angioplasty', 'Cardiac Transplant'],
    duration: '8–12 weeks',
    color: 'from-rose-500 to-primary-700',
  },
  {
    id: 6,
    icon: 'Zap',
    title: 'Pain Management',
    shortDesc: 'Multidisciplinary approach to chronic and acute pain relief and recovery.',
    fullDesc: 'Our pain management program integrates interventional techniques, physical rehabilitation, psychological support, and lifestyle modification to address the full spectrum of pain conditions.',
    conditions: ['Chronic Back Pain', 'Fibromyalgia', 'Neuropathic Pain', 'CRPS', 'Headache & Migraine'],
    duration: '6–16 weeks',
    color: 'from-amber-500 to-primary-700',
  },
]

export const team = [
  {
    name: 'Dr. Priya Mehta',
    role: 'Founder & Medical Director',
    specialty: 'Neurorehabilitation Medicine',
    experience: '22 years',
    qualifications: ['MD (AIIMS Delhi)', 'DNB Neurology', 'Fellowship in Neurorehab (London)'],
    image: null,
    bio: 'Dr. Mehta founded NeuroVita with a vision to bring world-class rehabilitation medicine to India. Her work in neuroplasticity and recovery protocols has been published in leading international journals.',
  },
  {
    name: 'Dr. Arjun Sharma',
    role: 'Head of Physical Therapy',
    specialty: 'Sports & Orthopedic Rehabilitation',
    experience: '15 years',
    qualifications: ['BPT, MPT (Ortho)', 'Certified Manual Therapist', 'McKenzie Method Certified'],
    image: null,
    bio: 'Dr. Sharma has rehabilitated national-level athletes and post-surgical patients with an evidence-based approach combining manual therapy and exercise science.',
  },
  {
    name: 'Dr. Sunita Rao',
    role: 'Senior Occupational Therapist',
    specialty: 'Neurological OT & ADL Rehabilitation',
    experience: '12 years',
    qualifications: ['BOT, MOT (Neurology)', 'Certified Hand Therapist', 'SI Certification'],
    image: null,
    bio: 'Dr. Rao specializes in helping neurological patients regain independence in daily activities, using a client-centred and occupation-based therapy model.',
  },
]

export const conditions = [
  'Stroke', 'Parkinson\'s Disease', 'Multiple Sclerosis', 'Spinal Cord Injury',
  'Traumatic Brain Injury', 'Hip & Knee Replacement', 'Shoulder Injuries', 'Back & Neck Pain',
  'Cerebral Palsy', 'Vestibular Disorders', 'Post-ICU Rehabilitation', 'Cardiac Recovery',
]

export const stats = [
  { value: '5,000+', label: 'Patients Recovered' },
  { value: '22+', label: 'Years of Excellence' },
  { value: '35+', label: 'Expert Therapists' },
  { value: '98%', label: 'Patient Satisfaction' },
]

export const testimonials = [
  {
    quote: 'After my stroke, I was told I might never walk again. NeuroVita\'s team worked with me every single day. Six months later, I walked my daughter down the aisle.',
    name: 'Ramesh Gupta',
    condition: 'Stroke Survivor',
    location: 'Delhi',
  },
  {
    quote: 'The occupational therapy program helped me return to work after my brain injury. The team treated me as a whole person, not just a diagnosis.',
    name: 'Ananya Krishnan',
    condition: 'Traumatic Brain Injury',
    location: 'Mumbai',
  },
  {
    quote: 'World-class care with genuine compassion. Dr. Mehta and her team are exceptional. My Parkinson\'s management has improved tremendously.',
    name: 'Col. Vikram Singh (Retd.)',
    condition: "Parkinson's Disease",
    location: 'Chandigarh',
  },
]

export const guidelines = [
  {
    category: 'Admission Process',
    icon: 'ClipboardList',
    steps: [
      'Obtain a referral from your physician or specialist',
      'Call our intake team to schedule an evaluation',
      'Bring all medical records, imaging, and reports',
      'Complete initial assessment with our clinical team',
      'Receive your personalized rehabilitation plan',
    ],
  },
  {
    category: 'What to Bring',
    icon: 'Package',
    steps: [
      'Government-issued photo ID and insurance documents',
      'All prior medical reports, MRIs, and lab results',
      'List of current medications with dosages',
      'Comfortable, loose-fitting clothing and footwear',
      'Any assistive devices you currently use',
    ],
  },
  {
    category: 'During Your Stay',
    icon: 'Home',
    steps: [
      'Therapy sessions are typically 2–3 hours per day',
      'Family education sessions are scheduled weekly',
      'Progress reviews occur every 2 weeks with your care team',
      'Visitors are welcome during designated hours (10 AM–7 PM)',
      'Our 24/7 nursing staff is always available for your needs',
    ],
  },
  {
    category: 'Discharge & Follow-up',
    icon: 'ArrowRight',
    steps: [
      'A home exercise program will be provided on discharge',
      'Outpatient follow-up appointments will be scheduled',
      'Community reintegration support is available',
      'Telehealth consultations available post-discharge',
      'Support groups and peer mentorship programs offered',
    ],
  },
]

export const galleryImages = [
  { id: 1, category: 'Therapy', caption: 'State-of-the-art neurological therapy suite', color: 'bg-primary-200' },
  { id: 2, category: 'Facility', caption: 'Modern rehabilitation gymnasium', color: 'bg-teal-200' },
  { id: 3, category: 'Team', caption: 'Our multidisciplinary clinical team', color: 'bg-emerald-200' },
  { id: 4, category: 'Therapy', caption: 'Hydrotherapy and aquatic rehabilitation pool', color: 'bg-primary-300' },
  { id: 5, category: 'Facility', caption: 'Private patient recovery suites', color: 'bg-sand' },
  { id: 6, category: 'Technology', caption: 'Robotic-assisted gait training', color: 'bg-teal-100' },
  { id: 7, category: 'Technology', caption: 'EEG-based brain stimulation therapy', color: 'bg-primary-100' },
  { id: 8, category: 'Team', caption: 'Speech therapy in session', color: 'bg-emerald-100' },
  { id: 9, category: 'Facility', caption: 'Peaceful healing garden and outdoor space', color: 'bg-green-200' },
]

export const faqs = [
  {
    q: 'Do I need a doctor\'s referral to begin rehabilitation?',
    a: 'While a referral is preferred and often required by insurance, you may contact us directly for a self-pay evaluation. Our intake team will guide you through the process.',
  },
  {
    q: 'How long does a typical rehabilitation program last?',
    a: 'Program duration varies by condition and severity, ranging from 2 weeks for minor orthopedic injuries to 6+ months for complex neurological conditions. Your team will set realistic goals and timelines.',
  },
  {
    q: 'Is inpatient or outpatient rehabilitation better for me?',
    a: 'This depends on your medical needs, support at home, and therapy intensity required. Our clinical team will recommend the most appropriate setting after your initial assessment.',
  },
  {
    q: 'Do you accept health insurance?',
    a: 'We accept most major health insurance plans and work with cashless facility partners. Please contact our billing team for specific information about your plan.',
  },
]

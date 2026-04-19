export const services = [
  {
    id: 1,
    icon: 'Hand',
    title: 'Occupational Therapy',
    shortDesc: 'Helping children develop independence in daily activities and life skills.',
    fullDesc: 'Occupational therapy helps children perform daily activities independently by improving hand-eye coordination, fine motor skills, balance, and sensory processing.',
    conditions: ['Autism', 'ADHD', 'Sensory Processing Disorder', 'Writing Difficulties', 'Fine Motor Issues'],
    duration: '3–10 weeks',
    color: 'from-emerald-500 to-teal-700',
    image: '/services/service.png'
  },
  {
    id: 2,
    icon: 'Activity',
    title: 'Physiotherapy',
    shortDesc: 'Improving movement, strength, and physical development in children.',
    fullDesc: 'Physiotherapy supports children with physical challenges by improving motor skills, balance, flexibility, and overall movement abilities.',
    conditions: ['Delayed Milestones', 'Muscle Stiffness', 'Balance Issues', 'Movement Difficulties'],
    duration: '2–12 weeks',
    color: 'from-teal-500 to-primary-700',
    image: '/services/service2.png'
  },
  {
    id: 3,
    icon: 'Zap',
    title: 'Sensory Integration Therapy',
    shortDesc: 'Helping children process and respond to sensory information effectively.',
    fullDesc: 'Sensory Integration Therapy helps regulate sensory responses related to touch, movement, sound, and more, improving behaviour and learning.',
    conditions: ['Sensory Processing Disorder', 'Autism', 'Behavioural Issues', 'Attention Difficulties'],
    duration: '4–12 weeks',
    color: 'from-primary-500 to-emerald-700',
    image: '/services/service3.png'
  },
  {
    id: 4,
    icon: 'Baby',
    title: 'Infant Stimulation & Early Intervention',
    shortDesc: 'Supporting early development in infants and high-risk newborns.',
    fullDesc: 'This therapy enhances sensory development, attention span, and brain growth in infants, especially those with developmental delays or NICU history.',
    conditions: ['Developmental Delay', 'Premature Birth', 'NICU Cases', 'High Risk Infants'],
    duration: '1–6 months',
    color: 'from-rose-500 to-primary-700',
    image: '/services/service4.png'
  },
  {
    id: 5,
    icon: 'Settings',
    title: 'Ergonomic Solutions',
    shortDesc: 'Improving classroom and learning environments for better focus.',
    fullDesc: 'We assess and modify school environments to improve posture, comfort, and learning ability through ergonomic adjustments.',
    conditions: ['Learning Disabilities', 'Autism', 'ADHD', 'Posture Issues'],
    duration: 'Custom Plan',
    color: 'from-amber-500 to-primary-700',
    image: '/services/service5.png'
  },
  {
    id: 6,
    icon: 'MessageSquare',
    title: 'Counselling',
    shortDesc: 'Supporting emotional, behavioural, and social well-being of children.',
    fullDesc: 'Counselling helps children manage emotions, behaviour, and social challenges, improving overall mental well-being.',
    conditions: ['Anxiety', 'Behavioural Issues', 'Low Confidence', 'Social Difficulties'],
    duration: '4–12 weeks',
    color: 'from-primary-600 to-primary-800',
    image: '/services/service6.png'
  },
  {
    id: 7,
    icon: 'Users',
    title: 'Group Therapy',
    shortDesc: 'Building social and communication skills through group sessions.',
    fullDesc: 'Group therapy helps children improve communication, confidence, and emotional management by interacting with peers.',
    conditions: ['Social Anxiety', 'Poor Social Skills', 'Low Attention', 'Emotional Stress'],
    duration: 'Ongoing',
    color: 'from-teal-600 to-primary-700',
    image: '/services/service7.png'
  },
  {
    id: 8,
    icon: 'Mic',
    title: 'Speech Therapy',
    shortDesc: 'Improving speech, language, and communication skills.',
    fullDesc: 'Speech therapy helps children overcome speech delays, stammering, and communication difficulties using specialized techniques.',
    conditions: ['Speech Delay', 'Stammering', 'Apraxia', 'Communication Disorders'],
    duration: '4–12 weeks',
    color: 'from-emerald-600 to-primary-700',
    image: '/services/service8.png'
  },
  {
    id: 9,
    icon: 'BookOpen',
    title: 'Special Education',
    shortDesc: 'Personalised learning support for children with learning difficulties.',
    fullDesc: 'Special education focuses on improving academic skills like reading, writing, and maths through personalised learning plans.',
    conditions: ['Dyslexia', 'Dysgraphia', 'Dyscalculia', 'ADHD', 'Learning Disabilities'],
    duration: 'Ongoing',
    color: 'from-primary-500 to-teal-700',
    image: '/services/service9.png'
  }
];
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

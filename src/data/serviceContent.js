// Rich SEO/AEO/GEO content for services-nav leaf pages, sourced from the
// client-provided "Madny Digital Services - Services" PDF (89 pages, 31
// service write-ups). Keyed by "categoryId/leafId" (NOT leafId alone) because
// three leaf ids are reused across categories with entirely different PDF
// content: 'replace-battery' and 'liquid-damage' each exist under both
// computer/repair and cellphone/repair, and 'sales-and-service' exists as a
// direct child of both the computer and cellphone categories. See
// getServiceContent() below - always look up through it, not this object
// directly, so the category-scoping can't be forgotten at a call site.
//
// A leaf with NO entry here keeps rendering the ServiceStubClient placeholder
// (see the two route files) - this is deliberate for two leaves:
//   - 'replace-keyboard' (Computer > Repair): no matching write-up in the PDF.
//   - 'cleaning-testing' (Cellphone > Repair): explicitly out of scope per
//     the 2026-09-01 content pass.
// The PDF also contains one extra write-up, "Computer System Design", with
// no corresponding node anywhere in servicesNav.js - its content was not
// used. Both gaps were flagged back to the client rather than guessed at.
//
// Content was generated per-service from the PDF text by a review workflow
// (2026-09-01): each entry was independently verified for (1) no fabricated
// prices or turnaround times beyond what the PDF states, (2) no claims
// unsupported by the PDF, (3) no em-dash characters. The only recurring
// verifier flag was areaDescription naming the real surrounding-area cities
// (Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, High River) from
// src/data/workingAreas.js - those are real sitewide business data, not a
// PDF-sourced claim, and were intentionally included per instruction; the
// verifier had no visibility into that carve-out so this is expected, not
// a real grounding failure.
//
// Each entry's shape is consumed directly by ServiceDetailClient.jsx:
//   metaTitle, metaDescription   - <title> / meta description
//   eyebrow                      - small badge label above the H1
//   h1                           - page headline
//   intro                        - 2-4 sentence intro paragraph
//   problemsHeading, problems[]  - "common signs/problems" list (strings)
//   servicesHeading, services[]  - "what's included" cards ({title, description})
//   processHeading, process[]    - diagnosis -> repair narrative ({step, description})
//   areaDescription              - local/GEO paragraph
//   faqs[]                       - {question, answer} pairs
//   ctaHeading, ctaText          - closing CTA band copy
//   relatedServices[]            - sibling leaf ids (same category) for cross-linking

export const serviceContent = {
  "computer/computer-system-design": {
    "metaTitle": "Computer Systems Design in Calgary | Madny Digital Services",
    "metaDescription": "Professional computer systems design for businesses and individuals in Calgary. We plan, configure, and improve computer systems around your needs. Call now.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Computer Systems Design in Calgary",
    "intro": "A well-designed computer system is more than choosing the right computer, since hardware, software, storage, performance, security, compatibility, and future requirements all need to work together. Madny Digital Services provides professional computer systems design for businesses and individuals in Calgary and nearby areas, helping clients plan, configure, integrate, and improve computer systems based on their operational requirements, performance needs, and future growth. Whether you are setting up a new business environment, upgrading existing technology, or looking for a more efficient computer setup, our team can assess your requirements and recommend practical hardware and software solutions.",
    "problemsHeading": "When Your Computer System Needs a Better Plan",
    "problems": [
      "Setting up a new business environment",
      "Upgrading existing technology",
      "Looking for a more efficient computer setup",
      "Hardware and software that do not work well together",
      "Insufficient storage or performance for daily operations",
      "Uncertainty about which hardware or software to choose",
      "Systems that no longer support business growth",
      "Technology limitations affecting reliability or scalability"
    ],
    "servicesHeading": "What Our Computer Systems Design Service Covers",
    "services": [
      {
        "title": "System Planning and Configuration",
        "description": "We evaluate your current setup, understand how the technology will be used, identify potential limitations, and develop a solution that fits your requirements and budget, covering computer system planning, configuration, and desktop or workstation solutions."
      },
      {
        "title": "Hardware and Software Assessment",
        "description": "We assess your existing hardware and software and provide selection and recommendations, including RAM, HDD, and SSD planning and storage and performance solutions suited to how you actually use your systems."
      },
      {
        "title": "Business Computer Systems",
        "description": "Every business has different technology requirements, from dependable workstations and shared resources to specialized software, larger storage capacity, database solutions, or custom applications, and we help develop environments that support daily operations with reliability, performance, compatibility, and scalability in mind."
      },
      {
        "title": "Hardware and Software Integration",
        "description": "The right hardware is only effective when it works properly with your software and operating environment, so we evaluate compatibility between computers, components, operating systems, applications, storage devices, and peripherals before recommending solutions."
      },
      {
        "title": "System Upgrades and Optimization",
        "description": "Replacing an entire computer system is not always necessary. We can assess options such as RAM upgrades, HDD to SSD upgrades, storage expansion, hardware replacement, operating system improvements, and startup and performance optimization to extend the useful life of existing equipment."
      },
      {
        "title": "Data Storage and Backup Planning",
        "description": "Your business and personal information can be one of the most important parts of your computer system, so we help identify suitable storage and backup solutions based on the type and volume of data you work with."
      }
    ],
    "processHeading": "Our Computer System Design Process",
    "process": [
      {
        "step": "Evaluate Current Setup",
        "description": "We evaluate your current computer system and understand how the technology is actually used day to day."
      },
      {
        "step": "Identify Requirements and Limitations",
        "description": "We identify potential limitations in your existing setup and clarify your operational requirements, performance needs, and future growth plans."
      },
      {
        "step": "Recommend Hardware and Software",
        "description": "We recommend practical hardware and software solutions that fit your requirements and budget, considering compatibility across your whole system."
      },
      {
        "step": "Configure and Support",
        "description": "We help configure the system, integrate peripherals and devices, and provide ongoing troubleshooting and technical support as your needs change."
      }
    ],
    "areaDescription": "Madny Digital Services provides computer systems design for businesses and individuals throughout Calgary, AB and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What does computer systems design actually include?",
        "answer": "It covers planning, configuring, integrating, and improving computer systems, including computer system planning and configuration, desktop and workstation solutions, hardware and software assessment, RAM, HDD, and SSD planning, storage and performance solutions, operating system configuration, peripheral and device integration, and data storage and backup solutions."
      },
      {
        "question": "How much does computer systems design cost in Calgary?",
        "answer": "Cost depends on your specific requirements, the size of your setup, and the hardware and software involved, so we do not list a fixed price. Contact us to discuss your needs and we can talk through the available options for your situation."
      },
      {
        "question": "Do I need a completely new computer system or can my existing one be improved?",
        "answer": "Replacing an entire computer system is not always necessary. In many situations, carefully selected upgrades such as RAM upgrades, HDD to SSD upgrades, or storage expansion can improve performance and extend the useful life of existing equipment, so we assess your system before recommending a full redesign."
      },
      {
        "question": "Can you design a computer system for my business specifically?",
        "answer": "Yes. Every business has different technology requirements, from dependable workstations and shared resources to specialized software, larger storage capacity, database solutions, or custom applications, and we develop computer environments that support your daily operations while considering reliability, performance, compatibility, and scalability."
      },
      {
        "question": "Will you help with data storage and backup planning as part of the design?",
        "answer": "Yes. We can help identify suitable storage and backup solutions based on the type and volume of data you work with, since your business and personal information can be one of the most important parts of your computer system."
      },
      {
        "question": "Do you only design new systems or can you also improve an existing one?",
        "answer": "Both. We evaluate your current setup, identify potential limitations, and develop a solution that fits your requirements and budget, whether that means setting up new computers, upgrading existing technology, or improving business systems already in place."
      }
    ],
    "ctaHeading": "Need a Better Computer System?",
    "ctaText": "Contact Madny Digital Services in Calgary for a consultation on planning, configuring, or improving your computer systems.",
    "relatedServices": ["hardware-software", "upgrade-your-computer", "data-backup-recovery"]
  },

  "computer/data-backup-recovery": {
    "metaTitle": "Data Backup & Recovery in Calgary | Madny Digital Services",
    "metaDescription": "Professional data backup and recovery for laptops, desktops, HDDs, and SSDs in Calgary. Protect your files or recover data after a drive failure. Call now.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Data Backup & Recovery in Calgary",
    "intro": "Photos, business documents, projects, and other digital files are often some of the most valuable content on your computer, and hardware failure, accidental deletion, system problems, or physical damage can put all of it at risk. Madny Digital Services provides professional data backup and recovery services for laptops, desktop computers, HDDs, SSDs, and supported storage devices across Calgary. We assess the condition of your device first and recommend backup, transfer, or recovery options based on your specific situation.",
    "problemsHeading": "Common Storage and Data Problems We Assess",
    "problems": [
      "Computer will not start",
      "Failed or failing hard drive",
      "HDD or SSD problems",
      "Accidentally deleted files",
      "Corrupted files or storage",
      "Windows startup problems",
      "Drive not detected by the computer",
      "Hard drive making unusual noises",
      "Missing files or folders",
      "Slow or failing hard drive",
      "Damaged file system",
      "Liquid-damaged or physically damaged computer"
    ],
    "servicesHeading": "Our Data Backup & Recovery Services",
    "services": [
      {
        "title": "Data Backup Services",
        "description": "Regular backups can help reduce the risk of losing important information when a computer or storage device fails. We help organize and transfer computer data, files and folders, photos, documents, and business data to suitable storage solutions, including HDD and SSD or external drive backup."
      },
      {
        "title": "Backup Before Repair or Upgrade",
        "description": "We can back up your data before a computer repair, hardware upgrade, or Windows installation, along with storage organization and external storage setup so your files are protected before work begins."
      },
      {
        "title": "Data Recovery Assessment",
        "description": "If important files become inaccessible, recovery may be possible depending on the condition of the computer or storage device. We assess the problem and determine what recovery options may be available, including for computers that will not start or have Windows startup problems."
      },
      {
        "title": "HDD & SSD Data Recovery",
        "description": "Hard drives and solid-state drives can fail for different reasons, such as a drive that stops being detected, develops errors, becomes corrupted, or prevents the computer from starting normally. We assess the condition of the drive to determine available options for accessing and recovering files."
      },
      {
        "title": "Damaged and Liquid-Damaged Devices",
        "description": "We can assess data recovery for damaged laptops and computers, including liquid-damaged devices, as well as external hard drives and USB storage devices."
      },
      {
        "title": "Data From Devices Requiring Replacement",
        "description": "When a computer or storage device needs to be replaced, we can assess options for recovering data from it and transferring that data to a new computer."
      }
    ],
    "processHeading": "How We Approach Backup & Recovery",
    "process": [
      {
        "step": "Assess the Device",
        "description": "We assess the condition of your laptop, desktop, HDD, SSD, or storage device to understand the situation before recommending next steps."
      },
      {
        "step": "Identify Options",
        "description": "Based on that assessment, we determine what backup, transfer, or recovery options may be available for your specific case."
      },
      {
        "step": "Explain the Situation",
        "description": "We explain the situation and the available options before proceeding where practical, since recovery success depends on factors like the type of failure and the condition of the device."
      },
      {
        "step": "Backup, Transfer, or Recovery",
        "description": "We carry out the appropriate backup, data transfer, or recovery work, noting that severely physically damaged or electronically failed storage devices may require specialized recovery services beyond standard computer repair."
      }
    ],
    "areaDescription": "Madny Digital Services provides data backup and recovery for customers in Calgary and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Can you recover all my data if my hard drive fails?",
        "answer": "No data recovery service can guarantee that every file will be recoverable. Recovery success depends on factors such as the condition of the storage device, the type of failure, physical damage, corruption, previous data overwriting, encryption, and other technical factors. We assess the available recovery options and explain the situation before proceeding where practical."
      },
      {
        "question": "How much does data recovery cost in Calgary?",
        "answer": "Cost depends on the condition of your device and the type of failure involved, so we are not able to state a price without first assessing the situation. Contact us with details about your computer or storage device and we can go from there."
      },
      {
        "question": "How long does data backup or recovery take?",
        "answer": "Turnaround depends on the assessment of your specific device and the nature of the problem, so we cannot give a general timeframe. Reach out to us and we can discuss your situation directly."
      },
      {
        "question": "My computer will not start. Can you still get my files?",
        "answer": "We can assess data recovery for computers that will not start, including those with Windows startup problems, failed or failing hard drives, or damaged laptops and computers. Recovery options depend on the condition of the device, which we determine through assessment."
      },
      {
        "question": "My laptop was damaged by liquid. Is my data still accessible?",
        "answer": "We can assess data recovery for liquid-damaged computers as part of our service. Whether files remain accessible depends on the condition of the device, so an assessment is needed to determine available options."
      },
      {
        "question": "Should I back up my data before a computer repair or Windows reinstall?",
        "answer": "Yes. We offer backup before computer repair or upgrades and backup before Windows installation specifically to help protect your files before that kind of work is done."
      },
      {
        "question": "I accidentally deleted important files. Can you get them back?",
        "answer": "We can assess data recovery for accidentally deleted files as well as corrupted files or storage. Whether recovery is possible depends on the condition of the storage device, which we determine after assessment."
      }
    ],
    "ctaHeading": "Need to Backup or Recover Your Data?",
    "ctaText": "Whether you need to protect important files, transfer data to a new computer, or recover information from a damaged system, contact Madny Digital Services in Calgary at (403) 708-8214 to assess your options.",
    "relatedServices": [
      "computer-system-design",
      "hardware-software",
      "sales-and-service"
    ]
  },

  "computer/hardware-software": {
    "metaTitle": "Computer Hardware & Software Services Calgary | Madny Digital",
    "metaDescription": "Hardware upgrades, Windows setup, Microsoft Office installation, and antivirus configuration for Calgary laptops and desktops. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Computer Hardware & Software Services in Calgary",
    "intro": "Whether your computer needs new hardware installed, software configured, Microsoft Office set up, antivirus protection installed, or help resolving a problem, Madny Digital Services provides professional hardware and software services for laptops and desktop computers across Calgary. We work with both businesses and individuals to help keep computers properly configured, updated, secure, and ready for everyday use.",
    "problemsHeading": "Signs You May Need Hardware or Software Help",
    "problems": [
      "Computer hardware that has become outdated, damaged, or insufficient for your needs",
      "Insufficient RAM or storage slowing your system down",
      "A laptop battery, screen, keyboard, or charging port that needs replacing",
      "Windows or software that needs installing, updating, or troubleshooting",
      "Microsoft Office not installed or not properly configured",
      "No antivirus or security software protecting your computer",
      "Drivers or peripherals that are not installed or working correctly",
      "Unwanted software cluttering or slowing down your system",
      "A new computer that still needs to be set up and configured"
    ],
    "servicesHeading": "What Our Hardware & Software Services Include",
    "services": [
      {
        "title": "Computer Hardware Services",
        "description": "We install, replace, and upgrade computer components including RAM, storage, batteries, laptop screens, keyboards, charging ports, and desktop hardware, plus Wi-Fi and Bluetooth hardware, peripherals, and new hardware setup. We also provide hardware troubleshooting and component compatibility assessment."
      },
      {
        "title": "Computer Software Services",
        "description": "We provide software installation and configuration for supported Windows computers and applications, including driver installation and updates, software updates, application configuration, email application setup, printer and scanner software setup, system optimization, and removal of unwanted software."
      },
      {
        "title": "Microsoft Office Installation",
        "description": "We assist with installation and setup of Microsoft 365 and supported Office applications such as Word, Excel, PowerPoint, Outlook, and OneNote. Customers must have a valid Microsoft account, subscription, or software licence where required."
      },
      {
        "title": "Antivirus Installation & Computer Security",
        "description": "We install and configure supported antivirus and security software based on your computer and requirements, including system security scans, malware assessment, removal of detected unwanted software, browser security checks, and basic Windows security configuration."
      },
      {
        "title": "Windows Installation & Setup",
        "description": "For a new computer, a replaced storage drive, or a fresh operating system install, we assist with supported Windows installation and configuration, including driver installation, system updates, user account setup, and basic security configuration."
      },
      {
        "title": "New Computer Setup",
        "description": "We help configure a newly purchased laptop or desktop so it is ready for work, business, school, or everyday use, covering initial Windows configuration, Office setup, antivirus installation, email and peripheral setup, and file transfer where applicable."
      }
    ],
    "processHeading": "How Our Hardware & Software Service Works",
    "process": [
      {
        "step": "Assessment",
        "description": "We start by understanding whether your computer needs new hardware installed, software configured, or a problem diagnosed and resolved."
      },
      {
        "step": "Hardware or Software Work",
        "description": "Depending on your needs, we install or upgrade hardware components, or install and configure software such as Windows, Microsoft Office, drivers, and applications."
      },
      {
        "step": "Security Configuration",
        "description": "Where needed, we install and configure supported antivirus and security software and apply basic security configuration to help protect your computer."
      },
      {
        "step": "Final Setup",
        "description": "We complete system updates, user account setup, and basic system optimization so your computer is properly configured and ready for everyday use."
      }
    ],
    "areaDescription": "Madny Digital Services provides computer hardware and software services for laptops and desktops throughout Calgary, AB and the surrounding communities of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Can you upgrade the RAM or storage in my laptop or desktop?",
        "answer": "Yes. Our hardware services may include RAM installation and upgrades, storage expansion, and desktop hardware upgrades, along with component compatibility assessment to help determine the right options for your computer."
      },
      {
        "question": "Do you install Microsoft Office on laptops and desktops?",
        "answer": "Yes, we can assist with the installation and setup of Microsoft 365 and supported Microsoft Office applications such as Word, Excel, PowerPoint, Outlook, and OneNote. You will need a valid Microsoft account, subscription, or software licence where required."
      },
      {
        "question": "Can antivirus software guarantee my computer is fully protected?",
        "answer": "No antivirus or security solution can guarantee complete protection against every cybersecurity threat. We can install and configure supported antivirus and security software based on your computer and requirements, but safe browsing, software updates, and regular backups remain important."
      },
      {
        "question": "How much does a hardware upgrade or software service cost?",
        "answer": "Cost depends on the specific hardware or software service, your computer model, and its condition. Contact us in Calgary and we can assess your situation and discuss the right options for your system."
      },
      {
        "question": "Do I need a Windows licence for a fresh installation?",
        "answer": "A valid Windows licence may be required depending on your computer and the type of installation. We can assist with supported Windows installation and configuration once licensing is in place."
      },
      {
        "question": "Can you help set up a brand new computer?",
        "answer": "Yes. New computer setup may include initial Windows configuration, system updates, Microsoft Office setup, antivirus installation, email setup, printer and peripheral setup, required software installation, user account configuration, file transfer where applicable, and basic system optimization."
      }
    ],
    "ctaHeading": "Need Hardware or Software Help?",
    "ctaText": "Whether you need Microsoft Office installed, antivirus protection configured, Windows set up, new hardware installed, or a computer problem diagnosed, contact Madny Digital Services in Calgary today.",
    "relatedServices": [
      "computer-system-design",
      "data-backup-recovery",
      "sales-and-service"
    ]
  },

  "computer/liquid-damage": {
    "metaTitle": "Laptop Liquid Damage Repair Calgary | Madny Digital",
    "metaDescription": "Spilled water, coffee, or juice on your laptop in Calgary? Get professional liquid damage diagnosis and repair from Madny Digital Services. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Laptop Liquid Damage Repair in Calgary",
    "intro": "Spilled water, coffee, juice, or another liquid on your laptop? Liquid exposure can affect the keyboard, motherboard, battery, charging system, display, and other internal components. Madny Digital Services provides professional laptop liquid damage diagnosis and repair in Calgary. We inspect the affected device, identify visible signs of liquid damage and corrosion, and determine which components may require cleaning, repair, or replacement.",
    "problemsHeading": "Common Signs of Laptop Liquid Damage",
    "problems": [
      "Laptop not turning on",
      "Keyboard keys not working",
      "Laptop shutting down unexpectedly",
      "Charging problems",
      "Battery not charging",
      "Screen or display problems",
      "Touchpad not responding",
      "USB or other ports not working",
      "Unusual system behaviour",
      "Overheating or performance problems",
      "Internal corrosion",
      "Problems appearing after a liquid spill"
    ],
    "servicesHeading": "Our Liquid Damage Diagnosis and Repair Services",
    "services": [
      {
        "title": "Internal Inspection and Assessment",
        "description": "We inspect the laptop and assess liquid residue and corrosion to determine the condition of affected components before recommending available repair options."
      },
      {
        "title": "Internal Component Cleaning and Corrosion Treatment",
        "description": "Depending on the condition of the laptop, our service may involve internal cleaning and corrosion treatment of components affected by the liquid exposure."
      },
      {
        "title": "Motherboard and Charging System Diagnosis",
        "description": "We inspect the motherboard, charging system, and USB or charging ports, along with internal connectors and cables, to identify components affected by moisture or corrosion."
      },
      {
        "title": "Keyboard and Battery Assessment",
        "description": "Our service may include keyboard replacement along with battery assessment or replacement where the liquid exposure has affected these components."
      },
      {
        "title": "Damaged Component Replacement",
        "description": "Where cleaning or repair is not sufficient, our service may include replacement of damaged parts along with inspection of storage devices and display connections."
      },
      {
        "title": "System Testing After Repair",
        "description": "After cleaning, repair, or component replacement, we test the system to check overall functionality following the liquid damage service."
      }
    ],
    "processHeading": "Our Liquid Damage Diagnosis and Repair Process",
    "process": [
      {
        "step": "Inspection",
        "description": "Our technicians inspect the laptop, including the motherboard and internal components, keyboard and touchpad, battery and charging system, ports, connectors, and storage devices, to determine the condition of affected components."
      },
      {
        "step": "Liquid Residue and Corrosion Assessment",
        "description": "We assess liquid residue and corrosion and check for signs of moisture, since the extent of liquid damage depends on the type and amount of liquid, where it entered the laptop, how long components were exposed, and whether the device remained powered on."
      },
      {
        "step": "Cleaning, Repair, or Replacement",
        "description": "Depending on the condition of the laptop, service may involve internal component cleaning, motherboard diagnosis, keyboard replacement, battery assessment or replacement, charging system diagnosis, or replacement of damaged parts."
      },
      {
        "step": "System Testing",
        "description": "Once cleaning, repair, or replacement is complete, we test the system to check its overall functionality after the repair."
      }
    ],
    "areaDescription": "Madny Digital Services provides laptop liquid damage diagnosis and repair for customers in Calgary, AB and nearby areas including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Can a laptop that had liquid spilled on it still be repaired?",
        "answer": "In many cases, liquid-damaged laptops can be assessed and repaired, but successful repair depends on the extent of the damage. Minor exposure may only require cleaning or replacement of a limited number of components, while severe liquid damage may affect the motherboard and multiple internal parts. Because corrosion and electrical damage can develop over time, liquid-damage repair and long-term device reliability cannot be guaranteed."
      },
      {
        "question": "What should I do right after spilling liquid on my laptop?",
        "answer": "If liquid has entered your laptop, continuing to use or charge the device may increase the risk of further electrical damage. If it can be done safely, turn the laptop off, disconnect the charger, and avoid repeatedly trying to power it back on. Have the device professionally inspected as soon as practical."
      },
      {
        "question": "How much does laptop liquid damage repair cost in Calgary?",
        "answer": "The cost depends on the extent and location of the liquid damage and which components, such as the motherboard, keyboard, battery, or ports, need cleaning, repair, or replacement. Bring your laptop to Madny Digital Services for a professional assessment and we'll explain the available options for your specific device."
      },
      {
        "question": "My laptop was still working after the spill, does that mean it's fine?",
        "answer": "Not necessarily. Liquid damage does not always cause immediate failure. A laptop may continue working temporarily before developing problems as moisture or corrosion affects internal components, so it's worth having the device professionally inspected even if it still seems to work."
      },
      {
        "question": "Can you recover my files if my laptop can't be fully repaired after liquid damage?",
        "answer": "If the laptop cannot be fully repaired, recovering important files may still be possible depending on the condition of the storage device and the nature of the damage. Madny Digital Services can assess available data recovery options when required, though data recovery results depend on the condition of the device and storage media and cannot be guaranteed."
      },
      {
        "question": "How long does liquid damage repair take?",
        "answer": "Turnaround time depends on the assessment of your specific laptop and which components, such as the motherboard, keyboard, battery, or charging system, are affected. Bring your laptop in for a professional diagnosis and we can discuss the options available for your device."
      }
    ],
    "ctaHeading": "Spilled Liquid on Your Laptop?",
    "ctaText": "Bring your laptop to Madny Digital Services in Calgary for professional liquid damage diagnosis, or call (403) 708-8214 to discuss the available cleaning, repair, replacement, or data recovery options.",
    "relatedServices": [
      "motherboard-repair",
      "replace-keyboard",
      "replace-battery",
      "replace-ram-hdd-ssd"
    ]
  },

  "computer/motherboard-repair": {
    "metaTitle": "Laptop Motherboard Repair Calgary | Madny Digital Services",
    "metaDescription": "Laptop won't turn on or has power, charging, or display issues in Calgary? Get professional motherboard diagnosis and repair. Contact us for an assessment.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Laptop Motherboard Repair in Calgary",
    "intro": "The motherboard connects and controls essential hardware inside your laptop, including the processor, memory, storage, charging system, and display. When it develops a problem, your laptop may stop working completely or show power, charging, display, performance, or connectivity issues. Madny Digital Services provides professional laptop motherboard diagnosis and repair in Calgary, inspecting the device to identify the likely source of the problem and determine whether motherboard repair or another hardware solution is the right fit.",
    "problemsHeading": "Common Signs of Motherboard Problems",
    "problems": [
      "Laptop not turning on",
      "No power or intermittent power",
      "Laptop turns on but does not boot",
      "Black screen or no display",
      "Unexpected shutdowns or restarts",
      "Charging problems",
      "USB or other ports not working",
      "Laptop overheating",
      "Hardware components not being detected",
      "Problems following liquid exposure",
      "Unstable system performance",
      "Laptop powers on and immediately shuts down"
    ],
    "servicesHeading": "Our Motherboard Repair Services",
    "services": [
      {
        "title": "Motherboard Fault Diagnosis",
        "description": "We inspect power and charging behaviour, motherboard condition, internal connections, and other related hardware to find the actual source of the problem before recommending any work."
      },
      {
        "title": "Power and Charging Circuit Troubleshooting",
        "description": "Power-related troubleshooting and charging circuit assessment to determine whether power or charging issues are coming from the motherboard or another component."
      },
      {
        "title": "Internal Connector and Port Repair",
        "description": "We assess and repair internal connectors and troubleshoot port-related motherboard issues, including USB and other ports that stop working."
      },
      {
        "title": "Corrosion and Liquid Damage Assessment",
        "description": "For laptops exposed to liquid, we inspect the motherboard and internal components for corrosion and residue to determine the extent of visible damage and available repair options."
      },
      {
        "title": "Component-Level Repair and Cleaning",
        "description": "Depending on the fault, service may involve motherboard cleaning where appropriate, damaged component assessment, and component replacement where the affected part is repairable."
      },
      {
        "title": "Post-Repair Testing",
        "description": "Once repair work is complete, we test the laptop to check that the motherboard and related components are functioning as expected."
      }
    ],
    "processHeading": "Our Motherboard Diagnosis and Repair Process",
    "process": [
      {
        "step": "Hardware Assessment",
        "description": "Since a laptop that won't turn on doesn't automatically have a failed motherboard, our technicians assess the charger, battery, charging port, memory, storage, and display system before recommending motherboard work."
      },
      {
        "step": "Motherboard Inspection",
        "description": "We inspect motherboard condition, internal connections, RAM and storage connections, charging components, and signs of overheating or liquid damage and corrosion."
      },
      {
        "step": "Repair or Component Replacement",
        "description": "Depending on the motherboard design and extent of the damage, we troubleshoot connections, address damaged components, clean corrosion, or replace affected parts where repairable."
      },
      {
        "step": "Testing After Repair",
        "description": "After the repair or component replacement is complete, the laptop is tested to confirm the hardware issue has been addressed."
      }
    ],
    "areaDescription": "Madny Digital Services provides laptop motherboard repair in Calgary, AB, and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "My laptop won't turn on at all. Does that mean the motherboard is dead?",
        "answer": "Not necessarily. A laptop that does not turn on does not automatically have a failed motherboard. The problem could be related to the charger, battery, charging port, memory, storage, display system, or another internal component, which is why we assess the laptop before recommending motherboard work."
      },
      {
        "question": "How much does laptop motherboard repair cost in Calgary?",
        "answer": "The exact repair depends on the motherboard design, condition, availability of compatible components, and extent of the damage, so we don't publish a fixed price. Contact us and we can assess your laptop to explain the available options."
      },
      {
        "question": "How long does motherboard repair take?",
        "answer": "Turnaround depends on the specific fault, the laptop model, and what the diagnosis finds, so we can't state a fixed timeframe upfront. Bring your laptop in for an assessment and we can discuss what's involved for your situation."
      },
      {
        "question": "Should I repair or replace my motherboard?",
        "answer": "Not every motherboard problem requires replacing the entire board. Depending on the fault, repairing the affected area or component may be possible. When repair is not practical, replacement may be considered if a compatible board is available and makes sense based on the laptop's overall condition and value."
      },
      {
        "question": "My laptop had liquid spilled on it and now has motherboard issues. Can it be fixed?",
        "answer": "Liquid exposure is a common cause of motherboard problems, since moisture and residue can affect electrical connections and lead to corrosion over time. We can inspect the motherboard and other internal components to determine the extent of visible damage and available repair options, though severe liquid or electrical damage may not always be economically or technically repairable."
      },
      {
        "question": "If my motherboard fails, will I lose my files?",
        "answer": "Motherboard failure does not necessarily mean your files are lost, since in many laptops data is stored separately on an SSD or other storage device. If the laptop cannot be restored to normal operation, we can assess available options for accessing or recovering your data, though recovery depends on the condition and configuration of the storage device and cannot be guaranteed."
      }
    ],
    "ctaHeading": "Laptop Won't Turn On?",
    "ctaText": "Bring your laptop to Madny Digital Services in Calgary for professional motherboard diagnosis and repair, or call (403) 708-8214 to discuss your options.",
    "relatedServices": [
      "liquid-damage",
      "replace-ram-hdd-ssd",
      "replace-battery",
      "upgrade-your-computer"
    ]
  },

  "computer/replace-battery": {
    "metaTitle": "Laptop Battery Replacement Calgary | Madny Digital Services",
    "metaDescription": "Laptop draining fast or not holding a charge in Calgary? We diagnose battery and charging issues and offer professional replacement. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Laptop Battery Replacement in Calgary",
    "intro": "Is your laptop battery draining fast, refusing to charge properly, or no longer holding a charge at all? Battery performance naturally declines over time, and a worn or damaged battery can affect how portable and reliable your laptop is. Madny Digital Services offers professional laptop battery diagnosis and replacement in Calgary, assessing the charging and battery condition to help determine whether a battery replacement or another type of repair is actually needed.",
    "problemsHeading": "Common Laptop Battery Problems",
    "problems": [
      "Battery draining unusually fast",
      "Laptop battery not charging",
      "Battery not holding a charge",
      "Laptop only works when plugged in",
      "Battery percentage changing unexpectedly",
      "Laptop shutting down unexpectedly",
      "Battery not detected by the computer",
      "Reduced battery runtime",
      "Charging stops before reaching full capacity",
      "Battery-related system warnings",
      "Physically swollen or damaged battery"
    ],
    "servicesHeading": "What Our Battery Service Covers",
    "services": [
      {
        "title": "Battery and Power Diagnosis",
        "description": "A laptop that will not hold a charge does not always have a faulty battery. We assess the laptop to find out whether the issue is really the battery, or something else entirely."
      },
      {
        "title": "Charging System Check",
        "description": "We may check battery condition, charging behaviour, battery health information, power adapter functionality, charging port connection, and battery detection to find the real cause of the power issue."
      },
      {
        "title": "Compatible Battery Replacement",
        "description": "When a battery has reached the end of its useful life, we select a compatible replacement battery and perform an internal or removable battery replacement depending on your laptop."
      },
      {
        "title": "Connection Inspection and Testing",
        "description": "Our service may include battery connection inspection, charging functionality testing, power and startup testing, and a final laptop functionality check to confirm reliable operation."
      },
      {
        "title": "Swollen Battery Awareness",
        "description": "If the laptop case, keyboard, trackpad, or bottom panel is lifting or separating, this can indicate a swollen battery. We handle these carefully rather than puncturing, compressing, or removing them without proper precautions."
      }
    ],
    "processHeading": "Our Battery Diagnosis and Replacement Process",
    "process": [
      {
        "step": "Inspect and Diagnose",
        "description": "We inspect the device and identify the likely cause of the charging or power issue, since it may relate to the battery, power adapter, charging port, operating system, internal hardware, or power-management settings."
      },
      {
        "step": "Assess the Battery and Charging System",
        "description": "We check battery condition, charging behaviour, battery health information, power adapter functionality, charging port connection, and battery detection before recommending a service."
      },
      {
        "step": "Replace the Battery",
        "description": "If replacement is the appropriate solution, we inspect the existing battery, select a compatible replacement, and perform an internal or removable battery replacement along with a connection inspection."
      },
      {
        "step": "Test and Confirm",
        "description": "We test charging functionality, power and startup, and perform a final laptop functionality check to confirm the replacement restored normal use."
      }
    ],
    "areaDescription": "Madny Digital Services provides laptop battery replacement for customers in Calgary, AB and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Does my laptop battery need to be replaced, or is something else causing the problem?",
        "answer": "Not necessarily. A laptop that does not hold a charge does not always have a faulty battery. Charging problems can also be related to the power adapter, charging port, operating system, internal hardware, or power-management settings, so we assess the laptop first to determine the appropriate service."
      },
      {
        "question": "How much does laptop battery replacement cost in Calgary?",
        "answer": "Cost depends on the assessment and the laptop model, since every device and situation is different. Contact Madny Digital Services in Calgary and we can look at your laptop and recommend an appropriate solution."
      },
      {
        "question": "How long does a laptop battery replacement take?",
        "answer": "Turnaround depends on the specific laptop and the condition of the battery and charging system, so it is best to contact us directly so we can give you more detail after assessing your device."
      },
      {
        "question": "Should I replace my laptop battery or get a new laptop?",
        "answer": "If your laptop is still performing well but battery life has significantly decreased, replacing the battery may be a practical alternative to replacing the entire computer. A new battery may help improve portability and let you use your laptop for longer without staying plugged in."
      },
      {
        "question": "My laptop case or trackpad looks like it's lifting up. Is that a battery problem?",
        "answer": "If you notice the laptop case, keyboard, trackpad, or bottom panel lifting or separating, this can be a sign of a swollen battery. Stop using the device and have it professionally inspected, since a swollen battery should be handled carefully and should not be punctured, compressed, or removed without appropriate knowledge and precautions."
      },
      {
        "question": "What are the signs my laptop battery is failing?",
        "answer": "Common signs include the battery draining unusually fast, not charging properly, not holding a charge, the laptop only working when plugged in, the battery percentage changing unexpectedly, unexpected shutdowns, the battery not being detected, reduced runtime, charging stopping before full capacity, and battery-related system warnings."
      }
    ],
    "ctaHeading": "Need a New Laptop Battery?",
    "ctaText": "Bring your laptop to Madny Digital Services in Calgary for professional battery diagnosis and replacement, and we'll recommend an appropriate solution for your device.",
    "relatedServices": [
      "replace-charging-ports",
      "liquid-damage",
      "motherboard-repair",
      "upgrade-your-computer"
    ]
  },

  "computer/replace-charging-ports": {
    "metaTitle": "Laptop Charging Port Repair Calgary | Madny Digital Services",
    "metaDescription": "Laptop won't charge? Professional charging port diagnosis, repair, and replacement in Calgary. We find the real cause before recommending a fix.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Laptop Charging Port Repair and Replacement in Calgary",
    "intro": "Is your laptop having trouble charging? A loose, damaged, or non-working charging port can stop your laptop from receiving steady power or charging the battery properly. Madny Digital Services offers professional charging port diagnosis, repair, and replacement in Calgary, and we check whether the issue actually comes from the port, the charger, the battery, an internal connection, or another component before recommending a solution.",
    "problemsHeading": "Common Laptop Charging Port Problems",
    "problems": [
      "Laptop not charging",
      "Loose charging connection",
      "Charger only works at certain angles",
      "Charging repeatedly connects and disconnects",
      "Damaged or broken charging port",
      "Charger does not fit securely",
      "Laptop receives no power",
      "Charging port pushed inside the laptop",
      "Intermittent charging",
      "Physical damage around the charging connector"
    ],
    "servicesHeading": "What Our Charging Port Service Covers",
    "services": [
      {
        "title": "Charging Port Diagnosis",
        "description": "A laptop that will not charge does not automatically need a new charging port. We inspect the laptop and charging system to find the actual cause before recommending replacement whenever possible."
      },
      {
        "title": "What We May Check",
        "description": "We may check charging port condition, charger and connector fit, power connection, battery charging behaviour, internal charging connection, and signs of physical damage."
      },
      {
        "title": "Charging Port Repair and Replacement",
        "description": "If the charging port is damaged, loose, or no longer working correctly, our technicians assess whether repair or replacement is appropriate for your specific laptop model and condition."
      },
      {
        "title": "Repair Process",
        "description": "Depending on the laptop design, our service may include damaged charging port removal, compatible charging port replacement, internal connector inspection, and charging connection repair."
      },
      {
        "title": "Reassembly and Testing",
        "description": "Once the repair is complete, we handle reassembly and connection testing, battery charging verification, and final laptop functionality testing before your laptop is returned to you."
      },
      {
        "title": "Repair Before Replacing Your Laptop",
        "description": "A damaged charging port does not necessarily mean the laptop itself needs replacing. If the computer is otherwise functioning properly, repairing the charging connection may help restore normal operation and extend the useful life of your device."
      }
    ],
    "processHeading": "Our Charging Port Diagnosis and Repair Process",
    "process": [
      {
        "step": "Inspect the Charging System",
        "description": "We inspect the laptop and charging system, checking the port, charger and connector fit, power connection, battery charging behaviour, and any signs of physical damage."
      },
      {
        "step": "Identify the Actual Cause",
        "description": "Because charging port, charger, battery, and internal connection issues can look similar, we determine which component is actually responsible before recommending a solution."
      },
      {
        "step": "Repair or Replace",
        "description": "Depending on the laptop design and condition, our technicians perform damaged charging port removal, compatible replacement, internal connector inspection, or charging connection repair as appropriate."
      },
      {
        "step": "Reassemble and Verify",
        "description": "We complete reassembly and connection testing, verify battery charging behaviour, and run a final laptop functionality test before handing your laptop back."
      }
    ],
    "areaDescription": "Madny Digital Services provides laptop charging port repair and replacement for customers in Calgary, AB, and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "My laptop charger only works at certain angles. Is that the charging port?",
        "answer": "A charger that only connects at certain angles is one of the common signs of a charging port problem, but it can also involve the charger, connector fit, or an internal connection. We inspect the charging system to find the actual cause before recommending a repair."
      },
      {
        "question": "Does my laptop need a new charging port, or could something else be wrong?",
        "answer": "Not necessarily. A laptop that does not charge does not automatically need a new charging port. The issue may be related to the power adapter, battery, charging connector, internal hardware, or another component, so we inspect the laptop and charging system before recommending replacement whenever possible."
      },
      {
        "question": "How much does laptop charging port repair cost in Calgary?",
        "answer": "Cost depends on your laptop's design, model, and the actual cause of the charging problem, since the repair method depends on the specific laptop and condition. Bring your laptop in so we can assess it and explain the available options before any work is completed."
      },
      {
        "question": "How long does charging port repair take?",
        "answer": "Turnaround depends on your laptop model, its design, and whether the charging port is a separate component, connected through an internal cable, or integrated with other hardware. Contact us with your laptop's details so we can give you a better idea after assessment."
      },
      {
        "question": "Should I repair the charging port or just replace my laptop?",
        "answer": "A damaged charging port does not necessarily mean the laptop itself needs to be replaced. If the computer is otherwise functioning properly, repairing the charging connection may help restore normal operation and extend the useful life of your device. Our team can assess the problem and explain the available repair options before work is completed."
      },
      {
        "question": "My laptop is receiving no power at all. Can you fix that?",
        "answer": "Laptop receiving no power is one of the charging problems we diagnose. We inspect the charging port, charger and connector fit, power connection, battery charging behaviour, and internal charging connection to identify the cause before recommending a repair or replacement solution."
      }
    ],
    "ctaHeading": "Get Your Charging Port Fixed",
    "ctaText": "Bring your laptop to Madny Digital Services in Calgary for professional charging diagnosis and repair, and we will identify the problem and recommend the right solution.",
    "relatedServices": [
      "replace-battery",
      "motherboard-repair",
      "liquid-damage",
      "replace-laptop-screens"
    ]
  },

  "computer/replace-laptop-screens": {
    "metaTitle": "Laptop Screen Replacement Calgary | Madny Digital Services",
    "metaDescription": "Cracked, flickering, or dark laptop screen in Calgary? We diagnose the real cause and install a compatible replacement screen. Call (403) 708-8214.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Laptop Screen Replacement in Calgary",
    "intro": "A cracked, damaged, flickering, or non-working laptop screen can leave your computer difficult or impossible to use. Madny Digital Services provides professional laptop screen replacement for a wide range of laptop brands and models in Calgary. Our team diagnoses the display issue, determines whether the problem is actually the screen or another component, and recommends the appropriate repair or replacement option.",
    "problemsHeading": "Common Laptop Screen Problems We Repair",
    "problems": [
      "Cracked or physically damaged screen",
      "Black or blank laptop screen",
      "Flickering display",
      "Screen lines or distorted images",
      "Dim or unusually dark display",
      "Display discoloration",
      "Dead or damaged pixels",
      "Screen image cutting in and out",
      "Damaged LCD or LED panel",
      "Touchscreen display problems",
      "Display problems after accidental damage"
    ],
    "servicesHeading": "What Our Laptop Screen Service Covers",
    "services": [
      {
        "title": "Laptop Screen Diagnosis",
        "description": "A laptop with no display does not always have a damaged screen, so before recommending a replacement we assess the laptop to identify the likely cause, including internal display connections, graphics hardware, or software issues. This helps avoid replacing parts unnecessarily."
      },
      {
        "title": "What We Check",
        "description": "We check for physical screen damage, display functionality, screen connections, image and backlight issues, external display behaviour where appropriate, and other potential hardware or software causes."
      },
      {
        "title": "Compatible Screen Selection",
        "description": "When screen replacement is required, we identify a compatible replacement based on your laptop model and screen specifications, since displays can differ in size, resolution, connector type, refresh rate, and touchscreen capability."
      },
      {
        "title": "Screen Replacement and Testing",
        "description": "Our service may include removal of the damaged display, installation of a compatible replacement screen, display connection inspection, screen functionality testing, brightness and image testing, and final laptop testing after installation."
      },
      {
        "title": "Screens for Different Laptop Types",
        "description": "We can assess screen replacement options for many common laptop types, including standard, business, gaming, touchscreen, and 2-in-1 laptops, as well as high-resolution, LED, and LCD displays."
      },
      {
        "title": "Is It Worth Replacing?",
        "description": "A broken screen does not necessarily mean you need a new laptop. If the rest of your computer is working properly, replacing the display may let you continue using your existing device instead of replacing the entire system."
      }
    ],
    "processHeading": "Our Diagnosis and Replacement Process",
    "process": [
      {
        "step": "Diagnose the Display Issue",
        "description": "We assess the laptop to determine whether the problem is related to the screen itself or another component such as display connections, graphics hardware, or software."
      },
      {
        "step": "Identify a Compatible Screen",
        "description": "If screen replacement is required, we identify a compatible replacement screen based on your specific laptop model and its size, resolution, connector type, and other specifications."
      },
      {
        "step": "Remove and Replace the Display",
        "description": "We remove the damaged display, install the compatible replacement screen, and inspect the display connections as part of the installation."
      },
      {
        "step": "Test Functionality",
        "description": "We test screen functionality, brightness, and image quality, then perform a final test of the laptop after installation to confirm the display is working properly."
      }
    ],
    "areaDescription": "Madny Digital Services provides laptop screen replacement for customers throughout Calgary, AB and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How do I know if my laptop needs a new screen or something else is wrong?",
        "answer": "A laptop with no display does not always have a damaged screen. Display problems can also be related to internal display connections, graphics hardware, software, or other components, so we assess the laptop first to identify the likely cause before recommending a screen replacement."
      },
      {
        "question": "How much does laptop screen replacement cost in Calgary?",
        "answer": "Cost depends on the laptop model, the screen specifications required, and the condition of the device, so we do not list a fixed price. Bring your laptop in for an assessment and we can discuss the available options for your specific device."
      },
      {
        "question": "How long does a laptop screen replacement take?",
        "answer": "Turnaround depends on the laptop model and replacement screen availability, since compatible parts vary by device. Contact us with your laptop details and we can speak to what to expect for your situation."
      },
      {
        "question": "Is it worth replacing a laptop screen or should I just buy a new laptop?",
        "answer": "A broken screen does not necessarily mean you need a new laptop. If the rest of your computer is working properly, replacing the display may allow you to keep using your existing device instead of replacing the entire system. We can assess your laptop and discuss options based on its condition, compatible parts, and repair requirements."
      },
      {
        "question": "Can you fix a flickering or dim laptop screen without full replacement?",
        "answer": "Not every display problem means the screen or the laptop needs to be replaced. We diagnose issues like flickering, dim or unusually dark displays, and discoloration to determine the actual cause, since these can sometimes relate to connections or other components rather than the screen itself."
      },
      {
        "question": "Do you replace screens on touchscreen and gaming laptops?",
        "answer": "We can assess screen replacement options for many common laptop types, including standard, business, gaming, touchscreen, and 2-in-1 laptops, as well as high-resolution, LED, and LCD displays. Replacement availability depends on the laptop model and compatible parts."
      },
      {
        "question": "Will my laptop be tested after the screen is replaced?",
        "answer": "Yes. Our process includes display connection inspection, screen functionality testing, brightness and image testing, and a final laptop test after installation to confirm everything is working properly."
      }
    ],
    "ctaHeading": "Need Your Laptop Screen Replaced?",
    "ctaText": "Bring your laptop to Madny Digital Services in Calgary for professional diagnosis and screen replacement, or call (403) 708-8214 to discuss your device.",
    "relatedServices": [
      "replace-charging-ports",
      "replace-keyboard",
      "liquid-damage",
      "motherboard-repair"
    ]
  },

  "computer/replace-ram-hdd-ssd": {
    "metaTitle": "RAM, HDD & SSD Replacement Calgary | Madny Digital Services",
    "metaDescription": "Slow computer or low storage? Calgary RAM, HDD, and SSD replacement and upgrades for laptops and desktops. Call (403) 708-8214 for an assessment.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "RAM, HDD & SSD Replacement in Calgary",
    "intro": "If your computer is running slowly, running low on storage, or struggling to keep up with demanding programs, upgrading its RAM, hard drive, or solid-state drive can help improve performance, add storage capacity, and extend the useful life of the machine. Madny Digital Services provides professional RAM, HDD, and SSD replacement and upgrade services for laptops and desktop computers in Calgary. We assess your existing hardware and recommend compatible upgrade options based on your system and requirements.",
    "problemsHeading": "Signs You May Need a Hardware Upgrade",
    "problems": [
      "Slow computer performance",
      "Long startup times",
      "Applications taking too long to open",
      "System freezing or lagging",
      "Limited storage space",
      "Difficulty multitasking",
      "Hard drive errors",
      "Storage drive not being detected",
      "Frequent system slowdowns",
      "Older hardware affecting everyday performance"
    ],
    "servicesHeading": "RAM, HDD & SSD Services We Offer",
    "services": [
      {
        "title": "RAM Replacement & Upgrades",
        "description": "If your system has insufficient memory you may experience slow performance, freezing, or difficulty running several programs at once. We handle RAM replacement, memory upgrades, RAM capacity assessment, compatible memory selection, faulty RAM diagnosis, and memory functionality testing for laptops and desktops."
      },
      {
        "title": "HDD Replacement & Upgrades",
        "description": "Traditional hard disk drives can become slower or develop problems over time. If your hard drive is failing, making unusual noises, causing system errors, or running out of space, we offer hard drive replacement, storage capacity upgrades, failing drive assessment, new drive installation, and drive functionality testing."
      },
      {
        "title": "SSD Replacement & Upgrades",
        "description": "An SSD can provide significantly faster access to files and applications than many traditional hard drives. Upgrading from an HDD to a compatible SSD can help improve startup times, application loading, file access, and overall responsiveness, with SSD capacity upgrades and storage configuration and testing available."
      },
      {
        "title": "Hardware Compatibility Assessment",
        "description": "Not every RAM module, HDD, or SSD is compatible with every computer, since laptop and desktop systems differ in specifications, physical sizes, interfaces, capacities, and upgrade limitations. Before installing new hardware, we can check your computer's make and model, existing RAM capacity and type, maximum supported memory, available memory slots, and current storage configuration."
      },
      {
        "title": "Data Transfer & Drive Replacement",
        "description": "When replacing an HDD or SSD you may also need your existing files and system transferred to the new drive. Depending on the condition of the original drive and system configuration, data transfer or drive cloning options may be available, and we recommend maintaining a current backup of important files whenever possible."
      },
      {
        "title": "Upgrade Instead of Replacing Your Computer",
        "description": "A slow computer does not always need to be replaced. If the processor and other major components still meet your requirements, adding more RAM or upgrading from an HDD to an SSD may help improve performance and extend the useful life of the system."
      }
    ],
    "processHeading": "How We Handle Your RAM, HDD & SSD Upgrade",
    "process": [
      {
        "step": "Assessment",
        "description": "We assess your existing hardware, including your computer's make and model, current RAM and storage configuration, and overall system condition."
      },
      {
        "step": "Compatibility Check",
        "description": "We check available memory slots, maximum supported memory, storage connections, physical drive size requirements, and operating system requirements to determine suitable upgrade options."
      },
      {
        "step": "Replacement or Upgrade",
        "description": "We recommend and install compatible RAM, HDD, or SSD components based on your system and performance or storage needs, whether for a laptop or desktop."
      },
      {
        "step": "Data Transfer & Testing",
        "description": "Where possible we handle data transfer or drive cloning to the new storage device and test memory and drive functionality after installation."
      }
    ],
    "areaDescription": "Madny Digital Services provides RAM, HDD, and SSD replacement and upgrades for laptops and desktop computers throughout Calgary, AB, and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How much does a RAM, HDD, or SSD upgrade cost in Calgary?",
        "answer": "Cost depends on the components your computer needs and the assessment of your system, so we cannot quote a price without first checking your make and model, existing hardware, and upgrade options. Contact us and we can go over what your device requires."
      },
      {
        "question": "How long does a RAM, HDD, or SSD replacement take?",
        "answer": "Turnaround depends on the assessment, the components involved, and your system's condition, so we are not able to state a fixed timeframe in advance. Reach out to us and we can discuss your situation."
      },
      {
        "question": "Should I upgrade my computer or just replace it?",
        "answer": "A slow computer does not always need to be replaced. If the processor and other major components still meet your requirements, adding more RAM or upgrading from an HDD to an SSD may help improve performance and extend the useful life of the system, and our team can assess your computer to recommend whether an upgrade is practical."
      },
      {
        "question": "Will upgrading to an SSD actually make my computer faster?",
        "answer": "An SSD uses solid-state storage technology and can provide significantly faster access to files and applications compared with many traditional hard drives, which can help improve startup times, application loading, file access, and overall system responsiveness."
      },
      {
        "question": "Will I lose my files when my hard drive or SSD is replaced?",
        "answer": "When replacing an HDD or SSD, data transfer or drive cloning options may be available depending on the condition of the original drive and system configuration. If the original storage device is damaged or failing, successful transfer or recovery of all data cannot be guaranteed, so we recommend maintaining a current backup of important files whenever possible."
      },
      {
        "question": "Is every RAM, HDD, or SSD compatible with my laptop or desktop?",
        "answer": "Not every RAM module, HDD, or SSD is compatible with every computer, since laptop and desktop systems have different specifications, physical sizes, interfaces, capacities, and upgrade limitations. Before installing new hardware we assess your computer to determine suitable upgrade options."
      }
    ],
    "ctaHeading": "Need More Speed or Storage?",
    "ctaText": "Bring your laptop or desktop computer to Madny Digital Services in Calgary and we'll assess your system and recommend compatible RAM, HDD, or SSD upgrades for your performance and storage needs.",
    "relatedServices": [
      "upgrade-your-computer",
      "motherboard-repair",
      "liquid-damage",
      "replace-battery"
    ]
  },

  "computer/sales-and-service": {
    "metaTitle": "Computer & Laptop Sales and Service Calgary | Madny Digital Services",
    "metaDescription": "Laptop sales, computer accessories, upgrades, and technical support in Calgary. New and refurbished laptops with warranty. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Computer & Laptop Sales and Service in Calgary",
    "intro": "Looking for a laptop, a replacement charger, a computer cable, or professional computer service? Madny Digital Services offers computer and laptop sales, accessories, setup, upgrades, and technical support to customers throughout Calgary and the surrounding areas. We sell laptops backed by applicable warranty coverage and stock a range of essential accessories, cables, chargers, and power connections, and our team can help you choose compatible products and provide setup or technical assistance whenever you need it.",
    "problemsHeading": "Common Reasons Customers Reach Out",
    "problems": [
      "Need a new or refurbished laptop for everyday use, business, school, or work",
      "Looking for a replacement laptop charger or power adapter",
      "Need a computer power cable, HDMI, VGA, DVI, or DisplayPort cable",
      "Want a new wireless keyboard or wireless mouse",
      "Need a USB cable, USB adapter, or other computer connector",
      "Setting up computers or systems for a home or business",
      "Need help choosing compatible products for an existing computer",
      "Replacing an old laptop or adding an extra monitor cable"
    ],
    "servicesHeading": "What Our Computer & Laptop Sales and Service Includes",
    "services": [
      {
        "title": "Laptop Sales",
        "description": "We help you find the right laptop for everyday use, business, school, work, or general productivity based on your requirements and budget. Our selection may include new laptops, refurbished laptops, business laptops, everyday-use laptops, laptops for students, and different RAM and storage configurations, though product selection and availability may vary."
      },
      {
        "title": "Laptops With Warranty",
        "description": "Laptops we sell include applicable warranty coverage based on the product and its condition. Warranty terms, duration, coverage, and exclusions may vary between new and refurbished products, and the applicable warranty information is provided with the product at the time of purchase."
      },
      {
        "title": "Computer Accessories",
        "description": "We carry a range of commonly used computer accessories for laptops, desktops, monitors, and other supported devices, including laptop chargers, power adapters, power cables, HDMI, VGA, DVI, and DisplayPort cables, wireless keyboards and mice, USB cables and adapters, and other connectors. Availability and compatibility may vary by product."
      },
      {
        "title": "Computer Service & Technical Support",
        "description": "Beyond sales, our team assists with ongoing computer services including troubleshooting, maintenance, upgrades, and repairs, giving customers one place to purchase a computer, find accessories, upgrade their system, and receive technical support when needed."
      },
      {
        "title": "Setup, Upgrades & Software Installation",
        "description": "Our team can assist with setup, software installation, upgrades, and technical support for supported computers, along with helping you choose compatible products for your existing system."
      },
      {
        "title": "Solutions for Home, Business & Everyday Use",
        "description": "Whether you are replacing an old laptop, setting up computers for your business, looking for an extra monitor cable, or need a new laptop charger, we focus on practical technology solutions based on your requirements rather than simply selling you a product you may not need."
      }
    ],
    "processHeading": "How We Help You Buy or Service a Computer",
    "process": [
      {
        "step": "Tell Us Your Needs",
        "description": "We start by understanding what you need a laptop or accessory for, whether that is everyday use, business, school, or general productivity, along with your budget."
      },
      {
        "step": "Find the Right Option",
        "description": "Based on your requirements, we help you choose from available laptops, such as new, refurbished, business, everyday-use, or student laptops, or the compatible accessories, cables, chargers, and power connections you need."
      },
      {
        "step": "Purchase With Warranty",
        "description": "Laptops sold include applicable warranty coverage based on the product and its condition, with warranty terms, duration, and coverage provided with the product at the time of purchase."
      },
      {
        "step": "Setup & Ongoing Support",
        "description": "Our team provides setup, software installation, upgrades, and technical support for supported computers, along with ongoing troubleshooting, maintenance, and repairs as needed."
      }
    ],
    "areaDescription": "Madny Digital Services provides computer and laptop sales and service to customers in Calgary and the nearby areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Do you sell new laptops or only refurbished ones?",
        "answer": "We offer both. Our available laptop selection may include new laptops, refurbished laptops, business laptops, everyday-use laptops, and laptops for students with different RAM and storage configurations, though product selection and availability may vary."
      },
      {
        "question": "Do the laptops you sell come with a warranty?",
        "answer": "Yes, laptops sold by Madny Digital Services include applicable warranty coverage based on the product and its condition. Warranty terms, duration, coverage, and exclusions may vary between new and refurbished products, and the details are provided with the product at the time of purchase."
      },
      {
        "question": "How much does a laptop or accessory cost?",
        "answer": "Pricing depends on the specific product, its condition, specifications, brand, and availability at the time. Contact us with your requirements and budget so we can help you find an appropriate option."
      },
      {
        "question": "What kind of computer accessories do you carry?",
        "answer": "We carry commonly used accessories for laptops, desktops, monitors, and other supported devices, including laptop chargers and power adapters, computer power cables, HDMI, VGA, DVI, and DisplayPort cables, new wireless keyboards and mice, USB cables and adapters, and other computer connectors. Availability and compatibility may vary by product, so contact us to check on a specific item."
      },
      {
        "question": "Do you only sell computers, or do you also provide repairs and support?",
        "answer": "We provide more than sales. Our team assists with ongoing computer services including diagnostics, hardware and software troubleshooting, upgrades, and repairs, giving customers one place to purchase a computer, find accessories, upgrade their system, and get technical support when needed."
      },
      {
        "question": "Can you help me choose the right laptop or accessory for my needs?",
        "answer": "Yes, we focus on practical technology solutions based on your actual requirements rather than simply selling a product you may not need. Whether you are replacing an old laptop, setting up computers for a business, or looking for a specific cable or charger, our team can help you find an appropriate product or service."
      }
    ],
    "ctaHeading": "Need a Laptop or Computer Service?",
    "ctaText": "Contact Madny Digital Services for computer and laptop sales, accessories, upgrades, and professional technical support in Calgary and nearby areas.",
    "relatedServices": [
      "hardware-software",
      "data-backup-recovery"
    ]
  },

  "computer/upgrade-your-computer": {
    "metaTitle": "Computer Upgrades Calgary | RAM, SSD & More | Madny Digital Services",
    "metaDescription": "Computer running slow or low on storage? Get a professional upgrade assessment in Calgary. RAM, SSD, and hardware upgrades. Call (403) 708-8214.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Computer Upgrades in Calgary",
    "intro": "Is your computer getting slower, running out of storage, or struggling to keep up with newer software? A full replacement is not always necessary. Madny Digital Services provides professional computer upgrade services for laptops and desktop computers in Calgary. We assess your current system, learn how you use it, and recommend compatible upgrades based on your performance needs and computer specifications.",
    "problemsHeading": "Signs Your Computer May Benefit From an Upgrade",
    "problems": [
      "Computer feels slower than it used to",
      "Running out of storage space",
      "Struggling to run newer software",
      "Slows down with multiple applications, browser tabs, or business programs open",
      "Still using a traditional HDD instead of an SSD",
      "System has insufficient RAM",
      "Slow startup times and application loading",
      "Generally working well but overall performance feels behind"
    ],
    "servicesHeading": "Our Computer Upgrade Services",
    "services": [
      {
        "title": "RAM and Memory Upgrades",
        "description": "If your computer slows down with multiple applications, heavy web browsing, or business software open, additional RAM may help improve performance. We assess your existing memory, available slots, supported capacity, and compatible RAM options before recommending an upgrade."
      },
      {
        "title": "HDD to SSD Upgrades",
        "description": "Replacing a traditional hard disk drive with a compatible solid-state drive can be one of the most effective upgrades for many older computers, helping improve startup times, application loading, file access, and everyday performance. We assess SATA, M.2, and NVMe SSD options depending on what your computer supports."
      },
      {
        "title": "Storage Expansion",
        "description": "If you are constantly running out of storage, we assess options for increasing your computer's available capacity, which may include replacing the existing drive with a larger SSD or HDD, installing additional storage, or configuring an appropriate storage solution."
      },
      {
        "title": "Desktop Hardware Upgrades",
        "description": "Desktop computers can often provide additional upgrade possibilities depending on the motherboard, power supply, case, and other existing components, including additional RAM, storage, graphics cards, and Wi-Fi or Bluetooth hardware where compatible."
      },
      {
        "title": "Software and Operating System Upgrades",
        "description": "Computer performance is not only about hardware. We can assist with operating system upgrades, software installation, driver updates, software configuration, startup optimization, and removal of unnecessary software."
      },
      {
        "title": "System Optimization and Performance Assessment",
        "description": "We provide a laptop and desktop upgrade assessment along with general system optimization and computer cleanup to help improve overall performance and extend the useful life of your computer."
      }
    ],
    "processHeading": "Our Upgrade Assessment Process",
    "process": [
      {
        "step": "Assessment",
        "description": "We assess your computer's current specifications, condition, and how you use it to understand your performance and storage needs."
      },
      {
        "step": "Compatibility Review",
        "description": "We consider your computer's age, processor, existing hardware, and upgrade limitations before recommending compatible RAM, SSD, or other hardware options."
      },
      {
        "step": "Upgrade or Alternative Recommendation",
        "description": "If an upgrade is practical, we recommend the right combination of hardware or software improvements; if upgrading would provide limited benefit, we discuss other available options."
      },
      {
        "step": "Installation and Optimization",
        "description": "We install and configure the recommended hardware or software upgrades and help optimize your system for better everyday performance."
      }
    ],
    "areaDescription": "Madny Digital Services provides computer upgrade services for laptops and desktops in Calgary, AB, as well as the nearby areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Does my slow computer need to be replaced, or can it be upgraded?",
        "answer": "A slow computer does not always need to be replaced. If the processor and other major components still meet your requirements, adding more RAM or upgrading from an HDD to an SSD may help improve performance and extend the useful life of the system. Our team can assess your computer and recommend whether an upgrade is practical based on its specifications and condition."
      },
      {
        "question": "How do I know if my computer is worth upgrading?",
        "answer": "Not every older computer is worth upgrading. It's important to consider the computer's age, processor, existing hardware, upgrade limitations, condition, and how you plan to use it. An upgrade may be a practical option if your computer is generally working well but feels slow, needs additional storage, has insufficient RAM, still uses a traditional HDD, or has hardware that supports useful upgrades. If upgrading would provide limited benefit, we can discuss other available options."
      },
      {
        "question": "How much does a computer upgrade cost in Calgary?",
        "answer": "Upgrade needs vary depending on your computer's specifications, condition, and the hardware or software involved, so cost cannot be quoted without an assessment. Bring your laptop or desktop to Madny Digital Services for a professional upgrade assessment and we can discuss the options available for your system."
      },
      {
        "question": "Will upgrading to an SSD actually make a difference?",
        "answer": "Replacing a traditional hard disk drive with a compatible solid-state drive can be one of the most effective upgrades for many older computers. An SSD can help improve computer startup times, application loading, file access, system responsiveness, everyday performance, and storage reliability. We can assess SATA, M.2, and NVMe SSD options depending on what your computer supports."
      },
      {
        "question": "Can you add more RAM to my laptop or desktop?",
        "answer": "In many cases, yes. We assess your computer's existing memory, available slots, supported capacity, and compatible RAM options before recommending an upgrade. Additional RAM may help with running multiple applications, heavy web browsing, business software, photo and creative applications, everyday multitasking, and general system responsiveness."
      },
      {
        "question": "How long does a computer upgrade take?",
        "answer": "Turnaround time depends on the type of upgrade, your computer's specifications, and the hardware or software involved, so it cannot be stated without an assessment. Bring your laptop or desktop to Madny Digital Services and we can discuss timing as part of your upgrade assessment."
      }
    ],
    "ctaHeading": "Ready to Upgrade Your Computer?",
    "ctaText": "Bring your laptop or desktop to Madny Digital Services in Calgary for a professional upgrade assessment and find the right solution for your system.",
    "relatedServices": [
      "replace-ram-hdd-ssd",
      "motherboard-repair",
      "liquid-damage",
      "replace-battery"
    ]
  },

  "software-development/custom-software-development": {
    "metaTitle": "Custom Software Development Calgary | Madny Digital",
    "metaDescription": "Custom software development in Calgary for management systems, dashboards, portals, and workflow automation. Call (403) 708-8214 for a consultation.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Custom Software Development in Calgary",
    "intro": "Standard, off-the-shelf software does not always match how a specific business actually operates. Madny Digital Services builds custom software for businesses in Calgary and the surrounding areas, designing solutions around your real requirements, processes, users, and long-term goals. Whether you need an internal system, a management platform, a customer portal, or a fully custom application, the software is developed to work the way your business already works, rather than forcing your workflow to fit generic software.",
    "problemsHeading": "Signs Your Business Could Benefit From Custom Software",
    "problems": [
      "Relying on multiple spreadsheets, apps, and emails just to manage daily operations",
      "Generic software forces your team to adjust workflows instead of the other way around",
      "No single place to manage customers, employees, inventory, or orders",
      "Manual processes are used to track appointments, bookings, or tasks",
      "Important business information and reports are hard to access or understand",
      "Customers or employees have no secure portal to check orders, documents, or status",
      "Existing business tools and platforms do not talk to each other",
      "Current software no longer fits how the business has grown or changed"
    ],
    "servicesHeading": "What Our Custom Software Development Covers",
    "services": [
      {
        "title": "Business Management Systems",
        "description": "A custom system that brings customers, employees, inventory, orders, appointments, tasks, documents, and reports into one organized platform, with features planned around your actual operational requirements."
      },
      {
        "title": "Custom Dashboards and Reporting",
        "description": "Dashboards built to display the operational information that matters to your business, such as activity summaries, order or project status, inventory information, performance indicators, and date-based or exportable reports."
      },
      {
        "title": "Customer and Employee Portals",
        "description": "Secure portals with user accounts, login, and role-based access that give customers, employees, or managers access to relevant tools such as service requests, order information, appointment management, and status tracking."
      },
      {
        "title": "Software Integrations",
        "description": "Where technically supported, custom software can connect with third-party APIs, payment platforms, email services, authentication systems, existing databases, and other business applications to reduce duplicate work."
      },
      {
        "title": "User-Friendly Software Design",
        "description": "Interfaces and workflows designed to be practical for the people using them, with responsive layouts, clear navigation, organized dashboards, and role-based access for everyday tasks."
      },
      {
        "title": "Custom Software Across Industries",
        "description": "Solutions developed for service businesses, retail, contractors, professional services, transportation, property and real estate, construction, healthcare-related organizations, and other businesses with specialized workflows."
      }
    ],
    "processHeading": "How We Approach Your Custom Software Project",
    "process": [
      {
        "step": "Understand Your Requirements",
        "description": "We start by learning how your business actually operates, including your processes, users, and long-term goals, rather than starting from a generic template."
      },
      {
        "step": "Plan the Functionality",
        "description": "Depending on your needs, we plan features such as management of customers, employees, inventory, orders, appointments, and reporting, tailored to your specific operations."
      },
      {
        "step": "Design and Development",
        "description": "We design and develop the application, including dashboards, portals, and any integrations with third-party platforms your business relies on, when technically supported."
      },
      {
        "step": "Deliver a Practical Solution",
        "description": "Each project is evaluated individually based on its requirements, so the final software is built around the functionality your business actually needs."
      }
    ],
    "areaDescription": "Madny Digital Services provides custom software development for businesses throughout Calgary, AB and the surrounding communities of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What kind of custom software can Madny Digital Services build for my Calgary business?",
        "answer": "We develop custom business software including management systems, internal company applications, customer and employee portals, dashboards, booking and scheduling systems, inventory and order management tools, and other database-driven or web-based applications, depending on what your business actually needs."
      },
      {
        "question": "How much does custom software development cost?",
        "answer": "Cost depends on the requirements, functionality, and scope of your specific project, since each project is evaluated individually. The best way to get an accurate picture is to tell us what your business needs so we can discuss the functionality and development options, and you can contact us for a custom software consultation."
      },
      {
        "question": "How long does it take to build custom software?",
        "answer": "Timelines vary depending on the requirements and complexity of the application, and this is assessed on a project by project basis. Contact us to discuss your project so we can go over what is involved."
      },
      {
        "question": "Can custom software integrate with the tools my business already uses?",
        "answer": "When technically supported, custom software can integrate with external platforms, APIs, databases, payment platforms, email services, authentication systems, and other business applications. Integration availability depends on the technical capabilities and access provided by the third-party service."
      },
      {
        "question": "Is custom software a good fit for a small or growing business?",
        "answer": "Custom software can be developed for businesses across many industries, including small and growing businesses, service businesses, contractors, retail, and professional services, whenever existing applications do not fully meet their operational needs. Each project is evaluated individually based on its requirements."
      },
      {
        "question": "Can you improve or add features to software I already have?",
        "answer": "Yes, our custom software development services can include improvements and enhancements to existing software, in addition to building new applications from your requirements."
      }
    ],
    "ctaHeading": "Have a Custom Software Idea?",
    "ctaText": "Tell us what your Calgary business needs and we will discuss the functionality and development options for your project.",
    "relatedServices": [
      "web-application-development",
      "software-testing-maintenance",
      "database-development"
    ]
  },

  "software-development/database-development": {
    "metaTitle": "Database Development in Calgary | Madny Digital Services",
    "metaDescription": "Custom database design, integration, and maintenance for Calgary businesses. Organized, reliable data solutions built around your operations. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Database Development in Calgary",
    "intro": "Madny Digital Services builds custom databases for Calgary businesses that need a dependable way to store, organize, manage, and access important information. Our database solutions are built to support custom software, web applications, customer portals, management systems, inventory platforms, and other business tools, so your data works the way your business actually operates.",
    "problemsHeading": "Signs Your Business Needs a Database Solution",
    "problems": [
      "Your database needs updates as your business or application requirements change",
      "You're running into troubleshooting issues with an existing database",
      "Your database structure needs restructuring to keep up with new needs",
      "Your database is due for performance improvements",
      "Your data isn't connecting well with your software or business systems",
      "You need a way to organize customer, employee, inventory, or order information",
      "You're managing bookings, scheduling, or project data without a proper system",
      "You need database-driven functionality added to a web application"
    ],
    "servicesHeading": "Our Database Development Services",
    "services": [
      {
        "title": "Custom Database Development",
        "description": "We design database structures around your specific application and operational requirements, since every business manages different types of information. This includes custom database development along with database design and configuration."
      },
      {
        "title": "Business Databases for Every Need",
        "description": "We build customer and client databases, employee databases, inventory databases, and product and order databases. We also handle booking and scheduling data so your business information stays organized in one place."
      },
      {
        "title": "Database-Driven Applications & Systems",
        "description": "We develop database-driven web applications and business management systems, giving your team a structured way to manage day-to-day operations."
      },
      {
        "title": "Database Integration",
        "description": "We connect databases with supported custom software, web applications, websites and web portals, administrative dashboards, customer portals, employee systems, APIs and third-party services, and reporting tools, so your data works efficiently with the rest of your systems."
      },
      {
        "title": "Database Management & Maintenance",
        "description": "Existing databases may need updates, troubleshooting, restructuring, or performance improvements as applications and business requirements change. Our maintenance services may include troubleshooting, structural changes, data organization, application connectivity, and updates for supported systems."
      },
      {
        "title": "Data Organization & Management",
        "description": "Beyond building the database itself, we help with ongoing data organization and management so information stays accurate, accessible, and useful as your business grows."
      }
    ],
    "processHeading": "Our Database Development Process",
    "process": [
      {
        "step": "Understand Your Requirements",
        "description": "We start by understanding the type of information your business manages, whether that's customers, employees, products, inventory, orders, appointments, or projects."
      },
      {
        "step": "Design the Database Structure",
        "description": "We design a database structure around your specific application and operational requirements rather than applying a generic template."
      },
      {
        "step": "Develop & Integrate",
        "description": "We develop the database and integrate it with your supported custom software, web applications, dashboards, customer portals, or other business systems so it works efficiently with your existing tools."
      },
      {
        "step": "Maintain & Update",
        "description": "As your business and application needs change, we provide ongoing database updates, troubleshooting, restructuring, and maintenance for supported systems."
      }
    ],
    "areaDescription": "Madny Digital Services provides database development services for businesses in Calgary, AB, and nearby areas including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What kind of database can Madny Digital Services build for my Calgary business?",
        "answer": "We develop custom databases structured around your specific application and operational requirements. This can include customer and client databases, employee databases, inventory databases, product and order databases, and booking or scheduling data, along with database-driven web applications and business management systems."
      },
      {
        "question": "Can you connect a database to my existing website or software?",
        "answer": "Yes. We integrate databases with supported custom software, web applications, websites and web portals, administrative dashboards, customer portals, employee systems, APIs and third-party services, and reporting tools, so your data works efficiently with your business systems."
      },
      {
        "question": "How much does custom database development cost?",
        "answer": "Cost depends on the type of database, your operational requirements, and the systems it needs to integrate with. We recommend contacting us so we can assess your specific needs and provide details based on your project."
      },
      {
        "question": "How long does it take to develop and integrate a database?",
        "answer": "Timelines depend on the complexity of your data, the application requirements, and what the database needs to integrate with. Contact us to discuss your project so we can give you an assessment based on your specific requirements."
      },
      {
        "question": "Can you maintain or update a database I already have?",
        "answer": "Yes. Existing databases may need updates, troubleshooting, restructuring, or performance improvements as applications and business requirements change. Our maintenance services may include troubleshooting, structural changes, data organization, application connectivity, and updates for supported systems."
      },
      {
        "question": "Do you build databases for specific industries or business types?",
        "answer": "We build databases structured around whatever your business needs to manage, whether that's customers, employees, products, inventory, orders, appointments, projects, or other business information. The database is designed around your specific requirements rather than a one-size-fits-all approach."
      }
    ],
    "ctaHeading": "Need a Custom Database Solution?",
    "ctaText": "Contact Madny Digital Services to plan, develop, and integrate a database for your software, web application, or business system in Calgary and nearby areas.",
    "relatedServices": [
      "custom-software-development",
      "web-application-development",
      "software-testing-maintenance"
    ]
  },

  "software-development/software-testing-maintenance": {
    "metaTitle": "Software Testing & Maintenance Calgary | Madny Digital Services",
    "metaDescription": "Reliable software testing and maintenance in Calgary. Bug fixes, updates, and technical support to keep your application running smoothly. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Software Testing & Maintenance in Calgary",
    "intro": "Madny Digital Services helps Calgary businesses keep their software and web applications running smoothly with professional testing and maintenance. We help identify bugs, maintain existing functionality, implement updates, and improve supported software systems. Whether your application was recently developed or has been operating for years, regular testing and maintenance can help maintain its reliability, performance, and usability.",
    "problemsHeading": "Signs Your Software Needs Testing or Maintenance",
    "problems": [
      "Bugs or errors affecting application functionality",
      "Software that hasn't been tested since it was built",
      "Outdated features that no longer match business needs",
      "Issues with forms, workflows, or user accounts",
      "Database-related problems or inconsistent data",
      "Trouble with API or third-party integrations",
      "Compatibility issues across browsers or devices",
      "Performance that has slowed down over time",
      "An application built by another provider that needs assessment",
      "New features that haven't been verified before launch"
    ],
    "servicesHeading": "Our Testing & Maintenance Services",
    "services": [
      {
        "title": "Software Testing",
        "description": "We test important application features and workflows to identify problems and verify that your software functions as expected, covering functional, UI, form, and workflow testing."
      },
      {
        "title": "Database & API Testing",
        "description": "We test database functionality along with API and integration points to help confirm your application's data and connected services are working correctly."
      },
      {
        "title": "Browser & Mobile Compatibility Testing",
        "description": "We check browser compatibility along with responsive and mobile testing so your application performs consistently for users across different devices."
      },
      {
        "title": "Bug Identification & New Feature Testing",
        "description": "We identify bugs in existing functionality and test new features before they go live, helping maintain a stable application."
      },
      {
        "title": "Software Maintenance",
        "description": "Ongoing maintenance may include bug fixes, software updates, application troubleshooting, database maintenance, feature improvements, performance optimization, integration maintenance, compatibility updates, interface improvements, and general technical support."
      },
      {
        "title": "Web Application Maintenance",
        "description": "We provide maintenance for supported web applications, including front-end and back-end updates, database-related issues, dashboards, user accounts, forms, APIs, and other application functionality. We can also assess existing applications built by another provider, depending on the technology, source-code access, documentation, and application condition."
      }
    ],
    "processHeading": "How Our Testing & Maintenance Process Works",
    "process": [
      {
        "step": "Testing",
        "description": "We test important application features and workflows, including functional, UI, form, database, API, browser compatibility, and mobile testing, to identify problems."
      },
      {
        "step": "Bug Identification",
        "description": "We identify bugs and issues affecting your software so they can be addressed and verified against expected functionality."
      },
      {
        "step": "Maintenance & Updates",
        "description": "We perform ongoing maintenance such as bug fixes, software updates, database maintenance, performance optimization, and compatibility updates as technologies and business requirements change."
      },
      {
        "step": "Assessment for Third-Party Applications",
        "description": "For applications developed by another provider, we assess the technology, source-code access, documentation, and application condition to determine what maintenance is possible."
      }
    ],
    "areaDescription": "Madny Digital Services provides software testing and maintenance to businesses in Calgary, AB, and the surrounding areas including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How much does software testing or maintenance cost in Calgary?",
        "answer": "Cost depends on the assessment of your specific application, its technology, and its condition, so we're not able to quote a set price upfront. Contact Madny Digital Services in Calgary to discuss your software and get a better idea of what your project may involve."
      },
      {
        "question": "How long does software testing or maintenance take?",
        "answer": "Timelines vary depending on the application, the scope of testing or maintenance needed, and its current condition. Reach out to us so we can review your software and discuss what's involved."
      },
      {
        "question": "Can you maintain an application that was built by another developer?",
        "answer": "Yes, we can assess existing applications developed by another provider. Our ability to modify them depends on the technology, source-code access, documentation, and application condition."
      },
      {
        "question": "What kind of testing do you perform on software or web applications?",
        "answer": "We offer functional testing, web application testing, user interface testing, form and workflow testing, database functionality testing, API and integration testing, browser compatibility testing, responsive and mobile testing, bug identification, and new feature testing."
      },
      {
        "question": "What does ongoing software maintenance include?",
        "answer": "Our maintenance services may include bug fixes, software updates, application troubleshooting, database maintenance, feature improvements, performance optimization, integration maintenance, compatibility updates, interface improvements, and general technical support."
      },
      {
        "question": "My application has been running for years without issues. Do I still need testing or maintenance?",
        "answer": "Yes, whether your application was recently developed or has been operating for years, regular testing and maintenance can help maintain its reliability, performance, and usability as technologies and business requirements change."
      }
    ],
    "ctaHeading": "Need Software Testing or Maintenance?",
    "ctaText": "Keep your software reliable and up to date with professional testing, maintenance, and technical support from Madny Digital Services in Calgary, call (403) 708-8214.",
    "relatedServices": [
      "custom-software-development",
      "web-application-development",
      "database-development"
    ]
  },

  "software-development/web-application-development": {
    "metaTitle": "Web Application Development Calgary | Madny Digital Services",
    "metaDescription": "Custom web application development in Calgary. Portals, dashboards, booking systems and more built around your business workflows. Call (403) 708-8214.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Web Application Development in Calgary",
    "intro": "Modern businesses often need more than a traditional website, they need interactive tools that can manage business information, automate workflows, connect customers and employees, and make important services accessible through a web browser. Madny Digital Services provides custom web application development for businesses in Calgary and nearby areas, designing applications around your business requirements, users, workflows, and operational goals. Whether you need a customer portal, booking platform, management system, or internal dashboard, we can develop an application tailored to your needs.",
    "problemsHeading": "Common Reasons Businesses Need a Web Application",
    "problems": [
      "Relying entirely on desktop software instead of tools accessible through a web browser",
      "No customer portal for clients to interact with the business online",
      "No employee portal for internal tools and information",
      "Booking and scheduling handled manually instead of through an online system",
      "Orders, inventory, or customer records not managed through a centralized application",
      "Business workflows that are not automated and depend on manual steps",
      "No online forms or submission tools for collecting information from customers",
      "Reporting pulled together manually instead of generated through a dedicated system",
      "An existing web application that needs enhancements or added functionality",
      "Business processes forced into a generic solution instead of one built around actual needs"
    ],
    "servicesHeading": "What Our Web Application Development Includes",
    "services": [
      {
        "title": "Custom Web Applications and Portals",
        "description": "We develop custom web applications, business management applications, customer portals, and employee portals based on the specific functionality your business requires."
      },
      {
        "title": "Dashboards and Management Systems",
        "description": "We build administrative dashboards, booking and scheduling systems, order management applications, inventory management systems, and customer management solutions."
      },
      {
        "title": "Database-Driven Applications",
        "description": "Many web applications depend on databases to store, organize, retrieve, and update information such as customer records, employee information, products, inventory, orders, appointments, and documents. The database and application structure are planned according to each project's requirements."
      },
      {
        "title": "Responsive, Cross-Device Interfaces",
        "description": "We design responsive layouts and mobile-friendly interfaces so supported features can adapt appropriately across desktops, laptops, tablets, and smartphones, including organized navigation, user-friendly forms, and cross-device usability testing."
      },
      {
        "title": "Secure User Access",
        "description": "Depending on project requirements, we can implement user authentication, secure login, account management, role-based permissions, and password management functionality, with security requirements assessed according to each application's nature."
      },
      {
        "title": "Workflow Automation and API Integrations",
        "description": "We develop workflow management applications, online forms and submissions, reporting systems, business process automation, and API integrations to connect your application with other tools."
      }
    ],
    "processHeading": "How We Approach Your Web Application",
    "process": [
      {
        "step": "Understand Your Requirements",
        "description": "We start by learning what your business needs the application to accomplish, including your users, workflows, and operational goals."
      },
      {
        "step": "Plan the Application and Database Structure",
        "description": "For applications that depend on a database, we plan the database and application structure according to the specific requirements of your project."
      },
      {
        "step": "Design and Develop",
        "description": "We design and develop the application around your business processes rather than forcing them into a generic solution, including responsive interfaces and any needed secure access features."
      },
      {
        "step": "Build for Future Growth",
        "description": "Since business requirements often change as operations expand, we develop applications with future enhancements in mind so functionality like new user roles, dashboards, integrations, or reports can potentially be added over time."
      }
    ],
    "areaDescription": "Madny Digital Services provides web application development for businesses in Calgary, AB, and nearby areas including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What kind of web application can Madny Digital Services build for my Calgary business?",
        "answer": "We can develop a wide range of custom web applications including customer portals, employee portals, booking and scheduling systems, order management applications, inventory management systems, customer management solutions, administrative dashboards, and other database-driven business applications tailored to your workflows."
      },
      {
        "question": "How much does a custom web application cost?",
        "answer": "Cost depends on the functionality, complexity, and requirements of each individual project. We assess each project based on what your business actually needs and discuss the development options with you directly, so contact us for a consultation about your specific application idea."
      },
      {
        "question": "How long does it take to develop a web application?",
        "answer": "Timelines depend on the scope and requirements of the application being developed, since every project is planned around its own functionality and database structure. Contact us to discuss your project so we can talk through the details relevant to your idea."
      },
      {
        "question": "Can you add a database to manage our customer records, orders, or inventory?",
        "answer": "Yes, many web applications depend on databases to store, organize, retrieve, and update information such as customer records, employee information, products, inventory, orders, appointments, and documents. The database and application structure are planned according to your project's requirements."
      },
      {
        "question": "Will the application work on mobile phones and tablets, not just desktop computers?",
        "answer": "Yes, we design responsive interfaces so supported features can adapt appropriately across desktops, laptops, tablets, and smartphones, and we test usability across devices as part of development."
      },
      {
        "question": "Can you add secure logins or different access levels for staff versus customers?",
        "answer": "Depending on the requirements of your project, we can implement features such as user authentication, secure login, account management, role-based permissions, administrative access, and password management functionality. Security requirements are assessed according to the functionality and nature of each application."
      },
      {
        "question": "Can a web application be expanded later as our business grows?",
        "answer": "Yes, we develop web applications with future enhancements in mind when appropriate, since business requirements often change as operations expand. Additional functionality such as new user roles, dashboards, integrations, reports, workflows, or automation can potentially be introduced over time."
      }
    ],
    "ctaHeading": "Have a Web Application Idea?",
    "ctaText": "Tell us what you want your application to accomplish, and we will discuss the features and development options for your Calgary business at (403) 708-8214.",
    "relatedServices": [
      "custom-software-development",
      "software-testing-maintenance",
      "database-development"
    ]
  },

  "web-development/custom-web-portals": {
    "metaTitle": "Custom Web Portal Development Calgary | Madny Digital",
    "metaDescription": "Custom customer, client, and employee web portals for Calgary businesses. Secure logins, dashboards, and role-based access. Call (403) 708-8214.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Custom Web Portal Development in Calgary",
    "intro": "A custom web portal gives your customers, employees, or business partners one centralized place to access information, submit requests, manage accounts, and interact with your business online. Madny Digital Services builds custom web portals for businesses in Calgary and nearby areas, with each portal built around your specific workflows, users, data, and business requirements.",
    "problemsHeading": "Signs Your Business Needs a Web Portal",
    "problems": [
      "Your team handles the same customer requests manually, over and over",
      "Customers have no way to check order or service status online",
      "Employees lack a central system for tasks, scheduling, and records",
      "There's no secure way for clients to submit documents or forms",
      "You need role-based access so different users see different information",
      "Appointment booking and service tracking are still done by phone or email",
      "Your business systems, databases, or software don't talk to each other",
      "You want an administrative dashboard to manage users and activity in one place"
    ],
    "servicesHeading": "What Our Web Portal Development Includes",
    "services": [
      {
        "title": "Customer & Client Portals",
        "description": "A customer portal can give users personalized access to services and information without your team handling every request manually. Depending on your requirements, customers may be able to create accounts, submit service requests, view account information, upload documents, book appointments, check order status, complete online forms, and receive notifications."
      },
      {
        "title": "Employee & Business Portals",
        "description": "Custom internal portals help organize information and give employees access to the tools they need from one central system. Features may include task management, scheduling, customer records, documents, internal forms, reporting, user permissions, and administrative controls."
      },
      {
        "title": "Secure Login & Role-Based Access",
        "description": "We build portals with secure user login, user profiles and accounts, and role-based access so the right people see the right information, along with administrative dashboards to oversee it all."
      },
      {
        "title": "Database & System Integration",
        "description": "Web portals can connect with databases, custom software, websites, APIs, and supported third-party services so information moves efficiently between different parts of your business. We can build portal functionality around your existing systems or create a new database-driven solution based on your project requirements."
      },
      {
        "title": "Forms, Documents & Booking Features",
        "description": "Our portals can include online forms and submissions, document management, appointment and booking features, order and service tracking, and notifications, tailored to how your business actually operates."
      },
      {
        "title": "Responsive Portal Design",
        "description": "Our web portals are designed with usability in mind and can be developed to work across supported desktops, laptops, tablets, and smartphones, with clear navigation, organized dashboards, and user-friendly forms."
      }
    ],
    "processHeading": "How We Build Your Web Portal",
    "process": [
      {
        "step": "Understand Your Requirements",
        "description": "We start by learning your specific workflows, the people who will use the portal, your data, and your overall business requirements."
      },
      {
        "step": "Plan the Portal Structure",
        "description": "We plan functionality tailored to your users, whether that means a customer portal, client portal, employee portal, or business management portal, including secure login and role-based access."
      },
      {
        "step": "Develop & Integrate",
        "description": "We develop the portal and connect it with your databases, custom software, websites, APIs, and supported third-party services as needed to move information efficiently across your business."
      },
      {
        "step": "Design for Every Device",
        "description": "We focus on clear navigation, organized dashboards, user-friendly forms, and responsive layouts so the portal works across supported desktops, laptops, tablets, and smartphones."
      }
    ],
    "areaDescription": "Madny Digital Services builds custom web portals for businesses in Calgary and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What is a custom web portal and how is it different from a regular website?",
        "answer": "A custom web portal gives customers, employees, or business partners a centralized place to access information, submit requests, manage accounts, and interact with your business online, built around your specific workflows, users, data, and business requirements rather than as a general public facing site."
      },
      {
        "question": "What can a customer portal actually let my customers do?",
        "answer": "Depending on your requirements, a customer portal may let customers create and manage accounts, submit service requests, view account information, upload or access documents, book appointments, check order or service status, complete online forms, and receive notifications."
      },
      {
        "question": "Can a web portal connect to our existing systems and databases?",
        "answer": "Yes. Web portals can connect with databases, custom software, websites, APIs, and supported third-party services to help information move efficiently between different parts of your business, and we can build portal functionality around your existing systems or create a new database-driven solution based on your project."
      },
      {
        "question": "Do you build portals for employees, not just customers?",
        "answer": "Yes. We develop custom internal portals that help businesses organize information and give employees access to the tools they need from one central system, with features that may include task management, scheduling, customer records, documents, internal forms, reporting, user permissions, and administrative controls."
      },
      {
        "question": "How much does a custom web portal cost and how long does it take?",
        "answer": "Cost and timeline depend on your specific workflows, users, data, and business requirements, since every portal is built to different specifications. Contact Madny Digital Services to discuss your project so we can go over what your portal needs to do."
      },
      {
        "question": "Will the portal work on phones and tablets, not just desktop?",
        "answer": "Our web portals are designed with usability in mind and can be developed to work across supported desktops, laptops, tablets, and smartphones, with a focus on clear navigation, organized dashboards, user-friendly forms, and responsive layouts."
      }
    ],
    "ctaHeading": "Need a Custom Web Portal?",
    "ctaText": "Whether you need a customer portal, employee portal, business dashboard, or document portal, Madny Digital Services can develop a solution for your Calgary business, call (403) 708-8214 to get started.",
    "relatedServices": [
      "website-design-development",
      "ecommerce-development",
      "website-maintenance",
      "digital-marketing"
    ]
  },

  "web-development/digital-marketing": {
    "metaTitle": "Digital Marketing Services in Calgary | Madny Digital Services",
    "metaDescription": "Grow your Calgary business online with social media marketing, content creation, and brand promotion from Madny Digital Services. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Digital Marketing Services in Calgary",
    "intro": "A strong online presence helps potential customers find your business, learn about what you offer, and connect with your brand. Madny Digital Services provides digital marketing services for businesses in Calgary and nearby areas, with practical solutions built around increasing online visibility, growing brand awareness, and helping businesses reach their target audience.",
    "problemsHeading": "Signs Your Business Needs Digital Marketing Support",
    "problems": [
      "Weak or inconsistent online presence",
      "Customers have trouble discovering your business online",
      "Social media pages are inactive or rarely updated",
      "No consistent content plan for posts or promotions",
      "Business profiles are not optimized",
      "Website content needs to be refreshed or optimized",
      "Limited visibility in local online searches",
      "No clear way to track website analytics or marketing performance"
    ],
    "servicesHeading": "Our Digital Marketing Solutions",
    "services": [
      {
        "title": "Digital Marketing Strategy",
        "description": "We build a marketing approach tailored to your business, industry, audience, and goals, so your efforts stay focused and consistent."
      },
      {
        "title": "Social Media Marketing",
        "description": "We help you connect with customers on Facebook and Instagram, including social media posts, captions, promotional content, and campaign planning."
      },
      {
        "title": "Content Creation and Brand Promotion",
        "description": "From marketing graphics to promotional campaign content, we create consistent, professional content that supports your products, services, and announcements across your website and social channels."
      },
      {
        "title": "Business Profile and Website Optimization",
        "description": "We optimize your business page and website content to help customers recognize your business and better understand what you offer."
      },
      {
        "title": "Local Online Marketing",
        "description": "We develop marketing solutions based on your customers, services, and local market to help your business connect with people in Calgary and nearby areas."
      },
      {
        "title": "Analytics and Performance Monitoring",
        "description": "We track website analytics and monitor performance so you have visibility into how your digital presence is doing."
      }
    ],
    "processHeading": "How Our Digital Marketing Services Work",
    "process": [
      {
        "step": "Understand Your Business",
        "description": "We start by learning about your business, industry, audience, and marketing goals so our approach fits your specific needs."
      },
      {
        "step": "Build a Tailored Strategy",
        "description": "We put together a digital marketing plan that can include social media marketing, content creation, and local online marketing based on what your business needs."
      },
      {
        "step": "Create and Publish Content",
        "description": "We create social media content, captions, promotional material, and marketing graphics, and plan campaigns to engage your audience and build brand awareness."
      },
      {
        "step": "Monitor and Support",
        "description": "We track website analytics and monitor performance to help maintain a consistent digital presence that complements your website and other online channels."
      }
    ],
    "areaDescription": "Madny Digital Services provides digital marketing services to businesses in Calgary, AB, and nearby communities including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What does digital marketing include for a small business in Calgary?",
        "answer": "Our digital marketing services can be tailored to your business, industry, audience, and marketing goals. Depending on what your business needs, this may include digital marketing strategy, social media marketing, content creation, business profile and website content optimization, local online marketing, brand awareness campaigns, and analytics and performance monitoring."
      },
      {
        "question": "Do you manage Facebook and Instagram for businesses?",
        "answer": "Yes. We assist with Facebook and Instagram content, including social media posts, captions and promotional content, campaign planning, creative marketing content, audience engagement strategies, and business page optimization."
      },
      {
        "question": "How much does digital marketing cost?",
        "answer": "Digital marketing costs depend on the specific services your business needs and the scope of the work involved. Contact us and we can discuss your business goals and put together an approach suited to you."
      },
      {
        "question": "How long does it take to see results from digital marketing?",
        "answer": "Results can vary depending on your business, industry, audience, and marketing goals. We do not guarantee specific timelines or outcomes, since every business situation is different. Contact us to discuss your goals and how we can help build a consistent digital presence over time."
      },
      {
        "question": "Can you help with content for my website and social media together?",
        "answer": "Yes. We can create digital content that supports your products, services, promotions, and announcements across both your website and social media platforms, helping keep your brand presence consistent."
      },
      {
        "question": "Do you offer digital marketing for local businesses outside of Calgary?",
        "answer": "Yes. We work with businesses across different industries in Calgary and nearby areas, including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River, to develop marketing solutions based on their customers, services, and local market."
      }
    ],
    "ctaHeading": "Ready to Strengthen Your Digital Presence?",
    "ctaText": "Madny Digital Services helps businesses in Calgary build a professional online presence through social media marketing, content creation, and brand promotion, so contact us today to get started.",
    "relatedServices": [
      "seo",
      "ppc-google-ads",
      "website-maintenance",
      "website-design-development"
    ]
  },

  "web-development/ecommerce-development": {
    "metaTitle": "E-Commerce Development in Calgary | Madny Digital Services",
    "metaDescription": "Sell online with a custom Calgary e-commerce website. Secure checkout, order management, and mobile-friendly stores built around your business.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "E-Commerce Development in Calgary",
    "intro": "Looking to sell your products or services online? Madny Digital Services builds professional online stores designed around the needs of your Calgary business. Our e-commerce websites are responsive and user-friendly, helping you showcase products, manage orders, accept online payments, and give customers a convenient shopping experience.",
    "problemsHeading": "Signs Your Business Needs an Online Store",
    "problems": [
      "You want to sell products or services online but don't have a store yet",
      "Your current online store lacks the features your business now needs",
      "Managing products, pricing, and categories feels disorganized",
      "Checkout isn't secure or smooth for customers",
      "You need a better way to track and manage customer orders",
      "Your store isn't easy to use on phones or tablets",
      "You want customers to be able to create accounts and track orders",
      "Your existing e-commerce site needs a design refresh or new functionality"
    ],
    "servicesHeading": "What Our E-Commerce Development Includes",
    "services": [
      {
        "title": "Custom Online Store Development",
        "description": "Every online business has different products, customers, and operational requirements, so we develop e-commerce websites with the features your business needs, including product and category setup and shopping cart functionality."
      },
      {
        "title": "Secure Checkout and Payment Integration",
        "description": "We integrate supported third-party payment solutions so customers can securely complete transactions online. Payment options and functionality depend on the selected payment provider and your business requirements."
      },
      {
        "title": "Product and Order Management",
        "description": "We can develop an organized system that makes it easier to manage products, pricing, categories, and customer orders, with functionality that may include product images and descriptions, stock information, order tracking, and an administrative dashboard."
      },
      {
        "title": "Customer Accounts and Store Features",
        "description": "Depending on your requirements, your store can include customer accounts, sales and order notifications, product search and filtering, shipping configuration, and discount and coupon functionality."
      },
      {
        "title": "Mobile-Friendly Online Stores",
        "description": "Customers shop from phones, tablets, laptops, and desktop computers, so we develop responsive e-commerce websites that adapt to different screen sizes while keeping products, navigation, carts, and checkout easy to use."
      },
      {
        "title": "E-Commerce Redesign and Maintenance",
        "description": "Already have an online store? We can assess supported e-commerce websites for design improvements, new functionality, product updates, technical maintenance, and performance improvements."
      }
    ],
    "processHeading": "How We Approach Your Online Store",
    "process": [
      {
        "step": "Understand Your Business",
        "description": "We start by learning about your products, customers, and operational requirements since every online business has different needs."
      },
      {
        "step": "Custom Store Development",
        "description": "We build your store with the specific functionality your business needs, from product and category setup to shopping cart and checkout."
      },
      {
        "step": "Payment and Order Setup",
        "description": "We integrate supported payment solutions and set up product, pricing, and order management tools, including an administrative dashboard where applicable."
      },
      {
        "step": "Launch and Ongoing Support",
        "description": "Once your responsive, mobile-friendly store is ready, we remain available for redesigns, new functionality, product updates, and technical maintenance as your business grows."
      }
    ],
    "areaDescription": "Madny Digital Services provides e-commerce development for businesses in Calgary, AB, and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How much does an e-commerce website cost in Calgary?",
        "answer": "Cost depends on the specific features and functionality your online store needs, such as product setup, payment integration, and order management tools. Contact us to discuss your business requirements and get a plan tailored to your store."
      },
      {
        "question": "How long does it take to build an online store?",
        "answer": "Timelines depend on your store's complexity and the functionality you need, from product and category setup to payment and checkout integration. Reach out and we can talk through what your project involves."
      },
      {
        "question": "What payment options can be added to my online store?",
        "answer": "We integrate supported third-party payment solutions so customers can securely complete transactions. Payment options and functionality depend on the selected payment provider and your business requirements, so contact us to review what fits your store."
      },
      {
        "question": "Can I manage products and orders myself after the store is built?",
        "answer": "Yes. We can develop an organized system for managing products, pricing, categories, and customer orders, which may include an administrative dashboard along with tools to add and update products, track stock, and manage order notifications."
      },
      {
        "question": "Will my online store work well on mobile phones?",
        "answer": "Yes. We develop responsive e-commerce websites that adapt to different screen sizes, keeping products, navigation, carts, and checkout easy to use on phones, tablets, laptops, and desktop computers."
      },
      {
        "question": "I already have an online store. Can you improve it instead of building a new one?",
        "answer": "Yes. We can assess supported existing e-commerce websites for design improvements, new functionality, product updates, technical maintenance, or performance improvements rather than starting from scratch."
      }
    ],
    "ctaHeading": "Ready to Start Selling Online?",
    "ctaText": "Whether you're launching your first online store or improving an existing one, contact Madny Digital Services to build a Calgary e-commerce solution tailored to your products and customers.",
    "relatedServices": [
      "website-design-development",
      "custom-web-portals",
      "website-maintenance",
      "digital-marketing"
    ]
  },

  "web-development/ppc-google-ads": {
    "metaTitle": "PPC & Google Ads Management Calgary | Madny Digital Services",
    "metaDescription": "Google Ads and PPC management for Calgary businesses. We plan, set up, optimize, and monitor campaigns to reach customers searching for your services.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "PPC and Google Ads Management in Calgary",
    "intro": "Google Ads and Pay-Per-Click advertising can help your business reach potential customers at the moment they are actively searching online for the products or services you offer. Madny Digital Services provides Google Ads and PPC management for businesses in Calgary and nearby areas, helping plan, set up, optimize, and monitor advertising campaigns built around your services, target audience, location, and marketing goals.",
    "problemsHeading": "Common Reasons Calgary Businesses Look Into PPC",
    "problems": [
      "Starting a first PPC campaign with no account set up yet",
      "An existing Google Ads account that needs ongoing management",
      "Ads not reaching customers in the right Calgary service areas",
      "Campaigns targeting the wrong keywords or audience",
      "Ad copy that is not performing as well as it should",
      "Wasted spend from missing negative keyword management",
      "No conversion tracking set up to measure results",
      "Landing pages that are not converting ad clicks into leads",
      "Budgets and bids that have not been reviewed or optimized"
    ],
    "servicesHeading": "Our Google Ads and PPC Services May Include",
    "services": [
      {
        "title": "Google Ads Account & Campaign Setup",
        "description": "We handle Google Ads account setup and PPC campaign setup, including search advertising campaigns structured around your business objectives and available advertising budget."
      },
      {
        "title": "Keyword & Search Campaigns",
        "description": "We research relevant search terms based on your products or services and organize campaigns with keyword research and keyword targeting to reach potential customers searching for what your business offers."
      },
      {
        "title": "Location & Audience Targeting",
        "description": "For businesses serving specific locations, we can configure campaigns to focus advertising on selected geographic areas, including Calgary and other relevant service areas, along with audience targeting based on campaign requirements."
      },
      {
        "title": "Ad Copy & Campaign Structure",
        "description": "We create ad copy and organize campaign structure, including negative keyword management, to help keep campaigns organized and targeted."
      },
      {
        "title": "Conversion Tracking & Reporting",
        "description": "We set up conversion tracking, monitor campaigns, and provide performance reporting so results can be reviewed against available performance data."
      },
      {
        "title": "Campaign Optimization & Landing Pages",
        "description": "We review supported campaigns and make ongoing improvements to keywords, ad copy, budget, and bids, and can create or improve landing pages with clear service information, calls to action, contact forms, and mobile-friendly layouts."
      }
    ],
    "processHeading": "How We Manage Your Google Ads Campaign",
    "process": [
      {
        "step": "Plan Around Your Goals",
        "description": "We plan campaigns based on your services, target audience, location, and marketing goals, structuring them around your business objectives and available advertising budget."
      },
      {
        "step": "Research Keywords & Locations",
        "description": "We research relevant search terms for your products or services and configure location targeting to focus advertising on Calgary and other relevant service areas."
      },
      {
        "step": "Set Up & Launch Campaigns",
        "description": "We set up your Google Ads account and PPC campaigns, including ad copy, campaign structure, negative keyword management, and conversion tracking."
      },
      {
        "step": "Monitor & Optimize",
        "description": "We review supported campaigns and make ongoing improvements based on available performance data, including keyword adjustments, ad copy improvements, budget and bid optimization, and search-term reviews."
      }
    ],
    "areaDescription": "Madny Digital Services provides Google Ads and PPC management for businesses in Calgary, Alberta and nearby areas including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What Google Ads and PPC services does Madny Digital Services offer in Calgary?",
        "answer": "We help plan, set up, optimize, and monitor advertising campaigns based on your services, target audience, location, and marketing goals. This can include Google Ads account setup, PPC campaign setup, search advertising campaigns, keyword research and targeting, location and audience targeting, ad copy creation, campaign structure, negative keyword management, conversion tracking setup, campaign monitoring, bid and budget optimization, and performance reporting."
      },
      {
        "question": "How much does PPC or Google Ads management cost?",
        "answer": "Cost depends on your campaign requirements, advertising budget, and business goals, so we cannot state a set price here. Contact us so we can discuss your services, target audience, and goals and put together an approach based on your situation."
      },
      {
        "question": "How long does it take to see results from a Google Ads campaign?",
        "answer": "Timelines depend on factors such as competition, budget, targeting, website quality, and market conditions, so we cannot guarantee a specific timeframe. Google Ads campaigns also require ongoing monitoring and adjustment rather than a one-time setup, and we encourage you to contact us to discuss what to expect for your situation."
      },
      {
        "question": "Can you guarantee more leads or sales from Google Ads?",
        "answer": "No. Advertising results, leads, sales, and return on investment cannot be guaranteed and may vary based on competition, budget, targeting, website quality, market conditions, and other factors. What we can do is help plan, set up, and manage campaigns based on your business goals."
      },
      {
        "question": "Can you target customers in specific Calgary neighborhoods or nearby areas?",
        "answer": "Yes. For businesses serving specific locations, campaigns can be configured to focus advertising on selected geographic areas. We can develop campaigns targeting customers in Calgary and other relevant service areas based on your campaign requirements."
      },
      {
        "question": "Do you help with the landing page my ads send customers to?",
        "answer": "Yes. As part of our web development services, we can create or improve landing pages with clear service information, calls to action, contact forms, and mobile-friendly layouts, since the page customers reach after clicking an ad can affect campaign performance."
      },
      {
        "question": "I already have a Google Ads account. Can you take over management of it?",
        "answer": "Yes. Whether you are starting your first PPC campaign or need help managing an existing Google Ads account, Madny Digital Services can help develop and manage campaigns based on your business goals."
      }
    ],
    "ctaHeading": "Ready to Grow With Google Ads?",
    "ctaText": "Contact Madny Digital Services to discuss Google Ads and PPC management for your Calgary business.",
    "relatedServices": [
      "seo",
      "website-design-development",
      "digital-marketing",
      "website-maintenance"
    ]
  },

  "web-development/seo": {
    "metaTitle": "SEO Services in Calgary | Madny Digital Services",
    "metaDescription": "Improve your website's search visibility with SEO services in Calgary. On-page, technical, and local SEO built around your business. Call (403) 708-8214.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "SEO Services in Calgary",
    "intro": "A well-built website works harder when the people searching for it can actually find it. Search Engine Optimization helps improve how your website is structured, understood, and presented to search engines. Madny Digital Services provides SEO services for businesses in Calgary and nearby areas, focusing on website structure, content, keywords, technical elements, and local search visibility to help build a stronger organic online presence.",
    "problemsHeading": "Signs Your Website Needs SEO Attention",
    "problems": [
      "Your website isn't ranking well for the searches your customers actually use",
      "Page titles and meta descriptions aren't optimized for search",
      "Headings and page structure make it hard for search engines to understand your content",
      "Images are missing optimization and alt text",
      "Internal links between pages are weak or missing",
      "Your site isn't showing up for location-based searches in your service area",
      "You're unsure whether your sitemap or Google Search Console is set up correctly",
      "Technical issues like broken links, poor mobile responsiveness, or indexing problems may be holding your site back"
    ],
    "servicesHeading": "What Our SEO Services Include",
    "services": [
      {
        "title": "SEO Website Audits & Keyword Research",
        "description": "We start by auditing your website and researching the keywords relevant to your services, target audience, industry, and competition."
      },
      {
        "title": "On-Page SEO",
        "description": "We optimize page titles, meta descriptions, headings, service page content, keywords and related search terms, images and alt text, internal links, and overall page structure so search engines can better understand each page."
      },
      {
        "title": "Technical SEO",
        "description": "We assess supported websites for technical elements such as mobile responsiveness, indexing, sitemap configuration, page structure, broken links, performance, and other website issues."
      },
      {
        "title": "Local SEO",
        "description": "For businesses serving Calgary and surrounding areas, we help strengthen visibility for location-based searches by optimizing location information, service-area content, business information, and local keywords."
      },
      {
        "title": "Sitemap & Search Console Setup",
        "description": "We help with search engine indexing support, sitemap setup, and Google Search Console setup so your site is properly connected to the tools search engines use."
      },
      {
        "title": "SEO Monitoring & Improvements",
        "description": "SEO is an ongoing process, so we monitor supported SEO performance and make ongoing improvements based on website requirements and available search data."
      }
    ],
    "processHeading": "Our SEO Approach",
    "process": [
      {
        "step": "Strategy Based on Your Business",
        "description": "We base our SEO strategy on your website, services, target audience, industry, and competition."
      },
      {
        "step": "On-Page & Technical Optimization",
        "description": "We optimize on-page elements like titles, headings, and content, and assess technical elements like indexing, sitemaps, and site performance."
      },
      {
        "step": "Local Search Optimization",
        "description": "We optimize location information, service-area content, and local keywords to help strengthen visibility for Calgary-area searches."
      },
      {
        "step": "Ongoing Monitoring & Improvements",
        "description": "Since SEO is an ongoing process, we monitor supported SEO performance and make ongoing improvements as search competition, content, and search engine systems change over time."
      }
    ],
    "areaDescription": "Madny Digital Services provides SEO services for businesses in Calgary, AB and the surrounding areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "What does SEO actually include?",
        "answer": "Our SEO services may include SEO website audits, keyword research, on-page SEO, technical SEO, local SEO, website content optimization, page title and meta description optimization, heading structure optimization, internal linking, image optimization, URL structure improvements, search engine indexing support, sitemap setup, Google Search Console setup, and SEO performance monitoring."
      },
      {
        "question": "Can you guarantee my website will rank higher on Google?",
        "answer": "No. SEO results and search rankings cannot be guaranteed, as performance depends on competition, search engine algorithms, website authority, content quality, and other factors. We focus on practical SEO solutions designed to strengthen your organic search presence."
      },
      {
        "question": "How much does SEO cost for a Calgary business?",
        "answer": "Cost depends on your website, services, target audience, industry, and competition, since our SEO strategies are built around your specific business. Contact us so we can assess your website and discuss what SEO services would best fit your goals."
      },
      {
        "question": "How long does it take to see SEO results?",
        "answer": "The PDF material we work from does not specify a fixed timeline, and SEO is described as an ongoing process where results depend on competition, search engine algorithms, website authority, and content quality. We monitor performance and make ongoing improvements based on your website and available search data, so reach out to discuss what to expect for your situation."
      },
      {
        "question": "Do you offer local SEO for businesses that serve areas around Calgary?",
        "answer": "Yes. For businesses serving Calgary and surrounding areas, local SEO can help strengthen visibility for location-based searches, including optimizing location information, service-area content, business information, and local keywords."
      },
      {
        "question": "What is the difference between on-page SEO and technical SEO?",
        "answer": "On-page SEO helps search engines understand the purpose and content of individual pages by optimizing elements like titles, meta descriptions, headings, and content. Technical SEO looks at how well-structured your website is overall, including mobile responsiveness, indexing, sitemap configuration, page structure, broken links, and performance."
      },
      {
        "question": "Is SEO a one-time project or an ongoing service?",
        "answer": "SEO is an ongoing process. Search competition, website content, and search engine systems can change over time, so we monitor supported SEO performance and make ongoing improvements based on website requirements and available search data."
      }
    ],
    "ctaHeading": "Want to Improve Your Search Visibility?",
    "ctaText": "Contact Madny Digital Services at (403) 708-8214 to discuss practical SEO solutions for your Calgary business.",
    "relatedServices": [
      "website-design-development",
      "digital-marketing",
      "ppc-google-ads",
      "website-maintenance"
    ]
  },

  "web-development/website-design-development": {
    "metaTitle": "Website Design & Development in Calgary | Madny Digital Services",
    "metaDescription": "Custom, responsive website design and development for Calgary businesses. Modern, mobile-friendly sites built around your brand and goals. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Website Design & Development in Calgary",
    "intro": "Your website is often the first place potential customers learn about your products or services, making it an important part of your business. Madny Digital Services provides professional website design and development for businesses throughout Calgary and the surrounding areas. We build modern, responsive, and user-friendly websites that are designed around your brand, your services, and your business goals rather than a one-size-fits-all template.",
    "problemsHeading": "Signs Your Business Needs a New or Improved Website",
    "problems": [
      "No website yet for a new or growing business",
      "Existing site looks outdated or unprofessional",
      "Website is not mobile-friendly or does not display well on phones and tablets",
      "Site lacks clear calls to action for visitors",
      "Content is disorganized or hard for customers to navigate",
      "Missing contact and inquiry forms for leads",
      "Website is slow or performs poorly",
      "Site structure does not support basic SEO",
      "Need for a landing page or service-specific pages",
      "Existing website needs a redesign for better functionality"
    ],
    "servicesHeading": "What Our Website Design & Development Includes",
    "services": [
      {
        "title": "Custom Website Design & Development",
        "description": "We design and build websites around your specific business requirements, including custom website design, business website development, and custom website functionality tailored to how your business operates."
      },
      {
        "title": "Responsive & Mobile-Friendly Design",
        "description": "We develop responsive websites that adapt to desktop, laptop, tablet, and smartphone screens, focusing on clean layouts, easy navigation, clear calls to action, and fast, efficient performance."
      },
      {
        "title": "Business Websites for Local Industries",
        "description": "We create websites that clearly present your company, services, products, and contact information for small and growing businesses, contractors, professional services, retail, restaurants, real estate, construction, healthcare, and other local businesses."
      },
      {
        "title": "Website Redesign",
        "description": "If you already have a website but need a more modern look or better functionality, we can assess supported existing websites and help improve their design, structure, mobile responsiveness, content presentation, and overall user experience."
      },
      {
        "title": "Landing Pages & Contact Forms",
        "description": "We build landing pages and service-based websites along with contact and inquiry forms so visitors can easily reach your business and take action."
      },
      {
        "title": "SEO-Ready Structure & Setup Support",
        "description": "Our websites are developed with a clear structure that supports search engine optimization, including organized pages, headings, metadata, and mobile responsiveness, along with basic SEO setup, analytics integration, and domain and hosting setup assistance."
      }
    ],
    "processHeading": "Our Website Design & Development Process",
    "process": [
      {
        "step": "Understand Your Business",
        "description": "We start by learning about your brand, services, and business goals so the website reflects your specific requirements rather than a generic template."
      },
      {
        "step": "Design & Content Integration",
        "description": "We design clean, professional layouts with organized content, easy navigation, and user-friendly forms, and integrate your content into the site."
      },
      {
        "step": "Responsive Development",
        "description": "We develop the site to be responsive and mobile-friendly so it provides a consistent browsing experience across desktop, laptop, tablet, and smartphone screens."
      },
      {
        "step": "SEO Structure, Setup & Launch Support",
        "description": "We build the site with an SEO-ready structure and offer basic SEO setup, analytics integration, and domain and hosting setup assistance to help get your site ready to launch."
      }
    ],
    "areaDescription": "Madny Digital Services provides website design and development for businesses in Calgary, AB and the surrounding areas, including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How much does a new website cost in Calgary?",
        "answer": "Website pricing depends on the specific requirements of your business, such as the scope of design, functionality, and content needed. Since every business is different, the best way to get an accurate picture is to contact Madny Digital Services to discuss your project."
      },
      {
        "question": "How long does it take to build a website?",
        "answer": "Timelines depend on the complexity of the site and your specific business requirements, so we can't state a fixed turnaround here. Contact us to discuss your project and we can go over what's involved."
      },
      {
        "question": "Can you redesign my existing website instead of building a new one?",
        "answer": "Yes. If you already have a website but need a more modern look or better functionality, we can assess supported existing websites and help improve their design, structure, mobile responsiveness, content presentation, and overall user experience."
      },
      {
        "question": "Will my website work well on phones and tablets?",
        "answer": "Yes. We develop responsive websites that adapt to different screen sizes, including desktop, laptop, tablet, and smartphone, so your site provides a consistent browsing experience for every visitor."
      },
      {
        "question": "Do you help with SEO for a new website?",
        "answer": "We build websites with a clear, SEO-ready structure that includes organized pages, headings, metadata, mobile responsiveness, and other foundational SEO elements, plus basic SEO setup and analytics integration. Additional SEO and digital marketing services are also available based on your business requirements."
      },
      {
        "question": "Do you help set up my domain and hosting?",
        "answer": "Yes, we offer domain and hosting setup assistance as part of our website services, along with website updates and maintenance after launch."
      }
    ],
    "ctaHeading": "Ready for a New Website?",
    "ctaText": "Whether you need a new business website, a redesign, landing pages, or custom website functionality, contact Madny Digital Services to build a professional online presence for your business in Calgary.",
    "relatedServices": [
      "ecommerce-development",
      "custom-web-portals",
      "website-maintenance",
      "seo"
    ]
  },

  "web-development/website-maintenance": {
    "metaTitle": "Website Maintenance Calgary | Madny Digital Services",
    "metaDescription": "Keep your Calgary business website updated, secure, and running smoothly with ongoing maintenance, content updates, bug fixes, and technical support.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Website Maintenance in Calgary",
    "intro": "A website needs regular updates and technical care to keep working the way it should. When content goes stale, features break, or compatibility issues creep in, it can affect your site and the experience of everyone who visits it. Madny Digital Services provides website maintenance for businesses in Calgary and nearby areas, helping keep supported websites updated, functional, and optimized as your business needs change.",
    "problemsHeading": "Common Signs Your Website Needs Maintenance",
    "problems": [
      "Outdated content, images, or business information",
      "Broken links throughout the site",
      "Contact forms that are not working",
      "Mobile responsiveness or display problems",
      "Website software that is out of date",
      "Bugs or errors affecting functionality",
      "Slow performance or reliability issues",
      "Uncertainty about backups or basic security updates"
    ],
    "servicesHeading": "Our Website Maintenance Services May Include",
    "services": [
      {
        "title": "Content & Website Updates",
        "description": "We help update business information, services, products, images, promotions, and contact details, and can add new pages or sections as your business introduces additional services or information."
      },
      {
        "title": "Website Troubleshooting & Fixes",
        "description": "If your site has broken pages, non-working forms, display problems, mobile issues, or other technical errors, we assess the problem and determine the available solutions to help restore functionality."
      },
      {
        "title": "Functionality Testing & Bug Fixes",
        "description": "We test website functionality, fix broken links and contact form issues, address mobile responsiveness problems, and resolve bugs affecting how your site works."
      },
      {
        "title": "Performance & Technical Maintenance",
        "description": "Depending on your website, we can assist with software updates, performance optimization, compatibility issues, backups, and other technical requirements to help improve reliability and usability."
      },
      {
        "title": "Domain, Hosting & Security Support",
        "description": "Our maintenance work can also include domain and hosting support, basic security updates, backup assistance, and general technical maintenance for your website."
      },
      {
        "title": "Existing Website Maintenance",
        "description": "Already have a website built by another company or developer? We can assess supported websites to determine whether we can provide updates or ongoing maintenance, depending on the platform, technology, hosting environment, access, and overall condition."
      }
    ],
    "processHeading": "How Our Website Maintenance Works",
    "process": [
      {
        "step": "Assessment",
        "description": "We review your website, including its platform, technology, hosting environment, access, and overall condition, to determine what updates or maintenance we can provide."
      },
      {
        "step": "Troubleshooting",
        "description": "For broken pages, forms, display problems, or other technical errors, we assess the issue and determine the available solutions."
      },
      {
        "step": "Updates & Fixes",
        "description": "We carry out the needed content updates, bug fixes, broken link repairs, mobile responsiveness fixes, and software updates for your site."
      },
      {
        "step": "Ongoing Support",
        "description": "For businesses that want continued support, we assist with performance improvements, basic security updates, backup assistance, and general technical maintenance as your needs change."
      }
    ],
    "areaDescription": "Madny Digital Services provides website maintenance for businesses in Calgary, AB, and nearby areas including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How much does website maintenance cost in Calgary?",
        "answer": "The cost of website maintenance depends on your website's platform, condition, and the specific updates or ongoing support you need, so we cannot list a set price here. Contact Madny Digital Services and we can assess your site and discuss what maintenance would involve."
      },
      {
        "question": "How long does it take to fix a website issue?",
        "answer": "Turnaround time depends on the type of issue, your website's platform, and its overall condition, so a specific timeframe cannot be guaranteed. Reach out to us with details about the problem and we can look into what is involved."
      },
      {
        "question": "Can you maintain a website that another company or developer built?",
        "answer": "Possibly. We can assess supported websites to determine whether we can provide updates or ongoing maintenance. Our ability to maintain an existing website depends on its platform, technology, hosting environment, access, and overall condition."
      },
      {
        "question": "What kind of website problems can you fix?",
        "answer": "We can help with broken pages, contact forms that are not working, display problems, mobile responsiveness issues, broken links, bugs, and other technical errors. We assess the problem first to determine the available solutions."
      },
      {
        "question": "Do you only fix problems, or can you also update content?",
        "answer": "Both. We help with text and image changes, new page additions, product and service updates, and other content changes, in addition to technical fixes like bug fixes, performance improvements, and software updates."
      },
      {
        "question": "Can you help with website security and backups?",
        "answer": "We can assist with basic security updates and backup assistance as part of our website maintenance services. What is possible for your site depends on its platform and condition, so contact us to discuss your specific website."
      }
    ],
    "ctaHeading": "Need Website Maintenance?",
    "ctaText": "Keep your Calgary business website current and functioning properly with professional website maintenance and technical support from Madny Digital Services.",
    "relatedServices": [
      "website-design-development",
      "ecommerce-development",
      "custom-web-portals",
      "seo"
    ]
  },

  "cellphone/fix-camera": {
    "metaTitle": "Cellphone Camera Repair Calgary | Madny Digital Services",
    "metaDescription": "Blurry photos, black screen, or camera not working? Get professional cellphone camera diagnosis and repair in Calgary. Call (403) 708-8214 today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Camera Repair in Calgary",
    "intro": "If your cellphone camera is giving you trouble, you're not alone. A damaged or malfunctioning camera can lead to blurry photos, a black camera screen, focusing problems, or a camera that won't work at all. Madny Digital Services offers professional cellphone camera diagnosis and repair in Calgary and the surrounding areas. We check the issue carefully to determine whether it's coming from the camera module, the lens, the software, a loose connection, or another component entirely.",
    "problemsHeading": "Common Cellphone Camera Problems",
    "problems": [
      "Camera not working at all",
      "Black screen when opening the camera app",
      "Blurry photos or videos",
      "Camera not focusing properly",
      "Front camera not working",
      "Rear camera not working",
      "Camera shaking or vibrating",
      "Damaged camera lens",
      "Flash not working properly",
      "Camera problems after a drop or impact"
    ],
    "servicesHeading": "What Our Camera Repair Service May Include",
    "services": [
      {
        "title": "Front Camera Replacement",
        "description": "If your front-facing camera is damaged or no longer working, we can replace it depending on your device and the problem identified."
      },
      {
        "title": "Rear Camera Replacement",
        "description": "A faulty or non-functioning rear camera can often be replaced, restoring your phone's photo and video capability."
      },
      {
        "title": "Camera Lens Assessment",
        "description": "We assess the condition of the camera lens itself, since a damaged lens can cause blurry photos or focusing issues even if the camera module is fine."
      },
      {
        "title": "Internal Connection Inspection",
        "description": "We inspect the internal connections related to the camera, as damaged connections can cause symptoms that look like a failed camera."
      },
      {
        "title": "Camera Software Troubleshooting",
        "description": "Not every camera issue is a hardware problem. We check for software issues that may be causing the camera to malfunction."
      }
    ],
    "processHeading": "Our Camera Diagnosis and Repair Process",
    "process": [
      {
        "step": "Describe the Issue",
        "description": "Tell us what's happening with your camera, whether it's not working, showing a black screen, producing blurry images, or having focus problems."
      },
      {
        "step": "Camera Diagnosis",
        "description": "We inspect the device first, since software issues, damaged connections, physical impact, or other hardware problems can all cause similar symptoms."
      },
      {
        "step": "Identify the Cause",
        "description": "We determine whether the problem is related to the camera module, lens, software, connection, or another component before recommending next steps."
      },
      {
        "step": "Repair or Replacement",
        "description": "Based on what we find, we recommend and carry out an appropriate repair, whether that's a lens issue, a software fix, a connection repair, or a camera replacement."
      }
    ],
    "areaDescription": "Madny Digital Services provides cellphone camera repair for customers throughout Calgary, AB, as well as the nearby communities of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Why is my phone camera taking blurry photos?",
        "answer": "Blurry photos can be caused by a few different things, including a damaged camera lens, a focusing problem, or issues with the camera module itself. We inspect the device first to identify the actual cause before recommending a repair."
      },
      {
        "question": "My phone camera shows a black screen when I open it. What's wrong?",
        "answer": "A black screen when opening the camera is one of the common camera problems we diagnose. It can be related to the camera module, a software issue, a damaged connection, or another component, so we assess your specific device to determine the cause."
      },
      {
        "question": "Do I need a new camera, or can it just be repaired?",
        "answer": "Not every camera problem requires replacing the camera. Software issues, damaged connections, physical impact, or other hardware problems can cause similar symptoms, so we inspect your device first and recommend an appropriate repair based on what we find."
      },
      {
        "question": "How much does cellphone camera repair cost in Calgary?",
        "answer": "Camera repair options depend on your specific device and the problem identified, so we're not able to give a set price without assessing your phone first. Bring your device to Madny Digital Services and we'll evaluate the issue and recommend an appropriate solution."
      },
      {
        "question": "How long does camera repair take?",
        "answer": "Repair time depends on the device and the issue found during diagnosis. The best way to know what to expect for your phone is to bring it in so we can assess the problem and discuss the appropriate next steps with you."
      },
      {
        "question": "My phone's camera stopped working after I dropped it. Can it be fixed?",
        "answer": "Problems after a drop or impact are among the camera issues we diagnose. A drop can affect the camera module, lens, or internal connections, so we inspect the device to determine what was affected and recommend an appropriate repair."
      },
      {
        "question": "Can you fix both the front and rear camera?",
        "answer": "Yes, we diagnose and repair issues with both the front camera and the rear camera, including replacement of either one depending on your device and the problem identified."
      }
    ],
    "ctaHeading": "Having Camera Problems With Your Phone?",
    "ctaText": "Bring your phone to Madny Digital Services in Calgary for professional camera diagnosis and repair, call (403) 708-8214 and we'll assess the problem and recommend an appropriate solution.",
    "relatedServices": [
      "replace-broken-screen",
      "replace-microphone-speaker",
      "liquid-damage",
      "sales-and-service"
    ]
  },

  "cellphone/liquid-damage": {
    "metaTitle": "Cellphone Liquid Damage Repair Calgary | Madny Digital",
    "metaDescription": "Dropped your phone in water or spilled liquid on it? Professional liquid damage diagnosis and repair for supported devices in Calgary. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Liquid Damage Repair in Calgary",
    "intro": "Whether you dropped your cellphone in water or spilled a liquid on it accidentally, the exposure can reach far beyond the surface, affecting the battery, charging system, screen, camera, speakers, microphone, motherboard, and other internal components. Madny Digital Services provides professional liquid damage diagnosis and repair services for supported devices in Calgary and the surrounding areas.",
    "problemsHeading": "Common Signs of Liquid Damage",
    "problems": [
      "Cellphone not turning on",
      "Screen or touchscreen problems",
      "Phone not charging",
      "Battery draining unexpectedly",
      "Camera not working",
      "Speaker or microphone problems",
      "Unexpected shutdowns or restarts",
      "Buttons or ports not working",
      "Unusual device behaviour",
      "Problems after water or liquid exposure"
    ],
    "servicesHeading": "Our Liquid Damage Diagnosis and Repair Service",
    "services": [
      {
        "title": "Affected Component Identification",
        "description": "The extent of liquid damage can vary depending on the type of liquid, the amount of exposure, and which components were affected, so we inspect the device to identify what has been impacted."
      },
      {
        "title": "Internal Liquid Damage and Corrosion Check",
        "description": "We inspect the device for internal liquid damage and signs of corrosion that may be affecting the phone's internal connections and components."
      },
      {
        "title": "Battery and Charging System Inspection",
        "description": "We check for battery issues and charging system problems that can result from liquid exposure."
      },
      {
        "title": "Screen, Camera, and Audio Inspection",
        "description": "We inspect for screen and display issues along with camera, speaker, and microphone problems that may follow liquid exposure."
      },
      {
        "title": "Cleaning and Component Troubleshooting",
        "description": "Depending on the condition of the phone, our service may include internal device inspection, cleaning of affected areas, corrosion assessment, and component troubleshooting."
      },
      {
        "title": "Damaged Part Replacement and Testing",
        "description": "Where needed, our service may include damaged part replacement along with charging system testing, screen and audio testing, and basic device functionality testing."
      }
    ],
    "processHeading": "How We Diagnose and Repair Liquid Damage",
    "process": [
      {
        "step": "Assessment",
        "description": "We inspect the device for internal liquid damage, signs of corrosion, and problems with the battery, charging system, screen, camera, speakers, and microphone."
      },
      {
        "step": "Motherboard and Connection Check",
        "description": "We check for internal connection damage and motherboard-related problems that liquid exposure can cause."
      },
      {
        "step": "Cleaning and Repair",
        "description": "Depending on the condition of the phone, we clean the affected areas, assess corrosion, troubleshoot components, and replace damaged parts as needed."
      },
      {
        "step": "Functionality Testing",
        "description": "We test the charging system, screen, and audio, along with basic device functionality, to check the results of the repair."
      }
    ],
    "areaDescription": "Madny Digital Services provides cellphone liquid damage diagnosis and repair for customers in Calgary and the nearby areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Can a phone that got wet or had liquid spilled on it still be repaired?",
        "answer": "Some liquid-damaged phones can be successfully repaired, while severe damage may affect multiple internal components. Because liquid damage and corrosion can have unpredictable effects, successful repair and long-term device reliability cannot be guaranteed. We'll assess the condition of your phone and explain the available cleaning, repair, or replacement options."
      },
      {
        "question": "What should I do right after my phone gets wet?",
        "answer": "Avoid repeatedly charging or turning the phone on if it is not functioning normally, since continuing to power a liquid-damaged device can potentially cause additional internal damage. It's best to have the phone professionally assessed as soon as practical."
      },
      {
        "question": "How much does liquid damage repair cost in Calgary?",
        "answer": "Repair options depend on the extent of the damage and the availability of compatible parts, so we are not able to quote a price without assessing your device first. Bring your phone to Madny Digital Services in Calgary and we'll assess the damage and explain your options."
      },
      {
        "question": "How long does liquid damage repair take?",
        "answer": "Turnaround depends on the extent of the damage, which components are affected, and the availability of compatible parts. Contact us or bring in your device for an assessment and we can discuss what's involved for your specific phone."
      },
      {
        "question": "My phone still turns on after getting wet. Do I still need it checked?",
        "answer": "Yes. Liquid damage may cause problems immediately or appear over time as internal components are affected, so a phone that seems fine right after exposure can still develop issues like unexpected shutdowns, battery drain, or charging and screen problems later."
      },
      {
        "question": "What kinds of problems can liquid exposure cause?",
        "answer": "Liquid exposure can affect the battery, charging system, screen, camera, speakers, microphone, motherboard, and other internal components, which can show up as signs like the phone not turning on, touchscreen problems, charging issues, camera or speaker problems, unusual behaviour, or unexpected shutdowns and restarts."
      }
    ],
    "ctaHeading": "Liquid-Damaged Cellphone?",
    "ctaText": "Bring your device to Madny Digital Services in Calgary for professional liquid damage diagnosis, and we'll assess the condition of the phone and explain the available cleaning, repair, or replacement options.",
    "relatedServices": [
      "replace-broken-screen",
      "replace-battery",
      "repair-replace-charging-port",
      "replace-microphone-speaker"
    ]
  },

  "cellphone/repair-replace-charging-port": {
    "metaTitle": "Cellphone Charging Port Repair in Calgary | Madny Digital",
    "metaDescription": "Phone not charging or charging slowly in Calgary? Get professional charging port diagnosis, cleaning, repair, and replacement at Madny Digital Services.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Charging Port Repair and Replacement in Calgary",
    "intro": "If your cellphone is not charging properly, charging slowly, or only charges when the cable sits at a certain angle, the cause could be dirt, physical damage, a worn charging port, or another hardware issue. Madny Digital Services provides professional cellphone charging port diagnosis, cleaning, repair, and replacement for customers in Calgary and the surrounding areas.",
    "problemsHeading": "Common Charging Port Problems",
    "problems": [
      "Cellphone not charging at all",
      "Slow or inconsistent charging",
      "Charging cable feels loose in the port",
      "Phone only charges when held at certain angles",
      "Charging repeatedly connects and disconnects",
      "Damaged or broken charging port",
      "Dirt or debris inside the port",
      "Cable does not fit properly",
      "Charging problems that started after a drop or impact"
    ],
    "servicesHeading": "Charging Port Diagnosis, Cleaning, Repair and Replacement",
    "services": [
      {
        "title": "Repair or Replacement Assessment",
        "description": "A phone that will not charge does not always need a new charging port. We inspect the device first, since the problem may actually be caused by debris, the charging cable, the battery, software, or internal connections."
      },
      {
        "title": "Charging Port Cleaning",
        "description": "Dirt and debris inside the port can cause loose connections and inconsistent charging, and cleaning may resolve the issue without any part replacement."
      },
      {
        "title": "Charging Port Diagnosis",
        "description": "We identify the likely cause of your charging issue before recommending any repair, so you know what is actually going on with your device."
      },
      {
        "title": "Charging Port Repair",
        "description": "When the port itself is affected, we can carry out a repair depending on the problem and your specific cellphone model."
      },
      {
        "title": "Charging Port Replacement",
        "description": "If the charging port is damaged or worn beyond repair, we offer full charging port replacement depending on the problem and cellphone model."
      }
    ],
    "processHeading": "Our Charging Port Diagnosis Process",
    "process": [
      {
        "step": "Describe the Issue",
        "description": "Bring your phone to Madny Digital Services and tell us what you're experiencing, whether it's slow charging, a loose cable, or charging that only works at certain angles."
      },
      {
        "step": "Device Inspection",
        "description": "We inspect the device first to identify whether the cause is debris, the charging cable, the battery, software, internal connections, or the charging port itself."
      },
      {
        "step": "Recommend a Solution",
        "description": "Based on the diagnosis, we recommend an appropriate solution, whether that's cleaning, repair, or replacement."
      },
      {
        "step": "Cleaning, Repair, or Replacement",
        "description": "Depending on the problem and your cellphone model, our service may include charging port cleaning, repair, or replacement."
      }
    ],
    "areaDescription": "Madny Digital Services provides charging port diagnosis, cleaning, repair, and replacement for customers throughout Calgary, AB, and the surrounding communities of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "My phone only charges when I hold the cable at an angle. What's wrong?",
        "answer": "This is a common charging port symptom that can be caused by dirt or debris inside the port, a worn or damaged port, or an issue with the charging cable itself. We inspect the device first to identify the likely cause before recommending a solution."
      },
      {
        "question": "Does my phone need a new charging port, or could it be something else?",
        "answer": "Not necessarily. A phone that does not charge does not always need a new charging port. The problem may be caused by debris, the charging cable, the battery, software, or internal connections, so we inspect the device first to identify the likely cause."
      },
      {
        "question": "How much does charging port repair cost in Calgary?",
        "answer": "Cost depends on the problem and your specific cellphone model. Bring your phone in for a diagnosis and we'll recommend an appropriate cleaning, repair, or replacement solution."
      },
      {
        "question": "How long does charging port repair or replacement take?",
        "answer": "Timing depends on the assessment, your device model, and whether the solution is cleaning, repair, or replacement. Contact us or bring your phone in and we can give you more detail after diagnosis."
      },
      {
        "question": "Can a dirty charging port really stop my phone from charging?",
        "answer": "Yes. Dirt or debris inside the port is one of the common causes of charging issues, along with a loose-fitting cable or a damaged or broken port. Our diagnosis identifies whether cleaning alone can resolve it."
      },
      {
        "question": "My phone stopped charging properly after I dropped it. Is that related?",
        "answer": "It can be. Charging problems that start after a drop or impact are among the issues we diagnose, and the cause could be damage to the port itself or another affected component. We inspect the device to determine the appropriate solution."
      }
    ],
    "ctaHeading": "Get Your Charging Port Diagnosed",
    "ctaText": "Bring your phone to Madny Digital Services in Calgary for professional charging port diagnosis and an appropriate cleaning, repair, or replacement recommendation.",
    "relatedServices": [
      "replace-battery",
      "liquid-damage",
      "sales-and-service",
      "unlocking"
    ]
  },

  "cellphone/replace-backglass": {
    "metaTitle": "Cellphone Back Glass Replacement Calgary | Madny Digital Services",
    "metaDescription": "Cracked or shattered back glass on your phone? Madny Digital Services offers professional back glass replacement in Calgary. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Back Glass Replacement in Calgary",
    "intro": "A cracked or shattered back glass does more than hurt the look of your phone. It can leave the device more exposed to dust, moisture, and further physical damage. Madny Digital Services provides professional cellphone back glass replacement for supported devices in Calgary and nearby areas.",
    "problemsHeading": "Common Back Glass Problems",
    "problems": [
      "Cracked back glass",
      "Shattered rear glass",
      "Chipped or broken glass",
      "Damage around the camera area",
      "Back glass separating from the device",
      "Damage after a drop or impact",
      "Sharp or loose glass pieces",
      "Cosmetic rear housing damage"
    ],
    "servicesHeading": "What Our Back Glass Replacement May Include",
    "services": [
      {
        "title": "Back Glass Damage Assessment",
        "description": "We assess the extent of the back glass damage and your phone model before recommending a replacement option."
      },
      {
        "title": "Removal of Damaged Back Glass",
        "description": "The cracked, shattered, or loose back glass is carefully removed from the device."
      },
      {
        "title": "Compatible Replacement Installation",
        "description": "A compatible replacement back glass is installed depending on your phone model and the extent of the damage."
      },
      {
        "title": "Camera-Area Inspection",
        "description": "Since back glass damage often occurs around the camera area, we inspect this area as part of the service."
      },
      {
        "title": "Cleaning, Preparation, and Final Testing",
        "description": "The device is cleaned and prepared, then given a final inspection and basic functionality testing after replacement."
      },
      {
        "title": "Protective Cases and Accessories",
        "description": "We also carry selected cellphone cases and other accessories that can help protect your phone against everyday drops, scratches, and impacts."
      }
    ],
    "processHeading": "Our Back Glass Replacement Process",
    "process": [
      {
        "step": "Damage Assessment",
        "description": "We assess the back glass damage and your phone model to determine an appropriate replacement option."
      },
      {
        "step": "Removal of Damaged Glass",
        "description": "The damaged back glass is removed, including any sharp or loose pieces."
      },
      {
        "step": "Replacement Installation",
        "description": "A compatible replacement back glass is installed, with inspection of the camera area and cleaning and preparation of the device."
      },
      {
        "step": "Final Inspection and Testing",
        "description": "The device receives a final inspection and basic functionality testing to confirm the replacement was completed."
      }
    ],
    "areaDescription": "Madny Digital Services proudly serves Calgary and the surrounding areas, including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Can you fix a cracked back glass on my phone in Calgary?",
        "answer": "Yes. Madny Digital Services provides professional cellphone back glass replacement for supported devices in Calgary and nearby areas. We assess issues such as cracked, shattered, or chipped back glass before recommending a replacement option."
      },
      {
        "question": "How much does back glass replacement cost?",
        "answer": "Cost depends on your phone model and the extent of the damage. We assess the damage first and recommend an appropriate replacement option for your specific device, so contact us for details on your situation."
      },
      {
        "question": "How long does back glass replacement take?",
        "answer": "Turnaround time depends on your phone model and the extent of the damage. Bring your phone in and we'll assess it and recommend an appropriate replacement option, including an estimated timeframe."
      },
      {
        "question": "Is it safe to keep using my phone with a cracked back glass?",
        "answer": "The PDF notes that cracked or shattered back glass can affect the appearance of your phone and may leave the device more exposed to dust, moisture, and further physical damage, so it's worth having it assessed."
      },
      {
        "question": "My back glass cracked near the camera, is that a problem?",
        "answer": "Damage around the camera area is one of the issues we assess as part of back glass replacement. Our service includes a camera-area inspection to check on this specifically."
      },
      {
        "question": "Will replacing my back glass make my phone look new again?",
        "answer": "Depending on your phone model and the extent of the damage, replacing the damaged back glass can help restore the appearance and physical condition of your device. We also carry selected cases and accessories that can help protect it against future drops, scratches, and impacts."
      }
    ],
    "ctaHeading": "Cracked or Broken Back Glass?",
    "ctaText": "Bring your cellphone to Madny Digital Services in Calgary and we'll assess the damage and recommend an appropriate back glass replacement option for your device.",
    "relatedServices": [
      "replace-broken-screen",
      "fix-camera",
      "liquid-damage",
      "replace-battery"
    ]
  },

  "cellphone/replace-battery": {
    "metaTitle": "Cellphone Battery Replacement Calgary | Madny Digital Services",
    "metaDescription": "Battery draining fast or not holding a charge? Get professional cellphone battery diagnosis and replacement in Calgary. Contact Madny Digital Services today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Battery Replacement in Calgary",
    "intro": "If your cellphone battery is draining fast, charging slowly, or no longer getting you through the day, it may simply be wearing out. Battery performance naturally declines over time and can eventually start affecting how reliable your device is. Madny Digital Services offers professional cellphone battery diagnosis and replacement for customers in Calgary and the surrounding areas.",
    "problemsHeading": "Common Cellphone Battery Problems",
    "problems": [
      "Battery draining quickly",
      "Phone not holding a charge",
      "Battery percentage dropping unexpectedly",
      "Cellphone shutting down unexpectedly",
      "Phone only working while plugged into a charger",
      "Battery not charging properly",
      "Reduced overall battery life",
      "Battery-related warning messages",
      "Phone overheating during normal use",
      "Swollen or physically damaged battery"
    ],
    "servicesHeading": "Battery Diagnosis and Replacement Service",
    "services": [
      {
        "title": "Does Your Battery Actually Need Replacing?",
        "description": "Charging or power problems are not always caused by the battery itself. The charging port, charger, software, or other internal components can sometimes produce similar symptoms."
      },
      {
        "title": "Device Assessment Before Replacement",
        "description": "We assess the device before recommending a battery replacement whenever possible, so you know the recommendation fits what is actually happening with your phone."
      },
      {
        "title": "Battery Condition Assessment",
        "description": "As part of the service, we evaluate the condition of your existing battery to help determine whether replacement is the right next step."
      },
      {
        "title": "Old Battery Removal",
        "description": "When replacement is needed, we carefully remove the old battery as part of the repair."
      },
      {
        "title": "Compatible Replacement Battery Installation",
        "description": "We install a compatible replacement battery suited to your specific cellphone model."
      }
    ],
    "processHeading": "Our Battery Diagnosis and Replacement Process",
    "process": [
      {
        "step": "Initial Assessment",
        "description": "We start by assessing your device to rule out other causes of charging or power issues, such as the charging port, charger, software, or internal connections."
      },
      {
        "step": "Battery Condition Check",
        "description": "We evaluate the condition of the battery itself before recommending replacement."
      },
      {
        "step": "Old Battery Removal",
        "description": "If replacement is the right solution, we remove the old, worn, or damaged battery from your device."
      },
      {
        "step": "Replacement Battery Installation",
        "description": "We install a compatible replacement battery based on your cellphone model, matching the service to what your device actually needs."
      }
    ],
    "areaDescription": "Madny Digital Services provides cellphone battery replacement in Calgary, AB, along with the surrounding communities of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How do I know if my cellphone needs a new battery or if something else is wrong?",
        "answer": "Charging or power problems are not always caused by the battery. Issues with the charging port, charger, software, or internal components can sometimes produce similar symptoms, which is why we assess the device before recommending battery replacement whenever possible."
      },
      {
        "question": "My phone shuts down unexpectedly even when the battery shows charge left. Is that a battery problem?",
        "answer": "Unexpected shutdowns are one of the battery-related issues we assess. Since similar symptoms can come from other components, we recommend bringing the phone in for a proper diagnosis rather than assuming it is the battery."
      },
      {
        "question": "How much does cellphone battery replacement cost in Calgary?",
        "answer": "Cost depends on your cellphone model and the assessment of your device, so we are not able to quote a price without seeing the phone. Bring it to Madny Digital Services and we will assess the battery and recommend an appropriate solution."
      },
      {
        "question": "How long does a battery replacement take?",
        "answer": "Turnaround depends on the cellphone model and what the assessment finds, so timing can vary. Contact us with your device details and we can talk through what to expect for your situation."
      },
      {
        "question": "My phone only stays on while it's plugged into the charger. Can that be fixed?",
        "answer": "This is one of the symptoms we assess as part of our battery diagnosis, since it can be related to a failing battery or another underlying issue with the device."
      },
      {
        "question": "Is it safe to keep using my phone if the battery is swollen?",
        "answer": "A swollen or physically damaged battery is one of the issues we assess as part of our battery service. Bring the device in so we can evaluate its condition and recommend an appropriate solution."
      }
    ],
    "ctaHeading": "Need a New Cellphone Battery?",
    "ctaText": "Bring your phone to Madny Digital Services in Calgary for professional battery diagnosis and replacement, and we will recommend the right solution for your device.",
    "relatedServices": [
      "repair-replace-charging-port",
      "replace-broken-screen",
      "replace-backglass",
      "liquid-damage"
    ]
  },

  "cellphone/replace-broken-screen": {
    "metaTitle": "Cellphone Screen Replacement Calgary | Madny Digital Services",
    "metaDescription": "Cracked or unresponsive cellphone screen in Calgary? Madny Digital Services assesses the damage and professionally installs and tests a replacement screen.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Screen Replacement in Calgary",
    "intro": "A cracked or damaged cellphone screen can make a device hard to use and can affect how the display or touchscreen functions. Madny Digital Services offers professional cellphone screen replacement in Calgary and the surrounding areas. Our process starts with assessing the screen damage, then identifying a compatible replacement option, and finally installing and testing the new screen before it goes back into your hands.",
    "problemsHeading": "Common Cellphone Screen Problems",
    "problems": [
      "Cracked cellphone screens",
      "Shattered screen glass",
      "Black or blank displays",
      "Touchscreen not responding",
      "Flickering screens",
      "Lines on the display",
      "Display discoloration",
      "Partially working touchscreens",
      "Damaged LCD or OLED displays",
      "Screen damage after a drop or impact"
    ],
    "servicesHeading": "What Our Screen Replacement Service May Include",
    "services": [
      {
        "title": "Screen Damage Assessment",
        "description": "We examine the cracked, shattered, or malfunctioning screen to understand the extent of the damage and how it is affecting your device."
      },
      {
        "title": "Compatible Screen Replacement",
        "description": "We identify and use a replacement screen option that is compatible with your specific cellphone model."
      },
      {
        "title": "Touchscreen Testing",
        "description": "After installation, we test the touchscreen to confirm it responds properly across the display."
      },
      {
        "title": "Display and Brightness Testing",
        "description": "We check the new screen's display quality and brightness to help restore your phone's appearance and functionality."
      },
      {
        "title": "Basic Device Functionality Testing",
        "description": "We test basic device functions after the replacement to help confirm the phone is working as expected."
      },
      {
        "title": "Cleaning and Final Inspection",
        "description": "Your device is cleaned and given a final inspection before it is returned to you."
      }
    ],
    "processHeading": "Our Screen Diagnosis and Replacement Process",
    "process": [
      {
        "step": "Screen Damage Assessment",
        "description": "We assess your cellphone's screen damage, whether it is cracked, shattered, unresponsive, or showing display issues."
      },
      {
        "step": "Identify a Compatible Replacement",
        "description": "Based on your cellphone model and the extent of the damage, we identify an appropriate replacement screen option."
      },
      {
        "step": "Professional Installation",
        "description": "We professionally install the new screen on your device."
      },
      {
        "step": "Testing and Final Inspection",
        "description": "We test the touchscreen, display, brightness, and basic device functionality, then clean and inspect the phone before returning it."
      }
    ],
    "areaDescription": "Madny Digital Services provides cellphone screen replacement for customers in Calgary and the nearby areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "How much does cellphone screen replacement cost in Calgary?",
        "answer": "Screen replacement cost depends on your cellphone model and the extent of the damage, so it cannot be quoted without an assessment. Bring your device to Madny Digital Services in Calgary and we'll assess the damage and provide an appropriate screen replacement option for your phone."
      },
      {
        "question": "How long does a screen replacement take?",
        "answer": "Turnaround time depends on your specific cellphone model and the extent of the screen damage. Contact Madny Digital Services in Calgary so we can assess your device and let you know what to expect."
      },
      {
        "question": "Can any cracked or shattered screen be replaced?",
        "answer": "Whether a screen can be restored depends on your cellphone model and the extent of the damage. We assess the screen damage and identify a compatible replacement option as part of our process."
      },
      {
        "question": "My touchscreen isn't responding, but the screen isn't cracked. Can you still help?",
        "answer": "Yes. We assess and repair a range of screen-related problems, including touchscreens that are not responding, partially working touchscreens, flickering screens, and blank or black displays, not just physical cracks."
      },
      {
        "question": "Will my phone work the same after the screen is replaced?",
        "answer": "Our screen replacement service is intended to restore both the appearance and functionality of your device, depending on your cellphone model and the extent of the damage. After installation we test the touchscreen, display and brightness, and basic device functionality, then clean and inspect the phone."
      },
      {
        "question": "Can I get a screen protector or case after my screen is replaced?",
        "answer": "Yes. After your screen replacement, you can ask about available screen protectors and cellphone cases to help protect your device from everyday scratches and accidental damage."
      }
    ],
    "ctaHeading": "Broken Your Cellphone Screen?",
    "ctaText": "Bring your device to Madny Digital Services in Calgary for professional screen diagnosis and replacement.",
    "relatedServices": [
      "fix-camera",
      "replace-battery",
      "replace-backglass",
      "liquid-damage"
    ]
  },

  "cellphone/replace-microphone-speaker": {
    "metaTitle": "Microphone & Speaker Repair Calgary | Madny Digital Services",
    "metaDescription": "Can't hear calls or be heard in Calgary? We diagnose and repair cellphone microphone and speaker issues, from cleaning to replacement. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Microphone & Speaker Repair in Calgary",
    "intro": "Struggling to hear calls or be heard by the person on the other end? Microphone and speaker trouble can get in the way of phone calls, videos, music, voice recordings, notifications, and other everyday functions on your cellphone. Madny Digital Services offers professional microphone and speaker diagnosis, repair, and replacement for cellphones in Calgary and the surrounding areas.",
    "problemsHeading": "Common Microphone and Speaker Problems",
    "problems": [
      "Other people cannot hear you during calls",
      "Microphone not working at all",
      "Low or unclear microphone sound",
      "Voice recordings not working properly",
      "Distorted audio during calls",
      "Microphone problems after a drop or liquid exposure",
      "Microphone openings blocked by dirt or debris",
      "Speaker not producing sound or has low volume",
      "Crackling or distorted, unclear audio from the speaker",
      "Earpiece speaker or loudspeaker not working, with audio cutting in and out"
    ],
    "servicesHeading": "Our Microphone & Speaker Repair Service May Include",
    "services": [
      {
        "title": "Microphone Cleaning",
        "description": "Since microphone openings can become blocked by dirt or debris, a thorough cleaning is often part of restoring clear audio during calls and recordings."
      },
      {
        "title": "Microphone Replacement",
        "description": "When diagnosis points to a faulty microphone component itself, rather than dirt or a software issue, we replace it to resolve problems like being unheard on calls or low, unclear sound."
      },
      {
        "title": "Earpiece Speaker Replacement",
        "description": "For a non-working or distorted earpiece speaker, we can replace this component so calls come through clearly again."
      },
      {
        "title": "Loudspeaker Replacement",
        "description": "If your loudspeaker has no sound, low volume, or crackling audio, replacement may be needed to restore music, videos, and notification sound."
      },
      {
        "title": "Audio Troubleshooting",
        "description": "We work through audio symptoms methodically, since damaged connections or other components can sometimes cause issues that look like a microphone or speaker failure."
      },
      {
        "title": "Software-Related Checks",
        "description": "Not every audio problem is hardware related, so we also check for software issues that may be causing similar symptoms before recommending a repair."
      }
    ],
    "processHeading": "Our Microphone & Speaker Diagnosis Process",
    "process": [
      {
        "step": "Describe the Issue",
        "description": "Tell us whether the problem is with the microphone, the speaker, or both, such as not being heard on calls or low, distorted, or missing audio."
      },
      {
        "step": "Full Diagnosis",
        "description": "Since not every audio problem requires a replacement part, we check for dirt, software issues, and damaged connections that can cause symptoms similar to a failed microphone or speaker."
      },
      {
        "step": "Recommended Solution",
        "description": "Based on the diagnosis, we identify the issue and recommend an appropriate cleaning, repair, or replacement solution for your specific device."
      },
      {
        "step": "Repair or Replacement",
        "description": "We carry out the recommended service, whether that's a microphone cleaning, a microphone replacement, or an earpiece or loudspeaker replacement."
      }
    ],
    "areaDescription": "Madny Digital Services proudly serves Calgary, AB along with the surrounding communities of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Why can't the person I'm calling hear me on my cellphone?",
        "answer": "This is a common microphone problem we diagnose in Calgary. It can be caused by a faulty microphone, dirt or debris blocking the microphone opening, or damage from a drop or liquid exposure. We inspect the device to identify the cause and recommend an appropriate solution."
      },
      {
        "question": "Do I need a new speaker or microphone, or can it be fixed another way?",
        "answer": "Not every audio problem requires a replacement part. Dirt, software issues, or damaged connections can sometimes cause symptoms that look like a hardware failure. We diagnose the device first and recommend the appropriate cleaning, repair, or replacement solution based on what we find."
      },
      {
        "question": "My phone speaker sounds crackly or distorted. What's wrong?",
        "answer": "Crackling or distorted audio is one of the speaker issues we assess, along with low volume, no sound, and audio cutting in and out. These can affect calls, music, videos, and notifications, and our diagnosis identifies the cause before we recommend a fix."
      },
      {
        "question": "How much does microphone or speaker repair cost in Calgary?",
        "answer": "Cost depends on the diagnosis, the device model, and which component needs attention, whether that's a simple cleaning or a full replacement. We recommend bringing your phone in for an assessment so we can identify the issue and provide guidance specific to your device. Contact us for details."
      },
      {
        "question": "How long does a microphone or speaker repair take?",
        "answer": "Turnaround depends on the device and the specific repair or replacement needed after diagnosis. We inspect the phone first to identify the issue, and can give you more specific information once that assessment is complete. Contact us to discuss your device."
      },
      {
        "question": "Can water damage cause microphone or speaker problems?",
        "answer": "Yes, the PDF notes that microphone problems can occur after a drop or liquid exposure, and speaker problems can occur after physical damage. Bring your phone in for a professional diagnosis so we can assess the extent of the issue and recommend next steps."
      }
    ],
    "ctaHeading": "Having Cellphone Audio Problems?",
    "ctaText": "Bring your phone to Madny Digital Services in Calgary for professional microphone and speaker diagnosis, and we'll identify the issue and recommend an appropriate cleaning, repair, or replacement solution.",
    "relatedServices": [
      "repair-replace-charging-port",
      "fix-camera",
      "liquid-damage",
      "replace-broken-screen"
    ]
  },

  "cellphone/sales-and-service": {
    "metaTitle": "Cellphone Sales & Service in Calgary | Madny Digital",
    "metaDescription": "Buy new or refurbished cellphones in Calgary, get professional setup, data transfer, virus removal, and unlocking at Madny Digital Services. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Sales & Service in Calgary",
    "intro": "Shopping for a new phone or need a hand getting your mobile device ready to use? Madny Digital Services offers cellphone sales and professional mobile services for customers throughout Calgary and the surrounding area. Our team sells a selection of brand-new and refurbished cellphones and helps customers pick a device that fits their needs and budget, then sets it up, installs apps, configures accounts, transfers supported data, removes unwanted software, and gets it ready for everyday use.",
    "problemsHeading": "Common Reasons Customers Visit Us",
    "problems": [
      "Need a new or refurbished phone but not sure which model fits your needs and budget",
      "New device needs Apple ID or Google account setup",
      "Contacts, photos, and files need to be transferred from an old phone",
      "Apps, email, and Wi-Fi or Bluetooth need to be configured",
      "Phone is running slowly and could use optimization",
      "Unwanted pop-ups, unusual ads, or suspicious apps appearing on the device",
      "Phone is locked to a carrier and needs unlocking",
      "Need cases, chargers, cables, or other accessories for your device"
    ],
    "servicesHeading": "What Our Cellphone Sales & Service Includes",
    "services": [
      {
        "title": "Brand-New & Refurbished Cellphones",
        "description": "We carry a selection of smartphones with different models, specifications, storage capacities, and price options, including brand-new, refurbished, and unlocked iPhones and Android devices for both everyday and business use. Inventory and availability may vary."
      },
      {
        "title": "Cellphone Setup Services",
        "description": "We help set up new cellphones, including Apple ID or Google account setup, email configuration, app installation, software updates, contact and supported data transfer, photo and file transfer, Wi-Fi and Bluetooth setup, and security and privacy settings. Customers are responsible for providing or creating their own account credentials where required."
      },
      {
        "title": "Virus & Unwanted Software Removal",
        "description": "If your phone shows unwanted pop-ups, unusual advertisements, suspicious applications, or other unexpected behaviour, we assess the device and help remove supported malicious or unwanted software, along with browser cleanup, security checks, and general performance cleanup."
      },
      {
        "title": "Cellphone Unlocking",
        "description": "We provide unlocking services for eligible and supported cellphones. Availability depends on the phone model, carrier, device status, and applicable technical requirements."
      },
      {
        "title": "Cellphone Accessories",
        "description": "We carry selected accessories for supported mobile devices, including phone cases, screen protectors, charging cables, wall chargers, power adapters, car chargers, USB cables, and other mobile accessories."
      },
      {
        "title": "Cellphone Repair Services",
        "description": "Alongside sales and setup, we provide professional repair services for supported cellphones, including screen replacement, battery replacement, charging port service, camera and speaker issues, back glass replacement, liquid damage assessment, and general diagnostics."
      }
    ],
    "processHeading": "How Our Cellphone Sales & Setup Works",
    "process": [
      {
        "step": "Choose Your Device",
        "description": "We help you choose a brand-new, refurbished, or unlocked phone based on your needs and budget from our available selection."
      },
      {
        "step": "Account & Software Setup",
        "description": "Our team sets up your phone, installs applications, configures your Apple ID or Google account, and adjusts device settings."
      },
      {
        "step": "Data Transfer",
        "description": "We transfer supported contacts, photos, and files from your previous device and remove unwanted software."
      },
      {
        "step": "Final Configuration & Support",
        "description": "We finish with Wi-Fi and Bluetooth setup, security and privacy settings, general troubleshooting, and phone optimization to get your device ready for everyday use."
      }
    ],
    "areaDescription": "Madny Digital Services provides cellphone sales and service to customers in Calgary, AB and nearby communities including Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Do you sell brand-new phones or only refurbished ones?",
        "answer": "We carry a selection of both brand-new and refurbished cellphones, including unlocked iPhones and Android smartphones with different storage options for everyday or business use. Inventory and availability may vary, so contact us to ask about current stock."
      },
      {
        "question": "Can you set up my new phone and transfer my data from my old one?",
        "answer": "Yes. We can help with new cellphone setup, Apple ID or Google account setup, app installation, and transferring supported contacts, photos, and files from your previous device. Customers are responsible for providing or creating their own account credentials where required."
      },
      {
        "question": "How much does a new cellphone or phone setup cost?",
        "answer": "Cost depends on the specific device, its specifications, and the setup services needed, so we cannot state a fixed price here. Contact us with details about what you are looking for and we can go over the options and pricing."
      },
      {
        "question": "My phone has pop-ups and strange ads. Can you fix that?",
        "answer": "Yes, if your phone is showing unwanted pop-ups, unusual advertisements, suspicious applications, or other unexpected behaviour, we can assess the device and help remove supported malicious or unwanted software, along with browser cleanup and a security check."
      },
      {
        "question": "Can you unlock my cellphone from my current carrier?",
        "answer": "We provide unlocking services for eligible and supported cellphones. Whether your specific device can be unlocked depends on the phone model, carrier, device status, and applicable technical requirements, so contact us to check your device."
      },
      {
        "question": "Do you also repair cellphones, or only sell them?",
        "answer": "Both. Alongside sales and setup, we provide professional repair services for supported cellphones, including screen replacement, battery replacement, charging port service, camera and speaker issues, back glass replacement, and liquid damage assessment."
      }
    ],
    "ctaHeading": "Get Your Phone Sorted Today",
    "ctaText": "Visit Madny Digital Services in Calgary for brand-new and refurbished cellphones, professional setup, data transfer, virus removal, unlocking, and accessories.",
    "relatedServices": [
      "replace-broken-screen",
      "replace-battery",
      "unlocking",
      "liquid-damage"
    ]
  },

  "cellphone/unlocking": {
    "metaTitle": "Cellphone Unlocking Calgary | Madny Digital Services",
    "metaDescription": "Need your phone unlocked in Calgary? We assess carrier lock status and check unlocking options for supported devices. Contact us today.",
    "eyebrow": "Serving Calgary and Nearby Areas",
    "h1": "Cellphone Unlocking in Calgary",
    "intro": "Want to use your cellphone with another compatible network? Madny Digital Services offers cellphone unlocking assistance for supported devices to customers in Calgary and the surrounding areas. Our team assesses your phone and identifies the unlocking options available to you based on the specific device, carrier, and current lock status.",
    "problemsHeading": "Signs You May Need Unlocking Help",
    "problems": [
      "Phone is locked to your current carrier or network",
      "Want to switch to another compatible carrier or SIM card",
      "Unsure whether your phone's unlock status",
      "Need to confirm SIM compatibility before switching providers",
      "Uncertain if your device model supports unlocking",
      "Need help with setup after unlocking",
      "Experiencing basic network issues you can't diagnose yourself",
      "Traveling and need the phone to work with a different provider"
    ],
    "servicesHeading": "What Our Unlocking Service Includes",
    "services": [
      {
        "title": "Carrier and Network Lock Assessment",
        "description": "We check your phone to determine its current carrier or network lock status before recommending next steps."
      },
      {
        "title": "Cellphone Unlocking for Supported Devices",
        "description": "For devices we support, we carry out the unlocking process so the phone can be used with another compatible carrier."
      },
      {
        "title": "SIM Compatibility Checks",
        "description": "We check whether your device will work properly with a different SIM card before you make the switch."
      },
      {
        "title": "Network Compatibility Checks",
        "description": "Since compatibility can vary by phone model and service provider, we review your device against the network you want to use."
      },
      {
        "title": "Unlock Status Verification",
        "description": "We verify and confirm the current unlock status of your phone so you know exactly where things stand."
      },
      {
        "title": "Setup Assistance and Troubleshooting",
        "description": "After unlocking, we help with setup on the new network and provide basic network troubleshooting if issues come up."
      }
    ],
    "processHeading": "How Our Unlocking Process Works",
    "process": [
      {
        "step": "Bring In Your Device",
        "description": "Bring your cellphone to Madny Digital Services in Calgary for a professional unlocking assessment."
      },
      {
        "step": "Assessment",
        "description": "We assess your phone and determine the available unlocking options based on the device, carrier, and current lock status."
      },
      {
        "step": "Unlocking and Compatibility Checks",
        "description": "For supported devices, we proceed with unlocking along with SIM and network compatibility checks."
      },
      {
        "step": "Setup and Troubleshooting",
        "description": "We assist with setup after unlocking and provide basic network troubleshooting to help you get connected on the new network."
      }
    ],
    "areaDescription": "Madny Digital Services provides cellphone unlocking assistance to customers throughout Calgary, AB, and the nearby areas of Airdrie, Cochrane, Chestermere, Strathmore, Okotoks, and High River.",
    "faqs": [
      {
        "question": "Can any cellphone be unlocked?",
        "answer": "Unlocking availability depends on the device, carrier, and current lock status. We assess your specific phone to determine what unlocking options are available for it."
      },
      {
        "question": "How much does cellphone unlocking cost in Calgary?",
        "answer": "Cost depends on the device, carrier, and current lock status of your phone. Bring your device in for an assessment and we'll explain the available options."
      },
      {
        "question": "How long does unlocking take?",
        "answer": "Turnaround depends on the specific phone model, carrier, and lock status. We'll let you know what to expect once we've assessed your device."
      },
      {
        "question": "If my phone is unlocked, will it work with any carrier?",
        "answer": "An unlocked phone may allow you to use the device with another compatible carrier or SIM card, but network compatibility can vary by phone model and service provider. We check your device and explain the available options."
      },
      {
        "question": "Do you check SIM compatibility before unlocking?",
        "answer": "Yes. Our unlocking services include SIM compatibility checks and network compatibility checks so you know how your device will perform on a new network."
      },
      {
        "question": "What happens after my phone is unlocked?",
        "answer": "We provide setup assistance after unlocking as well as basic network troubleshooting to help get your phone working properly on the new network."
      }
    ],
    "ctaHeading": "Ready to Unlock Your Phone?",
    "ctaText": "Bring your device to Madny Digital Services in Calgary and we'll check your phone and determine what unlocking options are available for it.",
    "relatedServices": [
      "sales-and-service",
      "liquid-damage",
      "repair-replace-charging-port",
      "replace-battery"
    ]
  },
};

// Always resolve content through this helper (categoryId + leafId), never by
// indexing serviceContent[leafId] directly - several leaf ids repeat across
// categories with different content (see file header). Returns null if the
// leaf has no written content yet (route falls back to ServiceStubClient).
export function getServiceContent(categoryId, leafId) {
  const entry = serviceContent[`${categoryId}/${leafId}`];
  return entry && Object.keys(entry).length > 0 ? entry : null;
}

// One-line description for a servicesNav node, used by ServiceIndexClient's
// category/subcategory cards and ServiceDetailClient's related-services
// cards. `node` is a servicesNav category-child object (has `id`/`name`,
// optionally `children`). For a node with children (a subcategory like
// "Repair"), summarizes its size; for a leaf, uses its content's intro
// first sentence when written, else a generic fallback line.
export function describeServiceNode(categoryId, node) {
  if (node.children?.length) {
    return `${node.children.length} ${node.name.toLowerCase()} services, including ${node.children.slice(0, 2).map((c) => c.name).join(' and ')}.`;
  }
  const content = getServiceContent(categoryId, node.id);
  if (content?.intro) {
    const firstSentence = content.intro.split('. ')[0];
    return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
  }
  return `Professional ${node.name.toLowerCase()} services in Calgary. Contact us for details.`;
}

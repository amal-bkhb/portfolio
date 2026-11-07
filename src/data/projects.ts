export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  featured: boolean;
  techStack: string[];
  github: string | null;
  reportAvailable: boolean;
  inProgress: boolean;
  context: string;
  objectives: string[];
  architecture: string;
  whatIBuilt: string[];
  results: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    slug: 'federated-ids-kubernetes',
    title: 'Federated Intrusion Detection for Kubernetes Workloads',
    summary: 'Securing microservices on Kubernetes using federated learning and distributed telemetry to preserve data privacy.',
    description: 'A pair project conducted at ENSIAS aimed at securing containerized microservices running on Kubernetes against network attacks (such as Man-in-the-Middle). The solution collects real-time security events, monitors logs across pods, and trains intrusion detection models locally on each microservice using federated learning, thereby maintaining data confidentiality without centralizing sensitive traffic payloads.',
    featured: true,
    techStack: [
      'Kubernetes',
      'Docker',
      'Istio',
      'Suricata',
      'Python',
      'Flower',
      'Random Forest',
      'LSTM',
      'Grafana',
      'Loki'
    ],
    github: 'https://github.com/amal-bkhb/federated-ids-kubernetes',
    reportAvailable: true,
    inProgress: false,
    context: 'Academic pair project at ENSIAS addressing the challenge of protecting containerized microservices in multi-tenant or distributed Kubernetes clusters while preserving data confidentiality.',
    objectives: [
      'Secure microservice-to-microservice traffic against network-level intrusions such as Man-in-the-Middle (MitM)',
      'Deploy containerized intrusion detection sensors alongside workloads without impacting inter-service performance',
      'Aggregate distributed logs and security events into a centralized monitoring and alerting pipeline',
      'Implement federated machine learning to train local intrusion detection models without sharing raw network traffic data'
    ],
    architecture: 'Microservices deployed within a Kubernetes cluster managed by an Istio service mesh. Suricata sensors run as sidecars/dedicated pods capturing ingress and egress traffic. Telemetry and event logs are routed to Loki and visualized on Grafana dashboards. The federated learning architecture relies on the Flower framework in Python, coordinating decentralized training runs (Random Forest and LSTM) across individual microservice nodes with a central aggregation server.',
    whatIBuilt: [
      'Configured Kubernetes deployment manifests and Istio service mesh traffic policies for microservice isolation',
      'Integrated Suricata network analysis engine to capture traffic anomalies and generate alert logs',
      'Simulated network attack scenarios including Man-in-the-Middle (MitM) within the cluster',
      'Built a centralized observability dashboard using Grafana connected to Loki for real-time security log analytics',
      'Developed Flower federated learning clients running local Random Forest and LSTM anomaly detection models on microservice telemetry'
    ],
    results: [
      'Demonstrated decentralized, privacy-preserving intrusion detection across distributed Kubernetes microservice pods',
      // À COMPLÉTER: detection accuracy / latency metrics on simulated attacks
    ],
    learnings: [
      'In-depth configuration of Kubernetes networking, namespaces, and Istio service mesh security controls',
      'Practical implementation of federated learning workflows using Flower for privacy-preserving ML',
      'Design of end-to-end security observability pipelines combining Suricata, Loki, and Grafana'
    ]
  },
  {
    slug: 'secure-wallet',
    title: 'SecureWallet — Secure Android Card Manager',
    summary: 'Hardened Android banking card manager with hardware-backed encryption, SQLCipher, and anti-tamper protections.',
    description: 'A pair project at ENSIAS delivering a secure mobile banking card management application for Android. The application enforces defense-in-depth through authenticated encryption (AES-GCM), key management in the Android Keystore, full database encryption using SQLCipher, Firebase authentication, and runtime environment validation including root and emulator detection.',
    featured: true,
    techStack: [
      'Java',
      'Android',
      'Firebase Auth',
      'AES-GCM',
      'Android Keystore',
      'SQLCipher',
      'Root/Emulator Detection'
    ],
    github: null, // À COMPLÉTER: repository URL
    reportAvailable: false,
    inProgress: false,
    context: 'Pair project at ENSIAS addressing mobile threat vectors such as local data exfiltration, memory inspection, and reverse engineering on compromised Android devices.',
    objectives: [
      'Store and manage sensitive financial card records with strong cryptographic guarantees',
      'Ensure cryptographic keys are isolated and generated securely within hardware-backed security modules',
      'Protect application data at rest from root access, unauthorized backups, and physical device acquisition',
      'Detect and block execution in hostile environments including rooted handsets and emulators'
    ],
    architecture: 'Native Android architecture backed by an encrypted SQLCipher SQLite database. Master encryption keys are stored inside the hardware-backed Android Keystore and never exposed in plaintext. Cryptographic routines employ AES-256 in GCM mode for confidentiality and authenticated integrity. Runtime defense routines check system properties and binaries at startup before allowing authentication through Firebase Auth.',
    whatIBuilt: [
      'Implemented AES-GCM authenticated encryption routines leveraging Android Keystore for key generation and storage',
      'Integrated SQLCipher to encrypt database tables storing credit and debit card information at rest',
      'Implemented root detection algorithms verifying SU binaries, test-keys, dangerous props, and known root management apps',
      'Built emulator detection mechanisms inspecting build fingerprints, QEMU drivers, and hardware sensors',
      'Integrated Firebase Authentication for secure user registration, session management, and credential validation'
    ],
    results: [
      'Prevented cleartext data leakage and offline extraction attacks on physical device storage',
      // À COMPLÉTER: test coverage / security validation details
    ],
    learnings: [
      'Architecture and lifecycle of hardware-backed key storage in modern Android operating systems',
      'Best practices for authenticated cryptographic implementations using AES-GCM',
      'Mobile threat mitigation techniques against reverse engineering, hooking, and rooted environments'
    ]
  },
  {
    slug: 'owasp-assessment',
    title: 'OWASP Top 10 Web Application Security Assessment',
    summary: 'Hands-on vulnerability assessment and penetration testing across OWASP Top 10 web application vulnerabilities.',
    description: 'A comprehensive hands-on web application security assessment exercising core vulnerabilities from the OWASP Top 10. Utilizing Burp Suite and controlled vulnerable environments (DVWA, OWASP Juice Shop), this project covered practical exploitation and analysis of SQL Injection, Cross-Site Scripting (XSS), CSRF, Path Traversal, Command Injection, and Access Control failures.',
    featured: true,
    techStack: [
      'Burp Suite',
      'DVWA',
      'OWASP Juice Shop',
      'XAMPP',
      'MySQL'
    ],
    github: null,
    reportAvailable: false,
    inProgress: false,
    context: 'Hands-on practical security laboratory simulating audit and pentest engagements against modern and legacy web applications.',
    objectives: [
      'Identify, analyze, and safely exploit vulnerabilities outlined in the OWASP Top 10 framework',
      'Master proxy interception, traffic manipulation, and fuzzing with Burp Suite',
      'Understand backend attack vectors including SQL injection, command execution, and path traversal',
      'Provide concrete remediation and defensive coding guidelines for each vulnerability class'
    ],
    architecture: 'Local security testing lab composed of an Apache/MySQL environment via XAMPP hosting Damn Vulnerable Web Application (DVWA), alongside a containerized instance of OWASP Juice Shop. Burp Suite acted as an intercepting HTTP/S proxy between the client browser and target applications for request tampering and response inspection.',
    whatIBuilt: [
      'Set up and isolated local vulnerable test environments with XAMPP, DVWA, and OWASP Juice Shop',
      'Executed SQL Injection attacks (in-band, union-based, and blind) extracting database schema and credentials',
      'Constructed and verified Reflected and Stored Cross-Site Scripting (XSS) proof-of-concept payloads',
      'Conducted Cross-Site Request Forgery (CSRF), Path Traversal, and OS Command Injection testing',
      'Assessed Broken Access Control and Broken Authentication mechanisms across user role boundaries',
      'Compiled remediation guidelines with defense-in-depth principles (parameterized queries, input sanitization, CSP)'
    ],
    results: [
      'Identified and documented exploitation vectors across all targeted OWASP Top 10 vulnerability categories',
      // À COMPLÉTER: vulnerability report summary / number of findings
    ],
    learnings: [
      'Advanced request tampering, payload encoding, and automation with Burp Suite Repeater and Intruder',
      'Direct mapping between application code vulnerabilities and runtime exploit payloads',
      'Translating pentest findings into developer-oriented remediation recommendations'
    ]
  },
  {
    slug: 'xml-security',
    title: 'XML Security — Signed & Encrypted Data Exchange',
    summary: 'Secure XML document processing framework implementing schema validation, digital signatures, and encryption.',
    description: 'An enterprise-focused security implementation for XML data exchange. The project enforces schema validation with XSD/DTD and namespace isolation, while implementing W3C XML Digital Signatures (XML-DSig) for non-repudiation and XML Encryption (XML-Enc) for element-level confidentiality using Java and Apache Santuario.',
    featured: true,
    techStack: [
      'Java',
      'Maven',
      'Apache Santuario (xmlsec)',
      'XML',
      'XSD',
      'Cryptography'
    ],
    github: 'https://github.com/amal-bkhb/xml-security',
    reportAvailable: false,
    inProgress: false,
    context: 'Academic security project addressing document integrity, non-repudiation, and confidential data exchange in B2B and enterprise integration protocols.',
    objectives: [
      'Validate XML documents against strict DTD and XSD schemas with namespaces to block malformed or poisoned inputs',
      'Implement XML Digital Signature (XML-DSig) to ensure document authenticity and tamper detection',
      'Implement element-level and document-level XML Encryption (XML-Enc) for selective data confidentiality',
      'Harden XML parsers against known parser attacks such as XML External Entity (XXE) and billion laughs'
    ],
    architecture: 'Java pipeline powered by Apache Santuario (xmlsec). Parsing stages enforce strict schema validation with external entity resolution disabled. Cryptographic modules sign document digests using asymmetric key pairs (RSA) and encrypt targeted sensitive XML elements using symmetric keys (AES) enveloped under recipient public keys.',
    whatIBuilt: [
      'Built strict XSD and DTD schemas enforcing namespace separation and structural integrity',
      'Hardened DOM and SAX document parsers disabling external entity resolution to prevent XXE attacks',
      'Implemented XML digital signature generation and verification using Apache Santuario',
      'Implemented XML element encryption and decryption routines supporting hybrid encryption (RSA + AES)',
      'Constructed Maven test suites verifying signature validity and tamper detection under payload modification'
    ],
    results: [
      'Produced a tamper-evident XML processing and encryption engine complying with W3C XML security standards',
      // À COMPLÉTER: test cases validated
    ],
    learnings: [
      'W3C specifications for XML Digital Signatures, canonicalization algorithms, and XML Encryption',
      'Secure parsing configurations for enterprise XML engines to prevent parser-level exploitation',
      'Integration of Apache Santuario security provider within modern Java application architectures'
    ]
  },
  {
    slug: 'smartshield-iot',
    title: 'SmartShield — IoT Secure Access Control',
    summary: 'RFID-based IoT secure access control system with authentication and event logging.',
    description: 'An IoT security project implementing RFID-based physical access control with credential verification, tampering resistance, and event monitoring.',
    featured: false,
    techStack: [
      'IoT',
      'RFID',
      'C/C++',
      'Microcontrollers',
      'Security'
    ],
    github: 'https://github.com/amal-bkhb/smartshield-iot-access-control',
    reportAvailable: false,
    inProgress: false,
    context: 'Access control engineering project exploring the convergence of embedded hardware, RFID credential evaluation, and physical security.',
    objectives: [
      'Implement secure RFID card identification and badge credential validation',
      'Prevent replay attacks and unauthorized access through badge validation checks',
      'Log access attempts for physical security auditing and event tracing'
    ],
    architecture: 'Microcontroller hardware interfaced with an RFID reader module and locking actuator, processing access decisions and broadcasting event logs.',
    whatIBuilt: [
      'Programmed microcontroller firmware handling RFID card reads and UID verification',
      'Implemented access authorization decision logic with status indicator feedback',
      'Constructed serial logging pipeline for access attempt tracking'
    ],
    results: [
      'Functional prototype verifying authentic credentials and rejecting unauthorized badges',
      // À COMPLÉTER: measurable result
    ],
    learnings: [
      'Embedded systems programming and physical access control threat models',
      'Hardware-software interface integration and credential validation flows'
    ]
  },
  {
    slug: 'android-malware-detection',
    title: 'Android Malware Detection with ML',
    summary: 'Machine learning classification pipeline comparing algorithms to detect malicious Android applications.',
    description: 'Security data science project applying supervised and unsupervised machine learning algorithms to classify Android APKs based on static permission sets and API call patterns.',
    featured: false,
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Machine Learning'
    ],
    github: null,
    reportAvailable: false,
    inProgress: false,
    context: 'Data-driven security project researching automated threat detection mechanisms for mobile application ecosystems.',
    objectives: [
      'Extract and preprocess static feature vectors from benign and malicious Android applications',
      'Train and evaluate multiple classification algorithms: KNN, Naive Bayes, Decision Tree, SVM, and MLP',
      'Apply unsupervised clustering (K-Means) to explore pattern grouping in application feature spaces'
    ],
    architecture: 'Python data science pipeline built with Pandas and Scikit-learn, reading structured feature vectors, performing normalization and splitting, and training multiple classifiers evaluated through standard metrics.',
    whatIBuilt: [
      'Engineered tabular datasets representing static Android permissions and requested system features',
      'Trained and benchmarked 5 supervised classifiers: KNN, Naive Bayes, Decision Tree, SVM, and MLP',
      'Implemented K-Means clustering for exploratory grouping of anomalous feature vectors',
      'Generated comparative evaluation matrices (accuracy, precision, recall, F1-score)'
    ],
    results: [
      'Comparative benchmarking of 6 ML models identifying highest-performing classifiers for Android malware detection',
      // À COMPLÉTER: accuracy / F1 metrics per model
    ],
    learnings: [
      'Static feature representation techniques for binary and mobile threat intelligence',
      'Evaluation metrics and trade-offs among different machine learning classifiers on security datasets'
    ]
  },
  {
    slug: 'ensiasshop',
    title: 'ENSIASShop — CTF / Web Pentest Lab Platform',
    summary: 'E-commerce and pentest lab platform; engineered the online purchase and product management modules.',
    description: 'Class project building a full-stack platform used for CTF challenges and web penetration testing exercises. Personally designed and developed the online purchase workflows and product management backend.',
    featured: false,
    techStack: [
      'Java',
      'Spring Boot',
      'JWT',
      'PostgreSQL'
    ],
    github: null,
    reportAvailable: false,
    inProgress: false,
    context: 'Collaborative academic project at ENSIAS delivering a realistic web application platform serving as both an e-commerce service and a penetration testing training lab.',
    objectives: [
      'Design clean and reliable REST APIs for e-commerce catalog and order lifecycle',
      'Implement stateless session authentication and role-based permissions with JWT',
      'Ensure data persistence and schema consistency in PostgreSQL'
    ],
    architecture: 'Spring Boot REST architecture backed by a PostgreSQL relational database. Endpoints secured with Spring Security filters validating JSON Web Tokens for administrative and shopper roles.',
    whatIBuilt: [
      'Engineered the product catalog management module with CRUD endpoints and category indexing',
      'Developed the online checkout and order processing workflow',
      'Configured Spring Security filter chains for token-based authentication and role enforcement',
      'Defined PostgreSQL schema tables and Spring Data JPA repositories'
    ],
    results: [
      'Successfully integrated functional product management and purchase modules into the lab platform',
      // À COMPLÉTER: measurable result
    ],
    learnings: [
      'Modular enterprise backend architecture with Spring Boot and Spring Data JPA',
      'Stateless authentication and authorization flows using JWT'
    ]
  },
  {
    slug: 'cicd-security-pipeline',
    title: 'CI/CD Security Pipeline',
    summary: 'Automated DevSecOps pipeline with Jenkins, SonarQube static analysis, and Docker containerization.',
    description: 'A continuous integration and security pipeline project automating build verification, static code analysis with SonarQube, security quality gates, and container packaging using Jenkins and Docker.',
    featured: false,
    techStack: [
      'Jenkins',
      'SonarQube',
      'Docker',
      'CI/CD',
      'DevSecOps'
    ],
    github: null, // À COMPLÉTER: repository URL
    reportAvailable: false,
    inProgress: false,
    context: 'DevSecOps infrastructure project focusing on shifting security left by integrating static analysis into automated delivery pipelines.',
    objectives: [
      'Automate build and test cycles triggered by repository code changes',
      'Integrate static application security testing (SAST) and code quality analysis via SonarQube',
      'Enforce quality gates that block builds failing predefined security criteria',
      'Produce standardized Docker images upon successful pipeline execution'
    ],
    architecture: 'Jenkins pipeline coordinating isolated build stages inside containerized agents. Source code is built, subjected to SonarQube quality gate analysis, and packaged into Docker container images.',
    whatIBuilt: [
      'Created declarative Jenkins pipeline scripts defining build, test, and scan stages',
      'Configured SonarQube server and project scanner integration with security quality gates',
      'Implemented conditional pipeline stages preventing artifacts with critical flaws from proceeding',
      'Authored optimized Dockerfiles for automated container image generation'
    ],
    results: [
      'Delivered an automated CI/CD pipeline enforcing static security quality gates prior to container packaging',
      // À COMPLÉTER: measurable result
    ],
    learnings: [
      'Jenkins declarative pipeline scripting and multi-stage orchestration',
      'SonarQube quality gate setup and vulnerability triage within continuous integration workflows',
      'Containerization best practices for automated build environments'
    ]
  },
  {
    slug: 'sdn-microsegmentation',
    title: 'SDN Micro-segmentation for Threat Response',
    summary: 'Ongoing federated project exploring Software-Defined Networking micro-segmentation for dynamic threat response.',
    description: 'Ongoing federated project investigating dynamic micro-segmentation techniques within Software-Defined Networks (SDN) to isolate compromised hosts and dynamically enforce security containment policies.',
    featured: false,
    techStack: [
      'SDN',
      'Network Security',
      'Micro-segmentation',
      'OpenFlow'
    ],
    github: null,
    reportAvailable: false,
    inProgress: true,
    context: 'Ongoing federated academic research and engineering project studying dynamic threat response within software-defined network architectures.',
    objectives: [
      'Investigate programmable network controllers to enforce dynamic micro-segmentation rules',
      'Isolate compromised workloads automatically upon detection of malicious behavior',
      'Evaluate latency and containment effectiveness across simulated enterprise topologies'
    ],
    architecture: 'Software-Defined Network topology controlled via a centralized SDN controller communicating with OpenFlow-enabled switches to dynamically update flow tables based on security triggers.',
    whatIBuilt: [
      'Researched SDN micro-segmentation architectures and isolation rule specifications',
      'Configured network simulation environments for flow inspection and dynamic rule push',
      // À COMPLÉTER: implementation details as project progresses
    ],
    results: [
      'Project currently in progress — initial architecture and control framework designed',
      // À COMPLÉTER: measurable result
    ],
    learnings: [
      'Decoupled control plane and data plane mechanics in Software-Defined Networking',
      'Strategies for programmatic network quarantine and lateral movement mitigation'
    ]
  }
];

export const featuredProjects: Project[] = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

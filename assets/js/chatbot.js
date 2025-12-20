/**
 * AI Chatbot for Supul's Portfolio
 * A simple chatbot that answers questions based on website content
 */

(function() {
  'use strict';

  // Knowledge base extracted from website content
  const knowledgeBase = {
    name: "Supul Pushpakumara",
    title: "AI Engineer & ML-Ops Architect",
    company: "IFS R&D International",
    role: "Data Scientist",
    location: "Sri Lanka",
    email: "supul9229kalhara@gmail.com",
    phone: "+94 71 518 0267",
    linkedin: "https://www.linkedin.com/in/supul-pushpakumara-323a38151",
    github: "https://github.com/supulkalhara",
    
    education: {
      degree: "BSc Engineering (Honours) in Computer Science & Engineering",
      university: "University of Moratuwa",
      cgpa: "3.85 / 4.2 (First Class Honours)",
      stream: "Data Science Engineering",
      years: "2019 - 2024",
      alevel: "Royal College, Colombo 07 - Mathematics: A, Chemistry: A, Physics: B"
    },

    skills: {
      languages: ["Go", "Python", "C#", "JavaScript", "Java", "SQL", "PHP", "HTML/CSS"],
      cloud: ["Azure (AKS)", "Google Cloud Platform (GCS)", "Kubernetes", "Helm", "KEDA", "ACR", "Key Vault", "Heroku"],
      mlops: ["Tekton", "ArgoCD", "KServe", "Kubeflow", "Terraform", "Bitbucket Pipelines", "Apache Airflow", "Dagster"],
      containers: ["Docker", "k9s", "Multi-stage Builds", "Distroless Images"],
      security: ["SonarCloud", "Veracode", "Keycloak", "OAuth2", "JWT", "RBAC"],
      protocols: ["gRPC", "REST", "HTTP/HTTPS", "Service Mesh", "XML"],
      observability: ["Prometheus", "Grafana", "Logging", "Tracing"],
      ml: ["PyTorch", "Transformers", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "LLM Providers", "Model Serving"],
      frontend: ["React.js", "MUI (Material-UI)", "Streamlit", "jQuery", "Bootstrap"],
      backend: ["FastAPI", "Flask", "Node.js", "Express", "Go (net/http)"],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Firestore"],
      visualization: ["PowerBI", "Plotly", "Tableau", "Streamlit", "ArcGIS"],
      tools: ["Git", "GitHub", "BitBucket", "Jira", "Confluence", "ClickUp", "Android Studio"]
    },

    experience: {
      ifs: {
        company: "IFS R&D International",
        role: "Data Scientist",
        duration: "June 2024 - Present",
        highlights: [
          "Reduced deployment time by 92% (from 1 hour to 5 minutes) through shared infrastructure architecture",
          "Increased code coverage from 8% to 80% (10x improvement) with 'A' ratings on SonarCloud",
          "Led adoption of SonarCloud, Veracode, KServe, Tekton, and UV package manager",
          "Designed Go-based microservice architecture with dual protocol support (HTTP/gRPC)",
          "Implemented service-to-service authentication using Kubernetes ServiceAccount tokens",
          "Led major repository migration with zero disruption",
          "Built provider abstraction layer with intelligent routing for multiple LLM providers"
        ]
      },
      cml: {
        company: "CML Insight",
        role: "ML and Software Engineer",
        duration: "January 2023 - October 2023",
        highlights: [
          "Worked on Google Cloud Platform with dataflow/workflow pipelines",
          "Developed Python data flow pipelines using Apache Airflow and Dagster",
          "Contributed to UI development using React.js and MUI"
        ]
      }
    },

    projects: {
      sinfund: {
        name: "SinFUND & SinOCR",
        type: "Research Paper",
        description: "Novel benchmark datasets for Sinhala OCR and template-free form understanding. SinFUND has 100 diverse Sinhala forms, SinOCR contains 100,000 images with 200 different Sinhala fonts.",
        tech: ["OCR", "Token Classification", "Document Understanding", "PyTorch", "Transformers"],
        supervisor: "Dr. Thanuja Ambegoda",
        link: "https://www.researchsquare.com/article/rs-6976719/v1"
      },
      safetakeoff: {
        name: "Safe TakeOff",
        description: "Web application for forecasting weather to help flight takeoff/landing decisions using time series analysis.",
        tech: ["React", "Flask", "TensorFlow", "PowerBI", "MongoDB"]
      },
      churn: {
        name: "Customer Churn Prediction",
        description: "Interactive dashboard to assist businesses in making customer retention decisions with multiple ML models.",
        tech: ["Python", "Streamlit", "Plotly", "Pandas"]
      },
      challengerx: {
        name: "ChallengerX Incubator",
        description: "Disaster risk analysis and asset management project by IFS and Hatch using ML predictions and ArcGIS.",
        tech: ["React", "ArcGIS", "FastAPI", "Firebase", "ML"]
      }
    },

    certifications: [
      "Machine Learning Specialization (Coursera)",
      "Deep Learning Specialization (Coursera)",
      "Google Hash Code 2021",
      "SQL (Coursera)",
      "Git and GitHub (Google/Coursera)"
    ],

    metrics: {
      deploymentReduction: "92%",
      coverageImprovement: "10x",
      sonarRating: "A",
      yearsAtIFS: "1.5+"
    }
  };

  // Response templates
  function generateResponse(query) {
    const q = query.toLowerCase();
    
    // Greetings
    if (q.match(/^(hi|hello|hey|greetings|howdy)/)) {
      return `Hello! 👋 I'm here to help you learn about Supul. He's an ${knowledgeBase.title} at ${knowledgeBase.company}. What would you like to know?`;
    }

    // Name/Who
    if (q.match(/who is|about supul|tell me about/)) {
      return `**Supul Pushpakumara** is an ${knowledgeBase.title} currently working at ${knowledgeBase.company}. He graduated with First Class Honours from the University of Moratuwa with a CGPA of ${knowledgeBase.education.cgpa}. His expertise spans ML-Ops, cloud infrastructure, and building production-grade AI systems. He's known for reducing deployment times by 92% and increasing code coverage by 10x at his current role.`;
    }

    // Skills
    if (q.match(/skill|tech|stack|know|expertise|proficient|languages?|programming/)) {
      const skills = knowledgeBase.skills;
      return `Supul has a diverse technical skill set spanning 13+ categories:\n\n` +
        `**Languages:** ${skills.languages.join(', ')}\n\n` +
        `**Cloud & Kubernetes:** ${skills.cloud.join(', ')}\n\n` +
        `**MLOps & CI/CD:** ${skills.mlops.join(', ')}\n\n` +
        `**ML & AI:** ${skills.ml.join(', ')}\n\n` +
        `**Frontend:** ${skills.frontend.join(', ')}\n\n` +
        `**Backend:** ${skills.backend.join(', ')}\n\n` +
        `**Databases:** ${skills.databases.join(', ')}\n\n` +
        `His primary strengths are in Go, Python, and the Kubernetes ecosystem. He also has solid experience with React.js, FastAPI, and various data visualization tools.`;
    }

    // Experience - IFS
    if (q.match(/ifs|current|work|experience|job|what does he do/)) {
      const ifs = knowledgeBase.experience.ifs;
      return `At **${ifs.company}** (${ifs.duration}), Supul works as a ${ifs.role} focusing on ML-Ops and infrastructure.\n\n` +
        `**Key achievements:**\n` +
        `• Reduced deployment time by 92% (1 hour → 5 minutes)\n` +
        `• Increased code coverage from 8% to 80%\n` +
        `• Led adoption of modern tools: SonarCloud, Veracode, KServe, Tekton\n` +
        `• Designed Go-based microservices with HTTP/gRPC dual protocol support\n` +
        `• Implemented zero-trust service authentication\n\n` +
        `He bridges the gap between research and production, making AI systems reliable and scalable.`;
    }

    // Projects
    if (q.match(/project|research|paper|sinfund|sinocr|built|created/)) {
      return `Supul has worked on several notable projects:\n\n` +
        `**1. SinFUND & SinOCR (Research Paper)**\n` +
        `Novel benchmark datasets for Sinhala OCR with 100,000+ images. Published research advancing AI for low-resource languages.\n\n` +
        `**2. Safe TakeOff**\n` +
        `Weather forecasting app for aviation decisions using time series analysis (React, Flask, TensorFlow).\n\n` +
        `**3. Customer Churn Prediction**\n` +
        `Interactive ML dashboard for business analytics (Python, Streamlit, Plotly).\n\n` +
        `**4. ChallengerX Incubator**\n` +
        `Disaster risk analysis platform with IFS and Hatch using ArcGIS and ML.\n\n` +
        `[View Research Paper](${knowledgeBase.projects.sinfund.link})`;
    }

    // Education
    if (q.match(/education|university|degree|study|studied|school|academic|cgpa|gpa/)) {
      const edu = knowledgeBase.education;
      return `**Education:**\n\n` +
        `🎓 **${edu.degree}**\n` +
        `${edu.university} (${edu.years})\n` +
        `CGPA: ${edu.cgpa}\n` +
        `Stream: ${edu.stream}\n\n` +
        `📚 **GCE Advanced Level**\n` +
        `${edu.alevel}\n\n` +
        `University of Moratuwa is Sri Lanka's premier engineering university, known for rigorous academics and strong industry connections.`;
    }

    // Contact
    if (q.match(/contact|email|phone|reach|connect|linkedin|github/)) {
      return `You can reach Supul through:\n\n` +
        `📧 **Email:** ${knowledgeBase.email}\n` +
        `📱 **Phone:** ${knowledgeBase.phone}\n` +
        `💼 **LinkedIn:** [Connect on LinkedIn](${knowledgeBase.linkedin})\n` +
        `💻 **GitHub:** [View Code](${knowledgeBase.github})\n\n` +
        `He's always open to discussing AI infrastructure, ML-Ops best practices, or potential collaborations!`;
    }

    // Certifications
    if (q.match(/certif|course|learn|training/)) {
      return `Supul's certifications include:\n\n` +
        knowledgeBase.certifications.map(c => `• ${c}`).join('\n') +
        `\n\nHe believes in continuous learning and combines structured courses with hands-on experience.`;
    }

    // Metrics/Achievements
    if (q.match(/achieve|accomplish|metric|number|result|impact/)) {
      return `Supul's key achievements by the numbers:\n\n` +
        `📈 **92%** - Deployment time reduction (1 hour → 5 minutes)\n` +
        `🛡️ **10x** - Code coverage improvement (8% → 80%)\n` +
        `⭐ **A Rating** - SonarCloud security & maintainability\n` +
        `⏱️ **1.5+ Years** - At IFS R&D International\n\n` +
        `These aren't just numbers—they represent real improvements in developer productivity, code quality, and system reliability.`;
    }

    // Why hire / strengths
    if (q.match(/why|hire|strength|best|unique|different|stand out/)) {
      return `What makes Supul stand out:\n\n` +
        `**1. Bridge Builder** - He connects research to production, turning prototypes into reliable systems.\n\n` +
        `**2. Full-Stack ML-Ops** - From model training to Kubernetes deployment, he handles the entire pipeline.\n\n` +
        `**3. Quality Champion** - Led a 10x improvement in code coverage and established quality-first culture.\n\n` +
        `**4. Tool Innovator** - Successfully introduced and championed modern tools across organizations.\n\n` +
        `**5. Cost Optimizer** - Architected shared infrastructure that dramatically reduced costs and deployment times.\n\n` +
        `His philosophy: "Ship fast, but ship right."`;
    }

    // Kubernetes/DevOps specific
    if (q.match(/kubernetes|k8s|devops|container|docker|deploy/)) {
      return `Supul has deep expertise in Kubernetes and DevOps:\n\n` +
        `**Kubernetes:** AKS, Helm charts, KEDA autoscaling, KServe for model serving\n\n` +
        `**Containers:** Docker, multi-stage builds, distroless images for security\n\n` +
        `**CI/CD:** Tekton pipelines, ArgoCD for GitOps, Bitbucket Pipelines\n\n` +
        `**Infrastructure as Code:** Terraform for reproducible infrastructure\n\n` +
        `He designed shared infrastructure that reduced deployment time by 92% and implemented zero-trust service authentication using Kubernetes ServiceAccount tokens.`;
    }

    // Go/Golang specific
    if (q.match(/\bgo\b|golang|grpc/)) {
      return `Go (Golang) is one of Supul's primary languages. At IFS, he:\n\n` +
        `• Designed Go-based microservice architecture\n` +
        `• Implemented dual protocol support (HTTP + gRPC)\n` +
        `• Built provider abstraction layers for LLM routing\n` +
        `• Created high-performance services with sub-100ms latency\n\n` +
        `He chose Go for its performance, simplicity, and excellent concurrency support—perfect for building reliable infrastructure services.`;
    }

    // Python/ML specific
    if (q.match(/python|machine learning|ml|ai|model|pytorch|tensorflow/)) {
      return `Supul's ML & Python expertise includes:\n\n` +
        `**Frameworks:** PyTorch, TensorFlow, Transformers (Hugging Face)\n\n` +
        `**ML-Ops:** KServe for model serving, Kubeflow for pipelines\n\n` +
        `**Data Pipelines:** Apache Airflow, Dagster\n\n` +
        `**Research:** Document understanding, OCR, NLP for low-resource languages\n\n` +
        `His research on SinFUND & SinOCR created benchmark datasets for Sinhala language AI, demonstrating both research depth and practical impact.`;
    }

    // Location
    if (q.match(/where|location|based|live|country/)) {
      return `Supul is based in **Sri Lanka** 🇱🇰\n\nHe works at IFS R&D International, a global enterprise software company. Sri Lanka has a growing tech ecosystem, and University of Moratuwa (where Supul graduated) is the country's top engineering university.`;
    }

    // Fallback
    return `I can help you learn about Supul's:\n\n` +
      `• **Skills** - Programming languages, cloud, ML-Ops tools\n` +
      `• **Experience** - Work at IFS and CML Insight\n` +
      `• **Projects** - Research papers and applications\n` +
      `• **Education** - University background and certifications\n` +
      `• **Contact** - How to reach him\n\n` +
      `Try asking something like "What are Supul's main skills?" or "Tell me about his experience at IFS"`;
  }

  // Format message with simple markdown support
  function formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/\n/g, '<br>');
  }

  // Add message to chat
  function addMessage(content, isBot = true) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;
    
    if (isBot) {
      messageDiv.innerHTML = `
        <div class="message-avatar"><i class="bi bi-robot"></i></div>
        <div class="message-content">
          <p>${formatMessage(content)}</p>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-content">
          <p>${content}</p>
        </div>
        <div class="message-avatar"><i class="bi bi-person-fill"></i></div>
      `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Show typing indicator
  function showTyping() {
    const messagesContainer = document.getElementById('chatbotMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="message-avatar"><i class="bi bi-robot"></i></div>
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Remove typing indicator
  function removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
  }

  // Handle send message
  function handleSend() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, false);
    input.value = '';
    
    // Show typing and respond after delay
    showTyping();
    setTimeout(() => {
      removeTyping();
      const response = generateResponse(message);
      addMessage(response, true);
    }, 800 + Math.random() * 500);
  }

  // Initialize chatbot
  function init() {
    const toggle = document.getElementById('chatbotToggle');
    const window = document.getElementById('chatbotWindow');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatInput');
    const send = document.getElementById('chatSend');

    // Toggle chatbot
    toggle.addEventListener('click', () => {
      window.classList.toggle('active');
      toggle.classList.toggle('active');
      if (window.classList.contains('active')) {
        input.focus();
      }
    });

    // Close chatbot
    close.addEventListener('click', () => {
      window.classList.remove('active');
      toggle.classList.remove('active');
    });

    // Send on button click
    send.addEventListener('click', handleSend);

    // Send on Enter
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSend();
      }
    });

    // Quick action buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-btn')) {
        const question = e.target.getAttribute('data-question');
        addMessage(question, false);
        showTyping();
        setTimeout(() => {
          removeTyping();
          const response = generateResponse(question);
          addMessage(response, true);
        }, 800);
      }
    });
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


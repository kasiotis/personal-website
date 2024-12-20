interface Project {
  title: string;
  description: string;
  link: string;
  blogPath?: string;
  tech: string[];
  isPublication?: boolean;
  content?: {
    overview?: string;
    methodology?: string;
    results?: string;
    conclusion?: string;
  };
}

export const projects: Project[] = [
  {
    title: 'Towards Energy-Aware Management of Shared Printers',
    description: 'Research published in Practical Applications of Stochastic Modelling conference. Proposed and evaluated optimization strategies for printer energy policy management through forcasted demand, achieving 4.8% reduction in operating time and 35% reduction in state transitions. The work addresses energy efficiency in institutional IT infrastructure.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-44053-3_6',
    blogPath: '/blog/energy-aware-printer-management',
    tech: ['Stochastic Modelling', 'Data Analysis', 'Machine Learning', 'Time Series', 'Empirical Research', 'R&D', 'Simulation', 'Energy Management', 'Sustainability'],
    isPublication: true,
    content: {
      overview: 'This research focuses on optimizing energy consumption in shared printer environments through intelligent management strategies.',
      methodology: 'We employed stochastic modeling and machine learning techniques to analyze printer usage patterns and develop predictive models for demand forecasting.',
      results: 'The implemented strategies achieved a 4.8% reduction in operating time and 35% reduction in state transitions, significantly improving energy efficiency.',
      conclusion: 'The research demonstrates the potential for substantial energy savings in institutional IT infrastructure through data-driven management approaches.'
    }
  },
  {
    title: 'Skin Cancer dermoscopic image Classification',
    description: 'Implementation of three different image classifiers (CNN, LSTM, SVM) for skin cancer detection using the HAM10000 dataset. Comparative analysis of classifier performance with grayscale and RGB images. The project demonstrates practical application of image classification in computer vision.',
    link: 'https://github.com/kasiotis/Skin-Cancer-MNIST-HAM10000',
    blogPath: '/blog/skin-cancer-classification',
    tech: ['Python', 'CNN', 'LSTM', 'SVM', 'Empirical Research', 'Image Classification', 'Computer Vision', 'Deep Learning']
  },
  {
    title: 'LLM-Powered CV and Job Matching System',
    description: 'An AI application using an LLM to compare CVs with job descriptions in order to find the best matching profiles. This innovative Proof of Concept (PoC) demonstrates the potential of LLMs in the field of job matching. The PoC streamlines the recruitment process by analyzing candidate resumes against job requirements, using the heuristics of LLM models.',
    link: 'https://github.com/kasiotis/resume-to-job-checker',
    blogPath: '/blog/llm-powered-cv-matching',
    tech: ['Python', 'LLM', 'AI', 'Web Application', 'Streamlit', 'Prompt Engineering']
  },
  {
    title: 'Bird Species Classifier',
    description: 'Developed an image classification model using transfer learning from pre-trained models, fine-tuned on a dataset of bird species. This project demonstrates practical application of transfer learning and fine-tuning in computer vision.',
    link: 'https://github.com/kasiotis/bird-image-classifier-task',
    blogPath: '/blog/bird-species-classification',
    tech: ['Python', 'Transfer Learning', 'Fine-tuning', 'Computer Vision', 'Deep Learning']
  },
  {
    title: 'LSTM Language Model',
    description: 'Developed an autocomplete language model using LSTM architecture that mimics the writing style of specific books. The model learns patterns and structure from the training text to generate contextually relevant suggestions.',
    link: 'https://github.com/kasiotis/language-model-task',
    blogPath: '/blog/lstm-language-model',
    tech: ['Python', 'NLP', 'LSTM', 'Deep Learning']
  },
  {
    title: 'TeraScope Supercomputer Analysis',
    description: 'Investigation into software system and hardware performance of supercomputers running Terapixel visualization applications. Includes comprehensive performance analysis and optimization strategies.',
    link: 'https://github.com/kasiotis/TeraScope-Supercomputer-performance-EDA',
    blogPath: '/blog/terascope-supercomputer-analysis',
    tech: ['R', 'Cloud Computing', 'Performance Analysis', 'CRISP-DM']
  },
  {
    title: 'Sorting Algorithms Implementation',
    description: 'Comprehensive implementation and comparison of various sorting algorithms. This project demonstrates algorithm efficiency and performance analysis.',
    link: 'https://github.com/kasiotis/Sorting-Algorithms',
    blogPath: '/blog/sorting-algorithms',
    tech: ['Java', 'Algorithms', 'Data Structures']
  },
  {
    title: 'Data Management & EDA',
    description: 'Comprehensive data management and exploratory data analysis project showcasing data cleaning, preprocessing, statistical analysis, and visualization techniques using real-world datasets.',
    link: 'https://github.com/kasiotis/Data-Management-and-Exploratory-Data-Analysis',
    blogPath: '/blog/data-management-eda',
    tech: ['R', 'Visualization', 'Exploratory Data Analysis', 'Business Analysis', 'tidyverse', 'dplyr', 'tidytext', 'lubridate', 'stringi/stringr', 'ggplot2', 'reshape2']
  }
];

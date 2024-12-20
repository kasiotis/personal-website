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
      overview: 'This research addresses the critical challenge of energy efficiency in institutional IT infrastructure, specifically focusing on shared printer environments. By developing intelligent management strategies, we aimed to optimize energy consumption while maintaining service quality.',
      methodology: 'The study employed a comprehensive approach combining stochastic modeling and machine learning techniques. We analyzed historical printer usage data to identify patterns and developed predictive models for demand forecasting. The methodology included:\n\n- Collection and analysis of printer usage logs\n- Development of stochastic models for printer state transitions\n- Implementation of machine learning algorithms for demand prediction\n- Simulation of various energy management policies',
      results: 'Our implementation achieved significant improvements in energy efficiency:\n\n- 4.8% reduction in total operating time\n- 35% reduction in state transitions\n- Maintained service quality with minimal impact on user experience\n- Validated results through extensive simulation studies',
      conclusion: 'The research demonstrates that significant energy savings can be achieved in institutional IT infrastructure through data-driven management approaches. The developed framework provides a foundation for future energy optimization strategies in shared resource environments.'
    }
  },
  {
    title: 'Skin Cancer dermoscopic image Classification',
    description: 'Implementation of three different image classifiers (CNN, LSTM, SVM) for skin cancer detection using the HAM10000 dataset. Comparative analysis of classifier performance with grayscale and RGB images. The project demonstrates practical application of image classification in computer vision.',
    link: 'https://github.com/kasiotis/Skin-Cancer-MNIST-HAM10000',
    blogPath: '/blog/skin-cancer-classification',
    tech: ['Python', 'CNN', 'LSTM', 'SVM', 'Empirical Research', 'Image Classification', 'Computer Vision', 'Deep Learning'],
    content: {
      overview: 'This project explores the application of machine learning in medical image analysis, specifically focusing on skin cancer detection using dermoscopic images. We implemented and compared multiple classification approaches to evaluate their effectiveness in this critical healthcare application.',
      methodology: 'The project utilized three distinct approaches to classify skin cancer images:\n\n- Convolutional Neural Networks (CNN) for deep feature learning\n- Long Short-Term Memory (LSTM) networks for sequential pattern analysis\n- Support Vector Machines (SVM) as a traditional machine learning baseline\n\nWe conducted experiments using both grayscale and RGB images to understand the impact of color information on classification accuracy.',
      results: 'Key findings from our comparative analysis:\n\n- CNNs showed superior performance in feature extraction from dermoscopic images\n- Color information proved crucial for accurate classification\n- Developed a robust evaluation framework for medical image classification\n- Identified optimal preprocessing techniques for dermoscopic images',
      conclusion: 'The project successfully demonstrated the viability of automated skin cancer detection through machine learning. The comparative analysis provides valuable insights for future developments in medical image classification systems.'
    }
  },
  {
    title: 'LLM-Powered CV and Job Matching System',
    description: 'An AI application using an LLM to compare CVs with job descriptions in order to find the best matching profiles. This innovative Proof of Concept (PoC) demonstrates the potential of LLMs in the field of job matching. The PoC streamlines the recruitment process by analyzing candidate resumes against job requirements, using the heuristics of LLM models.',
    link: 'https://github.com/kasiotis/resume-to-job-checker',
    blogPath: '/blog/llm-powered-cv-matching',
    tech: ['Python', 'LLM', 'AI', 'Web Application', 'Streamlit', 'Prompt Engineering'],
    content: {
      overview: 'This innovative project leverages Large Language Models (LLMs) to revolutionize the recruitment process by automating the matching of CVs with job descriptions. The system aims to reduce manual screening time while improving the accuracy of candidate-job matches.',
      methodology: 'The implementation involved several key components:\n\n- Integration of state-of-the-art LLM models\n- Development of sophisticated prompt engineering techniques\n- Creation of a user-friendly web interface using Streamlit\n- Implementation of text processing and comparison algorithms',
      results: 'The system has demonstrated significant capabilities:\n\n- Accurate identification of skill matches between CVs and job descriptions\n- Reduction in initial screening time for recruiters\n- Improved consistency in candidate evaluation\n- Scalable architecture for handling multiple job postings',
      conclusion: 'This PoC successfully demonstrates the potential of LLMs in transforming recruitment processes. The system provides a foundation for more sophisticated AI-driven recruitment tools.'
    }
  },
  {
    title: 'Bird Species Classifier',
    description: 'Developed an image classification model using transfer learning from pre-trained models, fine-tuned on a dataset of bird species. This project demonstrates practical application of transfer learning and fine-tuning in computer vision.',
    link: 'https://github.com/kasiotis/bird-image-classifier-task',
    blogPath: '/blog/bird-species-classification',
    tech: ['Python', 'Transfer Learning', 'Fine-tuning', 'Computer Vision', 'Deep Learning'],
    content: {
      overview: 'This project showcases the application of transfer learning in developing an efficient bird species classification system. By leveraging pre-trained models and fine-tuning techniques, we created a robust classifier capable of identifying various bird species from images.',
      methodology: 'The development process included:\n\n- Selection and evaluation of pre-trained models\n- Implementation of fine-tuning strategies\n- Data augmentation techniques for improved generalization\n- Optimization of model architecture for the specific task',
      results: 'The project achieved notable outcomes:\n\n- High accuracy in species classification\n- Efficient model performance through transfer learning\n- Successful handling of varied image conditions\n- Robust feature extraction capabilities',
      conclusion: 'The project effectively demonstrates how transfer learning can be applied to create specialized image classification systems, providing insights for similar computer vision applications.'
    }
  },
  {
    title: 'LSTM Language Model',
    description: 'Developed an autocomplete language model using LSTM architecture that mimics the writing style of specific books. The model learns patterns and structure from the training text to generate contextually relevant suggestions.',
    link: 'https://github.com/kasiotis/language-model-task',
    blogPath: '/blog/lstm-language-model',
    tech: ['Python', 'NLP', 'LSTM', 'Deep Learning'],
    content: {
      overview: 'This project explores the capabilities of Long Short-Term Memory (LSTM) networks in natural language processing, specifically focusing on creating a language model that can understand and replicate specific writing styles.',
      methodology: 'The development approach included:\n\n- Text preprocessing and tokenization\n- LSTM architecture design and implementation\n- Training on specific literary works\n- Development of text generation mechanisms',
      results: 'Key achievements of the model:\n\n- Successful capture of writing style patterns\n- Context-aware text completion\n- Efficient processing of long-term dependencies\n- Flexible adaptation to different writing styles',
      conclusion: 'The project successfully demonstrates the potential of LSTM networks in understanding and generating human-like text, providing insights for future developments in natural language processing.'
    }
  },
  {
    title: 'TeraScope Supercomputer Analysis',
    description: 'Investigation into software system and hardware performance of supercomputers running Terapixel visualization applications. Includes comprehensive performance analysis and optimization strategies.',
    link: 'https://github.com/kasiotis/TeraScope-Supercomputer-performance-EDA',
    blogPath: '/blog/terascope-supercomputer-analysis',
    tech: ['R', 'Cloud Computing', 'Performance Analysis', 'CRISP-DM'],
    content: {
      overview: 'This project involves a detailed analysis of supercomputer performance in handling Terapixel visualization applications. The study aims to identify bottlenecks and optimization opportunities in high-performance computing environments.',
      methodology: 'The analysis followed the CRISP-DM framework:\n\n- Data collection from supercomputer logs\n- Performance metrics identification and analysis\n- System bottleneck identification\n- Development of optimization strategies',
      results: 'The analysis revealed:\n\n- Key performance bottlenecks in visualization processing\n- Resource utilization patterns\n- Optimization opportunities in system architecture\n- Recommendations for performance improvements',
      conclusion: 'The project provided valuable insights into supercomputer performance optimization, contributing to the understanding of large-scale visualization processing systems.'
    }
  },
  {
    title: 'Sorting Algorithms Implementation',
    description: 'Comprehensive implementation and comparison of various sorting algorithms. This project demonstrates algorithm efficiency and performance analysis.',
    link: 'https://github.com/kasiotis/Sorting-Algorithms',
    blogPath: '/blog/sorting-algorithms',
    tech: ['Java', 'Algorithms', 'Data Structures'],
    content: {
      overview: 'This project provides a comprehensive implementation and analysis of various sorting algorithms, demonstrating their practical applications and performance characteristics in different scenarios.',
      methodology: 'The implementation covered:\n\n- Multiple sorting algorithm implementations\n- Performance benchmarking framework\n- Time and space complexity analysis\n- Best-case and worst-case scenario testing',
      results: 'Key findings include:\n\n- Comparative performance analysis of different algorithms\n- Memory usage patterns\n- Optimal algorithm selection criteria\n- Real-world performance implications',
      conclusion: 'The project serves as a practical demonstration of algorithmic concepts and provides valuable insights into algorithm selection and optimization.'
    }
  },
  {
    title: 'Data Management & EDA',
    description: 'Comprehensive data management and exploratory data analysis project showcasing data cleaning, preprocessing, statistical analysis, and visualization techniques using real-world datasets.',
    link: 'https://github.com/kasiotis/Data-Management-and-Exploratory-Data-Analysis',
    blogPath: '/blog/data-management-eda',
    tech: ['R', 'Visualization', 'Exploratory Data Analysis', 'Business Analysis', 'tidyverse', 'dplyr', 'tidytext', 'lubridate', 'stringi/stringr', 'ggplot2', 'reshape2'],
    content: {
      overview: 'This project demonstrates comprehensive data management and analysis techniques using R, focusing on real-world data challenges and solutions.',
      methodology: 'The project encompassed:\n\n- Data cleaning and preprocessing techniques\n- Statistical analysis implementation\n- Advanced visualization methods\n- Business insights extraction',
      results: 'Achievements include:\n\n- Development of reusable data cleaning pipelines\n- Creation of insightful visualizations\n- Implementation of statistical analysis methods\n- Documentation of best practices in data management',
      conclusion: 'The project showcases effective approaches to data management and analysis, providing a valuable reference for similar data science initiatives.'
    }
  }
];

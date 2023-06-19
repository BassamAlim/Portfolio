import SDIAIADSSCert from '../assets/certificates/SDAIA Data Science.png';
import DSSCert from '../assets/certificates/Data Science.png';
import IntroToDSCert from '../assets/certificates/Intro to Data Science.png';
import PlottingCert from '../assets/certificates/Data Representation.png';
import MLCert from '../assets/certificates/Applied ML.png';
import TextMiningCert from '../assets/certificates/Text Mining.png';
import SocialNetworksCert from '../assets/certificates/Social Networks Analysis.png';
import MLSCert from '../assets/certificates/Machine Learning Specialization.png';
import SupervisedMLCert from '../assets/certificates/Supervised ML.png';
import AdvancedLearningAlgorithmsCert from '../assets/certificates/Advanced Learning Algorithms.jpeg';
import UnsupervisedLearningCert from '../assets/certificates/Unsupervised Learning.png';
import NNCert from '../assets/certificates/Nueral Networks.png';
import CppCert from '../assets/certificates/C++.png';

export const Courses = [
    {
        id: 1,
        title: 'Applied Data Science with Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Machine Learning', 'Data Mining', 'Data Analysis', 'Data Visualization', 'Text Mining', 'Social Network Analysis', 'Python'],
        certificates: [SDIAIADSSCert, DSSCert]
    },
    {
        id: 1.1,
        title: 'Introduction to Data Science in Python',
        date: 'Aug 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Python', 'Regular Expressions'],
        certificates: [IntroToDSCert]
    },
    {
        id: 1.2,
        title: 'Applied Plotting, Charting & Data Representation in Python',
        date: 'Aug 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Charting', 'Matplotlib', 'Pandas', 'Seaborn', 'Python'],
        certificates: [PlottingCert]
    },
    {
        id: 1.3,
        title: 'Applied Machine Learning in Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Machine Learning', 'Scikit-Learn', 'Python'],
        certificates: [MLCert]
    },
    {
        id: 1.4,
        title: 'Applied Text Mining in Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Text Mining', 'Natural Language Processing', 'Python', 'NLTK'],
        certificates: [TextMiningCert]
    },
    {
        id: 1.5,
        title: 'Applied Social Network Analysis in Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Social Network Analysis', 'Python', 'NetworkX'],
        certificates: [SocialNetworksCert]
    },
    {
        id: 2,
        title: 'Machine Learning',
        date: 'Mar 2022',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Python'],
        certificates: [MLSCert]
    },
    {
        id: 2.1,
        title: 'Supervised Machine Learning',
        date: 'Jul 2022',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: ['Machine Learning', 'Supervised Learning', 'Python', 'Scikit-Learn'],
        certificates: [SupervisedMLCert]
    },
    {
        id: 2.2,
        title: 'Advanced Learning Algorithms',
        date: 'Jan 2023',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: ['Machine Learning', 'Ensembles', 'Boosting', 'Bagging', 'Python', 'Scikit-Learn'],
        certificates: [AdvancedLearningAlgorithmsCert]
    },
    {
        id: 2.3,
        title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        date: 'Mar 2023',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: ['Machine Learning', 'Unsupervised Learning', 'Recommenders', 'Reinforcement Learning', 'Python', 'Scikit-Learn', 'K-Means'],
        certificates: [UnsupervisedLearningCert]
    },
    {
        id: 3,
        title: 'Neural Networks and Deep Learning',
        date: 'Aug 2022',
        category: 'Machine Learning',
        source: 'Provided by SDAIA, Authorized by DeepLearning.AI and offered through Coursera.',
        tags: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python', 'Keras', 'TensorFlow'],
        certificates: [NNCert]
    },
    {
        id: 4,
        title: 'Programming in C++',
        date: 'Nov 2020',
        category: 'Programming',
        source: 'Provided by The Deanship of Student Affairs, King Saud University.',
        tags: ['Programming', 'C++'],
        certificates: [CppCert]
    }
]
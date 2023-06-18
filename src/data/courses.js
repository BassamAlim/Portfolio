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

export const coursesData = [
    {
        id: 1,
        title: 'Applied Data Science with Python',
        date: 'Sep 2020',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: ['Data Science', 'Machine Learning', 'Data Mining', 'Data Analysis', 'Data Visualization', 'Text Mining', 'Social Network Analysis', 'Python'],
        certificates: [SDIAIADSSCert, DSSCert],
        subCourses: [2, 3, 4, 5, 6]
    },
    {
        id: 2,
        title: 'Introduction to Data Science in Python',
        date: 'Aug 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: [],
        certificates: [IntroToDSCert],
        subCourses: []
    },
    {
        id: 3,
        title: 'Applied Plotting, Charting & Data Representation in Python',
        date: 'Aug 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: [],
        certificates: [PlottingCert],
        subCourses: []
    },
    {
        id: 4,
        title: 'Applied Machine Learning in Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: [],
        certificates: [MLCert],
        subCourses: []
    },
    {
        id: 5,
        title: 'Applied Text Mining in Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: [],
        certificates: [TextMiningCert],
        subCourses: []
    },
    {
        id: 6,
        title: 'Applied Social Network Analysis in Python',
        date: 'Sep 2022',
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        tags: [],
        certificates: [SocialNetworksCert],
        subCourses: []
    },
    {
        id: 7,
        title: 'Machine Learning',
        date: 'Mar 2020',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Python'],
        certificates: [MLSCert],
        subCourses: [8, 9, 10]
    },
    {
        id: 8,
        title: 'Supervised Machine Learning',
        date: 'Jul 2022',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: [],
        certificates: [SupervisedMLCert],
        subCourses: []
    },
    {
        id: 9,
        title: 'Advanced Learning Algorithms',
        date: 'Jan 2023',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: [],
        certificates: [AdvancedLearningAlgorithmsCert],
        subCourses: []
    },
    {
        id: 10,
        title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        date: 'Mar 2023',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        tags: [],
        certificates: [UnsupervisedLearningCert],
        subCourses: []
    },
    {
        id: 11,
        title: 'Neural Networks and Deep Learning',
        date: 'Aug 2020',
        category: 'Machine Learning',
        source: 'Provided by SDAIA, Authorized by DeepLearning.AI and offered through Coursera.',
        tags: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python'],
        certificates: [NNCert],
        subCourses: []
    }
]

export default coursesData;
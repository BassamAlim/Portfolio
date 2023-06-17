import DSSCert from '../assets/certificates/SDAIA Data Science.png';
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
        category: 'Data Science',
        source: 'Provided by SDAIA, authorized by the University of Michigan and offered through Coursera.',
        certificate: DSSCert,
        subCourses: [
            {
                id: 1,
                title: 'Introduction to Data Science in Python',
                category: 'Data Science',
                certificate: IntroToDSCert
            },
            {
                id: 2,
                title: 'Applied Plotting, Charting & Data Representation in Python',
                category: 'Data Science',
                certificate: PlottingCert
            },
            {
                id: 3,
                title: 'Applied Machine Learning in Python',
                category: 'Data Science',
                certificate: MLCert
            },
            {
                id: 4,
                title: 'Applied Text Mining in Python',
                category: 'Data Science',
                certificate: TextMiningCert
            },
            {
                id: 5,
                title: 'Applied Social Network Analysis in Python',
                category: 'Data Science',
                certificate: SocialNetworksCert
            }
        ]
    },
    {
        id: 2,
        title: 'Machine Learning',
        category: 'Machine Learning',
        source: 'Authorized by DeepLearning.AI, Stanford University and offered through Coursera.',
        certificate: MLSCert,
        subCourses: [
            {
                id: 1,
                title: 'Supervised Machine Learning',
                category: 'Machine Learning',
                certificate: SupervisedMLCert
            },
            {
                id: 2,
                title: 'Advanced Learning Algorithms',
                category: 'Machine Learning',
                certificate: AdvancedLearningAlgorithmsCert
            },
            {
                id: 3,
                title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
                category: 'Machine Learning',
                certificate: UnsupervisedLearningCert
            }
        ]
    },
    {
        id: 3,
        title: 'Neural Networks and Deep Learning',
        category: 'Machine Learning',
        source: 'Provided by SDAIA, Authorized by DeepLearning.AI and offered through Coursera.',
        certificate: NNCert
    }
]